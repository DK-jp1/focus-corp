import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ===== バリデーションスキーマ =====
const contactSchema = z.object({
  name: z.string().min(1, "名前は必須です").max(100, "名前は100文字以内で入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスは必須です")
    .email("有効なメールアドレスを入力してください"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/.test(val),
      "有効な電話番号を入力してください"
    ),
  industry: z.string().optional(),
  message: z
    .string()
    .min(1, "ご相談内容は必須です")
    .max(2000, "ご相談内容は2000文字以内で入力してください"),
});

// ===== レートリミット（インメモリ） =====
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1分間

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/** 古いエントリをクリーンアップ */
function cleanupRateLimit(): void {
  const now = Date.now();
  for (const [key, record] of rateLimitStore) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/** レートリミットチェック（true=許可, false=制限） */
function checkRateLimit(ip: string): boolean {
  // 定期的に古いエントリを削除
  if (rateLimitStore.size > 1000) {
    cleanupRateLimit();
  }

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

/** クライアントIPを取得 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

// ===== POST ハンドラ =====
export async function POST(request: NextRequest) {
  try {
    // CSRF対策: Originヘッダー検証
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        const expectedHost = host.split(":")[0];
        if (
          originUrl.hostname !== expectedHost &&
          originUrl.hostname !== "localhost"
        ) {
          return NextResponse.json(
            { error: "不正なリクエストです" },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { error: "不正なリクエストです" },
          { status: 403 }
        );
      }
    }

    // レートリミット
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "送信回数の上限に達しました。1分後に再度お試しください。" },
        { status: 429 }
      );
    }

    // リクエストボディ解析
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "リクエストの形式が不正です" },
        { status: 400 }
      );
    }

    // バリデーション
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "入力内容に不備があります", details: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, industry, message } = result.data;

    // メール送信（Resend API連携 — 環境変数未設定時はログのみ）
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

    if (resendApiKey && notifyEmail) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "focus company <noreply@focuscompany.jp>",
          to: notifyEmail,
          subject: `【お問い合わせ】${name}様より`,
          text: [
            `お名前: ${name}`,
            `メール: ${email}`,
            `電話: ${phone || "未入力"}`,
            `業種: ${industry || "未選択"}`,
            ``,
            `ご相談内容:`,
            message,
            ``,
            `送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
          ].join("\n"),
        }),
      });

      if (!emailRes.ok) {
        console.error("メール送信エラー:", await emailRes.text());
        // メール送信失敗でもお問い合わせ自体は記録する
      }
    } else {
      // 環境変数未設定時: コンソールに記録
      console.log("━━━ お問い合わせ受信 ━━━");
      console.log(`名前: ${name}`);
      console.log(`メール: ${email}`);
      console.log(`電話: ${phone || "未入力"}`);
      console.log(`業種: ${industry || "未選択"}`);
      console.log(`内容: ${message}`);
      console.log(`日時: ${new Date().toISOString()}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━");
    }

    return NextResponse.json(
      { success: true, message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("お問い合わせ処理エラー:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。しばらくしてからお試しください。" },
      { status: 500 }
    );
  }
}

import { createClient } from "@supabase/supabase-js";

/**
 * Supabase サーバーサイドクライアント（service_role）
 * API Route / Server Component でのみ使用
 * ブラウザには絶対に露出させないこと
 */
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase環境変数が未設定です: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY"
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";

/** ステータス別件数を取得 */
async function getContactStats() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("contacts")
      .select("status");

    if (error) throw error;

    const total = data?.length ?? 0;
    const newCount = data?.filter((c) => c.status === "new").length ?? 0;
    const readCount = data?.filter((c) => c.status === "read").length ?? 0;
    const repliedCount = data?.filter((c) => c.status === "replied").length ?? 0;

    return { total, newCount, readCount, repliedCount };
  } catch {
    return { total: 0, newCount: 0, readCount: 0, repliedCount: 0 };
  }
}

/**
 * 管理ダッシュボード
 */
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const stats = await getContactStats();

  return (
    <div className="p-8">
      {/* ヘッダー */}
      <h1 className="text-2xl font-bold text-navy mb-8">ダッシュボード</h1>

      {/* 統計カード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard label="お問い合わせ総数" value={stats.total} />
        <StatCard label="新着（未読）" value={stats.newCount} accent />
        <StatCard label="確認済み" value={stats.readCount} />
        <StatCard label="返信済み" value={stats.repliedCount} />
      </div>

      {/* クイックリンク */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-navy mb-4">クイックアクション</h2>
        <div className="flex gap-4">
          <Link
            href="/admin/contacts"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
          >
            ✉ お問い合わせ一覧
            {stats.newCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {stats.newCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

/** 統計カード */
function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <p className={`text-3xl font-bold ${accent ? "text-accent" : "text-navy"}`}>
        {value}
      </p>
    </div>
  );
}

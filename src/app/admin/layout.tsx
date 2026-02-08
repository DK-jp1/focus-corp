import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "管理画面 | focus company",
  robots: { index: false, follow: false },
};

/** 管理画面サイドバーリンク */
const ADMIN_NAV = [
  { label: "ダッシュボード", href: "/admin", icon: "□" },
  { label: "お問い合わせ", href: "/admin/contacts", icon: "✉" },
];

/**
 * 管理画面レイアウト
 * サイドバー + メインコンテンツ
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* サイドバー */}
      <aside className="w-56 bg-navy text-white flex-shrink-0 flex flex-col">
        {/* ロゴ */}
        <div className="px-5 py-6 border-b border-white/10">
          <Link href="/admin" className="text-lg font-bold tracking-wide">
            focus <span className="text-accent font-normal text-sm">admin</span>
          </Link>
        </div>

        {/* ナビゲーション */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* サイトへ戻る */}
        <div className="px-3 py-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            ← サイトへ戻る
          </Link>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

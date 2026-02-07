import Link from "next/link";

/**
 * 料金への誘導セクション
 * グラデーション背景 + 白背景ボタン
 */
export default function PriceCTA() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-[#1e3a5f] to-[#0a1628] overflow-hidden">
      {/* 装飾光 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* 上部グラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="fade-in-up text-white text-xl md:text-2xl font-bold leading-relaxed mb-4">
          各サービスの料金は「料金ページ」をご覧ください。
        </p>
        <p className="fade-in-up text-[#94A3B8] text-base md:text-lg font-light mb-10">
          期間限定の特別価格でご提供中です。
        </p>
        <div className="fade-in-up">
          <Link
            href="/#pricing"
            className="inline-block text-accent font-medium text-base px-10 py-4 rounded-full bg-white border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            料金を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

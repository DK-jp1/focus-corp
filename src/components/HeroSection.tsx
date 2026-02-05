/**
 * ファーストビュー: メインコピー、サブコピー、CTAボタン
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy text-white px-6 overflow-hidden">
      {/* 背景の微細なグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* メインコピー */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          AIで、働き方が変わる。
        </h1>

        {/* サブコピー */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-4 leading-relaxed">
          長崎県の個人事業主・サロン・企業向け
          <br className="sm:hidden" />
          {" "}AI導入・業務効率化・ウェブサイト制作
        </p>

        {/* キャッチコピー */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent mb-10">
          月20万円の人件費を、月2万円に。
        </p>

        {/* CTAボタン */}
        <a
          href="#contact"
          className="cta-button inline-block bg-accent hover:bg-accent-hover text-white font-medium text-base sm:text-lg px-10 py-4 rounded-full"
        >
          無料相談はこちら
        </a>
      </div>

      {/* スクロール矢印 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/50"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

/**
 * セクション1：ファーストビュー
 * グリッドパターン + グラデーションライン + text-shadow
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-dark section-glow-border relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-grid-pattern z-[1]" />

      {/* グラデーション光（控えめ） */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.04),transparent_50%)] z-[1]" />

      {/* 上部のグラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent z-[2]" />

      {/* ロゴはNavigationに移動 */}

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* メインコピー */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8 text-shadow-lg">
          AIで、働き方が変わる。
        </h1>

        {/* サブコピー */}
        <p className="text-base sm:text-lg md:text-xl text-white/60 font-light mb-4 leading-relaxed text-shadow-sm">
          長崎県の個人事業主・サロン・企業向け
          <br />
          AI導入・業務効率化・ウェブサイト制作
        </p>

        {/* キャッチ */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium gradient-text mb-12">
          月20万円の人件費を、月2万円に。
        </p>

        {/* CTAボタン */}
        <a
          href="#contact"
          className="cta-button inline-block text-white font-medium text-base sm:text-lg px-10 py-4 rounded-full"
        >
          無料相談はこちら
        </a>
      </div>

      {/* スクロール矢印 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/30"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

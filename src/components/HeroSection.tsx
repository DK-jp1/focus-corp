import Image from "next/image";

/**
 * セクション1：ファーストビュー
 * ダークネイビー背景 + 微細グラデーション
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-navy"
    >
      {/* 微細グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_70%)]" />

      {/* ロゴ（左上） */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10">
        <Image
          src="/images/logo.png"
          alt="focus株式会社"
          width={160}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* メインコピー */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
          AIで、働き方が変わる。
        </h1>

        {/* サブコピー */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-4 leading-relaxed">
          長崎県の個人事業主・サロン・企業向け
          <br />
          AI導入・業務効率化・ウェブサイト制作
        </p>

        {/* キャッチ */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent mb-12">
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

      {/* スクロール促す矢印アニメーション */}
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

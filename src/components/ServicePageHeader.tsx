/**
 * サービスページ：ヘッダーセクション
 * ダークネイビー背景 + グリッドパターン + 中央寄せテキスト
 */
export default function ServicePageHeader() {
  return (
    <section className="section-dark relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* グリッドパターン（パルスアニメーション付き） */}
      <div className="absolute inset-0 bg-grid-pattern grid-pulse z-[1]" />

      {/* グラデーション光 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.04),transparent_50%)] z-[1]" />

      {/* 上部グラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent z-[2]" />

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 pb-24 md:pt-32 md:pb-32">
        {/* セクションラベル */}
        <p className="page-load-fade-in text-accent text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Service
        </p>

        {/* メインコピー */}
        <h1 className="page-load-fade-in delay-100 text-2xl sm:text-[28px] md:text-[32px] font-black text-white leading-relaxed mb-8 text-shadow-lg">
          &ldquo;最先端のAI技術×地域密着サポート&rdquo;を基軸とした
          <br className="hidden sm:inline" />
          4つのサービスを展開しています。
        </h1>

        {/* サブコピー */}
        <p className="page-load-fade-in delay-300 text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed">
          都会の大企業だけが使っていたテクノロジーを、
          <br className="hidden sm:inline" />
          長崎の個人事業主・中小企業にも届ける。
          <br />
          導入から運用まで、伴走型でサポートします。
        </p>
      </div>

      {/* 下部グラデーションライン */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[2]" />
    </section>
  );
}

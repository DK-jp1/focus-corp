/**
 * セクション12：料金プラン
 * 背景：白 / テキスト：ダークネイビー
 * キャンペーンバナー目立たせる、「0円」は特大フォント赤
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Price
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            料金プラン
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 通常料金 */}
        <div className="fade-in-up bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center mb-8">
          {/* 初期費用 */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2 font-light">【初期費用】システム開発費</p>
            <p className="text-4xl sm:text-5xl font-bold text-navy">
              150,000<span className="text-lg font-medium">円（税込）</span>
            </p>
          </div>

          {/* 区切り線 */}
          <div className="w-16 h-px bg-gray-200 mx-auto mb-8" />

          {/* 月額費用 */}
          <div>
            <p className="text-sm text-gray-500 mb-2 font-light">【月額費用】システム利用料</p>
            <p className="text-4xl sm:text-5xl font-bold text-navy">
              20,000<span className="text-lg font-medium">円（税込）</span>
            </p>
          </div>
        </div>

        {/* キャンペーンバナー */}
        <div className="fade-in-up bg-navy rounded-3xl p-8 sm:p-12 text-center text-white mb-8">
          <p className="text-2xl md:text-3xl font-bold mb-8">
            🎉 法人化記念キャンペーン実施中
          </p>

          <div className="space-y-4 mb-8">
            {/* 通常価格 */}
            <div>
              <p className="text-sm text-gray-400 mb-1">通常価格</p>
              <p className="text-2xl text-gray-500 line-through">15万円</p>
            </div>

            {/* 矢印 */}
            <p className="text-accent text-2xl">↓</p>

            {/* 長崎限定価格 */}
            <div>
              <p className="text-sm text-gray-400 mb-1">長崎限定価格</p>
              <p className="text-2xl text-gray-500 line-through">5万円</p>
            </div>

            {/* 矢印 */}
            <p className="text-accent text-2xl">↓</p>

            {/* 今だけ0円 */}
            <div>
              <p className="text-sm text-yellow-400 mb-1 font-medium">今だけ</p>
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-red-500">
                0<span className="text-3xl">円</span>
              </p>
            </div>
          </div>

          <p className="inline-block bg-accent/20 text-accent text-sm font-medium px-6 py-2 rounded-full mb-6">
            長崎県限定｜先着10名様
          </p>

          <p className="text-gray-400 text-xs font-light">
            ※内容により料金が変動する場合がございます。まずはお気軽にご相談ください。
          </p>
        </div>

        {/* CTAボタン */}
        <div className="fade-in-up text-center">
          <a
            href="#contact"
            className="cta-button inline-block bg-accent hover:bg-accent-hover text-white font-medium text-base sm:text-lg px-10 py-4 rounded-full"
          >
            無料相談はこちら
          </a>
        </div>
      </div>
    </section>
  );
}

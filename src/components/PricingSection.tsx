/**
 * 料金プランセクション
 */
export default function PricingSection() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
            Price
          </p>
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            料金プラン
          </h2>
        </div>

        {/* 料金カード */}
        <div className="fade-in-up bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-12 text-center">
          {/* 初期費用 */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2 font-light">初期費用</p>
            <p className="text-xl text-gray-400 line-through mb-1">
              150,000円（税込）
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-navy">
              75,000<span className="text-lg font-medium">円（税込）</span>
            </p>
            <span className="inline-block mt-3 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full">
              長崎県限定 初期費用50%OFF
            </span>
          </div>

          {/* 区切り線 */}
          <div className="w-16 h-px bg-gray-200 mx-auto mb-8" />

          {/* 月額 */}
          <div className="mb-10">
            <p className="text-sm text-gray-500 mb-2 font-light">月額</p>
            <p className="text-4xl sm:text-5xl font-bold text-navy">
              20,000<span className="text-lg font-medium">円（税込）</span>
            </p>
          </div>

          {/* CTAボタン */}
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

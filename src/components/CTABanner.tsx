/**
 * 中間CTAバナー
 * セクション間に挿入してコンバージョンを促進
 */
interface CTABannerProps {
  /** 見出しテキスト */
  heading: string;
  /** サブテキスト */
  subtext?: string;
  /** ボタンテキスト */
  buttonText?: string;
  /** リンク先 */
  href?: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText = "無料相談はこちら",
  href = "#contact",
}: CTABannerProps) {
  return (
    <section className="section-dark py-20 md:py-28 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="fade-in-up text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
          {heading}
        </h2>
        {subtext && (
          <p className="fade-in-up text-gray-400 font-light mb-8">
            {subtext}
          </p>
        )}
        <div className="fade-in-up">
          <a
            href={href}
            className="cta-button inline-block text-white font-medium text-base sm:text-lg px-10 py-4 rounded-full"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

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
    <section className="section-gradient-blue py-14 md:py-20 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="fade-in-up text-2xl md:text-3xl font-bold tracking-wide text-white mb-4 leading-snug">
          {heading}
        </h2>
        {subtext && (
          <p className="fade-in-up text-white/80 font-light mb-8">
            {subtext}
          </p>
        )}
        <div className="fade-in-up">
          <a
            href={href}
            className="inline-block bg-white text-accent font-bold text-base sm:text-lg px-10 py-4 rounded-full hover:bg-white/90 shadow-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

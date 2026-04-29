interface CTABannerProps {
  /** 見出しテキスト */
  heading: string;
  /** サブテキスト */
  subtext?: string;
  /** 黄色CTAのテキスト */
  buttonText?: string;
  /** 黄色CTAのリンク先 */
  href?: string;
}

export default function CTABanner({
  heading,
  subtext,
  buttonText = "無料相談はこちら",
  href = "#contact",
}: CTABannerProps) {
  return (
    <section className="section-compact section-gradient-blue">
      <div className="section-container relative z-10 text-center">
        <h2 className="fade-in-up mx-auto mb-4 max-w-3xl text-[clamp(28px,4vw,44px)] font-[900] leading-tight text-white">
          {heading}
        </h2>
        {subtext && (
          <p className="fade-in-up mx-auto mb-8 max-w-2xl text-base font-bold leading-relaxed text-white/90 md:text-lg">
            {subtext}
          </p>
        )}
        <div className="fade-in-up flex flex-col justify-center gap-4 sm:flex-row">
          <a href={href} className="cta-primary">
            {buttonText}
          </a>
          <a href="#services" className="cta-white">
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  );
}

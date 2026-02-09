/**
 * セクション10：数字で見るfocus
 * section-light + gradient-text数字 + corner-glow
 */
import CountUp from "./CountUp";

/** 事業実績データ */
const RESULTS = [
  { end: 6, suffix: "社", label: "AI導入サポート" },
  { end: 12, suffix: "サイト", label: "自社運営ウェブサイト・LP" },
  { end: 1000, suffix: "万再生/月", label: "メディア運営実績" },
  { end: 30, suffix: "億円", label: "関連事業年商規模" },
] as const;

export default function ResultsSection() {
  return (
    <section id="results" className="section-light section-glow-border corner-glow-tr py-32 md:py-44 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-20">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Results
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-5">
            数字で見るfocus
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 数字カード */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {RESULTS.map((result, index) => (
            <div
              key={index}
              className="fade-in-stagger text-center"
              data-delay={index * 200}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">
                <CountUp end={result.end} suffix={result.suffix} />
              </p>
              <p className="text-sm sm:text-base text-navy/60 font-light">
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

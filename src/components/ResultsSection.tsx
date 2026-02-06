/**
 * セクション10：実績
 * section-light + gradient-text数字 + corner-glow
 */
import CountUp from "./CountUp";

/** 実績データ */
const RESULTS = [
  { end: 6, suffix: "社", label: "AI導入実績" },
  { end: 12, suffix: "社", label: "ウェブサイト・LP制作（2025年）" },
  { end: 1000, suffix: "万再生/月", label: "メディア運用実績" },
  { end: 30, suffix: "億円", label: "関与ベンチャー年商規模" },
] as const;

export default function ResultsSection() {
  return (
    <section id="results" className="section-light section-glow-border corner-glow-tr py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
            数字で見るfocus
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 実績カード */}
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

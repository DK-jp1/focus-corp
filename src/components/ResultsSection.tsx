import CountUp from "./CountUp";

const RESULTS = [
  { end: 9, suffix: "資格", label: "保有認定資格" },
  { end: 6, suffix: "社", label: "AI導入サポート" },
  { end: 12, suffix: "サイト", label: "自社運営ウェブサイト・LP" },
  { end: 1000, suffix: "万再生/月", label: "メディア運営実績" },
] as const;

export default function ResultsSection() {
  return (
    <section id="results" className="section section-bluegray section-glow-border corner-glow-tr">
      <div className="section-container relative z-10">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Results</p>
          <h2 className="section-title mb-5 text-dark">数字で見るfocus</h2>
          <div className="decorative-line" />
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {RESULTS.map((result, index) => (
            <div
              key={result.label}
              className="lp-card fade-in-stagger p-6 text-center md:p-8"
              data-delay={index * 140}
            >
              <p className="mb-3 font-display text-4xl font-[900] leading-none text-accent md:text-5xl">
                <CountUp end={result.end} suffix={result.suffix} />
              </p>
              <p className="text-sm font-bold text-slate-600 md:text-base">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

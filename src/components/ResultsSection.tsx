import CountUp from "./CountUp";

/** 実績データ */
const RESULTS = [
  { end: 6, suffix: "社", label: "AI導入実績" },
  { end: 12, suffix: "社", label: "ウェブサイト・LP制作" },
  { end: 1000, suffix: "万再生/月", label: "メディア運用実績" },
  { end: 30, suffix: "億円", label: "関与ベンチャー年商規模" },
] as const;

/**
 * 実績セクション: カウントアップアニメーション付き数字
 */
export default function ResultsSection() {
  return (
    <section className="bg-navy py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
            Results
          </p>
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            実績
          </h2>
        </div>

        {/* 数字グリッド */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {RESULTS.map((item, i) => (
            <div
              key={i}
              className="fade-in-up text-center"
              data-delay={i * 150}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp end={item.end} suffix={item.suffix} />
              </p>
              <p className="text-sm sm:text-base text-white/60 font-light">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

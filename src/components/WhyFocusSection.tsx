/**
 * セクション11：選ばれる理由
 * 背景：ダークネイビー / テキスト：白
 * 縦並び、番号大きく、ふわっと表示
 */

// 選ばれる理由データ定義
interface ReasonItem {
  number: string;
  title: string;
  description: string;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "長崎県特化・地域密着",
    description:
      "長崎の事業者様に寄り添い、地域に根ざしたサポートを提供します。",
  },
  {
    number: "02",
    title: "業種別にカスタマイズ",
    description:
      "整体院、美容室、飲食店、士業など業種ごとの課題に合わせた最適な提案を行います。",
  },
  {
    number: "03",
    title: "圧倒的なコストパフォーマンス",
    description:
      "人件費月20万円を、AIで月2万円に。コストを抑えながら業務効率を最大化します。",
  },
  {
    number: "04",
    title: "導入から運用まで一貫サポート",
    description:
      "「難しそう」「使いこなせるか不安」そんな方もご安心ください。導入から運用まで、すべてサポートいたします。",
  },
  {
    number: "05",
    title: "60代でも安心のサポート体制",
    description:
      "デジタルが苦手な方でも使いこなせるよう丁寧にご説明します。",
  },
];

export default function WhyFocusSection() {
  return (
    <section id="why-focus" className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-white">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Why focus?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            選ばれる5つの理由
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 理由リスト */}
        <div className="space-y-10">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="fade-in-stagger flex gap-6 md:gap-8"
              data-delay={index * 150}
            >
              {/* 番号 */}
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl font-bold text-accent opacity-80">
                  {reason.number}
                </span>
              </div>

              {/* コンテンツ */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

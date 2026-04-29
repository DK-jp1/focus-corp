interface ReasonItem {
  number: string;
  title: string;
  description: string;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "長崎県特化・地域密着",
    description: "長崎の事業者様に寄り添い、地域に根ざしたサポートを提供します。",
  },
  {
    number: "02",
    title: "業種別にカスタマイズ",
    description: "整体院、美容室、飲食店、士業など業種ごとの課題に合わせた提案を行います。",
  },
  {
    number: "03",
    title: "圧倒的なコストパフォーマンス",
    description: "人件費月20万円を、AIで月2万円に。小さく始めて業務効率を高めます。",
  },
  {
    number: "04",
    title: "導入から運用まで一貫サポート",
    description: "導入後も改善提案と使い方の説明を続け、現場で使える状態を維持します。",
  },
  {
    number: "05",
    title: "デジタルが苦手でも安心",
    description: "難しい専門用語を避け、普段の業務に合わせて丁寧に説明します。",
  },
];

export default function WhyFocusSection() {
  return (
    <section id="why-focus" className="section section-bluegray section-glow-border corner-glow-bl">
      <div className="section-container relative z-10 text-dark">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Why focus?</p>
          <h2 className="section-title mb-5">選ばれる5つの理由</h2>
          <div className="decorative-line" />
        </div>

        <div className="mx-auto grid max-w-4xl gap-5">
          {REASONS.map((reason, index) => (
            <article
              key={reason.number}
              className="lp-card fade-in-stagger grid gap-5 p-6 sm:grid-cols-[84px_1fr] md:p-8"
              data-delay={index * 120}
            >
              <span className="font-display text-5xl font-[900] leading-none text-accent">
                {reason.number}
              </span>
              <div>
                <h3 className="mb-2 text-2xl font-[900] text-dark">{reason.title}</h3>
                <p className="body-copy text-slate-600">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

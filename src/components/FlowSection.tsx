interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "お問い合わせ",
    description: "フォームまたはInstagram DMから、現在の悩みをそのままお送りください。",
  },
  {
    number: "02",
    title: "ヒアリング",
    description: "業務の流れ、困っている作業、目指したい状態をオンラインで整理します。",
  },
  {
    number: "03",
    title: "提案",
    description: "優先順位、導入範囲、費用感を明確にし、最初に進める施策を決めます。",
  },
  {
    number: "04",
    title: "構築・導入",
    description: "copilot roomや業務AIを構築し、現場で使える形に整えて導入します。",
  },
  {
    number: "05",
    title: "運用サポート",
    description: "導入後の改善、使い方の相談、追加機能の調整まで継続して支援します。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section section-bluegray section-glow-border corner-glow-tr">
      <div className="section-container relative z-10 text-dark">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Flow</p>
          <h2 className="section-title mb-5">導入の流れ</h2>
          <div className="decorative-line" />
        </div>

        <div className="flow-list">
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className="flow-step fade-in-stagger"
              data-delay={index * 120}
            >
              <div>
                <span className="flow-step__badge">STEP {step.number}</span>
              </div>
              <div>
                <h3 className="flow-step__title">{step.title}</h3>
                <p className="flow-step__text">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

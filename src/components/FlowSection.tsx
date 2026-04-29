/**
 * セクション13：導入の流れ
 * section-dark + glass-card + グラデーション番号
 */

// ステップデータ定義
interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "無料相談",
    description: "DMまたはお問い合わせフォームからお気軽にご連絡ください。",
  },
  {
    number: "02",
    title: "ヒアリング",
    description:
      "現在のお悩み・課題をお聞かせください。オンラインまたは対面で対応いたします。",
  },
  {
    number: "03",
    title: "ご提案",
    description:
      "ヒアリング内容をもとに、最適なサービス・ツールをご提案します。",
  },
  {
    number: "04",
    title: "構築・導入",
    description:
      "ご契約後、システムの構築を開始。最短2週間で導入可能です。",
  },
  {
    number: "05",
    title: "運用サポート",
    description:
      "導入後も安心のサポート体制。使い方のご説明、改善提案を行います。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-white section-glow-border corner-glow-tr py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-navy">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-12">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Flow
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-5">導入の流れ</h2>
          <div className="decorative-line" />
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="fade-in-stagger glass-card rounded-2xl p-6 relative text-center"
              data-delay={index * 150}
            >
              {/* STEP ラベル */}
              <p className="text-xs tracking-[0.2em] text-slate-400 uppercase mb-2">Step</p>

              {/* 番号 */}
              <p className="text-3xl font-bold gradient-text mb-3">{step.number}</p>

              {/* タイトル */}
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>

              {/* 説明 */}
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {step.description}
              </p>

              {/* 接続線（デスクトップ、最後以外） */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 -translate-y-1/2">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

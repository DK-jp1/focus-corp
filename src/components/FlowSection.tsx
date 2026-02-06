/**
 * セクション13：導入の流れ
 * 背景：ダークネイビー / テキスト：白
 * 横並び（スマホ縦）、各ステップを線でつなぐ、番号は丸で囲む
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
    <section id="flow" className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-white">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Flow
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">導入の流れ</h2>
          <div className="decorative-line" />
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="fade-in-stagger relative text-center"
              data-delay={index * 150}
            >
              {/* 番号（丸で囲む） */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent text-accent mb-4">
                <span className="text-lg font-bold">STEP</span>
              </div>
              <p className="text-3xl font-bold text-accent mb-3">{step.number}</p>

              {/* タイトル */}
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>

              {/* 説明 */}
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {step.description}
              </p>

              {/* 接続線（デスクトップ、最後以外） */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8">
                  <div className="w-full h-0.5 bg-accent/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface Sanbo {
  title: string;
  description: string;
  image: string;
}

const SANBOS: Sanbo[] = [
  {
    title: "プロモーター",
    description:
      "あなたの事業を世界に広める参謀。SNS・広告・ブランディングをAIが支援。",
    image: "/images/illustrations/promoter.png",
  },
  {
    title: "ディレクター",
    description:
      "あなたの事業の方向性を整理する参謀。事業計画・数値管理・意思決定をAIが支援。",
    image: "/images/illustrations/director.png",
  },
  {
    title: "アドバイザー",
    description:
      "あなたの専門知識を補完する参謀。業界知識・法務・財務をAIが支援。",
    image: "/images/illustrations/advisor.png",
  },
];

export default function NewStandardSection() {
  return (
    <section id="new-standard" className="section-dark-solid section-glow-border corner-glow-bl py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        {/* 見出し */}
        <div className="fade-in-up mb-12">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">New Standard</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-5">常識が、変わる。</h2>
          <div className="decorative-line" />
        </div>

        <div className="fade-in-up mb-4">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-2">「業務を効率化したい」</p>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-6">→ 人を雇う</p>
          <p className="text-white/60 font-light">これが今までの常識でした。</p>
          <p className="text-white/60 font-light mt-2">でも、時代は変わりました。</p>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="fade-in-up mb-4">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-2">「業務を効率化したい」</p>
          <p className="text-xl md:text-2xl font-bold gradient-text leading-relaxed mb-6">→ AIを導入する</p>
          <p className="text-white font-bold text-lg">これが、新しい当たり前です。</p>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* 比較ブロック（グラデーション数字） */}
        <div className="fade-in-up mb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div>
              <p className="text-white/40 text-sm mb-2">人件費</p>
              <p className="text-4xl md:text-5xl font-bold text-white/40">月20<span className="text-2xl">万円</span></p>
            </div>
            <div className="text-3xl font-light gradient-text">→</div>
            <div>
              <p className="text-sm mb-2 gradient-text font-medium">AI導入</p>
              <p className="text-4xl md:text-5xl font-bold gradient-text">月2<span className="text-2xl">万円</span></p>
            </div>
          </div>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="fade-in-up mb-4">
          <p className="text-lg font-light leading-[2] text-white/60 mb-8">
            人は忘れる。疲れる。ミスを繰り返す。<br /><br />
            AIは忘れない。疲れない。<br />一度学習すれば、二度と同じミスをしない。
          </p>
          <p className="text-xl md:text-2xl font-bold text-white">
            コストは10分の1。<br />精度は、比べものにならない。
          </p>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* 3つのAI参謀 */}
        <div className="fade-in-up mb-4">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white mb-4">3つのAI参謀</h3>
          <p className="text-white/60 font-light mb-10">あなたの経営を支える、専属AIチーム。</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SANBOS.map((sanbo, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="mb-4">
                  <Image
                    src={sanbo.image}
                    alt={`${sanbo.title}のAI参謀イメージ`}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{sanbo.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {sanbo.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="fade-in-up">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white mb-8">あなた専用のAIを。</h3>
          <p className="text-lg md:text-xl font-light leading-[2] text-white/60 mb-8">
            あなたのビジョンを共に実現する、<br />経営者があなたの隣に。
          </p>
          <p className="text-xl md:text-2xl font-bold gradient-text">copilot roomが、その環境を届けます。</p>
        </div>
      </div>
    </section>
  );
}

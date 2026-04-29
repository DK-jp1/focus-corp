import Image from "next/image";

interface Advisor {
  title: string;
  role: string;
  output: string;
  fit: string;
  image: string;
}

const ADVISORS: Advisor[] = [
  {
    title: "Promoter",
    role: "SNS投稿、広告、導線設計を整理し、事業を見つけてもらう流れを作ります。",
    output: "投稿案、キャンペーン案、プロフィール改善案",
    fit: "SNSが止まっている、集客導線を整えたい",
    image: "/images/illustrations/promoter.png",
  },
  {
    title: "Director",
    role: "業務、売上、優先順位を整理し、次に動くべき判断を具体化します。",
    output: "週次タスク、改善ロードマップ、KPI整理",
    fit: "やることが多すぎる、判断が後回しになる",
    image: "/images/illustrations/director.png",
  },
  {
    title: "Advisor",
    role: "専門知識の不足を補い、調査や比較検討の時間を短縮します。",
    output: "調査メモ、比較表、意思決定の論点整理",
    fit: "新しい施策を始めたい、調べる時間が足りない",
    image: "/images/illustrations/advisor.png",
  },
];

export default function NewStandardSection() {
  return (
    <section id="new-standard" className="section section-dark-solid section-glow-border">
      <div className="section-container relative z-10">
        <div className="fade-in-up mx-auto mb-14 max-w-3xl text-center">
          <p className="label-en mb-4 text-accent-cyan">New Standard</p>
          <h2 className="section-title mb-5 text-white">
            人を雇うから、AIを導入するへ。
          </h2>
          <div className="decorative-line" />
          <p className="section-lead mt-8 text-white/80">
            経営者が抱えていた「人手不足」と「判断待ち」を、専属AI参謀チームで前に進めます。
          </p>
        </div>

        {/* コスト比較 */}
        <div className="fade-in-up mx-auto mb-16 max-w-5xl">
          <div className="grid items-stretch gap-5 md:grid-cols-[1fr_84px_1fr]">
            <div className="rounded-lg border border-white/15 bg-white/10 p-8 text-center">
              <p className="mb-4 text-sm font-[900] tracking-[0.16em] text-white/50">
                OLD STANDARD
              </p>
              <p className="mb-4 text-2xl font-[900] text-white">人を雇う</p>
              <p className="font-display text-[clamp(42px,7vw,80px)] font-[900] leading-none text-white/40">
                20<span className="text-2xl md:text-3xl">万円</span>
              </p>
              <p className="mt-4 text-sm font-bold text-white/50">毎月の人件費、採用、教育が必要</p>
            </div>

            <div className="grid place-items-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-warning font-display text-3xl font-[900] text-navy shadow-[0_12px_28px_rgba(255,215,0,0.22)]">
                →
              </span>
            </div>

            <div className="rounded-lg border border-accent-cyan/40 bg-white p-8 text-center text-dark shadow-[0_22px_52px_rgba(0,0,0,0.22)]">
              <p className="mb-4 text-sm font-[900] tracking-[0.16em] text-accent">
                NEW STANDARD
              </p>
              <p className="mb-4 text-2xl font-[900] text-dark">AIを導入する</p>
              <p className="cost-number">
                2<span className="text-2xl md:text-3xl">万円</span>
              </p>
              <p className="mt-4 text-sm font-bold text-slate-600">小さく始めて、成果が出る業務から拡張</p>
            </div>
          </div>
          <p className="mt-8 text-center text-[clamp(28px,4vw,48px)] font-[900] leading-tight text-white">
            コストは<span className="text-warning">10分の1</span>。
            <br className="sm:hidden" />
            相談相手は、24時間そばに。
          </p>
        </div>

        {/* 3つのAI参謀 */}
        <div className="fade-in-up text-center">
          <p className="label-en mb-4 text-accent-cyan">AI Advisors</p>
          <h3 className="mb-4 text-[clamp(28px,4vw,44px)] font-[900] leading-tight text-white">
            3つのAI参謀が、経営の手を止めない。
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-white/70">
            集客、業務整理、専門知識の補完まで。相談内容に合わせて、必要な参謀が具体策を返します。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ADVISORS.map((advisor, index) => (
            <article
              key={advisor.title}
              className="fade-in-stagger rounded-lg border border-white/15 bg-white p-6 text-dark shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
              data-delay={index * 140}
            >
              <Image
                src={advisor.image}
                alt={`${advisor.title}のAI参謀イラスト`}
                width={800}
                height={600}
                className="advisor-card__image mb-5"
                sizes="(max-width: 768px) 100vw, 352px"
              />
              <span className="badge-blue mb-4">{advisor.title}</span>
              <h4 className="mb-3 text-2xl font-[900] text-dark">
                {advisor.title === "Promoter" && "広げる参謀"}
                {advisor.title === "Director" && "整える参謀"}
                {advisor.title === "Advisor" && "補う参謀"}
              </h4>
              <dl className="space-y-4 text-left">
                <div>
                  <dt className="mb-1 text-sm font-[900] text-accent">何をするか</dt>
                  <dd className="text-sm leading-relaxed text-slate-600">{advisor.role}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-[900] text-accent">成果物</dt>
                  <dd className="text-sm leading-relaxed text-slate-600">{advisor.output}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-sm font-[900] text-accent">向いている悩み</dt>
                  <dd className="text-sm leading-relaxed text-slate-600">{advisor.fit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

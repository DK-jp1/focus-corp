/**
 * セクション2：企業理念（Philosophy + Mission + Vision 統合）
 * 5つの哲学セクションを1つに統合
 * section-light + section-dark 交互構成
 */
export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section-bluegray section-glow-border corner-glow-tr py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-12">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-navy mb-5">
            私たちの想い
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 原点ストーリー */}
        <div className="fade-in-up text-navy leading-[2.2] text-base md:text-lg font-light space-y-8 text-center mb-20">
          <p>
            私たちfocusは、「故郷が静かになっていく」という寂しさから生まれました。
          </p>
          <p>
            小学生の頃、長崎県は活気に満ちていた。
            <br />
            商店街には人があふれ、街には笑い声が響いていた。
          </p>
          <p>
            でも、年月が経つにつれて、街は少しずつ静かになっている。
            <br />
            若者は都会へ出て行き、シャッターが増え、活気が失われていく。
          </p>
          <p className="text-xl md:text-2xl font-bold py-2">
            「このままでいいのか？」
          </p>
          <p>
            だからこそ私たちは、テクノロジーの力で地方を変えることを決意しました。
            <br />
            AIを、人の可能性を広げるために使う。
            <br />
            一人で頑張る事業主の負担を減らし、本業に集中できる環境を届ける。
          </p>
        </div>

        {/* 区切り */}
        <div className="section-divider" />

        {/* ミッション */}
        <div className="fade-in-up text-center py-16">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Mission
          </p>
          <h3 className="text-2xl md:text-4xl font-bold tracking-wide text-navy mb-8 leading-tight">
            長崎を、若者が
            <br className="md:hidden" />
            残りたいと思える街にする
          </h3>
          <div className="text-navy/70 leading-[2.0] text-base font-light space-y-6">
            <p>
              テクノロジーを正しく使えば、場所のハンデは消せる。
              <br />
              一人でも多くの事業主がAIで業務を効率化し、
              本業に集中し、成長し、雇用を生み出す。
            </p>
            <p>
              その連鎖が、街を変える。
              <br />
              若者が「ここで働きたい」と思う会社が増えれば、街は活気を取り戻す。
            </p>
            <p className="text-navy text-lg font-bold pt-2">
              私たちは、その未来を本気で創ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

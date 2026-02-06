/**
 * セクション3：ミッション
 * section-dark + corner-glow + text-shadow
 */
export default function MissionSection() {
  return (
    <section id="mission" className="section-dark section-glow-border corner-glow-bl py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        {/* 見出し */}
        <div className="fade-in-up mb-12">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Mission
          </p>
          <div className="decorative-line mb-8" />
        </div>

        {/* メインコピー */}
        <h2 className="fade-in-up text-3xl md:text-4xl lg:text-5xl font-black mb-12 leading-tight text-shadow-sm">
          長崎を、若者が
          <br className="md:hidden" />
          残りたいと思える街にする
        </h2>

        {/* 本文 */}
        <div className="fade-in-up text-gray-300 leading-[2.2] text-base md:text-lg font-light space-y-8">
          <p>
            私たちは、AIの力で地域経済を活性化し、
            <br />
            長崎県を「ここで働きたい」「ここに住みたい」と思える場所に変えます。
          </p>
          <p className="text-white text-xl font-bold">
            なぜこのミッションなのか。
          </p>
          <p>
            それは、地方の衰退は「仕方ない」ことではないと信じているからです。
          </p>
          <p>
            テクノロジーを正しく使えば、場所のハンデは消せる。
            <br />
            一人でも多くの事業主がAIで業務を効率化し、
            <br />
            本業に集中し、成長し、雇用を生み出す。
          </p>
          <p>
            その連鎖が、街を変える。
            <br />
            高校生や大学生が「ここで働きたい」と思う会社が増えれば、
            <br />
            若者は残る。街は活気を取り戻す。
          </p>
          <p className="text-white text-xl font-bold pt-4">
            私たちは、その未来を本気で創ります。
          </p>
        </div>
      </div>
    </section>
  );
}

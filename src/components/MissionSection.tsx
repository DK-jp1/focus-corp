/**
 * セクション3：ミッション
 * 背景：ダークネイビー / テキスト：白
 */
export default function MissionSection() {
  return (
    <section id="mission" className="bg-navy py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_70%)]" />
      <div className="max-w-3xl mx-auto text-center text-white relative z-10">
        {/* 見出し */}
        <div className="fade-in-up mb-12">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Mission
          </p>
          <div className="decorative-line mb-8" />
        </div>

        {/* メインコピー */}
        <h2 className="fade-in-up text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
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

          <p className="text-white text-xl font-medium">
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

          <p className="text-white text-xl font-medium pt-4">
            私たちは、その未来を本気で創ります。
          </p>
        </div>
      </div>
    </section>
  );
}

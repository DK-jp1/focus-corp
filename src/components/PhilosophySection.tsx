/**
 * セクション2：企業理念（Philosophy - はじめに）
 * 背景：白 / テキスト：ダークネイビー
 * 中央揃え、段落ごとに余白、装飾ライン
 */
export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-navy-alt py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* 見出し */}
        <div className="fade-in-up mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            はじめに
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 本文 */}
        <div className="fade-in-up text-gray-300 leading-[2.2] text-base md:text-lg font-light space-y-8">
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

          <p className="text-xl md:text-2xl font-medium py-2 text-white">
            「このままでいいのか？」
          </p>

          <p>その問いが、私たちの原点です。</p>

          <p>
            敵は誰かではありませんでした。
            <br />
            時代の流れ、構造そのものだったのです。
          </p>

          <p>
            だからこそ私たちは、テクノロジーの力で地方を変えることを決意しました。
          </p>

          <p>
            AIを、効率化のためだけでなく、人の可能性を広げるために使う。
            <br />
            一人で頑張る事業主の負担を減らし、本業に集中できる環境を届ける。
          </p>

          <p>
            私たちが扱うのは、日本最先端のAI技術。
            <br />
            都会の大企業だけが使っていたテクノロジーを、
            <br />
            長崎の個人事業主にも届ける。
          </p>

          <p>
            そして、「長崎で働きたい」と思える会社を、この地に作る。
          </p>

          <p className="text-xl md:text-2xl font-medium pt-4 text-white">
            それが、focusが存在する理由です。
          </p>
        </div>
      </div>
    </section>
  );
}

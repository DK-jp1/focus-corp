/**
 * セクション6：focus哲学
 * 背景：白 / テキスト：ダークネイビー
 * 3つの概念を縦並び、区切り線で分ける
 */

// 哲学概念データ定義
interface ConceptItem {
  title: string;
  paragraphs: string[];
}

const CONCEPTS: ConceptItem[] = [
  {
    title: "可能性の拡張 ー AIがもたらす本当の価値",
    paragraphs: [
      "AIは、人の仕事を奪うものではありません。\n人の可能性を、無限に広げるものです。",
      "今まで「時間がない」「手が回らない」と諦めていたこと。\nそれが、AIによって可能になる。",
      "事務作業から解放された時間で、新しい挑戦ができる。\n一人でも、何人分もの価値を生み出せる。",
      "私たちは、AIを「効率化のツール」ではなく、\n「可能性を広げるパートナー」として届けます。",
    ],
  },
  {
    title: "人とAIの理想の関係",
    paragraphs: [
      "AIは、あなたの隣にいる経営者。",
      "24時間働き、ミスを繰り返さず、あなたのビジョンを共に実現する。\n人を雇う代わりに、AIを味方につける。",
      "でも、AIはあくまでパートナー。\n最終的に価値を届けるのは、あなた自身です。",
      "AIが効率化を担い、人が創造性を担う。\nその役割分担が、最高の結果を生み出します。",
    ],
  },
  {
    title: "地域活性化 ー 一人の変化が、街を変える",
    paragraphs: [
      "一人の事業主がAIを導入し、業務が効率化される。\n→ 本業に集中でき、売上が上がる。\n→ 新しい雇用が生まれる。\n→ 若者が「ここで働きたい」と思う。\n→ 街に活気が戻る。",
      "この連鎖を、私たちは一社ずつ、丁寧に創っていきます。",
    ],
  },
];

export default function PhilosophyCoreSection() {
  return (
    <section id="philosophy-core" className="bg-navy-alt py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            focus哲学の核心概念
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 概念リスト */}
        <div>
          {CONCEPTS.map((concept, index) => (
            <div key={index}>
              <div className="fade-in-up py-12">
                {/* タイトル */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
                  {concept.title}
                </h3>

                {/* 本文 */}
                <div className="text-gray-300 leading-[2.2] text-base md:text-lg font-light space-y-6 text-center">
                  {concept.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* 区切り線（最後以外） */}
              {index < CONCEPTS.length - 1 && <div className="section-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

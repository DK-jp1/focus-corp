/**
 * セクション5：バリュー（行動指針）
 * section-dark + corner-glow + グラデーション番号
 */
interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  { number: "01", title: "仕事を、遊ぶように楽しむ", description: "仕事は苦しみではない。成長のきっかけであり、最高の遊び場。私たちは、楽しみながら価値を生み出すことを大切にします。ワクワクしながら働く姿が、周りに伝染し、街を明るくする。" },
  { number: "02", title: "正しく頑張る人が、報われる場所を作る", description: "努力は、正しい方向に向かってこそ実を結ぶ。間違った努力は優しく修正し、正しい努力は全力で応援する。誰もが目標を達成できる環境を、私たちは創り続けます。" },
  { number: "03", title: "相手の可能性を、引き出す", description: "私たちの強みは、人のポテンシャルを最大化すること。「あなたにはこんな可能性がある」と気づかせ、最高の結果に導くことに全力を尽くします。" },
  { number: "04", title: "不安を、成長痛として楽しむ", description: "不安や困難に直面したとき、それは成長のサイン。逃げずに向き合い、乗り越えた先にある景色を楽しむ。成長を感じる瞬間が、私たちにとって最高の喜びです。" },
  { number: "05", title: "長崎に、本気で貢献する", description: "私たちは、長崎のために存在しています。地域の事業主を支え、経済を活性化し、若者が残りたいと思える街を創る。それが、私たちの使命であり、誇りです。" },
];

export default function ValueSection() {
  return (
    <section id="value" className="section-dark section-glow-border corner-glow-tr py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">Value</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">行動指針</h2>
          <div className="decorative-line" />
        </div>

        {/* バリューリスト */}
        <div className="space-y-12">
          {VALUES.map((value, index) => (
            <div key={index} className="fade-in-stagger flex gap-6 md:gap-8" data-delay={index * 150}>
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl font-black gradient-text">
                  {value.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

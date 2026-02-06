/**
 * セクション7：お悩み
 * section-dark + corner-glow
 */
const PROBLEMS = [
  "人を雇いたいけど、人件費が高い",
  "事務作業に追われて、本業に集中できない",
  "SNSを更新する時間がない",
  "予約対応や問い合わせ対応に気づくといつも時間が取られている",
  "同じ質問に何度も答えている",
  "ホームページを作りたいけど、どこに頼めばいいかわからない",
] as const;

export default function ProblemsSection() {
  return (
    <section id="problems" className="section-dark section-glow-border corner-glow-bl py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-black text-center mb-16 text-shadow-sm">
          こんなお悩み、ありませんか？
        </h2>

        <ul className="space-y-6 mb-16">
          {PROBLEMS.map((problem, index) => (
            <li key={index} className="fade-in-stagger flex items-start gap-4" data-delay={index * 150}>
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id={`check-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#check-${index})`}
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg md:text-xl font-light leading-relaxed">{problem}</span>
            </li>
          ))}
        </ul>

        <p className="fade-in-up text-2xl md:text-3xl font-black text-center gradient-text">
          それらのお悩み、focusが解決します。
        </p>
      </div>
    </section>
  );
}

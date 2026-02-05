/** お悩みリスト */
const PROBLEMS = [
  "人を雇いたいけど、人件費が高い",
  "事務作業に追われて、本業に集中できない",
  "SNSを更新する時間がない",
  "予約対応・問い合わせ対応に時間を取られている",
  "同じ質問に何度も答えている",
  "ホームページを作りたいけどどこに頼めばいいかわからない",
] as const;

/**
 * お悩み → 解決セクション: チェックリスト形式
 */
export default function ProblemsSection() {
  return (
    <section className="bg-navy py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-snug mb-14">
          こんなお悩み、
          <br className="sm:hidden" />
          ありませんか？
        </h2>

        {/* チェックリスト */}
        <ul className="space-y-5 mb-14">
          {PROBLEMS.map((text, i) => (
            <li
              key={i}
              className="fade-in-stagger flex items-start gap-4 text-white/90"
              data-delay={i * 150}
            >
              {/* 青チェックマーク */}
              <svg
                className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-base sm:text-lg font-light leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* 締めコピー */}
        <p className="fade-in-up text-center text-xl sm:text-2xl md:text-3xl font-bold text-accent">
          それ、focusが解決します。
        </p>
      </div>
    </section>
  );
}

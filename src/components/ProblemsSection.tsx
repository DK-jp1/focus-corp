/**
 * セクション7：お悩み
 * 背景：ダークネイビー / テキスト：白
 * チェックリスト（青チェックマーク、順番にふわっと表示）
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
    <section id="problems" className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-white">
        {/* 見出し */}
        <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16">
          こんなお悩み、ありませんか？
        </h2>

        {/* チェックリスト */}
        <ul className="space-y-6 mb-16">
          {PROBLEMS.map((problem, index) => (
            <li
              key={index}
              className="fade-in-stagger flex items-start gap-4"
              data-delay={index * 150}
            >
              {/* 青チェックマーク */}
              <svg
                className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg md:text-xl font-light leading-relaxed">
                {problem}
              </span>
            </li>
          ))}
        </ul>

        {/* 締めコピー */}
        <p className="fade-in-up text-2xl md:text-3xl font-bold text-center text-accent">
          それらのお悩み、focusが解決します。
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

const PROBLEMS = [
  "人を雇いたいけど、人件費が高い",
  "事務作業に追われて、本業に集中できない",
  "SNSを更新する時間がない",
  "予約対応や問い合わせ対応にいつも時間を取られている",
  "同じ質問に何度も答えている",
  "ホームページを作りたいけど、どこに頼めばいいかわからない",
] as const;

export default function ProblemsSection() {
  return (
    <section id="problems" className="section section-bluegray section-glow-border corner-glow-bl">
      <div className="section-container relative z-10 text-dark">
        <div className="fade-in-up mx-auto mb-12 max-w-3xl text-center">
          <p className="label-en mb-4">Problem</p>
          <h2 className="section-title mb-5">こんなお悩み、ありませんか？</h2>
          <div className="decorative-line" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,520px)_1fr] lg:gap-14">
          {/* 左側イラスト */}
          <div className="fade-in-up">
            <Image
              src="/images/illustrations/problems.png"
              alt="業務に追われる事業者の悩みを表すイラスト"
              width={800}
              height={600}
              className="section-illustration mx-auto"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>

          {/* 右側チェックリスト */}
          <div className="lp-card fade-in-up">
            <ul className="grid gap-4">
              {PROBLEMS.map((problem, index) => (
                <li
                  key={problem}
                  className="fade-in-stagger grid grid-cols-[32px_1fr] items-start gap-4 rounded-lg border border-[#b9dcff] bg-accent-light px-5 py-4"
                  data-delay={index * 120}
                >
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-accent text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-[900] leading-relaxed text-dark md:text-lg">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="fade-in-up mt-14 text-center text-[clamp(28px,4vw,44px)] font-[900] leading-snug text-accent">
          それらのお悩み、focusが解決します。
        </p>
      </div>
    </section>
  );
}

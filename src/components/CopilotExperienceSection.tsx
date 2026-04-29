import Image from "next/image";

const CHAT_MESSAGES = [
  {
    speaker: "経営者",
    avatar: "YOU",
    text: "SNS投稿と問い合わせ対応に追われています。採用せずに改善できますか？",
    time: "09:12",
    isUser: true,
  },
  {
    speaker: "AI参謀",
    avatar: "AI",
    text: "現状業務を整理し、SNS運用、問い合わせ一次対応、週次レポートの自動化案を作成します。",
    time: "09:13",
    isUser: false,
  },
  {
    speaker: "経営者",
    avatar: "YOU",
    text: "月いくらくらいで始められますか？",
    time: "09:14",
    isUser: true,
  },
  {
    speaker: "AI参謀",
    avatar: "AI",
    text: "人を1人雇うより小さく始められます。優先順位と導入ステップを提案します。",
    time: "09:15",
    isUser: false,
  },
] as const;

export default function CopilotExperienceSection() {
  return (
    <section id="experience" className="section section-white section-glow-border corner-glow-tr">
      <div className="section-container relative z-10">
        <div className="fade-in-up mx-auto mb-12 max-w-3xl text-center">
          <p className="label-en mb-4">Experience</p>
          <h2 className="section-title mb-5 text-dark">
            AI参謀に相談すると、こう進みます。
          </h2>
          <div className="decorative-line" />
          <p className="section-lead mx-auto mt-8 max-w-2xl text-slate-600">
            抽象的な悩みを、業務整理、優先順位、導入ステップまで具体化します。
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          {/* 左側チャット */}
          <div className="chat-mock fade-in-up">
            {CHAT_MESSAGES.map((message) => (
              <div
                key={`${message.speaker}-${message.time}`}
                className={`chat-row ${message.isUser ? "is-user" : ""}`}
              >
                {message.isUser ? (
                  <>
                    <div className="chat-message text-right">
                      <p className="mb-2 text-sm font-[900] text-accent">{message.speaker}</p>
                      <div className="chat-bubble text-left">{message.text}</div>
                      <p className="chat-time">{message.time}</p>
                    </div>
                    <span className="chat-avatar">{message.avatar}</span>
                  </>
                ) : (
                  <>
                    <span className="chat-avatar">{message.avatar}</span>
                    <div className="chat-message">
                      <p className="mb-2 text-sm font-[900] text-dark">{message.speaker}</p>
                      <div className="chat-bubble">{message.text}</div>
                      <p className="chat-time">{message.time}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* 右側イメージ */}
          <div className="fade-in-up">
            <Image
              src="/images/illustrations/copilot-room.png"
              alt="copilot roomでAI参謀に相談するイラスト"
              width={800}
              height={600}
              className="section-illustration mx-auto"
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <div className="mt-6 grid gap-3">
              <div className="rounded-lg border border-border bg-section-alt px-5 py-4">
                <p className="text-sm font-[900] text-accent">相談内容を整理</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  何から手をつけるべきかを、業務単位で切り分けます。
                </p>
              </div>
              <div className="rounded-lg border border-border bg-section-alt px-5 py-4">
                <p className="text-sm font-[900] text-accent">次の一手を提案</p>
                <p className="text-sm leading-relaxed text-slate-600">
                  採用、外注、AI化のどれが適切かを比較して決めます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

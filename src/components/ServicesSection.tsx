/** サービスデータ */
const SERVICES = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "ウェブサイト・\nホームページ制作",
    description:
      "集客に強いデザインと高速表示。スマホ対応は当たり前。お客様のビジネスに最適なサイトを構築します。",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "チャットボット構築",
    description:
      "AIチャットボットで24時間自動応答。予約受付・FAQ対応を自動化し、業務負担を大幅に削減します。",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "ショート動画制作",
    description:
      "TikTok・Instagram Reels向けの動画を企画から制作まで。SNSでの認知拡大をサポートします。",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "業務効率化ツール構築",
    description:
      "AIを活用した業務自動化ツールを開発。日報作成、データ入力、スケジュール管理などを効率化します。",
  },
] as const;

/**
 * サービス内容セクション: 4カード横並び
 */
export default function ServicesSection() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
            Service
          </p>
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            事業を加速させる4つのサービス
          </h2>
        </div>

        {/* カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="fade-in-up service-card bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
              data-delay={i * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3 whitespace-pre-line leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

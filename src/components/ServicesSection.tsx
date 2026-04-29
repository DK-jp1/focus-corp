/**
 * セクション9：サービス内容
 * section-dark（ライトテーマ対応） + glass-card + グラデーション番号
 */

// サービスデータ定義
interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "copilot room",
    description:
      "あなた専用のAI経営参謀チーム。24時間365日、経営判断をサポートし続けます。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad1)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "FLARE",
    description:
      "AI×SNSマーケティング。あなたの事業を最適なターゲットに届けます。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad2)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI導入支援",
    description:
      "業務効率化からカスタムAIツール構築まで。あなたのビジネスに最適なAI活用を提案します。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad3)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-dark section-glow-border corner-glow-tr py-32 md:py-44 px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-navy">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-20">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Service
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-5 text-shadow-sm">
            3つのサービス
          </h2>
          <div className="decorative-line" />
        </div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="fade-in-stagger glass-card rounded-2xl p-8 text-center"
              data-delay={index * 150}
            >
              {/* 番号 */}
              <span className="text-3xl font-black gradient-text block mb-4">
                {service.number}
              </span>

              {/* アイコン */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/5 mb-6">
                {service.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>

              {/* 説明 */}
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

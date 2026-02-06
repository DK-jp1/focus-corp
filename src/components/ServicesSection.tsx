/**
 * セクション9：サービス内容
 * section-dark + glass-card + グラデーション番号
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
    title: "ウェブサイト・ホームページ制作",
    description:
      "事業の顔となるウェブサイトを構築。24時間、あなたのビジネスを届けます。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "チャットボット構築",
    description:
      "御社専用のAIチャットボットを作成。24時間、自動で顧客対応が可能に。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad2)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "ショート動画制作",
    description:
      "SNSで目を引く高クオリティな動画を制作。Instagram、TikTok、YouTubeに対応。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad3)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "業務効率化ツール構築",
    description:
      "ヒアリングから最適なAIツールを設計・構築。予約受付、顧客フォロー、SNS投稿など煩雑な業務を自動化します。",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="url(#svc-grad4)" viewBox="0 0 24 24" strokeWidth="1.5">
        <defs><linearGradient id="svc-grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-dark section-glow-border corner-glow-tr py-24 md:py-32 px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Service
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-shadow-sm">
            事業を加速させる4つのサービス
          </h2>
          <div className="decorative-line" />
        </div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 mb-6">
                {service.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-lg font-bold mb-4">{service.title}</h3>

              {/* 説明 */}
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

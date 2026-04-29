import Image from "next/image";

/**
 * セクション：自社運営事業（Our Business）
 * section-dark + カード形式 + ホバーグロー
 */

/** 運営事業データの型 */
interface BusinessItem {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  image: string;
  url: string;
}

/** 運営事業データ */
const BUSINESSES: BusinessItem[] = [
  {
    title: "copilot room",
    category: "AI経営参謀サービス",
    description:
      "経営者専用のAI参謀チーム。24時間365日、あなたの経営判断をサポートし続けるサービスです。",
    details: [
      "3つのAI参謀（プロモーター・ディレクター・アドバイザー）",
      "24時間365日の経営相談対応",
      "事業計画策定・数値管理支援",
      "SNS・マーケティング戦略立案",
      "業界知識・法務・財務アドバイス",
    ],
    tech: ["AI", "Claude", "Custom LLM"],
    image: "/images/illustrations/copilot-room.png",
    url: "#contact",
  },
  {
    title: "あっとみぃ",
    category: "飲食事業・ECサイト運営",
    description:
      "focus companyが運営するポップコーン専門店。佐世保発のこだわりポップコーンをオンラインでお届けしています。",
    details: [
      "レスポンシブ対応のウェブサイト運営",
      "オンライン注文システム（フレーバー選択・数量・受取日時）",
      "写真投稿・ギャラリー機能",
      "管理画面（注文管理・写真管理）",
      "LINE / Instagram連携",
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/images/works/atomii.svg",
    url: "https://focus-ai-iota.vercel.app",
  },
];

export default function WorksSection() {
  return (
    <section
      id="works"
      className="section-light section-glow-border corner-glow-bl py-32 md:py-44 px-6"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-20">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Our Business
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-5">
            自社運営事業
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 事業カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESSES.map((work, index) => (
            <a
              key={index}
              href={work.url}
              {...(work.url.startsWith('#') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="fade-in-stagger group block glass-card-light rounded-2xl overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] transition-all duration-300"
              data-delay={index * 200}
            >
              {/* サムネイル */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 496px"
                />
                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium flex items-center gap-1">
                    {work.url.startsWith('#') ? 'お問い合わせ' : 'サイトを見る'}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* カテゴリバッジ */}
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                  {work.category}
                </span>

                {/* タイトル */}
                <h3 className="text-xl font-bold text-navy mb-2">
                  {work.title}
                </h3>

                {/* 説明 */}
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-4">
                  {work.description}
                </p>

                {/* 事業内容 */}
                <ul className="space-y-1 mb-4">
                  {work.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-xs font-light flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* 技術スタック */}
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-slate-500 border border-slate-200 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

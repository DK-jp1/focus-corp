import Image from "next/image";

/**
 * セクション：制作実績（Works）
 * section-dark + カード形式 + ホバーグロー
 */

/** 制作実績データの型 */
interface WorkItem {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  image: string;
  url: string;
}

/** 制作実績データ */
const WORKS: WorkItem[] = [
  {
    title: "あっとみぃ",
    category: "ウェブサイト・ホームページ制作",
    description:
      "長崎県佐世保市のポップコーン専門店「あっとみぃ」のオンライン注文サイト。スマホ対応のモダンなデザインで、オンライン注文からギャラリー機能まで一貫して構築。",
    details: [
      "レスポンシブ対応のウェブサイト制作",
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
      className="section-dark section-glow-border corner-glow-bl py-24 md:py-32 px-6"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Works
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-shadow-sm">
            制作実績
          </h2>
          <div className="decorative-line" />
        </div>

        {/* 実績カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKS.map((work, index) => (
            <a
              key={index}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-in-stagger group block glass-card rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)] transition-all duration-300"
              data-delay={index * 200}
            >
              {/* サムネイル */}
              <div className="relative aspect-video overflow-hidden bg-navy/50">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium flex items-center gap-1">
                    サイトを見る
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
                <h3 className="text-xl font-bold text-white mb-2">
                  {work.title}
                  <span className="text-sm font-normal text-gray-400 ml-2">
                    佐世保ポップコーン専門店
                  </span>
                </h3>

                {/* 説明 */}
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
                  {work.description}
                </p>

                {/* 制作内容 */}
                <ul className="space-y-1 mb-4">
                  {work.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-gray-500 text-xs font-light flex items-start gap-2"
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
                      className="text-[10px] font-medium text-gray-400 border border-white/10 px-2 py-0.5 rounded"
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

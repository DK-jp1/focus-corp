import Image from "next/image";

interface BusinessItem {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  image: string;
  url: string;
}

const BUSINESSES: BusinessItem[] = [
  {
    title: "copilot room",
    category: "AI経営参謀サービス",
    description:
      "経営者専用のAI参謀チーム。24時間365日、あなたの経営判断をサポートし続けるサービスです。",
    details: [
      "3つのAI参謀による相談対応",
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
      "オンライン注文システム",
      "写真投稿・ギャラリー機能",
      "LINE / Instagram連携",
    ],
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/images/works/atomii.svg",
    url: "https://focus-ai-iota.vercel.app",
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="section section-white section-glow-border corner-glow-bl">
      <div className="section-container relative z-10">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Our Business</p>
          <h2 className="section-title mb-5 text-dark">自社運営事業</h2>
          <div className="decorative-line" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {BUSINESSES.map((work, index) => (
            <a
              key={work.title}
              href={work.url}
              {...(work.url.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="lp-card fade-in-stagger group block overflow-hidden p-0"
              data-delay={index * 160}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-section-alt">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 544px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-bold text-white">
                    {work.url.startsWith("#") ? "お問い合わせ" : "サイトを見る"}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <span className="tag-pill mb-4">{work.category}</span>
                <h3 className="mb-3 text-2xl font-[900] text-dark">{work.title}</h3>
                <p className="body-copy mb-5 text-slate-600">{work.description}</p>

                <ul className="mb-5 grid gap-2">
                  {work.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm font-bold leading-relaxed text-slate-600">
                      <span className="mt-1 text-accent">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {work.tech.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
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

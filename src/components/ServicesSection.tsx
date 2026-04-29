import type { ReactNode } from "react";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  featured?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "copilot room",
    description:
      "あなた専用のAI経営参謀チーム。相談、整理、提案、週次の改善まで、経営判断を止めずに進めます。",
    featured: true,
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
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
      "AIとSNSマーケティングで、投稿作成から導線改善まで支援。地域事業の魅力を届けます。",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI導入支援",
    description:
      "問い合わせ対応、予約、レポート、業務整理など、現場に合わせたAIツールを構築します。",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section-white section-glow-border corner-glow-tr">
      <div className="section-container relative z-10 text-dark">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Service</p>
          <h2 className="section-title mb-5">3つのサービス</h2>
          <div className="decorative-line" />
          <p className="section-lead mx-auto mt-8 max-w-2xl text-slate-600">
            まず相談できる場所をつくり、必要なAI活用を段階的に実装します。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.number}
              className={`fade-in-stagger service-card rounded-lg border p-8 shadow-[0_8px_24px_rgba(0,51,102,0.08)] ${
                service.featured
                  ? "border-accent/40 bg-accent-light"
                  : "border-border bg-white"
              }`}
              data-delay={index * 150}
            >
              <div className="mb-7 flex items-center justify-between gap-5">
                <span className="font-display text-5xl font-[900] leading-none text-accent">
                  {service.number}
                </span>
                <span
                  className={`grid h-20 w-20 place-items-center rounded-lg ${
                    service.featured ? "bg-white text-accent" : "bg-accent-light text-accent"
                  }`}
                >
                  {service.icon}
                </span>
              </div>

              {service.featured && <span className="badge-blue mb-4">最重要サービス</span>}

              <h3 className="mb-4 text-2xl font-[900] leading-snug text-dark md:text-[28px]">
                {service.title}
              </h3>

              <p className="body-copy text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

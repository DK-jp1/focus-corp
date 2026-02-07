import type { ReactNode } from "react";

/** サービス詳細データの型 */
export interface ServiceData {
  number: string;
  title: string;
  catchcopy: string;
  description: string[];
  ctaText: string;
  ctaHref: string;
  icon: ReactNode;
}

interface ServiceDetailProps {
  service: ServiceData;
  /** 0始まりのインデックス（偶数=アイコン左、奇数=アイコン右） */
  index: number;
}

/**
 * サービス詳細セクション（ジグザグレイアウト）
 * PC: 偶数=アイコン左+テキスト右、奇数=テキスト左+アイコン右
 * SP: 常にアイコン上+テキスト下
 */
export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const isReversed = index % 2 !== 0;
  const isDark = index % 2 === 0;

  return (
    <section
      className={`relative py-20 md:py-28 px-6 ${
        isDark ? "section-dark" : "bg-[#0f172a]"
      }`}
    >
      {/* 区切り線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 via-accent-cyan/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12 md:gap-16`}
        >
          {/* アイコンエリア */}
          <div className="fade-in-up flex-shrink-0 flex items-center justify-center">
            {/* グラスモーフィズムの円形背景 */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]">
              {service.icon}
            </div>
          </div>

          {/* テキストエリア */}
          <div className="flex-1 text-center md:text-left">
            {/* サービス番号 */}
            <p className="fade-in-up text-5xl md:text-6xl font-black gradient-text mb-4">
              {service.number}
            </p>

            {/* サービス名 */}
            <h2 className="fade-in-up text-2xl md:text-3xl font-black text-white mb-4 text-shadow-sm">
              {service.title}
            </h2>

            {/* キャッチコピー */}
            <p className="fade-in-up text-lg md:text-xl text-accent font-medium mb-6">
              {service.catchcopy}
            </p>

            {/* 説明文 */}
            <div className="fade-in-up text-[#94A3B8] font-light leading-relaxed mb-8 text-base md:text-lg">
              {service.description.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < service.description.length - 1 && <br />}
                </span>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="fade-in-up">
              <a
                href={service.ctaHref}
                className="cta-button inline-block text-white font-medium text-base px-8 py-3 rounded-full"
              >
                {service.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

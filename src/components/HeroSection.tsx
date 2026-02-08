"use client";

import { useEffect, useState } from "react";

/**
 * セクション1：ファーストビュー
 * 文字が順番に現れるアニメーション + グラデーションメッシュ背景
 */
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const mainText = "AIで、働き方が変わる。";
  const charDelay = 0.06; // 1文字あたりの遅延（秒）
  const textAnimEnd = mainText.length * charDelay; // テキストアニメーション完了時間

  return (
    <section
      id="hero"
      className="section-dark relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* グラデーションメッシュ背景 */}
      <div className="hero-gradient-mesh absolute inset-0 z-[1]" />

      {/* ドットパターン */}
      <div className="absolute inset-0 hero-dot-pattern z-[1]" />

      {/* 上部グラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent z-[2]" />

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* メインコピー — 1文字ずつフェードイン */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
          {mainText.split("").map((char, i) => (
            <span
              key={i}
              className="hero-char"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * charDelay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * charDelay}s`,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* サブコピー */}
        <p
          className="text-base sm:text-lg md:text-xl text-white/45 font-light mb-4 leading-relaxed"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s`,
          }}
        >
          長崎県の個人事業主・サロン・企業向け
          <br />
          AI導入・業務効率化・ウェブサイト制作
        </p>

        {/* キャッチコピー */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-medium gradient-text mb-14"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.4}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.4}s`,
          }}
        >
          月20万円の人件費を、月2万円に。
        </p>

        {/* CTAボタン */}
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.6}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.6}s`,
          }}
        >
          <a
            href="#contact"
            className="cta-button inline-block text-white font-medium text-base sm:text-lg px-10 py-4 rounded-full"
          >
            無料相談はこちら
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 1s ease-out ${textAnimEnd + 1}s`,
        }}
      >
        <div className="animate-bounce-slow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/20"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* 下部グラデーションライン */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}

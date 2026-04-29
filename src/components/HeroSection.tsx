"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const mainText = "もう、1人で決めなくていい。";
  const charDelay = 0.045;
  const textAnimEnd = mainText.length * charDelay;

  return (
    <section
      id="hero"
      className="section-white relative flex min-h-[92svh] items-center overflow-hidden pt-24 md:pt-28"
    >
      <div className="hero-gradient-mesh absolute inset-0 z-[1]" />
      <div className="bg-grid-pattern absolute inset-0 z-[1]" />
      <div className="absolute right-0 top-0 z-[1] hidden h-full w-[36vw] bg-gradient-to-br from-accent-cyan to-accent lg:block" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(360px,560px)] md:gap-14">
          {/* 左側コピー */}
          <div className="text-center md:text-left">
            <div
              className="mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="badge-blue">copilot room</span>
            </div>

            <h1 className="mb-7 text-[clamp(40px,6vw,72px)] font-[900] leading-[1.12] tracking-[0] text-dark">
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

            <p
              className="section-lead mx-auto mb-4 max-w-xl text-dark/80 md:mx-0"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s`,
              }}
            >
              あなた専用のAI参謀チームを構築。
              <br />
              1ヶ月で、約1年分の経営判断を進める。
            </p>

            <p
              className="body-copy mx-auto max-w-xl text-slate-600 md:mx-0"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.35}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.35}s`,
              }}
            >
              SNS、問い合わせ対応、業務整理、意思決定まで。
              <br className="hidden sm:block" />
              人を増やす前に、AIで動く経営チームをつくります。
            </p>

            <div
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.6}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.6}s`,
              }}
            >
              <a href="#contact" className="cta-primary">
                無料相談はこちら
              </a>
              <a href="#services" className="cta-blue">
                サービスを見る
              </a>
            </div>
          </div>

          {/* 右側イラスト */}
          <div
            className="relative mx-auto w-full max-w-[560px]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
              transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.3}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.3}s`,
            }}
          >
            <div className="rounded-lg border border-white/70 bg-white/90 p-4 shadow-[0_22px_48px_rgba(0,51,102,0.16)] backdrop-blur">
              <Image
                src="/images/illustrations/hero-illustration.png"
                alt="経営者とAI参謀が協力して経営判断を進めるイラスト"
                width={800}
                height={600}
                className="section-illustration mx-auto"
                sizes="(max-width: 768px) 100vw, 560px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: `opacity 1s ease-out ${textAnimEnd + 1}s`,
        }}
      >
        <div className="animate-bounce-slow text-accent">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}

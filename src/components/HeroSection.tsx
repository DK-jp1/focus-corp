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
  const charDelay = 0.06;
  const textAnimEnd = mainText.length * charDelay;

  return (
    <section
      id="hero"
      className="section-light relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="hero-gradient-mesh absolute inset-0 z-[1]" />
      <div className="absolute inset-0 hero-dot-pattern z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent z-[2]" />

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* テキストコンテンツ（左） */}
          <div className="flex-1 text-center md:text-left">
            <div
              className="mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s`,
              }}
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase font-medium text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                copilot room
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-navy">
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
              className="text-base sm:text-lg md:text-xl text-slate-600 font-light mb-4 leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.2}s`,
              }}
            >
              あなた専用のAI参謀チームを構築。
              <br />
              1ヶ月で、約1年分の経営判断が進む。
            </p>

            <div
              className="mt-14"
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

          {/* イラスト（右） */}
          <div
            className="flex-1 max-w-md md:max-w-lg"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
              transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.3}s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${textAnimEnd + 0.3}s`,
            }}
          >
            <Image
              src="/images/illustrations/hero-illustration.png"
              alt="AI参謀と経営者が協力するイメージ"
              width={800}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
            />
          </div>
        </div>
      </div>

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
            className="text-slate-300"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}

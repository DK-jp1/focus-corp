"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/** スライド画像パス一覧 */
const SLIDE_IMAGES = [
  "/images/slides/S__178987012_0.jpg",
  "/images/slides/S__178987013_0.jpg",
  "/images/slides/S__178987014_0.jpg",
  "/images/slides/S__178987015_0.jpg",
  "/images/slides/S__178987016_0.jpg",
  "/images/slides/S__178987017_0.jpg",
  "/images/slides/S__178987018_0.jpg",
  "/images/slides/S__178987019_0.jpg",
  "/images/slides/S__178987020_0.jpg",
  "/images/slides/S__178987021_0.jpg",
  "/images/slides/S__178987023_0.jpg",
  "/images/slides/S__178987024_0.jpg",
  "/images/slides/S__178987025_0.jpg",
  "/images/slides/S__178987026_0.jpg",
  "/images/slides/S__178987027_0.jpg",
  "/images/slides/S__178987028_0.jpg",
  "/images/slides/S__178987029_0.jpg",
  "/images/slides/S__178987030_0.jpg",
  "/images/slides/S__178987031_0.jpg",
  "/images/slides/S__178987032_0.jpg",
  "/images/slides/S__178987033.jpg",
];

/** 背景パーティクル数 */
const PARTICLE_COUNT = 20;

/** Service Gallery 3Dカルーセルセクション */
export default function ImageCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* スクロールでセクション表示時にフェードイン */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-dark relative py-24 md:py-32 overflow-hidden"
    >
      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-grid-pattern z-[1]" />

      {/* 背景グラデーションアニメーション */}
      <div className="carousel-bg-gradient absolute inset-0 z-[1]" />

      {/* 奥行きパーティクル */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="carousel-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* コーナーグロー */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.06), transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(6,182,212,0.04), transparent 70%)" }}
      />

      {/* 上部グラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* セクションタイトル */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s cubic-bezier(0.25,0.46,0.45,0.94), transform 1s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <div className="decorative-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4">
            Service Gallery
          </h2>
          <p className="text-[#94A3B8] font-light text-base md:text-lg">
            focus companyのサービス紹介
          </p>
        </div>

        {/* 3Dカルーセル */}
        <div
          className="carousel-3d-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, transform 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s",
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".carousel-pagination",
              bulletClass: "carousel-dot",
              bulletActiveClass: "carousel-dot-active",
            }}
            navigation={{
              prevEl: ".carousel-prev",
              nextEl: ".carousel-next",
            }}
            speed={1000}
            grabCursor={true}
            className="carousel-swiper-3d"
          >
            {SLIDE_IMAGES.map((src, index) => (
              <SwiperSlide key={src} className="carousel-3d-slide">
                <div
                  className="carousel-slide-item-3d"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${0.3 + index * 0.1}s`,
                    animation: isVisible ? `carousel-float 4s ease-in-out ${index * 0.5}s infinite` : "none",
                  }}
                >
                  {/* メイン画像カード */}
                  <div className="carousel-image-card relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={src}
                      alt={`Service image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 35vw"
                    />
                    {/* 下部グラデーション */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* 床の反射 */}
                  <div className="carousel-reflection relative h-[80px] md:h-[100px] mt-[2px] rounded-b-2xl overflow-hidden pointer-events-none">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 35vw"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ナビゲーション＋インジケーター */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button className="carousel-prev carousel-nav-btn" aria-label="前のスライド">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="carousel-pagination flex items-center gap-2" />

            <button className="carousel-next carousel-nav-btn" aria-label="次のスライド">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

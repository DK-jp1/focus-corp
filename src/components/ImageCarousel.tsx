"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/** 背景パーティクル数 */
const PARTICLE_COUNT = 20;

/** カルーセルコンポーネントのプロパティ */
interface ImageCarouselProps {
  /** スライド画像パス一覧 */
  images: string[];
  /** セクションタイトル */
  title: string;
  /** セクションサブタイトル */
  subtitle: string;
  /** 複数配置時の一意識別子（CSSセレクター用） */
  id: string;
}

/** 3Dカルーセルセクション（再利用可能） */
export default function ImageCarousel({ images, title, subtitle, id }: ImageCarouselProps) {
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

  /* インスタンス固有のCSSセレクター */
  const paginationClass = `carousel-pagination-${id}`;
  const prevClass = `carousel-prev-${id}`;
  const nextClass = `carousel-next-${id}`;

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
            {title}
          </h2>
          <p className="text-[#94A3B8] font-light text-base md:text-lg">
            {subtitle}
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
              rotate: 15,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: `.${paginationClass}`,
              bulletClass: "carousel-dot",
              bulletActiveClass: "carousel-dot-active",
            }}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
            }}
            speed={1000}
            grabCursor={true}
            className="carousel-swiper-3d"
          >
            {images.map((src, index) => (
              <SwiperSlide key={src} className="carousel-3d-slide">
                <div
                  className="carousel-slide-item-3d"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${0.3 + index * 0.1}s`,
                    animation: isVisible ? `carousel-float 4s ease-in-out ${index * 0.5}s infinite` : "none",
                  }}
                >
                  {/* メイン画像カード（アスペクト比維持、上下見切れ防止） */}
                  <div className="carousel-image-card flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                    <Image
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      width={600}
                      height={800}
                      className="carousel-slide-image"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 35vw"
                    />
                  </div>

                  {/* 床の反射 */}
                  <div className="carousel-reflection relative h-[50px] md:h-[70px] mt-[2px] rounded-b-2xl overflow-hidden pointer-events-none">
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
            <button className={`${prevClass} carousel-nav-btn`} aria-label="前のスライド">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className={`${paginationClass} flex items-center gap-2`} />

            <button className={`${nextClass} carousel-nav-btn`} aria-label="次のスライド">
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

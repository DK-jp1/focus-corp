"use client";

import { useEffect } from "react";

/**
 * Intersection Observer APIを使ったスクロールアニメーション制御
 * .fade-in-up / .fade-in-stagger クラスを持つ要素が
 * ビューポートに入ったら .visible を付与
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // スタガー表示の場合、delay を適用
            const delay = entry.target.getAttribute("data-delay");
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, Number(delay));
            } else {
              entry.target.classList.add("visible");
            }
            // 一度表示したら監視解除
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".fade-in-up, .fade-in-stagger");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

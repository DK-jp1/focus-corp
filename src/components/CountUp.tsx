"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** 最終値 */
  end: number;
  /** 表示接尾辞（例: "社", "万再生/月"） */
  suffix: string;
  /** 表示接頭辞（例: "約"） */
  prefix?: string;
  /** アニメーション時間（ms） */
  duration?: number;
}

/**
 * ビューポートに入ったらカウントアップアニメーションを実行
 */
export default function CountUp({
  end,
  suffix,
  prefix = "",
  duration = 2000,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart でなめらかに
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  /**
   * 数値をカンマ区切りでフォーマット
   */
  const formatNumber = (n: number): string => {
    return n.toLocaleString("ja-JP");
  };

  return (
    <span ref={ref} className="count-number">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/** ナビゲーション項目 */
interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/service" },
  { label: "料金", href: "/#pricing" },
  { label: "会社概要", href: "/#company" },
  { label: "お問い合わせ", href: "/#contact" },
];

/**
 * 固定ヘッダーナビゲーション
 * PC: ロゴ左 + メニュー右
 * SP: ロゴ左 + ハンバーガー右
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール時に背景を濃くする
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニューオープン時にbodyスクロール防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      {/* 下部のグラデーションライン */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* ロゴ */}
        <Link href="/" className="relative z-10">
          <Image
            src="/images/logo.png"
            alt="focus company"
            width={128}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* PC用メニュー */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-white/70 hover:text-white transition-colors relative"
            >
              {item.label}
              {/* ホバー時の下線スライドイン */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ハンバーガーボタン（SP用） */}
        <button
          type="button"
          className="relative z-10 md:hidden flex flex-col items-center justify-center w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* SP用モバイルメニュー */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-md border-t border-white/5 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 text-white/70 hover:text-white transition-colors border-b border-white/5 last:border-b-0 text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

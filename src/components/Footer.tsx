import Image from "next/image";

/**
 * フッター
 * 背景：#000 / テキスト：白
 * シンプルに1〜2行
 */
export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* 上部: ロゴ + リンク */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* ロゴ（小さく） */}
          <Image
            src="/images/logo.png"
            alt="focus株式会社"
            width={128}
            height={32}
            className="h-8 w-auto"
          />

          {/* リンク */}
          <div className="flex items-center gap-6 text-sm">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/focus_copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @focus_copilot
            </a>

            {/* プライバシーポリシー */}
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors font-light"
            >
              プライバシーポリシー
            </a>

            {/* 特定商取引法 */}
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors font-light"
            >
              特定商取引法に基づく表記
            </a>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="h-px bg-white/10 mb-6" />

        {/* コピーライト */}
        <p className="text-center text-white/40 text-xs font-light">
          &copy; 2025 focus株式会社 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

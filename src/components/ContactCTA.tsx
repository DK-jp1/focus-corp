import Link from "next/link";

/**
 * お問い合わせCTAセクション
 * ダークネイビー + corner-glow効果
 */
export default function ContactCTA() {
  return (
    <section className="section-dark corner-glow-tr corner-glow-bl relative py-24 md:py-32 px-6 overflow-hidden">
      {/* グリッドパターン */}
      <div className="absolute inset-0 bg-grid-pattern z-[1]" />

      {/* 上部グラデーションライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-[2]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* メインテキスト */}
        <h2 className="fade-in-up text-2xl md:text-3xl font-black text-white mb-8 text-shadow-sm">
          まずは無料相談から始めませんか？
        </h2>

        {/* サブテキスト */}
        <div className="fade-in-up text-[#94A3B8] font-light leading-relaxed text-base md:text-lg mb-10">
          <p>「うちでもAI使えるの？」</p>
          <p>「何から始めればいい？」</p>
          <p className="mt-4">そんな疑問にお答えします。</p>
        </div>

        {/* CTAボタン */}
        <div className="fade-in-up mb-8">
          <Link
            href="/#contact"
            className="cta-button inline-block text-white font-medium text-lg px-12 py-4 rounded-full min-w-[280px] md:min-w-[320px]"
          >
            無料相談を予約する
          </Link>
        </div>

        {/* 補足テキスト */}
        <div className="fade-in-up text-[#94A3B8] text-sm font-light">
          <p className="mb-2">DMでのご相談も受け付けています</p>
          <a
            href="https://www.instagram.com/focus_copilot/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram: @focus_copilot
          </a>
        </div>
      </div>
    </section>
  );
}

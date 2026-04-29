import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "サービス", href: "/#services" },
  { label: "自社運営事業", href: "/#works" },
  { label: "導入の流れ", href: "/#flow" },
  { label: "よくある質問", href: "/#faq" },
  { label: "会社概要", href: "/#company" },
  { label: "お問い合わせ", href: "/#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          {/* 左カラム */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo.png"
                alt="focus company"
                width={148}
                height={37}
                className="h-9 w-auto invert"
              />
            </Link>
            <p className="body-copy max-w-md text-white/70">
              合同会社focusは、長崎県佐世保市発のAI導入支援会社です。copilot roomを中心に、地域事業者の業務効率化と経営判断を支援します。
            </p>
          </div>

          {/* 中央カラム */}
          <div>
            <h2 className="footer-title">リンク</h2>
            <nav aria-label="フッターナビゲーション">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 右カラム */}
          <div>
            <h2 className="footer-title">ご相談はこちら</h2>
            <p className="body-copy mb-6 text-white/70">
              「何からAI化すればいいかわからない」段階でも大丈夫です。まずは今の業務を整理します。
            </p>
            <a href="#contact" className="footer-contact-button">
              お問い合わせする
            </a>
            <a
              href="https://www.instagram.com/focus_copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-sm font-bold text-accent-cyan hover:text-white"
            >
              Instagram DM: @focus_copilot
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; 2026 合同会社focus All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-5 md:justify-end">
            <Link href="/privacy" className="hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/legal" className="hover:text-white">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

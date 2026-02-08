import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | focus company",
  description: "focus companyのプライバシーポリシー。お客様の個人情報の取り扱いについて。",
};

/**
 * プライバシーポリシーページ
 */
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <h1 className="text-3xl md:text-4xl font-black text-navy mb-12">
          プライバシーポリシー
        </h1>

        {/* 本文 */}
        <div className="prose prose-navy max-w-none text-navy/80 leading-relaxed space-y-10 text-[15px]">
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">1. 個人情報の収集</h2>
            <p>
              focus company（以下「当社」）は、お問い合わせフォームを通じて以下の個人情報を収集することがあります。
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>業種</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">2. 利用目的</h2>
            <p>収集した個人情報は、以下の目的で利用いたします。</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>お問い合わせへの回答・対応</li>
              <li>サービスのご提案・ご案内</li>
              <li>サービス品質の向上</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">3. 第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">4. 安全管理措置</h2>
            <p>
              当社は、個人情報の漏洩・紛失・毀損を防ぐため、適切な安全管理措置を講じます。
              SSL/TLSによる通信の暗号化、アクセス制御等の技術的対策を実施しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様ご自身の個人情報について、開示・訂正・削除をご希望される場合は、
              下記のお問い合わせ先までご連絡ください。合理的な範囲で速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">6. Cookie（クッキー）の使用</h2>
            <p>
              当サイトでは、利便性向上のためCookieを使用する場合があります。
              ブラウザの設定によりCookieの受け入れを拒否することが可能ですが、
              一部の機能が制限される場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">7. ポリシーの変更</h2>
            <p>
              当社は、必要に応じて本ポリシーを変更することがあります。
              変更後のポリシーは本ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">8. お問い合わせ先</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-6 text-sm space-y-1">
              <p><span className="font-medium text-navy">事業者名：</span>focus company</p>
              <p><span className="font-medium text-navy">代表者：</span>伊藤奏大</p>
              <p><span className="font-medium text-navy">所在地：</span>長崎県佐世保市</p>
              <p>
                <span className="font-medium text-navy">Instagram：</span>
                <a
                  href="https://www.instagram.com/focus_copilot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @focus_copilot
                </a>
              </p>
            </div>
          </section>

          <p className="text-sm text-gray-400 pt-4">制定日：2025年5月</p>
        </div>

        {/* トップへ戻る */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/"
            className="text-accent hover:underline text-sm font-medium"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

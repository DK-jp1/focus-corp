"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

/** フォームのフィールド型 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

/** フォームの初期値 */
const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  message: "",
};

/**
 * お問い合わせセクション: Instagram DM誘導 + フォーム
 */
export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信処理（API連携）
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
            Contact
          </p>
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
            お問い合わせ
          </h2>
        </div>

        {/* Instagram DM誘導 */}
        <div className="fade-in-up text-center mb-12">
          <p className="text-gray-600 mb-4 font-light">
            お気軽にInstagram DMでもご相談いただけます
          </p>
          <a
            href="https://www.instagram.com/focus_copilot/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @focus_copilot
          </a>
        </div>

        {/* 区切り */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400 font-light">または</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* フォーム */}
        {isSubmitted ? (
          <div className="fade-in-up text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">送信完了</h3>
            <p className="text-gray-600 font-light">
              お問い合わせありがとうございます。
              <br />
              2営業日以内にご返信いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-in-up space-y-6">
            {/* 名前（必須） */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy mb-2"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            {/* メール（必須） */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy mb-2"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="example@email.com"
              />
            </div>

            {/* 電話（任意） */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy mb-2"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="090-1234-5678"
              />
            </div>

            {/* 業種（任意） */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-navy mb-2"
              >
                業種
              </label>
              <select
                id="industry"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="">選択してください</option>
                <option value="salon">美容・サロン</option>
                <option value="medical">医療・クリニック</option>
                <option value="retail">小売・飲食</option>
                <option value="service">サービス業</option>
                <option value="construction">建設・不動産</option>
                <option value="it">IT・Web</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* 相談内容（必須） */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy mb-2"
              >
                相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                placeholder="ご相談内容をお書きください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="cta-button bg-accent hover:bg-accent-hover text-white font-medium text-base sm:text-lg px-12 py-4 rounded-full"
              >
                送信する
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

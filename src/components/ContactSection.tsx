"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

/** フォームのフィールド型 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
}

/** フォームの初期値 */
const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  message: "",
};

/** フォーム送信状態 */
type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * セクション17：お問い合わせ
 * section-dark + glass-card + gradient cta-button
 * API連携 + バリデーション + エラーハンドリング
 */
export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // 入力時にフィールドエラーをクリア
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          setFieldErrors(data.details);
        }
        setErrorMessage(data.error || "送信に失敗しました");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("ネットワークエラーが発生しました。再度お試しください。");
      setStatus("error");
    }
  };

  /** フィールドエラーの表示 */
  const renderFieldError = (field: string) => {
    const errors = fieldErrors[field];
    if (!errors || errors.length === 0) return null;
    return (
      <p className="text-red-500 text-xs mt-1">{errors[0]}</p>
    );
  };

  return (
    <section id="contact" className="section-white section-glow-border corner-glow-bl py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-8">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-navy mb-5">
            お問い合わせ
          </h2>
          <div className="decorative-line" />
        </div>

        {/* リード文 */}
        <div className="fade-in-up text-center text-slate-500 font-light leading-relaxed mb-12">
          <p>「ちょっと話を聞いてみたい」</p>
          <p>それだけでも大丈夫です。</p>
          <p className="mt-4">まずはお気軽にご相談ください。</p>
        </div>

        {/* Instagram誘導 + フォーム */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左：Instagram誘導 */}
          <div className="fade-in-up flex flex-col items-center justify-center text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-10 w-full">
              <p className="text-navy text-lg font-medium mb-6">
                Instagram DMで相談
              </p>
              <p className="text-slate-500 font-light mb-6">
                「相談希望」と送るだけでOK
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
          </div>

          {/* 右：フォーム */}
          <div className="fade-in-up">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">送信完了</h3>
                <p className="text-slate-500 font-light">
                  お問い合わせありがとうございます。
                  <br />
                  2営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-5">
                {/* グローバルエラーメッセージ */}
                {status === "error" && errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* 名前（必須） */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="山田 太郎"
                  />
                  {renderFieldError("name")}
                </div>

                {/* メール（必須） */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="example@email.com"
                  />
                  {renderFieldError("email")}
                </div>

                {/* 電話番号（任意） */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="090-1234-5678"
                  />
                  {renderFieldError("phone")}
                </div>

                {/* 会社名（任意） */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    maxLength={200}
                    value={form.company}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="株式会社○○"
                  />
                  {renderFieldError("company")}
                </div>

                {/* 業種（任意） */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-navy mb-2">
                    業種
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors disabled:opacity-50"
                  >
                    <option value="">選択してください</option>
                    <option value="seitai">整体院</option>
                    <option value="salon">美容室・サロン</option>
                    <option value="food">飲食店</option>
                    <option value="medical">医療・クリニック</option>
                    <option value="shigyou">士業</option>
                    <option value="retail">小売</option>
                    <option value="service">サービス業</option>
                    <option value="construction">建設・不動産</option>
                    <option value="it">IT・Web</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* ご相談内容（必須） */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    ご相談内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none disabled:opacity-50"
                    placeholder="ご相談内容をお書きください"
                  />
                  {renderFieldError("message")}
                </div>

                {/* 送信ボタン */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="cta-button text-white font-medium text-base sm:text-lg px-12 py-4 rounded-full w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "送信中..." : "送信する"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

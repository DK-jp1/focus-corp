"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  message: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // 入力時に該当フィールドのエラーを消す
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

  const renderFieldError = (field: string) => {
    const errors = fieldErrors[field];
    if (!errors || errors.length === 0) return null;
    return <p className="mt-1 text-xs font-bold text-red-500">{errors[0]}</p>;
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-section-alt px-4 py-3 text-dark placeholder-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50";

  return (
    <section id="contact" className="section section-white section-glow-border corner-glow-bl">
      <div className="section-container relative z-10">
        <div className="fade-in-up mx-auto mb-10 max-w-3xl text-center">
          <p className="label-en mb-4">Contact</p>
          <h2 className="section-title mb-5 text-dark">お問い合わせ</h2>
          <div className="decorative-line" />
          <p className="section-lead mx-auto mt-8 max-w-2xl text-slate-600">
            「ちょっと話を聞いてみたい」だけでも大丈夫です。まずは今の状況を教えてください。
          </p>
        </div>

        <div className="fade-in-up mx-auto mb-8 max-w-[760px] rounded-lg border border-border bg-section-alt p-6 text-center md:p-8">
          <p className="mb-3 text-xl font-[900] text-dark">Instagram DMで相談</p>
          <p className="mb-5 text-sm font-bold text-slate-600">「相談希望」と送るだけでOKです。</p>
          <a
            href="https://www.instagram.com/focus_copilot/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-contact"
          >
            @focus_copilot
          </a>
        </div>

        <div className="fade-in-up mx-auto max-w-[760px]">
          {status === "success" ? (
            <div className="rounded-lg border border-border bg-white p-10 text-center shadow-[0_8px_24px_rgba(0,51,102,0.08)]">
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-[900] text-dark">送信完了</h3>
              <p className="body-copy text-slate-600">
                お問い合わせありがとうございます。
                <br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-white p-6 shadow-[0_8px_24px_rgba(0,51,102,0.08)] md:p-8"
            >
              {status === "error" && errorMessage && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-[900] text-dark">
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
                    className={inputClass}
                    placeholder="山田 太郎"
                  />
                  {renderFieldError("name")}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-[900] text-dark">
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
                    className={inputClass}
                    placeholder="example@email.com"
                  />
                  {renderFieldError("email")}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-[900] text-dark">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className={inputClass}
                    placeholder="090-1234-5678"
                  />
                  {renderFieldError("phone")}
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-[900] text-dark">
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
                    className={inputClass}
                    placeholder="株式会社○○"
                  />
                  {renderFieldError("company")}
                </div>

                <div>
                  <label htmlFor="industry" className="mb-2 block text-sm font-[900] text-dark">
                    業種
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className={inputClass}
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

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-[900] text-dark">
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
                    className={`${inputClass} resize-none`}
                    placeholder="ご相談内容をお書きください"
                  />
                  {renderFieldError("message")}
                </div>
              </div>

              <div className="mt-7 text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="cta-blue w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === "submitting" ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

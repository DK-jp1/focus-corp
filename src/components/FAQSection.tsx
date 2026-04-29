"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "AIって難しそうです。使いこなせますか？",
    answer:
      "ご安心ください。導入から運用まで一緒に進めます。操作方法も、普段の業務に合わせてわかりやすく整理します。",
  },
  {
    question: "うちのような小規模事業でも相談できますか？",
    answer:
      "はい。個人事業主、サロン、飲食店、整体院、士業など、小さなチームほどAI導入の効果が出やすい領域があります。",
  },
  {
    question: "パソコンが苦手でも使えますか？",
    answer:
      "使えます。難しい管理画面を前提にせず、LINE、Instagram、フォームなど普段使う導線に合わせて設計します。",
  },
  {
    question: "長崎県以外でも対応していますか？",
    answer:
      "オンラインで対応可能な内容は県外からもご相談いただけます。地域密着の訪問支援は長崎県内を中心に対応しています。",
  },
  {
    question: "相談だけでも大丈夫ですか？",
    answer:
      "もちろんです。まずは今の課題を整理し、AIで解決できること、まだ人がやるべきことを切り分けます。",
  },
  {
    question: "copilot roomとは何ですか？",
    answer:
      "copilot roomは、あなた専用のAI経営参謀チームです。プロモーター、ディレクター、アドバイザーが、相談内容に応じて経営判断を支援します。",
  },
] as const;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-white section-glow-border corner-glow-bl">
      <div className="section-container relative z-10">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">FAQ</p>
          <h2 className="section-title mb-5 text-dark">よくある質問</h2>
          <div className="decorative-line" />
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="faq-item fade-in-stagger"
                data-delay={index * 90}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-icon">Q</span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className={`faq-plus ${isOpen ? "is-open" : ""}`}>+</span>
                </button>

                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <p className="faq-answer">A. {item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

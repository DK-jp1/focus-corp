"use client";

import { useState } from "react";

/** FAQデータ */
const FAQ_ITEMS = [
  {
    question: "AIって難しそう…使いこなせますか？",
    answer:
      "ご安心ください。導入から運用まで、すべてサポートいたします。操作方法も丁寧にご説明します。",
  },
  {
    question: "うちみたいな小さいところでも大丈夫ですか？",
    answer:
      "はい、大歓迎です。個人事業主・サロンオーナー様にこそ使っていただきたいサービスです。",
  },
  {
    question: "パソコンが苦手でも使えますか？",
    answer:
      "はい、使えます。60代の方でも安心して使えるよう、丁寧にサポートいたします。",
  },
  {
    question: "長崎県以外でも対応していますか？",
    answer:
      "現在は長崎県限定でサービスを提供しております。今後、エリア拡大を予定しております。",
  },
  {
    question: "相談だけでも大丈夫ですか？",
    answer:
      "もちろんです。「ちょっと話を聞いてみたい」だけでもOKです。お気軽にご連絡ください。",
  },
] as const;

/**
 * セクション15：FAQ
 * 背景：ダークネイビー / テキスト：白
 * アコーディオン形式、Q太字、開閉アイコン（＋/−）
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            よくある質問
          </h2>
          <div className="decorative-line" />
        </div>

        {/* アコーディオン */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="fade-in-stagger border border-white/10 rounded-xl overflow-hidden"
              data-delay={index * 100}
            >
              {/* 質問部分 */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-white hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base font-bold pr-4">
                  Q. {item.question}
                </span>
                {/* ＋/− アイコン */}
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-accent text-xl font-light transition-transform duration-300">
                  {openIndex === index ? "−" : "＋"}
                </span>
              </button>

              {/* 回答部分 */}
              <div
                className={`accordion-content ${openIndex === index ? "open" : ""}`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    A. {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

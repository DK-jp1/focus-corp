"use client";

import { useState } from "react";

/** FAQ データ */
const FAQ_ITEMS = [
  {
    question: "AIに詳しくなくても大丈夫ですか？",
    answer:
      "もちろんです。専門知識は一切不要です。お客様の業務内容をヒアリングし、最適なAI活用方法をご提案します。導入から運用までしっかりサポートいたします。",
  },
  {
    question: "どのくらいの期間で導入できますか？",
    answer:
      "内容によりますが、チャットボットは最短1週間、ウェブサイトは2〜4週間程度で納品可能です。まずはお気軽にご相談ください。",
  },
  {
    question: "長崎県外でも対応可能ですか？",
    answer:
      "はい、オンラインでの対応が可能なため、全国どこからでもご依頼いただけます。ただし、キャンペーン料金は長崎県限定となります。",
  },
  {
    question: "月額費用には何が含まれますか？",
    answer:
      "サーバー管理・保守、軽微な修正対応、チャットボットの運用サポートなどが含まれます。詳しくは無料相談にてご説明いたします。",
  },
  {
    question: "解約はいつでもできますか？",
    answer:
      "はい、解約はいつでも可能です。最低契約期間は3ヶ月となっておりますが、それ以降はいつでも解約いただけます。",
  },
] as const;

/**
 * FAQセクション: アコーディオン形式
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-navy py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="text-center mb-16">
          <p className="fade-in-up text-sm tracking-[0.3em] text-accent font-medium uppercase mb-4">
            FAQ
          </p>
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            よくあるご質問
          </h2>
        </div>

        {/* アコーディオン */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="fade-in-up border border-white/10 rounded-xl overflow-hidden"
              data-delay={i * 100}
            >
              {/* 質問部分 */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-white hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm sm:text-base font-medium pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* 回答部分 */}
              <div
                className={`accordion-content ${openIndex === i ? "open" : ""}`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {item.answer}
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

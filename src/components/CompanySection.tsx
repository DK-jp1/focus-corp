/**
 * セクション16：会社概要
 * 背景：白 / テキスト：ダークネイビー
 * 左ラベル、右内容のテーブル
 */

// 会社情報データ定義
interface CompanyInfo {
  label: string;
  value: string | string[];
}

const COMPANY_INFO: CompanyInfo[] = [
  { label: "会社名", value: "focus株式会社" },
  { label: "代表", value: "（後日掲載）" },
  { label: "所在地", value: "長崎県〇〇市〇〇" },
  { label: "設立", value: "2025年〇月" },
  {
    label: "事業内容",
    value: [
      "AI導入・業務効率化支援",
      "ウェブサイト・ホームページ制作",
      "チャットボット構築",
      "ショート動画制作",
    ],
  },
  { label: "Instagram", value: "@focus_copilot" },
];

export default function CompanySection() {
  return (
    <section id="company" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Company
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            会社概要
          </h2>
          <div className="decorative-line" />
        </div>

        {/* テーブル */}
        <div className="fade-in-up">
          <table className="w-full">
            <tbody>
              {COMPANY_INFO.map((info, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {/* ラベル */}
                  <th className="text-left text-sm text-gray-500 font-medium py-5 pr-8 align-top w-32 sm:w-40">
                    {info.label}
                  </th>
                  {/* 値 */}
                  <td className="text-navy py-5 font-light">
                    {Array.isArray(info.value) ? (
                      <ul className="space-y-1">
                        {info.value.map((item, i) => (
                          <li key={i}>・{item}</li>
                        ))}
                      </ul>
                    ) : info.label === "Instagram" ? (
                      <a
                        href="https://www.instagram.com/focus_copilot/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/**
 * セクション16：会社概要
 * section-light + corner-glow
 */

// 会社情報データ定義
interface CompanyInfo {
  label: string;
  value: string | string[];
}

const COMPANY_INFO: CompanyInfo[] = [
  { label: "会社名", value: "合同会社focus" },
  { label: "代表", value: "伊藤奏大" },
  { label: "所在地", value: "長崎県佐世保市" },
  { label: "設立", value: "2026年2月25日" },
  {
    label: "事業内容",
    value: [
      "AI経営参謀サービス（copilot room）",
      "AI×SNSマーケティング（FLARE）",
      "AI導入・業務効率化支援",
    ],
  },
  {
    label: "保有認定資格",
    value: [
      "Google AI Essentials",
      "Google Digital Marketing & E-commerce",
      "Google Business Intelligence",
      "Google Data Analytics",
      "Google Project Management",
      "Google Cybersecurity",
      "CertiProf Scrum Foundation (SFPC)",
      "CertiProf Cybersecurity Foundation (CSFPC)",
      "Microsoft AI Skills Challenge",
    ],
  },
  { label: "Instagram", value: "@focus_copilot" },
];

export default function CompanySection() {
  return (
    <section id="company" className="section-bluegray section-glow-border corner-glow-tr py-16 md:py-24 px-6">
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-12">
          <p className="label-en text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Company
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-navy mb-5">
            会社概要
          </h2>
          <div className="decorative-line" />
        </div>

        {/* テーブル */}
        <div className="fade-in-up glass-card-light rounded-2xl p-8 sm:p-12">
          <table className="w-full">
            <tbody>
              {COMPANY_INFO.map((info, index) => (
                <tr
                  key={index}
                  className="border-b border-navy/10 last:border-b-0"
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

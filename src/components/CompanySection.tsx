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
      "Google Analytics",
      "Google Ads Search",
      "Google Ads Video",
      "Google Ads Apps",
      "Google Ads Measurement",
      "Anthropic Claude 101",
      "Anthropic AI Fluency: Framework & Foundations",
      "Anthropic Building with the Claude API",
      "Anthropic Introduction to Claude Code",
      "Anthropic Claude Code in Action",
      "Anthropic Introduction to MCP",
      "Anthropic Advanced MCP",
      "Anthropic Claude on AWS Bedrock",
      "CertiProf Scrum Foundation (SFPC)",
      "CertiProf Cybersecurity Foundation (CSFPC)",
      "Microsoft AI Skills Challenge",
      "Microsoft 生成AI認定",
      "IPA SECURITY ACTION 一つ星",
      "IPA SECURITY ACTION 二つ星",
    ],
  },
  { label: "Instagram", value: "@focus_copilot" },
];

export default function CompanySection() {
  return (
    <section id="company" className="section section-bluegray section-glow-border corner-glow-tr">
      <div className="section-container relative z-10">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Company</p>
          <h2 className="section-title mb-5 text-dark">会社概要</h2>
          <div className="decorative-line" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="lp-card fade-in-up">
            <span className="badge-blue mb-5">Philosophy</span>
            <h3 className="mb-5 text-2xl font-[900] leading-snug text-dark">
              長崎県から選択肢を増やして、
              <br />
              若者が戻ってくる街づくりをしていく。
            </h3>
            <div className="body-copy space-y-4 text-slate-600">
              <p>
                focusは、地域の事業主が本業に集中できる環境をAIで届ける会社です。
              </p>
              <p>
                正しく頑張る人が報われるように、業務を整理し、可能性を引き出し、長崎の事業を前へ進めます。
              </p>
            </div>
          </div>

          <div className="lp-card fade-in-up">
            <table className="w-full">
              <tbody>
                {COMPANY_INFO.map((info) => (
                  <tr key={info.label} className="border-b border-border last:border-b-0">
                    <th className="w-28 py-4 pr-5 text-left align-top text-sm font-[900] text-slate-500 sm:w-40">
                      {info.label}
                    </th>
                    <td className="py-4 text-dark">
                      {Array.isArray(info.value) ? (
                        <ul className="grid gap-1">
                          {info.value.map((item) => (
                            <li key={item}>・{item}</li>
                          ))}
                        </ul>
                      ) : info.label === "Instagram" ? (
                        <a
                          href="https://www.instagram.com/focus_copilot/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-accent hover:underline"
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
      </div>
    </section>
  );
}

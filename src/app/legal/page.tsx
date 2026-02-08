import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | focus company",
  description: "focus companyの特定商取引法に基づく表記。",
};

/** 表記項目 */
interface LegalItem {
  label: string;
  value: string | string[];
}

const LEGAL_ITEMS: LegalItem[] = [
  { label: "事業者名", value: "focus company" },
  { label: "代表者", value: "伊藤奏大" },
  { label: "所在地", value: "長崎県佐世保市（詳細はお取引時にお知らせいたします）" },
  { label: "連絡先", value: "Instagram DM: @focus_copilot（お取引時にメールアドレスをお知らせいたします）" },
  {
    label: "サービス内容",
    value: [
      "AI導入・業務効率化支援",
      "ウェブサイト・ホームページ制作",
      "チャットボット構築",
      "ショート動画制作",
    ],
  },
  { label: "サービス料金", value: "初期費用 150,000円（税込）〜 / 月額 20,000円（税込）〜 ※内容により変動します。詳細はお見積り時にご案内いたします。" },
  { label: "料金以外に発生する費用", value: "ドメイン取得費用、サーバー利用料、外部API利用料等が別途発生する場合がございます。" },
  { label: "支払い方法", value: "銀行振込" },
  { label: "支払い時期", value: "ご契約後、請求書発行日から30日以内" },
  { label: "サービス提供時期", value: "ご契約・ご入金確認後、順次着手いたします。納期は内容により異なります（目安：2週間〜1ヶ月）。" },
  { label: "キャンセル・返金", value: "ご契約前のキャンセルは無料です。ご契約後の制作着手後のキャンセルについては、進行状況に応じた実費をご請求させていただく場合がございます。" },
  { label: "動作環境", value: "モダンブラウザ（Chrome, Safari, Firefox, Edge）の最新バージョン" },
];

/**
 * 特定商取引法に基づく表記ページ
 */
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <h1 className="text-3xl md:text-4xl font-black text-navy mb-12">
          特定商取引法に基づく表記
        </h1>

        {/* テーブル */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10">
          <table className="w-full">
            <tbody>
              {LEGAL_ITEMS.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <th className="text-left text-sm text-gray-500 font-medium py-5 pr-6 align-top w-36 sm:w-44">
                    {item.label}
                  </th>
                  <td className="text-navy text-[15px] py-5 font-light leading-relaxed">
                    {Array.isArray(item.value) ? (
                      <ul className="space-y-1">
                        {item.value.map((v, i) => (
                          <li key={i}>・{v}</li>
                        ))}
                      </ul>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

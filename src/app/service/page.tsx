import type { Metadata } from "next";
import ScrollAnimator from "@/components/ScrollAnimator";
import ServicePageHeader from "@/components/ServicePageHeader";
import ServiceDetail from "@/components/ServiceDetail";
import type { ServiceData } from "@/components/ServiceDetail";
import PriceCTA from "@/components/PriceCTA";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

// ページメタデータ
export const metadata: Metadata = {
  title: "事業内容 | focus company",
  description:
    "focus companyのサービス一覧。ウェブサイト制作、専用AIチャットボット構築、ショート動画制作、業務効率化ツール開発など、長崎の中小企業・個人事業主のDXを支援します。",
};

/** アイコン用グラデーション定義（共通） */
const IconGradient = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#3B82F6" />
      <stop offset="100%" stopColor="#06B6D4" />
    </linearGradient>
  </defs>
);

/** サービスデータ定義 */
const SERVICES: ServiceData[] = [
  {
    number: "01",
    title: "ウェブサイト・ホームページ制作",
    catchcopy: "「あなたの想いを、24時間働く営業マンに。」",
    description: [
      "スマホ対応・SEO対策済みのホームページを、",
      "ヒアリングから最短2週間で納品。",
      "\"ネットで見つけてもらえる\"お店・会社へ。",
      "2025年だけで12社の制作実績があります。",
    ],
    ctaText: "詳細を見る",
    ctaHref: "#contact",
    icon: (
      <svg
        className="w-20 h-20 md:w-24 md:h-24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconGradient id="svc-icon-1" />
        {/* モニター */}
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="url(#svc-icon-1)" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="url(#svc-icon-1)" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="url(#svc-icon-1)" />
        {/* コードブラケット */}
        <polyline points="8 8 5.5 10 8 12" stroke="url(#svc-icon-1)" />
        <polyline points="16 8 18.5 10 16 12" stroke="url(#svc-icon-1)" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "御社専用AIチャットボット構築",
    catchcopy: "「よくある質問への対応、AIに任せませんか？」",
    description: [
      "お客様からの問い合わせ対応を24時間自動化。",
      "御社の情報・マニュアルを学習させた\"専用AI\"が、",
      "スタッフの代わりに的確に回答します。",
      "電話対応の時間が大幅に削減できます。",
    ],
    ctaText: "チャットボットを体験",
    ctaHref: "#contact",
    icon: (
      <svg
        className="w-20 h-20 md:w-24 md:h-24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconGradient id="svc-icon-2" />
        {/* 吹き出し */}
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="url(#svc-icon-2)" />
        {/* ボットの目 */}
        <circle cx="9" cy="10" r="1" fill="url(#svc-icon-2)" />
        <circle cx="15" cy="10" r="1" fill="url(#svc-icon-2)" />
        {/* 口 */}
        <path d="M9 13.5c0 0 1.5 1.5 3 1.5s3-1.5 3-1.5" stroke="url(#svc-icon-2)" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "高クオリティのショート動画制作",
    catchcopy: "「月間1,000万再生メディア運営者が、あなたの動画を作る。」",
    description: [
      "Instagram・TikTok・YouTubeショート向けの",
      "縦型動画を企画から編集まで一貫制作。",
      "\"バズる構成\"を知り尽くしたプロが、",
      "お店の魅力を最大限に引き出します。",
    ],
    ctaText: "制作事例を見る",
    ctaHref: "#contact",
    icon: (
      <svg
        className="w-20 h-20 md:w-24 md:h-24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconGradient id="svc-icon-3" />
        {/* スマートフォン */}
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="url(#svc-icon-3)" />
        <line x1="5" y1="6" x2="19" y2="6" stroke="url(#svc-icon-3)" />
        <line x1="5" y1="18" x2="19" y2="18" stroke="url(#svc-icon-3)" />
        {/* 再生ボタン */}
        <polygon points="10 10 10 16 16 13" fill="url(#svc-icon-3)" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "業務効率化ツール構築",
    catchcopy: "「毎日の\"めんどくさい\"を、仕組みで解決。」",
    description: [
      "予約管理、顧客台帳、在庫管理、請求書作成…",
      "紙やExcelで行っていた業務を、",
      "御社専用のシステムとして構築。",
      "\"本業に集中できる環境\"を作ります。",
    ],
    ctaText: "導入事例を見る",
    ctaHref: "#contact",
    icon: (
      <svg
        className="w-20 h-20 md:w-24 md:h-24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconGradient id="svc-icon-4" />
        {/* ギア */}
        <circle cx="8" cy="14" r="3" stroke="url(#svc-icon-4)" />
        <path d="M8 8v3M8 17v3M2 14h3M11 14h3" stroke="url(#svc-icon-4)" />
        {/* トレンドアップ */}
        <polyline points="14 18 17 14 19 16 22 11" stroke="url(#svc-icon-4)" />
        <polyline points="19 11 22 11 22 14" stroke="url(#svc-icon-4)" />
      </svg>
    ),
  },
];

/**
 * サービスページ（/service）
 * 事業内容の詳細を4つのサービスごとに紹介
 */
export default function ServicePage() {
  return (
    <>
      {/* スクロールアニメーション制御 */}
      <ScrollAnimator />

      {/* セクション1: ヘッダー */}
      <ServicePageHeader />

      {/* セクション2: サービス詳細（ジグザグレイアウト） */}
      {SERVICES.map((service, index) => (
        <ServiceDetail key={service.number} service={service} index={index} />
      ))}

      {/* セクション3: 料金への誘導 */}
      <PriceCTA />

      {/* セクション4: お問い合わせCTA */}
      <ContactCTA />

      {/* フッター */}
      <Footer />
    </>
  );
}

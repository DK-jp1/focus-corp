import type { Metadata } from "next";
import { Outfit, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

/* next/font でフォント最適化 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// メタデータ定義
export const metadata: Metadata = {
  title: "合同会社focus | もう、1人で決めなくていい。",
  description:
    "あなた専用のAI参謀チームを構築。copilot roomで経営判断を加速。長崎県佐世保市発、AI導入・業務効率化・SNSマーケティング支援。",
  keywords: [
    "AI導入",
    "AI経営参謀",
    "copilot room",
    "業務効率化",
    "長崎",
    "合同会社focus",
    "長崎県",
    "佐世保市",
    "AI参謀",
    "FLARE",
  ],
  openGraph: {
    title: "合同会社focus | もう、1人で決めなくていい。",
    description:
      "あなた専用のAI参謀チームを構築。copilot roomで経営判断を加速。長崎県佐世保市発。",
    type: "website",
    locale: "ja_JP",
    siteName: "合同会社focus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${outfit.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

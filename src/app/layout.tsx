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
  title: "focus company | AIで、働き方が変わる。",
  description:
    "長崎県佐世保市の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作。月20万円の人件費を月2万円に。focus companyがAIであなたのビジネスを加速させます。",
  keywords: [
    "AI導入",
    "業務効率化",
    "長崎",
    "ウェブサイト制作",
    "チャットボット",
    "focus company",
    "長崎県",
    "佐世保市",
    "個人事業主",
    "サロン",
  ],
  openGraph: {
    title: "focus company | AIで、働き方が変わる。",
    description:
      "長崎県佐世保市の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作。月20万円の人件費を月2万円に。",
    type: "website",
    locale: "ja_JP",
    siteName: "focus company",
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

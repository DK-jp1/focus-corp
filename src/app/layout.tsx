import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

// メタデータ定義
export const metadata: Metadata = {
  title: "focus company | AIで、働き方が変わる。",
  description:
    "長崎県の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作。月20万円の人件費を月2万円に。focus companyがAIであなたのビジネスを加速させます。",
  keywords: [
    "AI導入",
    "業務効率化",
    "長崎",
    "ウェブサイト制作",
    "チャットボット",
    "focus company",
    "長崎県",
    "個人事業主",
    "サロン",
  ],
  openGraph: {
    title: "focus company | AIで、働き方が変わる。",
    description:
      "長崎県の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作。月20万円の人件費を月2万円に。",
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
    <html lang="ja">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

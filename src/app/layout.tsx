import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "focus株式会社 | AIで、働き方が変わる。",
  description:
    "長崎県の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作。focus株式会社は、テクノロジーで働く人の当たり前を変えます。",
  keywords: ["AI導入", "業務効率化", "長崎", "ウェブサイト制作", "チャットボット", "focus株式会社"],
  openGraph: {
    title: "focus株式会社 | AIで、働き方が変わる。",
    description:
      "長崎県の個人事業主・サロン・企業向け AI導入・業務効率化・ウェブサイト制作",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}

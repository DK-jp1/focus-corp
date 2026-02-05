import ScrollAnimator from "@/components/ScrollAnimator";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * focus株式会社 コーポレートサイト（1ページ完結SPA）
 */
export default function Home() {
  return (
    <>
      {/* スクロールアニメーション制御 */}
      <ScrollAnimator />

      {/* 1. ファーストビュー */}
      <HeroSection />

      {/* 2. ミッション */}
      <MissionSection />

      {/* 3. お悩み → 解決 */}
      <ProblemsSection />

      {/* 4. サービス内容 */}
      <ServicesSection />

      {/* 5. 実績 */}
      <ResultsSection />

      {/* 6. 料金プラン */}
      <PricingSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. お問い合わせ */}
      <ContactSection />

      {/* フッター */}
      <Footer />
    </>
  );
}

import ScrollAnimator from "@/components/ScrollAnimator";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import ValueSection from "@/components/ValueSection";
import PhilosophyCoreSection from "@/components/PhilosophyCoreSection";
import ProblemsSection from "@/components/ProblemsSection";
import NewStandardSection from "@/components/NewStandardSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import WhyFocusSection from "@/components/WhyFocusSection";
import PricingSection from "@/components/PricingSection";
import FlowSection from "@/components/FlowSection";
import ClientVoiceSection from "@/components/ClientVoiceSection";
import FAQSection from "@/components/FAQSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * focus株式会社 コーポレートサイト（1ページ完結SPA）
 * 全17セクション + フッター
 */
export default function Home() {
  return (
    <>
      {/* スクロールアニメーション制御 */}
      <ScrollAnimator />

      {/* 1. ファーストビュー */}
      <HeroSection />

      {/* 2. 企業理念（Philosophy - はじめに） */}
      <PhilosophySection />

      {/* 3. ミッション */}
      <MissionSection />

      {/* 4. ビジョン */}
      <VisionSection />

      {/* 5. バリュー（行動指針） */}
      <ValueSection />

      {/* 6. focus哲学 */}
      <PhilosophyCoreSection />

      {/* 7. お悩み */}
      <ProblemsSection />

      {/* 8. New Standard */}
      <NewStandardSection />

      {/* 9. サービス内容 */}
      <ServicesSection />

      {/* 10. 実績 */}
      <ResultsSection />

      {/* 11. 選ばれる理由 */}
      <WhyFocusSection />

      {/* 12. 料金プラン */}
      <PricingSection />

      {/* 13. 導入の流れ */}
      <FlowSection />

      {/* 14. クライアントの声 */}
      <ClientVoiceSection />

      {/* 15. FAQ */}
      <FAQSection />

      {/* 16. 会社概要 */}
      <CompanySection />

      {/* 17. お問い合わせ */}
      <ContactSection />

      {/* フッター */}
      <Footer />
    </>
  );
}

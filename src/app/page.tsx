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
    <div className="grid-bg bg-background text-foreground">
      {/* スクロールアニメーション制御 */}
      <ScrollAnimator />

      {/* 1. ファーストビュー */}
      <HeroSection />
      <div className="glow-divider" />

      {/* 2. 企業理念（Philosophy - はじめに） */}
      <PhilosophySection />
      <div className="glow-divider" />

      {/* 3. ミッション */}
      <MissionSection />
      <div className="glow-divider" />

      {/* 4. ビジョン */}
      <VisionSection />
      <div className="glow-divider" />

      {/* 5. バリュー（行動指針） */}
      <ValueSection />
      <div className="glow-divider" />

      {/* 6. focus哲学 */}
      <PhilosophyCoreSection />
      <div className="glow-divider" />

      {/* 7. お悩み */}
      <ProblemsSection />
      <div className="glow-divider" />

      {/* 8. New Standard */}
      <NewStandardSection />
      <div className="glow-divider" />

      {/* 9. サービス内容 */}
      <ServicesSection />
      <div className="glow-divider" />

      {/* 10. 実績 */}
      <ResultsSection />
      <div className="glow-divider" />

      {/* 11. 選ばれる理由 */}
      <WhyFocusSection />
      <div className="glow-divider" />

      {/* 12. 料金プラン */}
      <PricingSection />
      <div className="glow-divider" />

      {/* 13. 導入の流れ */}
      <FlowSection />
      <div className="glow-divider" />

      {/* 14. クライアントの声 */}
      <ClientVoiceSection />
      <div className="glow-divider" />

      {/* 15. FAQ */}
      <FAQSection />
      <div className="glow-divider" />

      {/* 16. 会社概要 */}
      <CompanySection />
      <div className="glow-divider" />

      {/* 17. お問い合わせ */}
      <ContactSection />

      {/* フッター */}
      <Footer />
    </div>
  );
}

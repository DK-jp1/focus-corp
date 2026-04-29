import ScrollAnimator from "@/components/ScrollAnimator";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import CTABanner from "@/components/CTABanner";
import NewStandardSection from "@/components/NewStandardSection";
import CopilotExperienceSection from "@/components/CopilotExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import FlowSection from "@/components/FlowSection";
import ClientVoiceSection from "@/components/ClientVoiceSection";
import FAQSection from "@/components/FAQSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BottomFixedCTA from "@/components/BottomFixedCTA";

export default function Home() {
  return (
    <>
      <ScrollAnimator />

      <HeroSection />

      <ProblemsSection />

      <CTABanner
        heading="まずは話を聞いてみませんか？"
        subtext="採用する前に、AIで解決できる業務を一緒に整理します。"
      />

      <NewStandardSection />

      <CopilotExperienceSection />

      <ServicesSection />

      <CTABanner
        heading="あなたのビジネスに最適なAI活用を提案します"
        subtext="copilot room、SNS運用、問い合わせ対応まで、必要なところから始められます。"
      />

      <WorksSection />

      <FlowSection />

      <ClientVoiceSection />

      <FAQSection />

      <CompanySection />

      <ContactSection />

      <Footer />

      <BottomFixedCTA />
    </>
  );
}

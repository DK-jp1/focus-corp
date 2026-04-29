import ScrollAnimator from "@/components/ScrollAnimator";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ValueSection from "@/components/ValueSection";
import ProblemsSection from "@/components/ProblemsSection";
import CTABanner from "@/components/CTABanner";
import NewStandardSection from "@/components/NewStandardSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import WorksSection from "@/components/WorksSection";
import WhyFocusSection from "@/components/WhyFocusSection";
import FlowSection from "@/components/FlowSection";
import ClientVoiceSection from "@/components/ClientVoiceSection";
import FAQSection from "@/components/FAQSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollAnimator />

      <HeroSection />

      <PhilosophySection />

      <ValueSection />

      <ProblemsSection />

      <CTABanner
        heading="まずは話を聞いてみませんか？"
        subtext="「ちょっと相談したい」だけでもOKです。"
      />

      <NewStandardSection />

      <ServicesSection />

      <CTABanner
        heading="あなたのビジネスに最適なAI活用を提案します"
        subtext="お気軽にまずはご相談ください。"
      />

      <ResultsSection />

      <WorksSection />

      <WhyFocusSection />

      <FlowSection />

      <ClientVoiceSection />

      <FAQSection />

      <CompanySection />

      <ContactSection />

      <Footer />
    </>
  );
}

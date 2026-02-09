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
import PricingSection from "@/components/PricingSection";
import FlowSection from "@/components/FlowSection";
import ClientVoiceSection from "@/components/ClientVoiceSection";
import FAQSection from "@/components/FAQSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";

/** Service Gallery（既存） スライド画像 */
const SERVICE_GALLERY_IMAGES = [
  "/images/slides/S__178987012_0.jpg",
  "/images/slides/S__178987013_0.jpg",
  "/images/slides/S__178987014_0.jpg",
  "/images/slides/S__178987015_0.jpg",
  "/images/slides/S__178987016_0.jpg",
  "/images/slides/S__178987017_0.jpg",
  "/images/slides/S__178987018_0.jpg",
  "/images/slides/S__178987019_0.jpg",
  "/images/slides/S__178987020_0.jpg",
  "/images/slides/S__178987021_0.jpg",
  "/images/slides/S__178987023_0.jpg",
  "/images/slides/S__178987024_0.jpg",
  "/images/slides/S__178987025_0.jpg",
  "/images/slides/S__178987026_0.jpg",
  "/images/slides/S__178987027_0.jpg",
  "/images/slides/S__178987028_0.jpg",
  "/images/slides/S__178987029_0.jpg",
  "/images/slides/S__178987030_0.jpg",
  "/images/slides/S__178987031_0.jpg",
  "/images/slides/S__178987032_0.jpg",
  "/images/slides/S__178987033.jpg",
];

/** Development Works スライド画像（サービス・開発力紹介） */
const DEV_WORKS_IMAGES = [
  "/images/slides-2/S__179003396_0.jpg",
  "/images/slides-2/S__179003397_0.jpg",
  "/images/slides-2/S__179003398_0.jpg",
  "/images/slides-2/S__179003399_0.jpg",
];

/** Results & Cases スライド画像（事業紹介） */
const RESULTS_CASES_IMAGES = [
  "/images/slides-3/S__179003403_0.jpg",
  "/images/slides-3/S__179003404_0.jpg",
  "/images/slides-3/S__179003405_0.jpg",
  "/images/slides-3/S__179003406_0.jpg",
  "/images/slides-3/S__179003407_0.jpg",
  "/images/slides-3/S__179003408_0.jpg",
];

/**
 * focus company コーポレートサイト（1ページ完結SPA）
 * 全セクション + カルーセル3つ + フッター
 */
export default function Home() {
  return (
    <>
      {/* スクロールアニメーション制御 */}
      <ScrollAnimator />

      {/* 1. ファーストビュー */}
      <HeroSection />

      {/* 2. 企業理念（Philosophy + Mission 統合） */}
      <PhilosophySection />

      {/* 3. バリュー（行動指針） */}
      <ValueSection />

      {/* 4. お悩み */}
      <ProblemsSection />

      {/* CTA: お悩みセクション後 */}
      <CTABanner
        heading="まずは話を聞いてみませんか？"
        subtext="「ちょっと相談したい」だけでもOKです。"
      />

      {/* 5. New Standard */}
      <NewStandardSection />

      {/* 6. サービス内容 */}
      <ServicesSection />

      {/* CTA: サービスセクション後 */}
      <CTABanner
        heading="あなたのビジネスに最適なAI活用を提案します"
        subtext="初期費用0円キャンペーン実施中。まずは無料相談から。"
      />

      {/* 6.5 Development Works カルーセル */}
      <ImageCarousel
        id="dev"
        images={DEV_WORKS_IMAGES}
        title="Development Works"
        subtitle="Webサイト・アプリ開発の実力をご紹介"
      />

      {/* 7. 数字で見るfocus */}
      <ResultsSection />

      {/* 7.5 自社運営事業（Our Business） */}
      <WorksSection />

      {/* 8. 選ばれる理由 */}
      <WhyFocusSection />

      {/* 8.5 Results & Cases カルーセル */}
      <ImageCarousel
        id="results"
        images={RESULTS_CASES_IMAGES}
        title="Results & Cases"
        subtitle="事業実績のご紹介"
      />

      {/* 9. 料金プラン */}
      <PricingSection />

      {/* 10. 導入の流れ */}
      <FlowSection />

      {/* 11. クライアントの声 */}
      <ClientVoiceSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. 会社概要 */}
      <CompanySection />

      {/* 14. お問い合わせ */}
      <ContactSection />

      {/* 15. Service Gallery */}
      <ImageCarousel
        id="gallery"
        images={SERVICE_GALLERY_IMAGES}
        title="Service Gallery"
        subtitle="focus companyのサービス紹介"
      />

      {/* フッター */}
      <Footer />
    </>
  );
}

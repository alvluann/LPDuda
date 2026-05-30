import { AboutSection } from "@/features/psychology-landing/sections/AboutSection";
import { AgreementsSection } from "@/features/psychology-landing/sections/AgreementsSection";
import { BenefitsSection } from "@/features/psychology-landing/sections/BenefitsSection";
import { CareGallerySection } from "@/features/psychology-landing/sections/CareGallerySection";
import { ConfidentialitySection } from "@/features/psychology-landing/sections/ConfidentialitySection";
import { CTASection } from "@/features/psychology-landing/sections/CTASection";
import { FAQSection } from "@/features/psychology-landing/sections/FAQSection";
import { HeroSection } from "@/features/psychology-landing/sections/HeroSection";
import { MethodSection } from "@/features/psychology-landing/sections/MethodSection";
import { OnlineCareSection } from "@/features/psychology-landing/sections/OnlineCareSection";
import { PainPointsSection } from "@/features/psychology-landing/sections/PainPointsSection";
import { SeekingTherapySection } from "@/features/psychology-landing/sections/SeekingTherapySection";
import { ServicesSection } from "@/features/psychology-landing/sections/ServicesSection";
import { MobileContactBar } from "@/features/psychology-landing/components/MobileContactBar";
import { landingContent } from "@/features/psychology-landing/data/psychology-landing-content";
import { assignLandingImages } from "@/features/psychology-landing/utils/assign-landing-images";
import { getLandingImages } from "@/features/psychology-landing/utils/get-landing-images";

export default async function Home() {
  const images = await getLandingImages();
  const imagePlacement = assignLandingImages(images);

  return (
    <main className="pb-20 sm:pb-0" id="top">
      <HeroSection content={landingContent.hero} image={imagePlacement.hero} />
      <AboutSection content={landingContent.about} image={imagePlacement.about} />
      <PainPointsSection content={landingContent.painPoints} />
      <ServicesSection content={landingContent.services} />
      <MethodSection content={landingContent.method} image={imagePlacement.method} />
      <OnlineCareSection content={landingContent.onlineCare} image={imagePlacement.onlineCare} />
      <BenefitsSection content={landingContent.benefits} />
      <SeekingTherapySection content={landingContent.seekingTherapy} />
      <AgreementsSection content={landingContent.agreements} />
      <ConfidentialitySection content={landingContent.confidentiality} />
      <CareGallerySection images={imagePlacement.gallery} />
      <FAQSection content={landingContent.faq} />
      <CTASection content={landingContent.finalCta} />
      <MobileContactBar cta={landingContent.hero.primaryCta} />
    </main>
  );
}

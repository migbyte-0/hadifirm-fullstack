import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/ab-banner-bg.webp";
import AboutTwo from "@/components/About/AboutTwo";
import CaseStudyFour from "@/components/CaseStudy/CaseStudyFour";
import CtaThree from "@/components/CTA/CtaThree";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import LegalPracticeServiceThree from "@/components/LegalPracticeService/LegalPracticeServiceThree";
import EmmergencyCaseOne from "@/components/EmergencyCase/EmergencyCaseOne";
import TestimonialTwo from "@/components/Testimonial/TestimonialTwo";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function AboutPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="About Us" />
        <AboutTwo />
        <CaseStudyFour />
        <CtaThree />
        <ChooseAreaOne />
        <LegalPracticeServiceThree />
        <EmmergencyCaseOne />
        <TestimonialTwo />
        <CounterTwo />
      </main>
    </InnerLayout>
  );
}

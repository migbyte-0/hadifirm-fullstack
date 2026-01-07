import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/service-banner-bg.webp";
import LegalPracticeServiceTwo from "@/components/LegalPracticeService/LegalPracticeServiceTwo";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import TestimonialTwo from "@/components/Testimonial/TestimonialTwo";
import ServieceSix from "@/components/Service/ServiceSix";
import EmmergencyCaseOne from "@/components/EmergencyCase/EmergencyCaseOne";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function HomeOne() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Practice Areas" />
        <LegalPracticeServiceTwo />
        <ChooseAreaOne />
        <TestimonialTwo />
        <ServieceSix />
        <EmmergencyCaseOne />
        <CounterTwo />
      </main>
    </InnerLayout>
  );
}

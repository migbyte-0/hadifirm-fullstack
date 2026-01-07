import LayoutTwo from "@/Layout/LayoutTwo";
import HeroTwo from "@/components/Hero/HeroTwo";
import VideoOne from "@/components/Video/VideoOne";
import ServiceTwo from "@/components/Service/ServiceTwo";
import CallServiceOne from "@/components/CallService/CallServiceOne";
import SpecialServiceOne from "@/components/SpecialService/SpecialServiceOne";
import LegalPracticeServiceOne from "@/components/LegalPracticeService/LegalPracticeServiceOne";
import PortfolioTwo from "@/components/Portfolio/PortfolioTwo";
import CtaTwo from "@/components/CTA/CtaTwo";
import TestimonialTwo from "@/components/Testimonial/TestimonialTwo";
import TeamTwo from "@/components/Team/TeamTwo";
import CounterTwo from "@/components/Counter/CounterTwo";
import ContactOne from "@/components/Contact/ContactOne";
import FaqOne from "@/components/Faq/FaqOne";
import BlogOne from "@/components/Blog/BlogOne";
import PartnerOne from "@/components/Partner/PartnerOne";

export default function HomeTwo() {
  return (
    <LayoutTwo>
      <main id="wrapper" className="wrapper">
        <HeroTwo />
        <VideoOne />
        <ServiceTwo />
        <CallServiceOne />
        <SpecialServiceOne />
        <LegalPracticeServiceOne />
        <PortfolioTwo />
        <CtaTwo />
        <TestimonialTwo />
        <TeamTwo />
        <CounterTwo />
        <ContactOne />
        <FaqOne />
        <BlogOne />
        <PartnerOne />
      </main>
    </LayoutTwo>
  );
}

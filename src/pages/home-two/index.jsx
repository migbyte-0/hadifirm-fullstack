import LayoutTwo from "@/Layout/LayoutTwo";
import { HomeContentProvider } from "@/context/HomeContentContext";
import HeroTwoDynamic from "@/components/Hero/HeroTwoDynamic";
import VideoOneDynamic from "@/components/Video/VideoOneDynamic";
import ServiceTwoDynamic from "@/components/Service/ServiceTwoDynamic";
import CallServiceOneDynamic from "@/components/CallService/CallServiceOneDynamic";
import SpecialServiceOneDynamic from "@/components/SpecialService/SpecialServiceOneDynamic";
import LegalPracticeServiceOneDynamic from "@/components/LegalPracticeService/LegalPracticeServiceOneDynamic";
import PortfolioTwoDynamic from "@/components/Portfolio/PortfolioTwoDynamic";
import CtaTwoDynamic from "@/components/CTA/CtaTwoDynamic";
import TestimonialTwoDynamic from "@/components/Testimonial/TestimonialTwoDynamic";
import TeamTwoDynamic from "@/components/Team/TeamTwoDynamic";
import CounterTwoDynamic from "@/components/Counter/CounterTwoDynamic";
import ContactOneDynamic from "@/components/Contact/ContactOneDynamic";
import FaqOneDynamic from "@/components/Faq/FaqOneDynamic";
import BlogOneDynamic from "@/components/Blog/BlogOneDynamic";
import PartnerOneDynamic from "@/components/Partner/PartnerOneDynamic";

export default function HomeTwo() {
  return (
    <HomeContentProvider homeVersion="home_two">
      <LayoutTwo>
        <main id="wrapper" className="wrapper">
          <HeroTwoDynamic />
          <VideoOneDynamic />
          <ServiceTwoDynamic />
          <CallServiceOneDynamic />
          <SpecialServiceOneDynamic />
          <LegalPracticeServiceOneDynamic />
          <PortfolioTwoDynamic />
          <CtaTwoDynamic />
          <TestimonialTwoDynamic />
          <TeamTwoDynamic />
          <CounterTwoDynamic />
          <ContactOneDynamic />
          <FaqOneDynamic />
          <BlogOneDynamic />
          <PartnerOneDynamic />
        </main>
      </LayoutTwo>
    </HomeContentProvider>
  );
}

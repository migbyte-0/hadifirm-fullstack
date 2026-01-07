import LayoutThree from "@/Layout/LayoutThree";
import HeroThree from "@/components/Hero/HeroThree";
import ServiceThree from "@/components/Service/ServiceThree";
import PartnerTwo from "@/components/Partner/PartnerTwo";
import AboutTwo from "@/components/About/AboutTwo";
import LegalPracticeServiceTwo from "@/components/LegalPracticeService/LegalPracticeServiceTwo";
import CaseStudyTwo from "@/components/CaseStudy/CaseStudyTwo";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import CallServiceTwo from "@/components/CallService/CallServiceTwo";
import EmmergencyCaseOne from "@/components/EmergencyCase/EmergencyCaseOne";
import TeamThree from "@/components/Team/TeamThree";
import CtaThree from "@/components/CTA/CtaThree";
import BlogOne from "@/components/Blog/BlogOne";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function HomeThree() {
  return (
    <LayoutThree>
      <main id="wrapper" className="wrapper">
        <HeroThree />
        <ServiceThree />
        <PartnerTwo />
        <AboutTwo />
        <LegalPracticeServiceTwo />
        <CaseStudyTwo />
        <ChooseAreaOne />
        <CallServiceTwo />
        <EmmergencyCaseOne />
        <TeamThree />
        <CtaThree />
        <BlogOne />
        <CounterTwo />
      </main>
    </LayoutThree>
  );
}

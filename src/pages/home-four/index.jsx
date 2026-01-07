import LayoutFour from "@/Layout/LayoutFour";
import LegalPracticeServiceTwo from "@/components/LegalPracticeService/LegalPracticeServiceTwo";
import ChooseAreaOne from "@/components/ChooseArea/ChooseAreaOne";
import CounterTwo from "@/components/Counter/CounterTwo";
import TeamTwo from "@/components/Team/TeamTwo";
import BlogOne from "@/components/Blog/BlogOne";
import FaqOne from "@/components/Faq/FaqOne";
import PartnerTwo from "@/components/Partner/PartnerTwo";
import HeroFour from "@/components/Hero/HeroFour";
import CallServiceThree from "@/components/CallService/CallServiceThree";
import CaseStudyThree from "@/components/CaseStudy/CaseStudyThree";
import RelatedProductOne from "@/components/RelatedProducts/RelatedProductOne";
import ContactTwo from "@/components/Contact/ContactTwo";
import EmergencyCaseTwo from "@/components/EmergencyCase/EmergencyCaseTwo";

export default function HomeFour() {
  return (
    <LayoutFour>
      <main id="wrapper" className="wrapper">
        <HeroFour />
        <LegalPracticeServiceTwo />
        <CallServiceThree />
        <ChooseAreaOne />
        <CounterTwo />
        <CaseStudyThree />
        <FaqOne />
        <RelatedProductOne />
        <ContactTwo />
        <TeamTwo />
        <EmergencyCaseTwo />
        <BlogOne />
        <PartnerTwo />
      </main>
    </LayoutFour>
  );
}

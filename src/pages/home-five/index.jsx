import LayoutFive from "@/Layout/LayoutFive";
import CtaTwo from "@/components/CTA/CtaTwo";
import CounterTwo from "@/components/Counter/CounterTwo";
import FaqOne from "@/components/Faq/FaqOne";
import TeamThree from "@/components/Team/TeamThree";
import ContactTwo from "@/components/Contact/ContactTwo";
import HeroFive from "@/components/Hero/HeroFive";
import ServiceFour from "@/components/Service/ServiceFour";
import AboutThree from "@/components/About/AboutThree";
import BlogOne from "@/components/Blog/BlogOne";
import PortfolioThree from "@/components/Portfolio/PortfolioThree";
import AboutFour from "@/components/About/AboutFour";
import VideoTwo from "@/components/Video/VideoTwo";
import ServiceFive from "@/components/Service/ServiceFive";
import TestimonialThree from "@/components/Testimonial/TestimonialThree";
import ChooseAreaTwo from "@/components/ChooseArea/ChooseAreaTwo";
import CallServiceFour from "@/components/CallService/CallServiceFour";

export default function HomeFive() {
  return (
    <LayoutFive>
      <main id="wrapper" className="wrapper">
        <HeroFive />
        <ServiceFour />
        <AboutThree />
        <PortfolioThree />
        <AboutFour />
        <CtaTwo classes="m-0" />
        <TeamThree />
        <VideoTwo />
        <ServiceFive />
        <CounterTwo />
        <TestimonialThree />
        <FaqOne />
        <ChooseAreaTwo />
        <ContactTwo />
        <BlogOne />
        <CallServiceFour />
      </main>
    </LayoutFive>
  );
}

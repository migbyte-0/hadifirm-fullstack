import LayoutOne from "@/Layout/LayoutOne";
import HeroOne from "@/components/Hero/HeroOne";
import ServiceOne from "@/components/Service/ServiceOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";
import ClientOne from "@/components/Client/ClientOne";
import CaseStudyOne from "@/components/CaseStudy/CaseStudyOne";
import PortfolioOne from "@/components/Portfolio/PortfolioOne";
import TeamOne from "@/components/Team/TeamOne";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import BlogOne from "@/components/Blog/BlogOne";

export default function HomeOne() {
  return (
    <LayoutOne>
      <main id="wrapper" className="wrapper">
        <HeroOne />
        <ServiceOne />
        <CtaOne />
        <AboutOne />
        <ClientOne />
        <CaseStudyOne />
        <PortfolioOne />
        <TeamOne />
        <TestimonialOne />
        <BlogOne />
      </main>
    </LayoutOne>
  );
}

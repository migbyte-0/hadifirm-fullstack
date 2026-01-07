import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/case-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import CaseStudyPagination from "@/components/CaseStudy/CaseStudyPagination";

export default function CaseStudy() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Case Study" />
        <CaseStudyPagination />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

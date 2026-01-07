import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/case-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import CaseStudyPaginationTwo from "@/components/CaseStudy/CaseStudyPaginationTwo";

export default function CaseStudy() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Case Study" />
        <CaseStudyPaginationTwo />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/case-detail-banner.webp";
import CaseStudyContent from "@/components/CaseDetail/CaseStydyContent";
import CaseStudySidebar from "@/components/CaseDetail/CaseStudySidebar";
import CounterTwo from "@/components/Counter/CounterTwo";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";

export default function CaseDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Case Details" />
        <section className="case-detail-area pt-150 position-relative overflow-hidden">
          <div className="container">
            <div className="row fade-slide bottom" data-delay="0.2">
              <div className="col-xl-8 col-lg-7 col-md-12 col-12 mb-20 mb-lg-0">
                <CaseStudyContent />
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                <CaseStudySidebar />
              </div>
            </div>
          </div>
          <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
        </section>

        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/attorneys-banner.webp";
import AttorneyDetailContent from "@/components/AttorneyDetail/AttroneyDetailContent";
import AttorneyDetailSidebar from "@/components/AttorneyDetail/AttorneyDetailSidebar";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function AttorneyDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Attorney Detail" />
        <section className="attorneys-detail-area mt-50 overflow-hidden">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-8 col-lg-8 col-md-12 col-12">
                <AttorneyDetailContent />
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-12 col-12 fade-slide right"
                data-delay="0.2"
              >
                <AttorneyDetailSidebar />
              </div>
            </div>
          </div>
        </section>
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

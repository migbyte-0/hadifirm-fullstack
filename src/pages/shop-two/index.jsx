import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/shop-banner.webp";
import CounterTwo from "@/components/Counter/CounterTwo";

import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import ShopSidebar from "@/components/Shop/ShopSidebar";
import ShopPaginationTwo from "../../components/Shop/ShopPaginationTwo";

export default function ShopePageTwo() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Shope" />
        <section className="shop-area-2 pt-150 position-relative overflow-hidden">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-8 col-lg-8 col-md-12 col-12 mb-20 mb-lg-0 fade-slide left"
                data-delay="0.2"
              >
                <ShopPaginationTwo />
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-8 col-12 fade-slide right"
                data-delay="0.4"
              >
                <ShopSidebar />
              </div>
            </div>
          </div>
          {/* Shape  */}
          <img className="shop-shape" src={ShadowShape} alt="Shape" />
        </section>

        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

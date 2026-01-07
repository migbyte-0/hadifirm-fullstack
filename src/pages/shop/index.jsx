import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/shop-banner.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import ShopPaginationOne from "@/components/Shop/ShopPaginationOne";

export default function ShopePage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Shope" />
        <ShopPaginationOne />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

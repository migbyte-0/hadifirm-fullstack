import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/shop-banner.webp";
import RelatedProductOne from "@/components/RelatedProducts/RelatedProductOne";
import CounterTwo from "@/components/Counter/CounterTwo";
import ShopDetailOne from "@/components/ShopDetail/ShopDetailOne";

export default function ShopeDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Shop Detail" />
        <ShopDetailOne />
        <RelatedProductOne />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

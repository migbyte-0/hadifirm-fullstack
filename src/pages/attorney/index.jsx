import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/attorneys-banner-bg.webp";
import TeamOne from "@/components/Team/TeamOne";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function AttorneyPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Attorneys Page" />
        <TeamOne />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/contact-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import MapOne from "@/components/Map/MapOne";
import ContactThree from "@/components/Contact/ContactThree";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function Contact() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Contact Us" />
        <MapOne />
        <ContactInfo />
        <ContactThree />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

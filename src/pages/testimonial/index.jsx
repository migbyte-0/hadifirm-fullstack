import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/testimonial-banner-bg.webp";
import TestimonialPagination from "@/components/Testimonial/TestimonialPagination";
import CounterTwo from "@/components/Counter/CounterTwo";

export default function HomeOne() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Testimonials" />
        <TestimonialPagination />
        <CounterTwo />
      </main>
    </InnerLayout>
  );
}

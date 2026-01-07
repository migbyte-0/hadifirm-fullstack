import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/blog-details-banner.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import BlogDetailOne from "@/components/BlogDetail/BlogDetailOne";

export default function CaseDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Blog Details" />
        <BlogDetailOne />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

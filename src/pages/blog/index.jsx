import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/blog-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import BlogPaginationOne from "@/components/Blog/BlogPaginationOne";

export default function CaseDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Blog" />
        <BlogPaginationOne />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

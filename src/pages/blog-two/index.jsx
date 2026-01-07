import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/blog-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import BlogPaginationTwo from "@/components/Blog/BlogPaginationTwo";

export default function CaseDetailPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Blog" />
        <BlogPaginationTwo />
        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

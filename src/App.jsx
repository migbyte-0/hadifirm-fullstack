import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnalyticsProvider } from "@/context/AnalyticsContext";
import DynamicHome from "@/components/DynamicHome/DynamicHome";
import Services from "@/pages/services";
import About from "@/pages/about";
import ServiceDetail from "@/pages/service-detail";
import CaseStudy from "@/pages/case-study";
import CaseStudyTwo from "@/pages/case-study-two";
import CaseDetail from "@/pages/case-detail";
import Testimonial from "@/pages/testimonial";
import Attorney from "@/pages/attorney";
import AttorneyDetail from "@/pages/attorney-detail";
import Faq from "@/pages/faq";
import Shop from "@/pages/shop";
import ShopTwo from "@/pages/shop-two";
import ShopDetail from "@/pages/shop-detail";
import Blog from "@/pages/blog";
import BlogTwo from "@/pages/blog-two";
import BlogDetail from "@/pages/blog-detail";
import Contact from "@/pages/contact";
import Error from "@/pages/error";
import ConsultationPage from "@/pages/consultation";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <Routes>
          <Route path="/" element={<DynamicHome />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          {/* Inner pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study-two" element={<CaseStudyTwo />} />
          <Route path="/case-detail" element={<CaseDetail />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/attorneys" element={<Attorney />} />
          <Route path="/attorney-detail" element={<AttorneyDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-two" element={<ShopTwo />} />
          <Route path="/shop-detail" element={<ShopDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-two" element={<BlogTwo />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/error" element={<Error />} />
        </Routes>
      </AnalyticsProvider>
    </BrowserRouter>
  );
}

export default App;

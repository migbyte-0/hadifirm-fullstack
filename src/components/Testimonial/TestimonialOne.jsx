import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import FiveStatIcon from "@/assets/images/icons/five-star.svg";
import QuoteIcon from "@/assets/images/svg/btn.svg";

import TestimonialImageOne from "@/assets/images/teams/profile.webp";
import TestimonialImageTwo from "@/assets/images/teams/ts-img-2.webp";
import TestimonialImageThree from "@/assets/images/teams/ts-img-3.webp";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function TestimonialOne() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-area pt-150 pb-150">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pb-50">
          <div className="col">
            <span
              className="section-subtitle pb-20 fade-slide bottom"
              data-delay="0.2"
            >
              آراء العملاء
            </span>
            <h2 className="section-title fade-slide bottom" data-delay="0.4">
              ماذا يقول عملاؤنا
              <span className="title-yellow"> عن خدماتنا</span>
            </h2>
          </div>
          <div
            className="section-btn d-inline-block mb-30 mb-sm-0 fade-slide top"
            data-delay="0.6"
          >
            <Link
              to="/contact"
              className="btn-fill s-btn d-flex align-items-center"
            >
              استشارة مجانية
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
        <Slider
          {...sliderOption}
          className="testimonial-slider testimonial-card-gallery pb-40-md-60 fade-slide bottom"
          data-delay="0.6"
        >
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>10.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Review</small>
              </div>
            </div>
            <p className="testimonail-content">
              "تميز المكتب بالدراسة المتأنية والنزاهة المطلقة، مما ساعدنا في كسب قضيتنا التجارية المعقدة."
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={TestimonialImageOne} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    عميل، <span>السعودية</span>
                  </h6>
                  <span>قطاع الأعمال</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Image" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>15.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Review</small>
              </div>
            </div>
            <p className="testimonail-content">
              "احترافية عالية في التعامل وسرية تامة، المنهجية القانونية المتبعة واضحة جداً وتشعرك بالاطمئنان."
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={TestimonialImageTwo} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    عميل، <span>السعودية</span>
                  </h6>
                  <span>قطاع التجارة</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Quote Icon" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>9.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img src={FiveStatIcon} alt="Icon" />
                </div>
                <small>Review</small>
              </div>
            </div>
            <p className="testimonail-content">
              "أفضل مكتب في صياغة العقود التجارية، دقة متناهية وحرص كبير على أدق التفاصيل النظامية."
            </p>
            <div className="member-profile d-flex justify-content-between align-items-center">
              <div className="member-details">
                <img src={TestimonialImageThree} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    عميل، <span>السعودية</span>
                  </h6>
                  <span>قطاع المقاولات</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteIcon} alt="Quote Icon" />
              </blockquote>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

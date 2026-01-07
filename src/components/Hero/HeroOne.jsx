import Slider from "react-slick";

import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import VideoIcon from "@/assets/images/svg/video-icon.svg";
import HeroBgLine from "@/assets/images/bg/hero-bg-line.png";
import YellowCircle from "@/assets/images/svg/yello-crecle.svg";
import HeroOneShape from "@/assets/images/shapes/hero-one-shape.png";
import HeroShapeBg from "@/assets/images/shapes/hero-shape-bg.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: {
      sliceOne: "مكتب المحامي هادي محمد الحصين",
      sliceTwo: "للمحاماة",
      sliceThree: "والاستشارات القانونية والتوثيق",
    },
    btnText: "استشارة مجانية",
    description: "مكتب قانوني مرخّص ومتخصص في تقديم الخدمات القانونية والاستشارية للأفراد والمنشآت",
  },
  {
    title: {
      sliceOne: "حماية الحقوق وتقديم",
      sliceTwo: "الحلول",
      sliceThree: "القانونية بكفاءة ومهنية",
    },
    btnText: "تواصل معنا",
    description: "نعمل وفق الأنظمة واللوائح المعمول بها في المملكة العربية السعودية",
  },
  {
    title: {
      sliceOne: "الدراسة المتأنية والتحليل",
      sliceTwo: "النظامي",
      sliceThree: "الدقيق والتمثيل القانوني الفعّال",
    },
    btnText: "احجز موعد",
    description: "مع الالتزام بأعلى معايير النزاهة والسرية المهنية",
  },
];

export default function HeroOne() {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const sliderOptions = {
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    loop: true,
    dots: true,
    arrows: false,
    beforeChange: (currentSlide, nextSlide) =>
      setCurrentSlideNumber(nextSlide + 1),
  };
  return (
    <section className="hero hero-one position-relative">
      <div className="container-one position-relative">
        <div className="banner banner-1 position-relative">
          <div className="col-12 col-xxl-10 m-auto">
            <Slider
              {...sliderOptions}
              className="hero-1-slider hero-content-wrap"
            >
              {slides.map((slide, index) => (
                <div key={index} className="hero-content slider-item-list">
                  <div className="row">
                    <div className="col-12 col-lg-9">
                      <div className="hero-content-left d-flex">
                        <div className="entry-content">
                          {slide.title && (
                            <h2 className="section-title-lg move-line-3d">
                              {slide.title.sliceOne}
                              {slide.title.sliceTwo && (
                                <span className="title-border title-yellow">
                                  {slide.title.sliceTwo}
                                </span>
                              )}
                              {slide.title.sliceThree}
                            </h2>
                          )}
                          <div className="hero-btn mt-40 mb-40 mb-lg-0 d-flex align-items-md-center">
                            <div className="fade-slide left" data-delay="0.4">
                              {slide.btnText && (
                                <Link
                                  to="/contact"
                                  className="btn-fill h-btn gap-2 d-flex align-items-center"
                                >
                                  {slide.btnText}
                                  <img
                                    className="btn-icon-black"
                                    src={ArrowTopYellow}
                                    alt="Icon"
                                  />
                                </Link>
                              )}
                            </div>
                            {slide.description && (
                              <div
                                className="fade-slide right"
                                data-delay="0.6"
                              >
                                <p className="entry-sub-title">
                                  {slide.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 d-flex justify-content-md-center align-items-center">
                      <div
                        className="hero-content-right fade-slide top"
                        data-delay="0.6"
                      >
                        <div
                          className="hero-content-video video-pulse-effect cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src={VideoIcon} alt="video-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <img className="hero-line-1" src={HeroBgLine} alt="Image" />
        </div>
        <div className="banner-left-content fade-slide top" data-delay="0.6">
          <ul className="text-gap-box">
            <li className="banner-social-list">
              <Link
                className="banner-social-link"
                to="www.facebook.com"
                target="_blank"
              >
                fb
              </Link>
            </li>
            <li className="banner-social-list">
              <Link
                className="banner-social-link"
                to="www.twitter.com"
                target="_blank"
              >
                TW
              </Link>
            </li>
            <li className="banner-social-list">
              <Link
                className="banner-social-link"
                to="www.linkdien.com"
                target="_blank"
              >
                IN
              </Link>
            </li>
            <li className="banner-social-list">
              <Link
                className="banner-social-link"
                to="www.behance.com"
                target="_blank"
              >
                BE
              </Link>
            </li>
          </ul>
        </div>
        {/* Slider counter  */}
        <div className="banner-right-content slides-number d-flex justify-content-center align-items-center">
          <span className="count_active">
            {String(currentSlideNumber).padStart(2, "0")}
          </span>
          <span className="height" />
          <span className="total">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
        <img
          className="banner-one-shape zoom-in-out"
          src={YellowCircle}
          alt="Banner One Shape Image"
        />
      </div>
      {/* shape  */}
      <img className="hero-shape" src={HeroOneShape} alt="Shape" />
      <img className="hero-shape-bg moveBottom" src={HeroShapeBg} alt="Shape" />
    </section>
  );
}

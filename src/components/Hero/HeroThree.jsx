import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import LogoTwoSmall from "@/assets/images/logos/logo-two-small.png";
import PhonePlusYellow from "@/assets/images/icons/phone-plus-yellow.svg";
import hShapeThreeOne from "@/assets/images/shapes/h-shape-three-1.png";
import hShapeThreeTwo from "@/assets/images/shapes/h-shape-three-2.png";
import pTwoShapeOne from "@/assets/images/shapes/p-two-shape-1.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function HeroThree() {
  const sliderOption = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="hero-area-3 banner position-relative">
      <div className="container-xxl">
        <div className="hero-content-3 text-center">
          <Slider {...sliderOption} className="hero-content-slider">
            <div className="hero-slide-item-3">
              <span
                className="section-subtitle pb-10 fade-slide top"
                data-delay="0.2"
              >
                Dedicated to Protecting Your Rights and Future
              </span>
              <h1
                className="section-title-lg mb-20 fade-slide bottom"
                data-delay="0.4"
              >
                We Provide Legal Zstal Our
                <span className="title-yellow">Law Firm</span>
              </h1>
              <div className="fade-slide bottom" data-delay="0.6">
                <p className="hero-text-3 mb-30">
                  Mauris nec auctor velit. Maecenas ultricies facilisis lectus
                  vel auctor. Maecenas erat nunc, placerat vitae finibus et,
                  tincidunt vitae erat.
                </p>
              </div>
              <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                <div className="fade-slide left" data-delay="0.7">
                  <Link
                    href="contact"
                    className="btn-fill gap-2 d-flex align-items-center"
                  >
                    Free Consultancy
                    <img
                      className="btn-icon-black"
                      src={ArrowTopYellow}
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div className="fade-slide right" data-delay="0.8">
                  <Link href="contact" className="btn-gradiant">
                    Contact Us
                    <img src={ArrowTopBlack} alt="Icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-slide-item-3">
              <span className="section-subtitle pb-10">
                Dedicated to Protecting Your Rights and Future
              </span>
              <h1 className="section-title-lg mb-20">
                We Provide Legal Zstal Our
                <span className="title-yellow">Law Firm</span>
              </h1>
              <p className="hero-text-3 mb-30">
                Mauris nec auctor velit. Maecenas ultricies facilisis lectus vel
                auctor. Maecenas erat nunc, placerat vitae finibus et, tincidunt
                vitae erat.
              </p>
              <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                <Link
                  href="contact"
                  className="btn-fill gap-2 d-flex align-items-center"
                >
                  Free Consultancy
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icon"
                  />
                </Link>
                <Link href="contact" className="btn-gradiant">
                  Contact Us
                  <img src={ArrowTopBlack} alt="Icon" />
                </Link>
              </div>
            </div>
            <div className="hero-slide-item-3">
              <span className="section-subtitle pb-10">
                Dedicated to Protecting Your Rights and Future
              </span>
              <h1 className="section-title-lg mb-20">
                We Provide Legal Zstal Our
                <span className="title-yellow">Law Firm</span>
              </h1>
              <p className="hero-text-3 mb-30">
                Mauris nec auctor velit. Maecenas ultricies facilisis lectus vel
                auctor. Maecenas erat nunc, placerat vitae finibus et, tincidunt
                vitae erat.
              </p>
              <div className="hero-btn-3 mt-40 mb-40 mb-lg-0 d-flex justify-content-center gap-4">
                <Link
                  href="contact"
                  className="btn-fill gap-2 d-flex align-items-center"
                >
                  Free Consultancy
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icon"
                  />
                </Link>
                <Link href="contact" className="btn-gradiant">
                  Contact Us
                  <img src={ArrowTopBlack} alt="Icon" />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        {/* Circle  */}
        <div className="hero-circle-3 d-flex justify-content-md-end">
          <div className="about-text-circle position-relative">
            <div className="circle_textwrap fade-slide bottom" data-delay="0.6">
              <svg
                viewBox="0 0 300 300"
                width="100%"
                className="text-circle rotate"
              >
                <path
                  id="criclePath"
                  d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
                  fill="transparent"
                />
                <text className="circle_text">
                  <textPath className="circle-color" xlinkHref="#criclePath">
                    Zstal law Group Company Welcome to our
                  </textPath>
                </text>
              </svg>
              <div className="about-circle-logo">
                <img src={LogoTwoSmall} alt="company-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-two-textwrap fade-slide top" data-delay="0.6">
          <p className="hero-text-left">we are the best Our law firm</p>
        </div>
        <div className="hero-two-contact fade-slide top" data-delay="0.8">
          <span className="hero-two-phone">
            <img src={PhonePlusYellow} alt="Icon" />
          </span>
          <Link className="hero-contact-link" href="tel:+12223334455">
            + 1 222 333 44 55
          </Link>
        </div>
      </div>
      {/* Shape */}
      <img
        className="hero-shape-three-1 zoom-in-out"
        src={hShapeThreeOne}
        alt="Shape"
      />
      <img
        className="hero-shape-three-2 zoom-in-out"
        src={hShapeThreeTwo}
        alt="Shape"
      />
      <img className="hero-shape-three-3" src={pTwoShapeOne} alt="Shape" />
    </section>
  );
}

import LogoTwoSmall from "@/assets/images/logos/logo-two-small.png";
import CloseCircleImage from "@/assets/images/shapes/close-circle.png";
import PhonePlusDarkIcon from "@/assets/images/icons/phone-plus-dark.svg";
import HeroTwoShape from "@/assets/images/shapes/hero-two-shape.png";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import { Link } from "react-router-dom";

export default function HeroTwo() {
  return (
    <section className="hero hero-two pb-120 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="hero-content-left hero-content-left-two">
              <span
                className="section-subtitle pb-10 fade-slide right"
                data-delay="0.2"
              >
                Dedicated to Protecting Your Rights and Future
              </span>
              <h1 className="section-title-lg move-line-3d">
                We Are The Best Our
                <span className="title-yellow">Law Firm</span>
              </h1>
              <div className="fade-slide bottom" data-delay="0.5">
                <p className="hero-content-2 mb-30">
                  Mauris nec auctor velit. Maecenas ultricies facilisis lectus
                  vel auctor. Maecenas erat nunc, placerat vitae finibus et,
                  tincidunt vitae erat.
                </p>
              </div>
              <div className="hero-btn-2 mt-40 gap-4 mb-40 mb-lg-0 d-flex">
                <div className="fade-slide left" data-delay="0.6">
                  <Link
                    href="contact"
                    className="btn-fill gap-2 h-btn d-flex align-items-center"
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
                  <Link
                    href="contact"
                    className="btn-gradiant gap-2 h-two-btn d-flex align-items-center"
                  >
                    Contact Us
                    <img src={ArrowTopBlack} alt="Icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="hero-two-circle d-flex justify-content-md-end">
              <div
                className="about-text-circle position-relative fade-slide bottom"
                data-delay="0.8"
              >
                <div className="circle_textwrap">
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
                      <textPath
                        className="circle-color"
                        xlinkHref="#criclePath"
                      >
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
          </div>
        </div>
      </div>
      <div className="hero-two-textwrap fade-slide top" data-delay="0.8">
        <img src={CloseCircleImage} alt="Icon" />
        <p className="hero-text-left">we are the best Our law firm</p>
        <img src={CloseCircleImage} alt="Icon" />
      </div>
      <div className="hero-two-contact fade-slide top" data-delay="0.7">
        <span className="hero-two-phone">
          <img src={PhonePlusDarkIcon} alt="Icon" />
        </span>
        <Link className="hero-contact-link" href="tel:+12223334455">
          + 1 222 333 44 55
        </Link>
      </div>
      {/* Shape  */}
      <img className="hero-two-shape" src={HeroTwoShape} alt="Shape" />
    </section>
  );
}

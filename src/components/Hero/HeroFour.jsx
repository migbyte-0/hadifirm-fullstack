import ColorIconOne from "@/assets/images/svg/color-icon-1.svg";
import ColorIconTwo from "@/assets/images/svg/color-icon-2.svg";
import LogoTwoSmall from "@/assets/images/logos/logo-two-small.png";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import HeroFourShapeOne from "@/assets/images/shapes/hero-shape-four-1.png";
import HeroFourShapeTwo from "@/assets/images/shapes/hero-shape-four-2.png";
import HeroFourShapeThree from "@/assets/images/shapes/hero-shape-four-3.png";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function HeroFour() {
  const sliderOptions = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="hero hero-area-4 position-relative overflow-hidden">
      <div className="container">
        <div className="hero-content-4">
          <div className="row align-items-center">
            <div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4 col-md-10">
              <Slider {...sliderOptions} className="hero-slider-4">
                <div className="hero-slide-4">
                  <span
                    className="section-subtitle pb-10 fade-slide top"
                    data-delay="0.2"
                  >
                    Dedicated Free Consultancy
                  </span>
                  <h1
                    className="hero-title-4 fade-slide bottom"
                    data-delay="0.4"
                  >
                    Legal Insight Law Firm <span>Success</span>
                  </h1>
                  <div className="fade-slide bottom" data-delay="0.6">
                    <p className="hero-text-4">
                      Mauris nec auctor velit. Maecenas ultricies facilisis
                      lectus vel auctor. Maecenas erat nunc, placerat vitae
                      finibu.
                    </p>
                  </div>
                  <div
                    className="hero-four-card mt-40 mb-40 mb-lg-0 d-flex fade-slide bottom"
                    data-delay="0.8"
                  >
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h2 className="hero-subtitle-4">Car Accidents Law.</h2>
                      </div>
                      <img src={ColorIconOne} alt="Icon" />
                    </div>
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h3 className="hero-subtitle-4">Car Accidents Law.</h3>
                      </div>
                      <img src={ColorIconTwo} alt="Icon" />
                    </div>
                  </div>
                </div>
                <div className="hero-slide-4">
                  <span className="section-subtitle pb-10">
                    Dedicated Free Consultancy
                  </span>
                  <h1 className="hero-title-4">
                    Legal Insight Law Firm <span>Success</span>
                  </h1>
                  <p className="hero-text-4">
                    Mauris nec auctor velit. Maecenas ultricies facilisis lectus
                    vel auctor. Maecenas erat nunc, placerat vitae finibu.
                  </p>
                  <div className="hero-four-card mt-40 mb-40 mb-lg-0 d-flex">
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h2 className="hero-subtitle-4">Car Accidents Law.</h2>
                      </div>
                      <img src={ColorIconOne} alt="Icon" />
                    </div>
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h3 className="hero-subtitle-4">Car Accidents Law.</h3>
                      </div>
                      <img src={ColorIconTwo} alt="Icon" />
                    </div>
                  </div>
                </div>
                <div className="hero-slide-4">
                  <span className="section-subtitle pb-10">
                    Dedicated Free Consultancy
                  </span>
                  <h1 className="hero-title-4">
                    Legal Insight Law Firm <span>Success</span>
                  </h1>
                  <p className="hero-text-4">
                    Mauris nec auctor velit. Maecenas ultricies facilisis lectus
                    vel auctor. Maecenas erat nunc, placerat vitae finibu.
                  </p>
                  <div className="hero-four-card mt-40 mb-40 mb-lg-0 d-flex">
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h2 className="hero-subtitle-4">Car Accidents Law.</h2>
                      </div>
                      <img src={ColorIconOne} alt="Icon" />
                    </div>
                    <div className="hero-btm-card">
                      <div className="card-content">
                        <p className="hero-subtext">Real Specialist</p>
                        <h3 className="hero-subtitle-4">Car Accidents Law.</h3>
                      </div>
                      <img src={ColorIconTwo} alt="Icon" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* Contact  */}
      <div className="hero-two-contact">
        <span className="hero-two-phone">
          <img src={PhonePlusDark} alt="Icon" />
        </span>
        <Link className="hero-contact-link" to="tel:+12223334455">
          + 1 222 333 44 55
        </Link>
      </div>
      {/* Circle  */}
      <div className="hero-circle-wrap">
        <div className="about-text-circle position-relative">
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
      {/* Shape */}
      <img
        className="hero-shape-four-1 zoom-in-out"
        src={HeroFourShapeOne}
        alt="Shape"
      />
      <img className="hero-shape-four-2" src={HeroFourShapeTwo} alt="Shape" />
      <img className="hero-shape-four-3" src={HeroFourShapeThree} alt="Shape" />
      <img className="hero-shape-four-4" src={ShadowShape} alt="Shape" />
    </section>
  );
}

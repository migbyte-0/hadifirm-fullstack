import HeroSmImage from "@/assets/images/thumb/hero-sm-img-5.webp";
import StarWhite from "@/assets/images/icons/star-white.svg";
import TsLeftIcon from "@/assets/images/icons/ts-left-icon.svg";
import TsRightIcon from "@/assets/images/icons/ts-right-icon.svg";
import LinkedInDark from "@/assets/images/icons/linkdien-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import VideoImage from "@/assets/images/svg/video-icon.svg";
import HeroBannerFive from "@/assets/images/banners/hero-banner-5.webp";
import HeroBgLineFive from "@/assets/images/bg/hero-bg-line-5.png";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroFive() {
  const slider = useRef();
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const sliderOption = {
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    loop: true,
    arrows: false,
    beforeChange: (currentSlide, nextSlide) =>
      setCurrentSlideNumber(nextSlide + 1),
  };
  return (
    <section className="hero-area-5 position-relative">
      <div className="container">
        {/* Slider  */}
        <Slider ref={slider} {...sliderOption} className="hero-slider-5">
          <div className="hero-slide-5">
            <h1 className="section-title-lg move-line-3d" data-delay="0.2">
              Your Trusted Legal Advocates
            </h1>
            <div className="hero-title-btm">
              <img
                className="hero-sub-img fade-slide left"
                data-delay="0.4"
                src={HeroSmImage}
                alt="Image"
              />
              <div
                className="hero-text-wrap-5 fade-slide right"
                data-delay="0.4"
              >
                <span className="hero-star-icon">
                  <img src={StarWhite} alt="Image" />
                </span>
                <div className="hero-subtext-wrap">
                  <span className="hero-subtext">5 Star</span>
                  <p className="hero-subtext">
                    <span className="read-our">Read Our</span>
                    <span className="success-story">{"Success Story's"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide-5">
            <h2 className="section-title-lg">Your Trusted Legal Advocates</h2>
            <div className="hero-title-btm">
              <img className="hero-sub-img" src={HeroSmImage} alt="Image" />
              <div className="hero-text-wrap-5">
                <span className="hero-star-icon">
                  <img src={StarWhite} alt="Image" />
                </span>
                <div className="hero-subtext-wrap">
                  <span className="hero-subtext">5 Star</span>
                  <p className="hero-subtext">
                    <span className="read-our">Read Our</span>
                    <span className="success-story">{"Success Story's"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide-5">
            <h3 className="section-title-lg">Your Trusted Legal Advocates</h3>
            <div className="hero-title-btm">
              <img className="hero-sub-img" src={HeroSmImage} alt="Image" />
              <div className="hero-text-wrap-5">
                <span className="hero-star-icon">
                  <img src={StarWhite} alt="Image" />
                </span>
                <div className="hero-subtext-wrap">
                  <span className="hero-subtext">5 Star</span>
                  <p className="hero-subtext">
                    <span className="read-our">Read Our</span>
                    <span className="success-story">{"Success Story's"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="slide-btn-wrap">
          <button className="slide-btn prev-btn" onClick={previous}>
            <img src={TsLeftIcon} alt="Icon" />
          </button>
          <button className="slide-btn next-btn" onClick={next}>
            <img src={TsRightIcon} alt="Icon" />
          </button>
        </div>
      </div>
      {/* Slider counter  */}
      <div className="banner-right-content slides-number d-flex justify-content-center align-items-center">
        <span className="count_active">
          {String(currentSlideNumber).padStart(2, "0")}
        </span>
        <span className="height" />
        <span className="total">03</span>
      </div>
      {/* Social */}
      <div className="hero-social-5">
        <ul className="social-icon">
          <li>
            <Link
              className="footer-social-link"
              to="www.linkdien.com"
              target="_blank"
            >
              <img className="social-icon" src={LinkedInDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="footer-social-link"
              to="www.twitter.com"
              target="_blank"
            >
              <img className="social-icon" src={TwitterDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="footer-social-link"
              to="www.facebook.com"
              target="_blank"
            >
              <img className="social-icon" src={FacebookDark} alt="Icon" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Video  */}
      <div className="hero-video-icon d-none d-md-block">
        <div
          className="video-play video-pulse-effect z-index cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img src={VideoImage} alt="video-icon" />
        </div>
      </div>
      {/* Banner image */}
      <img className="hero-img-5" src={HeroBannerFive} alt="Image" />
      {/* Line shape  */}
      <img className="hero-bg-line-5" src={HeroBgLineFive} alt="Shape" />
    </section>
  );
}

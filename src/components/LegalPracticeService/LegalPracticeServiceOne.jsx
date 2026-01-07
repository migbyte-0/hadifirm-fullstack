import SlideImageOne from "@/assets/images/services/slide-img-1.webp";
import SlideImageTwo from "@/assets/images/services/slide-img-2.webp";
import SlideImageThree from "@/assets/images/services/slide-img-3.webp";
import SlideImageFour from "@/assets/images/services/slide-img-4.webp";
import SlideOneIcon from "@/assets/images/icons/s-slide-1.png";
import SlideTwoIcon from "@/assets/images/icons/s-slide-2.png";
import SlideThreeIcon from "@/assets/images/icons/s-slide-3.png";
import SlideFourIcon from "@/assets/images/icons/s-slide-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import ServiceTwoShapeOne from "@/assets/images/shapes/s-shape-two-1.png";
import ServiceTwoShapeTwo from "@/assets/images/shapes/s-shape-two-2.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function LegalPracticeServiceOne() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="service-two pt-150 pb-150 position-relative mb-sm-30">
      <div className="service-two-content text-center pb-50 mx-sm-350">
        <span
          className="section-subtitle pb-10 fade-slide bottom"
          data-delay="0.2"
        >
          Our Best Of Service
        </span>
        <h2
          className="section-title text-center fade-slide bottom"
          data-delay="0.4"
        >
          What People Says Our Best Of
          <span className="title-yellow">Legal Practice Areas</span>
        </h2>
      </div>
      <Slider
        {...sliderOption}
        className="service-slider-two fade-slide bottom"
        data-delay="0.6"
      >
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageOne} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideOneIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Criminal Defense
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
          </div>
          <Link to="/service-detail" className="service-slide-arrowIcon">
            <img src={ArrowTopBlack} alt="Icon" />
          </Link>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageTwo} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideTwoIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Contract Review
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
          </div>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageThree} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideThreeIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Immigration Issues
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
            <Link to="/service-detail" className="service-slide-arrowIcon">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageFour} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideFourIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Business law
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
          </div>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageThree} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideOneIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Criminal Defense
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
          </div>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageTwo} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideTwoIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Business law
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
            <Link to="/service-detail" className="service-slide-arrowIcon">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="service-two-slide">
          <div className="service-slide-img">
            <img src={SlideImageFour} alt="Image" />
          </div>
          <div className="service-slideText-wrap">
            <div className="service-slide-iconwrap">
              <img
                className="service-slide-icon"
                src={SlideThreeIcon}
                alt="Image"
              />
            </div>
            <div className="service-slide-content">
              <h3>
                <Link className="service-slide-title" to="/service-detail">
                  Criminal Defense
                </Link>
              </h3>
              <p className="service-slide-text">
                Maecenas efficitur neque posu rutrum justo vel, placerat.
              </p>
            </div>
          </div>
          <Link to="/service-detail" className="service-slide-arrowIcon">
            <img src={ArrowTopBlack} alt="Icon" />
          </Link>
        </div>
      </Slider>
      {/* Shape */}
      <img
        className="service-two-shape-1"
        src={ServiceTwoShapeOne}
        alt="Icon"
      />
      <img
        className="service-two-shape-2"
        src={ServiceTwoShapeTwo}
        alt="Icon"
      />
    </section>
  );
}

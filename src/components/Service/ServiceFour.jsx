import Slider from "react-slick";

import SrSliderImageOne from "@/assets/images/services/sr-slide-1.webp";
import SrSliderImageTwo from "@/assets/images/services/sr-slide-2.webp";
import SrSliderImageThree from "@/assets/images/services/sr-slide-3.webp";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark-sm.svg";
import SrIconOne from "@/assets/images/icons/sr-icon-1.png";
import SrIconTwo from "@/assets/images/icons/sr-icon-2.png";
import SrIconThree from "@/assets/images/icons/sr-icon-3.png";
import CircleYellowSm from "@/assets/images/shapes/circle-yellow-sm.png";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import { Link } from "react-router-dom";

export default function ServiceFour() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 3,
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
        breakpoint: 768,
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
    <section className="service-area-5 pt-100 pb-100 position-relative overflow-hidden">
      <Slider {...sliderOption} className="service-slider-5">
        {/* Slide  */}
        <div className="service-slide">
          <div
            className="service-item-5"
            style={{
              backgroundImage: `url(${SrSliderImageOne})`,
            }}
          >
            <div className="service-iconwrap-5">
              <img src={SrIconOne} alt="Icon" />
            </div>
            <div className="service-textwrap-5">
              <h2>
                <Link className="service-title-5" to="/service-detail">
                  Education Law
                </Link>
              </h2>
              <p className="service-text-5">
                Pellentesque sit amet urna justo. Fusce velit nibh commodo
                iaculis estibulum condimentum.
              </p>
              <Link className="btn-fill" to="/service-detail">
                Read More
                <img className="btn-icon-black" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
        {/* Slide  */}
        <div className="service-slide">
          <div
            className="service-item-5"
            style={{
              backgroundImage: `url(${SrSliderImageTwo})`,
            }}
          >
            <div className="service-iconwrap-5">
              <img src={SrIconTwo} alt="Icon" />
            </div>
            <div className="service-textwrap-5">
              <h2>
                <Link className="service-title-5" to="/service-detail">
                  Family Law
                </Link>
              </h2>
              <p className="service-text-5">
                Pellentesque sit amet urna justo. Fusce velit nibh commodo
                iaculis estibulum condimentum.
              </p>
              <Link className="btn-fill" to="/service-detail">
                Read More
                <img className="btn-icon-black" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
        {/* Slide  */}
        <div className="service-slide">
          <div
            className="service-item-5"
            style={{
              backgroundImage: `url(${SrSliderImageThree})`,
            }}
          >
            <div className="service-iconwrap-5">
              <img src={SrIconThree} alt="Icon" />
            </div>
            <div className="service-textwrap-5">
              <h2>
                <Link className="service-title-5" to="/service-detail">
                  Business Low
                </Link>
              </h2>
              <p className="service-text-5">
                Pellentesque sit amet urna justo. Fusce velit nibh commodo
                iaculis estibulum condimentum.
              </p>
              <Link className="btn-fill" to="/service-detail">
                Read More
                <img className="btn-icon-black" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
        {/* Slide  */}
        <div className="service-slide">
          <div
            className="service-item-5"
            style={{
              backgroundImage: `url(${SrSliderImageOne})`,
            }}
          >
            <div className="service-iconwrap-5">
              <img src={SrIconTwo} alt="Icon" />
            </div>
            <div className="service-textwrap-5">
              <h2>
                <Link className="service-title-5" to="/service-detail">
                  Education Law
                </Link>
              </h2>
              <p className="service-text-5">
                Pellentesque sit amet urna justo. Fusce velit nibh commodo
                iaculis estibulum condimentum.
              </p>
              <Link className="btn-fill" to="/service-detail">
                Read More
                <img className="btn-icon-black" src={ArrowTopDark} alt="Icon" />
              </Link>
            </div>
          </div>
        </div>
      </Slider>
      {/* Shape */}
      <img className="service-shape-five-1" src={CircleYellowSm} alt="Shape" />
      <img className="service-shape-five-2" src={ShadowShape} alt="Shape" />
    </section>
  );
}

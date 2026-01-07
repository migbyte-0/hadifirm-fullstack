import ServiceCardImageOne from "@/assets/images/home-3/card-img-1.webp";
import ServiceCardImageTwo from "@/assets/images/home-3/card-img-2.webp";
import ServiceCardImageThree from "@/assets/images/home-3/card-img-3.webp";
import HomeThreeIconOne from "@/assets/images/svg/h3-icon-1.svg";
import HomeThreeIconTwo from "@/assets/images/svg/h3-icon-2.svg";
import SimpleIconTwo from "@/assets/images/svg/simple-icon-2.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import CircleShapeYellow from "@/assets/images/shapes/circle-shape-yellow.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function CaseStudyFour() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
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
    <section className="service-area-6 pb-150 position-relative mb-sm-50">
      <div className="container">
        <div className="service-content">
          <div className="col-12 col-md-8 col-lg-7 m-auto pb-40 text-center">
            <span
              className="section-subtitle fade-slide bottom"
              data-delay="0.2"
            >
              Our Best Of Service
            </span>
            <h2 className="section-title fade-slide bottom" data-delay="0.4">
              What People Says Our Best Of
              <span className="title-yellow">Legal Practice Areas</span>
            </h2>
          </div>
          <Slider
            {...sliderOption}
            className="gallery-card-grid-3 gallery-slide-content mb-50"
          >
            <div className="service-item-3">
              <img
                className="service-img-3"
                src={ServiceCardImageOne}
                alt="Crimanal"
              />
              <div className="service-text">
                <div className="service-iconwrap-3">
                  <img src={HomeThreeIconOne} alt="Criminal" />
                </div>
                <h3>
                  <Link className="service-title-3" to="/case-detail">
                    Dui Defense Law
                  </Link>
                </h3>
                <Link to="/case-detail" className="service-btn-3">
                  Case Details
                  <img
                    className="service-icon-3"
                    src={ArrowTopDark}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            <div className="service-item-3">
              <img
                className="service-img-3"
                src={ServiceCardImageTwo}
                alt="Crimanal"
              />
              <div className="service-text">
                <div className="service-iconwrap-3">
                  <img src={HomeThreeIconTwo} alt="Criminal" />
                </div>
                <h3>
                  <Link className="service-title-3" to="/case-detail">
                    Dui Defense Law
                  </Link>
                </h3>
                <Link to="/case-detail" className="service-btn-3">
                  Case Details
                  <img
                    className="service-icon-3"
                    src={ArrowTopDark}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            <div className="service-item-3">
              <img
                className="service-img-3"
                src={ServiceCardImageThree}
                alt="Crimanal"
              />
              <div className="service-text">
                <div className="service-iconwrap-3">
                  <img src={SimpleIconTwo} alt="Criminal" />
                </div>
                <h3>
                  <Link className="service-title-3" to="/case-detail">
                    Dui Defense Law
                  </Link>
                </h3>
                <Link to="/case-detail" className="service-btn-3">
                  Case Details
                  <img
                    className="service-icon-3"
                    src={ArrowTopDark}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            <div className="service-item-3">
              <img
                className="service-img-3"
                src={ServiceCardImageTwo}
                alt="Crimanal"
              />
              <div className="service-text">
                <div className="service-iconwrap-3">
                  <img src={HomeThreeIconOne} alt="Criminal" />
                </div>
                <h3>
                  <Link className="service-title-3" to="/case-detail">
                    Dui Defense Law
                  </Link>
                </h3>
                <Link to="/case-detail" className="service-btn-3">
                  Case Details
                  <img
                    className="service-icon-3"
                    src={ArrowTopDark}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Shape */}
      <img
        className="service-shape-five zoom-in-out"
        src={CircleShapeYellow}
        alt="Shape"
      />
    </section>
  );
}

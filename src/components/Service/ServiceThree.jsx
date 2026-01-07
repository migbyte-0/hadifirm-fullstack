import CardImageOne from "@/assets/images/home-3/card-img-1.webp";
import CardImageTwo from "@/assets/images/home-3/card-img-2.webp";
import CardImageThree from "@/assets/images/home-3/card-img-3.webp";
import h3Icon from "@/assets/images/svg/h3-icon-2.svg";
import h3IconOne from "@/assets/images/svg/h3-icon-1.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import CircleShapeYellow from "@/assets/images/shapes/circle-shape-yellow.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function ServiceThree() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <section className="service-area-3 pt-150 pb-150 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="service-left-4">
              <span
                className="section-subtitle pb-20 fade-slide top"
                data-delay="0.2"
              >
                Our Best Of Service
              </span>
              <h2
                className="section-title mb-20 fade-slide bottom"
                data-delay="0.4"
              >
                What People Says Our Best Of
                <span className="title-yellow">Legal Practice Areas</span>
              </h2>
              <div className="fade-slide bottom" data-delay="0.6">
                <p className="service-content-3">
                  Morbi posuere interdum viverra. Vivamus feugiat hendrerit
                  nulla vitae finibus. Nam in viverra neque. Maecenas fermentum
                  vehicula mauris.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-8 col-lg-8 col-md-12 fade-slide bottom"
            data-delay="0.4"
          >
            <Slider {...sliderOption} className="service-right-4">
              <div className="service-item-3">
                <img
                  className="service-img-3"
                  src={CardImageOne}
                  alt="Crimanal"
                />
                <div className="service-text">
                  <div className="service-iconwrap-3">
                    <img src={h3Icon} alt="Criminal" />
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
                  src={CardImageTwo}
                  alt="Crimanal"
                />
                <div className="service-text">
                  <div className="service-iconwrap-3">
                    <img src={h3IconOne} alt="Criminal" />
                  </div>
                  <h3>
                    <Link className="service-title-3" to="/case-detail">
                      Personal Injury Law
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
                  src={CardImageThree}
                  alt="Crimanal"
                />
                <div className="service-text">
                  <div className="service-iconwrap-3">
                    <img src={h3Icon} alt="Criminal" />
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
      </div>
      {/* Shape */}
      <img
        className="service-shape-three-1 zoom-in-out"
        src={CircleShapeYellow}
        alt="Shape"
      />
    </section>
  );
}

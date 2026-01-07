import PencilIcon from "@/assets/images/svg/pencil.png";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ServiceIconThree from "@/assets/images/svg/service-icon-3.svg";
import PaymentIcon from "@/assets/images/svg/payment-icon.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function ServiceFive() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
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
          slidesToScroll: 2,
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
    <section className="service-card-2 service-card-3">
      <div className="container">
        <Slider
          {...sliderOption}
          className="service-slider service-slider-2 position-relative pb-40-md-60"
        >
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="card-group text-card position-relative">
              <div className="card h-100">
                <div className="card-body">
                  <div className="img">
                    <img
                      src={PencilIcon}
                      className="card-img-top mt-20 mb-40"
                      alt="img"
                    />
                  </div>
                  <h2>
                    <Link className="service-card-title" to="/service-detail">
                      Zstal Law Group Affordable Legal Fees
                    </Link>
                  </h2>
                  <p className="card-text newsroom-card-text mb-40">
                    Pellentesque sit amet urna justo. Fusce velit nibh commodo
                    iaculis vestibulum condimentum.
                  </p>
                  <Link
                    className="card-icon btn-hover-radius"
                    to="/service-detail"
                  >
                    <img
                      className="card-icon-black"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="card-group text-card position-relative">
              <div className="card h-100">
                <div className="card-body">
                  <div className="img support-icon">
                    <img
                      src={ServiceIconThree}
                      className="card-img-top mt-20 mb-40"
                      alt="Image"
                    />
                  </div>
                  <h2>
                    <Link className="service-card-title" to="/service-detail">
                      stal Law Group Support Available 24/7
                    </Link>
                  </h2>
                  <p className="card-text newsroom-card-text mb-40">
                    Pellentesque sit amet urna justo. Fusce velit nibh commodo
                    iaculis vestibulum condimentum.
                  </p>
                  <Link
                    className="card-icon btn-hover-radius"
                    to="/service-detail"
                  >
                    <img
                      className="card-icon-black"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="card-group text-card position-relative">
              <div className="card h-100">
                <div className="card-body">
                  <div className="img payment-icon">
                    <img
                      src={PaymentIcon}
                      className="card-img-top mt-20 mb-40"
                      alt="img"
                    />
                  </div>
                  <h2>
                    <Link className="service-card-title" to="/service-detail">
                      Zstal Law Group Payment Plans Available
                    </Link>
                  </h2>
                  <p className="card-text newsroom-card-text mb-40">
                    Pellentesque sit amet urna justo. Fusce velit nibh commodo
                    iaculis vestibulum condimentum.
                  </p>
                  <Link
                    className="card-icon btn-hover-radius"
                    to="/service-detail"
                  >
                    <img
                      className="card-icon-black"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-group text-card position-relative">
            <div className="card h-100">
              <div className="card-body">
                <div className="img support-icon">
                  <img
                    src={ServiceIconThree}
                    className="card-img-top mt-20 mb-40"
                    alt="Image"
                  />
                </div>
                <h2>
                  <Link className="service-card-title" to="/service-detail">
                    Zstal Law Group Support Available 24/7
                  </Link>
                </h2>
                <p className="card-text newsroom-card-text mb-40">
                  Pellentesque sit amet urna justo. Fusce velit nibh commodo
                  iaculis vestibulum condimentum.
                </p>
                <Link
                  className="card-icon btn-hover-radius"
                  to="/service-detail"
                >
                  <img
                    className="card-icon-black"
                    src={ArrowTopDark}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

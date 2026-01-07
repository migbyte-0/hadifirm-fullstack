import Slider from "react-slick";

import Pencil from "@/assets/images/svg/pencil.png";
import ArrowTopWhite from "@/assets/images/icons/arrow-top-white.svg";
import ServieIconThree from "@/assets/images/svg/service-icon-3.svg";
import PaymentIcon from "@/assets/images/svg/payment-icon.svg";
import ServiceShape from "@/assets/images/icons/service-shape.png";
import { Link } from "react-router-dom";

export default function ServiceOne() {
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
    <section className="service-card pt-150 pb-150 position-relative">
      <div className="container">
        <Slider
          {...sliderOption}
          className="service-slider position-relative pb-40-md-60 fade-slide bottom"
          data-delay="0.2"
        >
          <div className="card-group text-card position-relative">
            <div className="card h-100">
              <div className="card-body">
                <div className="img">
                  <img
                    src={Pencil}
                    className="card-img-top mt-20 mb-40"
                    alt="img"
                  />
                </div>
                <h2>
                  <Link className="service-card-title" to="/service-detail">
                    الترافع والتمثيل القضائي
                  </Link>
                </h2>
                <p className="card-text newsroom-card-text mb-40">
                  أمام جميع المحاكم بمختلف درجاتها واختصاصاتها وإعداد وصياغة اللوائح والمذكرات القانونية
                </p>
                <Link
                  className="card-icon btn-hover-radius"
                  to="/service-detail"
                >
                  <img
                    className="card-icon-black"
                    src={ArrowTopWhite}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="card-group text-card position-relative">
            <div className="card h-100">
              <div className="card-body">
                <div className="img support-icon">
                  <img
                    src={ServieIconThree}
                    className="card-img-top mt-20 mb-40"
                    alt="Service Icon Three"
                  />
                </div>
                <h2>
                  <Link className="service-card-title" to="/service-detail">
                    الاستشارات القانونية النظامية
                  </Link>
                </h2>
                <p className="card-text newsroom-card-text mb-40">
                  تقديم الاستشارات القانونية النظامية للأفراد والشركات وصياغة ومراجعة العقود التجارية والمدنية
                </p>
                <Link
                  className="card-icon btn-hover-radius"
                  to="/service-detail"
                >
                  <img
                    className="card-icon-black"
                    src={ArrowTopWhite}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
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
                    خدمات التوثيق المعتمدة
                  </Link>
                </h2>
                <p className="card-text newsroom-card-text mb-40">
                  الوكالات والإقرارات والمخالصات والعقود وتسوية النزاعات والصلح قبل وأثناء التقاضي
                </p>
                <Link
                  className="card-icon btn-hover-radius"
                  to="/service-detail"
                >
                  <img
                    className="card-icon-black"
                    src={ArrowTopWhite}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="card-group text-card position-relative">
            <div className="card h-100">
              <div className="card-body">
                <div className="img support-icon">
                  <img
                    src={ServieIconThree}
                    className="card-img-top mt-20 mb-40"
                    alt="Card Top Image"
                  />
                </div>
                <h2>
                  <Link className="service-card-title" to="/service-detail">
                    قضايا التنفيذ وتحصيل الحقوق
                  </Link>
                </h2>
                <p className="card-text newsroom-card-text mb-40">
                  القضايا التجارية والمطالبات المالية وقضايا المقاولات والتحصيل
                </p>
                <Link
                  className="card-icon btn-hover-radius"
                  to="/service-detail"
                >
                  <img
                    className="card-icon-black"
                    src={ArrowTopWhite}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
        <img
          className="service-icon moveBottom"
          src={ServiceShape}
          alt="Icon"
        />
      </div>
    </section>
  );
}

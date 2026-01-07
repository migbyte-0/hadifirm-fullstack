import PortfolioSliderOne from "@/assets/images/portfolios/p-slide-1.webp";
import PortfolioSliderTwo from "@/assets/images/portfolios/p-slide-2.webp";
import PortfolioSliderThree from "@/assets/images/portfolios/p-slide-3.webp";
import PortfolioSliderFour from "@/assets/images/portfolios/p-slide-4.webp";
import PortfolioSliderFive from "@/assets/images/portfolios/p-slide-5.webp";
import PortfolioIconOne from "@/assets/images/icons/p-icon-1.png";
import PortfolioIconTwo from "@/assets/images/icons/p-icon-2.png";
import PortfolioIconThree from "@/assets/images/icons/p-icon-3.png";
import PortfolioIconFour from "@/assets/images/icons/p-icon-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function PortfolioThree() {
  const sliderOption = {
    dots: false,
    infinite: true,
    loop: false,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <section className="portfolio-area-5 pb-120">
      <div className="portfolio-top-5 text-center pb-50">
        <span
          className="section-subtitle fade-slide bottom pb-sm-20"
          data-delay="0.2"
        >
          Latest Case study
        </span>
        <h2 className="section-title fade-slide bottom" data-delay="0.4">
          Discover The Best Works Check
          <span className="title-yellow"> Our Portfolio</span>
        </h2>
      </div>
      {/* Slider  */}
      <Slider {...sliderOption} className="portfolio-slider-5">
        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderOne})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconOne}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">Mockup Design</span>
              <h3 className="portfolio-title-5">
                Buttle Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>

        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderTwo})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconTwo}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">Mockup Design</span>
              <h3 className="portfolio-title-5">
                Buttle Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>

        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderThree})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconThree}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">Mockup Design</span>
              <h3 className="portfolio-title-5">
                Buttle Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>

        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderFour})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconFour}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">Mockup Design</span>
              <h3 className="portfolio-title-5">
                Buttle Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>

        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderFive})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconThree}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">UX Design</span>
              <h3 className="portfolio-title-5">
                UX Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>

        <div className="portfolio-slide">
          <div
            className="portfolio-slide-5"
            style={{
              backgroundImage: `url(${PortfolioSliderThree})`,
            }}
          >
            <div className="portfolio-iconwrap-5">
              <img
                className="portfolio-icon"
                src={PortfolioIconOne}
                alt="Icon"
              />
            </div>
            <div className="portfolio-titlewrap-5">
              <span className="portfolio-subtitle-5">UI Design</span>
              <h3 className="portfolio-title-5">
                UI Mockup Template Design 2023
              </h3>
            </div>
            <Link className="btn-icon" to="/case-detail">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
      </Slider>
    </section>
  );
}

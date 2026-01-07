import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import StudyPortfolioImage from "@/assets/images/services/study.webp";
import PortfolioTwoShapeOne from "@/assets/images/shapes/p-two-shape-1.png";
import PortfolioTwoShapeTwo from "@/assets/images/shapes/p-two-shape-2.png";
import PortfolioTwoShapeThree from "@/assets/images/shapes/about-shape-3.png";
import PortfolioTwoShapeFour from "@/assets/images/shapes/about-shape-4.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function PortfolioTwo() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
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
    <section className="portfolio-area-2 pt-150 position-relative">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-50">
          <div
            className="col porfolio-top-text fade-slide bottom"
            data-delay="0.2"
          >
            <span className="section-subtitle pb-10">Latest Case study</span>
            <h2 className="section-title pb-sm-20">
              The Works Check Our
              <span className="title-yellow"> Case study</span>
            </h2>
          </div>
          <div
            className="section-btn d-inline-block mb-30 mb-sm-0 fade-slide top"
            data-delay="0.4"
          >
            <Link
              to="/contact"
              className="btn-fill gap-2 s-btn d-flex align-items-center"
            >
              Free Consultancy
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
        <Slider {...sliderOption} className="case-study mb-30 mb-md-0">
          <div className="col">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-12 col-md-10 col-lg-6 study-left">
                <ul>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Business law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Contract Review</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Criminal Defense</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Immigration Issues</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10 col-lg-6 study-right mb-20 mb-lg-0">
                <div className="portfolio-right position-relative">
                  <img src={StudyPortfolioImage} alt="Image" />
                  <div className="project-content-right gap-4">
                    <Link to="/case-detail" className="porfolio-icon-right">
                      <img src={ArrowTopBlack} alt="Image" />
                    </Link>
                    <div className="project-content-wrap">
                      <h3>
                        <Link className="portfolio-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h3>
                      <p className="portfolio-text-2">
                        Maecenas efficitur neque posu rutrum justo vel,
                        placerat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-12 col-md-10 col-lg-6 study-left">
                <ul>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Business law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Contract Review</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Criminal Defense</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Immigration Issues</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10 col-lg-6 study-right mb-20 mb-lg-0">
                <div className="portfolio-right position-relative">
                  <img src={StudyPortfolioImage} alt="Image" />
                  <div className="project-content-right d-flex gap-4">
                    <Link to="/case-detail" className="porfolio-icon-right">
                      <img src={ArrowTopBlack} alt="Image" />
                    </Link>
                    <div className="project-content-wrap">
                      <h3>
                        <Link className="portfolio-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h3>
                      <p className="portfolio-text-2">
                        Maecenas efficitur neque posu rutrum justo vel,
                        placerat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-12 col-md-10 col-lg-6 study-left">
                <ul>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Business law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Contract Review</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Criminal Defense</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Immigration Issues</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10 col-lg-6 study-right mb-20 mb-lg-0">
                <div className="portfolio-right position-relative">
                  <img src={StudyPortfolioImage} alt="Image" />
                  <div className="project-content-right d-flex gap-4">
                    <Link to="/case-detail" className="porfolio-icon-right">
                      <img src={ArrowTopBlack} alt="Image" />
                    </Link>
                    <div className="project-content-wrap">
                      <h3>
                        <Link className="portfolio-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h3>
                      <p className="portfolio-text-2">
                        Maecenas efficitur neque posu rutrum justo vel,
                        placerat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-12 col-md-10 col-lg-6 study-left">
                <ul>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Business law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Contract Review</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Criminal Defense</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Corporate Law</p>
                    </Link>
                  </li>
                  <li className="portfolio-list-2">
                    <Link className="portfolio-link-2" to="/case-detail">
                      <span className="portfolio-iconwrap-2">
                        <img
                          className="portfolio-icon-2"
                          src={ArrowTopDark}
                          alt="Icon"
                        />
                      </span>
                      <p className="portfolio-left-title">Immigration Issues</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10 col-lg-6 study-right mb-20 mb-lg-0">
                <div className="portfolio-right position-relative">
                  <img src={StudyPortfolioImage} alt="Image" />
                  <div className="project-content-right d-flex gap-4">
                    <Link to="/case-detail" className="porfolio-icon-right">
                      <img src={ArrowTopBlack} alt="Image" />
                    </Link>
                    <div className="project-content-wrap">
                      <h3>
                        <Link className="portfolio-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h3>
                      <p className="portfolio-text-2">
                        Maecenas efficitur neque posu rutrum justo vel,
                        placerat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Shape */}
      <img
        className="portfolio-shape-1"
        src={PortfolioTwoShapeOne}
        alt="Icon"
      />
      <img
        className="portfolio-shape-2"
        src={PortfolioTwoShapeTwo}
        alt="Icon"
      />
      <img
        className="portfolio-shape-3 moveBottom"
        src={PortfolioTwoShapeThree}
        alt="Icon"
      />
      <img
        className="portfolio-shape-4"
        src={PortfolioTwoShapeFour}
        alt="Icon"
      />
    </section>
  );
}

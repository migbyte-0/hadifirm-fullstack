import { usePortfolio } from "@/context/HomeContentContext";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import StudyPortfolioImage from "@/assets/images/services/study.webp";
import PortfolioTwoShapeOne from "@/assets/images/shapes/p-two-shape-1.png";
import PortfolioTwoShapeTwo from "@/assets/images/shapes/p-two-shape-2.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function PortfolioTwoDynamic() {
  const { subtitle, title, titleHighlight, buttonText, image, caseStudies, loading } = usePortfolio();

  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
  };

  if (loading) {
    return null;
  }

  const displayCaseStudies = caseStudies.length > 0 ? caseStudies : [
    { title: 'القانون التجاري', link: '/case-detail' },
    { title: 'مراجعة العقود', link: '/case-detail' },
    { title: 'الدفاع الجنائي', link: '/case-detail' },
    { title: 'قانون الشركات', link: '/case-detail' },
    { title: 'قضايا الهجرة', link: '/case-detail' },
  ];

  return (
    <section className="portfolio-area-2 pt-150 position-relative">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-50">
          <div
            className="col porfolio-top-text fade-slide bottom"
            data-delay="0.2"
          >
            <span className="section-subtitle pb-10">{subtitle}</span>
            <h2 className="section-title pb-sm-20">
              {title}
              <span className="title-yellow"> {titleHighlight}</span>
            </h2>
          </div>
          <div
            className="section-btn d-inline-block mb-30 mb-sm-0 fade-slide top"
            data-delay="0.4"
          >
            <Link
              to="/consultation"
              className="btn-fill gap-2 s-btn d-flex align-items-center"
            >
              {buttonText}
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
        <Slider {...sliderOption} className="case-study mb-30 mb-md-0">
          <div className="col">
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-12 col-md-10 col-lg-6 study-left">
                <ul>
                  {displayCaseStudies.slice(0, 6).map((study, index) => (
                    <li key={study.id || index} className="portfolio-list-2">
                      <Link className="portfolio-link-2" to={study.link || '/case-detail'}>
                        <span className="portfolio-iconwrap-2">
                          <img
                            className="portfolio-icon-2"
                            src={ArrowTopDark}
                            alt="Icon"
                          />
                        </span>
                        <p className="portfolio-left-title">{study.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-10 col-lg-6 study-right mb-20 mb-lg-0">
                <div className="portfolio-right position-relative">
                  <img src={image || StudyPortfolioImage} alt="Image" />
                  <div className="project-content-right gap-4">
                    <Link to="/case-detail" className="porfolio-icon-right">
                      <img src={ArrowTopBlack} alt="Image" />
                    </Link>
                    <div className="project-content-wrap">
                      <h3>
                        <Link className="portfolio-title-2" to="/case-detail">
                          {displayCaseStudies[0]?.title || 'الدفاع الجنائي'}
                        </Link>
                      </h3>
                      <p className="portfolio-text-2">
                        {displayCaseStudies[0]?.description || 'نقدم خدمات قانونية متميزة.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Shapes */}
      <img className="portfolio-two-shape-1" src={PortfolioTwoShapeOne} alt="Shape" />
      <img className="portfolio-two-shape-2" src={PortfolioTwoShapeTwo} alt="Shape" />
    </section>
  );
}

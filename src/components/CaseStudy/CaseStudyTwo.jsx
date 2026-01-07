import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import CaseStudyTwoImageOne from "@/assets/images/thumb/case-study-1.webp";
import CaseStudyTwoImageTwo from "@/assets/images/thumb/case-study-2.webp";
import CaseStudyTwoImageThree from "@/assets/images/thumb/case-study-3.webp";
import CaseStudyTwoImageFour from "@/assets/images/thumb/case-study-4.webp";
import sSlideOne from "@/assets/images/icons/s-slide-1.png";
import sSlideTwo from "@/assets/images/icons/s-slide-2.png";
import sSlideThree from "@/assets/images/icons/s-slide-3.png";
import sSlideFour from "@/assets/images/icons/s-slide-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function CaseStudyTwo() {
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <section className="case-study-area-2 pb-150">
      <div className="container">
        <div className="case-study-top-2 pb-50">
          <div className="case-study-topitem fade-slide left" data-delay="0.2">
            <span className="section-subtitle">Latest Best case study</span>
            <h2 className="section-title">
              The Works Check
              <span className="title-yellow">Our Case study</span>
            </h2>
          </div>
          <div className="case-study-topitem fade-slide right" data-delay="0.4">
            <Link
              to="/contact"
              className="btn-fill gap-2 d-flex align-items-center"
            >
              All Case Study
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
      </div>
      {/* Slider  */}
      <Slider {...sliderOption} className="case-study-slider">
        <div className="case-study-item-2">
          <div className="case-study-img-2">
            <img src={CaseStudyTwoImageOne} alt="Image" />
            <div className="case-study-content-2">
              <img src={sSlideOne} alt="Image" />
              <h3>
                <Link className="case-study-title-2" to="/case-detail">
                  Criminal Defense
                </Link>
              </h3>
            </div>
            <Link to="/case-detail" className="case-study-icon-2">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="case-study-item-2">
          <div className="case-study-img-2">
            <img src={CaseStudyTwoImageTwo} alt="Image" />
            <div className="case-study-content-2">
              <img src={sSlideTwo} alt="Image" />
              <h3>
                <Link className="case-study-title-2" to="/case-detail">
                  Contract Review
                </Link>
              </h3>
            </div>
            <Link to="/case-detail" className="case-study-icon-2">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="case-study-item-2">
          <div className="case-study-img-2">
            <img src={CaseStudyTwoImageThree} alt="Image" />
            <div className="case-study-content-2">
              <img src={sSlideThree} alt="Image" />
              <h3>
                <Link className="case-study-title-2" to="/case-detail">
                  Immigration Issues
                </Link>
              </h3>
            </div>
            <Link to="/case-detail" className="case-study-icon-2">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="case-study-item-2">
          <div className="case-study-img-2">
            <img src={CaseStudyTwoImageFour} alt="Image" />
            <div className="case-study-content-2">
              <img src={sSlideFour} alt="Image" />
              <h3>
                <Link className="case-study-title-2" to="/case-detail">
                  Business law
                </Link>
              </h3>
            </div>
            <Link to="/case-detail" className="case-study-icon-2">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="case-study-item-2">
          <div className="case-study-img-2">
            <img src={CaseStudyTwoImageThree} alt="Image" />
            <div className="case-study-content-2">
              <img src={sSlideOne} alt="Image" />
              <h3>
                <Link className="case-study-title-2" to="/case-detail">
                  Immigration Issues
                </Link>
              </h3>
            </div>
            <Link to="/case-detail" className="case-study-icon-2">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        </div>
      </Slider>
      {/* Shape */}
      <img className="case-study-shapetwo-1" src={ShadowShape} alt="Shape" />
      <img className="case-study-shapetwo-2" src={AboutShapeFour} alt="Shape" />
      <img
        className="case-study-shapetwo-3 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
      />
    </section>
  );
}

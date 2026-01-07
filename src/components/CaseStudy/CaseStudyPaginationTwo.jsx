import CaseStudyImageOne from "@/assets/images/thumb/c-study-1.webp";
import CaseStudyImageTwo from "@/assets/images/thumb/c-study-2.webp";
import CaseStudyImageThree from "@/assets/images/thumb/c-study-3.webp";
import CaseStudyImageFour from "@/assets/images/thumb/case-study-4.webp";
import CaseStudyImageFive from "@/assets/images/thumb/case-study-5.webp";
import CaseStudyImageSix from "@/assets/images/thumb/case-study-6.webp";
import CaseStudyImageSeven from "@/assets/images/thumb/case-study-7.webp";
import CaseStudyImageEight from "@/assets/images/thumb/case-study-8.webp";

import CaseStudyIconOne from "@/assets/images/icons/c-study-icon-1.png";
import CaseStudyIconTwo from "@/assets/images/icons/c-study-icon-2.png";
import CaseStudyIconThree from "@/assets/images/icons/c-study-icon-3.png";
import CaseStudyIconFour from "@/assets/images/icons/c-study-icon-4.png";
import CaseStudyIconFive from "@/assets/images/icons/c-study-icon-5.png";
import CaseStudyIconSix from "@/assets/images/icons/c-study-icon-6.png";
import CaseStudyIconSeven from "@/assets/images/icons/c-study-icon-7.png";
import CaseStudyIconEight from "@/assets/images/icons/c-study-icon-8.png";

import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import CaseStudyShape from "@/assets/images/shapes/c-study-shape.png";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import SearchWhite from "@/assets/images/icons/serach-white.svg";
import CaseStudySidebar from "@/components/CaseDetail/CaseStudySidebar";
import { Link } from "react-router-dom";

export default function CaseStudyPaginationTwo() {
  return (
    <section className="case-study-3 case-study-4 pt-150 position-relative overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div
            className="col-xl-8 col-lg-8 col-md-12 fade-slide bottom"
            data-delay="0.2"
          >
            {/* Mobile view  */}
            <div className="details-left-content show-sm">
              <div className="content-box details-entry-title mb-30">
                <h3 className="sidebar-title">Search Hear</h3>
                {/* Search  */}
                <form className="search-wrap" action="/">
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Enter Your Keyword..."
                  />
                  <button
                    className="btn-search btn-hover-gradiant"
                    type="submit"
                  >
                    <img
                      className="serach-icon"
                      src={SearchWhite}
                      alt="Search"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageOne} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconOne} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageTwo} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconTwo} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Contract Review
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageThree} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconThree} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Immigration Issues
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageFour} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconFour} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Discrimination Claims
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageFive} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconFive} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Criminal Defense
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageSix} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconSix} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Immigration Services
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageSeven} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconSeven} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Personal Injury Claims
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="case-study-item-2">
                  <div className="case-study-img-2">
                    <img src={CaseStudyImageEight} alt="Image" />
                    <div className="case-study-content-2">
                      <img src={CaseStudyIconEight} alt="Image" />
                      <h2>
                        <Link className="case-study-title-2" to="/case-detail">
                          Family Law and Divorce
                        </Link>
                      </h2>
                    </div>
                    <Link to="/case-detail" className="case-study-icon-2">
                      <img src={ArrowTopBlack} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-50">
              {/* pagination */}
              <ul className="pagination fade-slide bottom" data-delay="0.2">
                <li className="pagination-list">
                  <Link className="pagination-link" to="#">
                    <img
                      className="pagination-icon"
                      src={ArrowLeftDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="pagination-list">
                  <Link className="pagination-link active" to="#">
                    01
                  </Link>
                </li>
                <li className="pagination-list">
                  <Link className="pagination-link" to="#">
                    02
                  </Link>
                </li>
                <li className="pagination-list">
                  <Link className="pagination-link" to="#">
                    ....
                  </Link>
                </li>
                <li className="pagination-list">
                  <Link className="pagination-link" to="#">
                    10
                  </Link>
                </li>
                <li className="pagination-list">
                  <Link className="pagination-link active" to="#">
                    <img
                      className="pagination-icon"
                      src={ArrowRightDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-12 fade-slide right"
            data-delay="0.4"
          >
            <CaseStudySidebar />
          </div>
        </div>
      </div>
      {/* Shape */}
      <img className="c-study-shape-3" src={CaseStudyShape} alt="Shape" />
      <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
      <img className="case-four-shape-1" src={AboutShapeThree} alt="Image" />
      <img
        className="case-four-shape-2 moveBottom"
        src={AboutShapeFour}
        alt="Image"
      />
    </section>
  );
}

import BlogSidebarOne from "@/components/BlogDetail/BlogSidebarOne";
import SearchOne from "@/components/Widget/Serach/SerachOne";

import BlogImageOne from "@/assets/images/teams/blog-1.webp";
import BlogImageTwo from "@/assets/images/teams/blog-2.webp";
import BlogImageThree from "@/assets/images/teams/blog-3.webp";
import BlogImageFour from "@/assets/images/teams/blog-thumb-4.webp";
import BlogImageFive from "@/assets/images/teams/blog-thumb-5.webp";
import BlogImageSix from "@/assets/images/teams/blog-thumb-6.webp";
import CalendarIcon from "@/assets/images/icons/calendar-icon.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import { Link } from "react-router-dom";

export default function BlogPaginationTwo() {
  return (
    <section className="blog-area pt-150 position-relative overflow-hidden">
      <div className="container">
        <div className="row fade-slide bottom" data-delay="0.2">
          <SearchOne />
          <div className="col-xl-8 col-lg-7 col-md-7 col-12 mb-20 mb-lg-0">
            <div className="row gy-5 justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageOne}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Domestic Violence in California – How a Lawyer Can Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageTwo}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Development Violence in California – How a Lawyer Can
                        Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageThree}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Web Violence in California – How a Lawyer Can Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageFour}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Domestic Violence in California – How a Lawyer Can Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageFive}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Development Violence in California – How a Lawyer Can
                        Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={BlogImageSix}
                      alt="Crimanal"
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        by <span>Zstal</span>{" "}
                      </p>
                      <Link className="blog-category" to="#">
                        Attorney
                      </Link>
                    </div>
                    <h2>
                      <Link className="blog-title" to="/blog-detail">
                        Web Violence in California – How a Lawyer Can Help.
                      </Link>
                    </h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={CalendarIcon} alt="Icon" />
                      09 March 2024
                    </p>
                    <Link className="blog-btn" to="/blog-detail">
                      Read More{" "}
                      <img
                        className="blog-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </article>
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
          <div className="col-xl-4 col-lg-5 col-md-5 col-12">
            <BlogSidebarOne />
          </div>
        </div>
      </div>
      <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
    </section>
  );
}

import BlogImageOne from "@/assets/images/teams/blog-1.webp";
import BlogImageTwo from "@/assets/images/teams/blog-2.webp";
import BlogImageThree from "@/assets/images/teams/blog-3.webp";
import CalendarIcon from "@/assets/images/icons/calendar-icon.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import { Link } from "react-router-dom";

export default function BlogThree() {
  return (
    <section className="blog-area pt-150">
      <div className="container">
        <div className="future-content blogs-content pb-40-md-80">
          <div className="col-12 col-md-10 col-lg-7 m-auto text-center pb-50">
            <span
              className="section-subtitle pb-20 fade-slide bottom"
              data-delay="0.2"
            >
              Our Latest News
            </span>
            <h2
              className="section-title text-center fade-slide bottom"
              data-delay="0.4"
            >
              Best Of Legal Practice Areas
              <span className="title-yellow">Latest Blogs And News</span>
            </h2>
          </div>
          <div className="row gy-5 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 fade-slide bottom"
              data-delay="0.2"
            >
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
                      by <span>Zstal</span>
                    </p>
                    <Link className="blog-category" to="#">
                      Attorney
                    </Link>
                  </div>
                  <h3>
                    <Link className="blog-title" to="/blog-detail">
                      Domestic Violence in California – How a Lawyer Can Help.
                    </Link>
                  </h3>
                </div>
                <div className="d-flex justify-content-between align-items-center date pt-20">
                  <p className="blog-date">
                    <img src={CalendarIcon} alt="Icon" />
                    09 March 2024
                  </p>
                  <Link className="blog-btn" to="/blog-detail">
                    Read More
                    <img className="blog-icon" src={ArrowTopDark} alt="Icon" />
                  </Link>
                </div>
              </article>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 fade-slide bottom"
              data-delay="0.4"
            >
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
                      by <span>Zstal</span>
                    </p>
                    <Link className="blog-category" to="#">
                      Attorney
                    </Link>
                  </div>
                  <h3>
                    <Link className="blog-title" to="/blog-detail">
                      Development Violence in California – How a Lawyer Can
                      Help.
                    </Link>
                  </h3>
                </div>
                <div className="d-flex justify-content-between align-items-center date pt-20">
                  <p className="blog-date">
                    <img src={CalendarIcon} alt="Icon" />
                    09 March 2024
                  </p>
                  <Link className="blog-btn" to="/blog-detail">
                    Read More
                    <img className="blog-icon" src={ArrowTopDark} alt="Icon" />
                  </Link>
                </div>
              </article>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 fade-slide bottom"
              data-delay="0.6"
            >
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
                      by <span>Zstal</span>
                    </p>
                    <Link className="blog-category" to="#">
                      Attorney
                    </Link>
                  </div>
                  <h3>
                    <Link className="blog-title" to="/blog-detail">
                      Web Violence in California – How a Lawyer Can Help.
                    </Link>
                  </h3>
                </div>
                <div className="d-flex justify-content-between align-items-center date pt-20">
                  <p className="blog-date">
                    <img src={CalendarIcon} alt="Icon" />
                    09 March 2024
                  </p>
                  <Link className="blog-btn" to="/blog-detail">
                    Read More
                    <img className="blog-icon" src={ArrowTopDark} alt="Icon" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

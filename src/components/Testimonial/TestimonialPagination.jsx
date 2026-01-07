import FiveStarIcon from "@/assets/images/icons/five-star.svg";

import TestimonialImageOne from "@/assets/images/teams/profile.webp";
import TestimonialImageTwo from "@/assets/images/teams/ts-img-2.webp";
import TestimonialImageThree from "@/assets/images/teams/ts-img-3.webp";
import TestimonialImageFour from "@/assets/images/teams/ts-img-4.webp";
import TestimonialImageFive from "@/assets/images/teams/ts-img-5.webp";
import TestimonialImageSix from "@/assets/images/teams/ts-img-6.webp";

import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import QuoteIcon from "@/assets/images/svg/btn.svg";
import { Link } from "react-router-dom";

export default function TestimonialPagination() {
  return (
    <section className="testimonial-area-3 pt-150 pb-100 position-relative overflow-hidden">
      <div className="container">
        <div className="testimonial-topwrap-3 pb-50 text-center">
          <span
            className="section-subtitle pb-20 fade-slide bottom"
            data-delay="0.2"
          >
            Our Best Of testimonials
          </span>
          <h2 className="section-title fade-slide bottom" data-delay="0.4">
            Legal Practice Areas Best Of
            <span className="title-yellow">What Client People Says.</span>
          </h2>
        </div>
        <div className="row gy-4 fade-slide bottom" data-delay="0.6">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>12.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageOne} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Jon Mark, <span>USA</span>
                    </h6>
                    <span>Junior Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>10.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageTwo} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Michele Bailey, <span>USA</span>
                    </h6>
                    <span>Assestent Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>20.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageThree} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Jackin Bailey, <span>USA</span>
                    </h6>
                    <span>Junior Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>12.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageFour} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Marron Bailey, <span>USA</span>
                    </h6>
                    <span>Senior Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>8.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageFive} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Hike Bailey, <span>USA</span>
                    </h6>
                    <span>Senior Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="testimonial-card-list ">
              <div className="count-member mb-20">
                <strong>14.5k</strong>
                <div className="review">
                  <div className="review-icon">
                    <img src={FiveStarIcon} alt="Icon" />
                  </div>
                  <small>Review</small>
                </div>
              </div>
              <p className="testimonail-content">
                Over 2000 years old. Richard McClintock, A Latin professor at
                Hampden-Sydney College In Virginia, discovered the undoubtable
                source.
              </p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={TestimonialImageSix} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      Jon Bailey, <span>USA</span>
                    </h6>
                    <span>Senior Lawyer</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteIcon} alt="Image" />
                </blockquote>
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
      <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
    </section>
  );
}

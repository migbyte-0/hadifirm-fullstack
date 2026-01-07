import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import FiveStarImage from "@/assets/images/icons/five-star.svg";
import ProfileImage from "@/assets/images/teams/profile.webp";
import QuoteBtnImage from "@/assets/images/svg/btn.svg";
import TestimonialImageTwo from "@/assets/images/teams/ts-img-2.webp";
import TestimonialImageThree from "@/assets/images/teams/ts-img-3.webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function TestimonialTwo() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    loop: true,
    slidesToScroll: 1,
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
    <section className="testimonial-area ts-style-2 pb-150">
      <div className="container">
        <div className="testimonial-topwrap d-flex flex-column flex-sm-row justify-md-content-between align-items-center pb-50">
          <div className="col fade-slide bottom" data-delay="0.4">
            <span className="section-subtitle pb-20">
              Our Best Of testimonials
            </span>
            <h2 className="section-title">
              What People Says
              <span className="title-yellow">Our Website.</span>
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
        <Slider
          {...sliderOption}
          className="testimonial-slider testimonial-card-gallery pb-40-md-60 fade-slide bottom"
          data-delay="0.6"
        >
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>12.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img className="five-star" src={FiveStarImage} alt="Star" />
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
                <img src={ProfileImage} alt="Profile" />
                <div className="member-info">
                  <h6 className="name">
                    Michele Bailey, <span>USA</span>
                  </h6>
                  <span>Senior Lawyer</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteBtnImage} alt="Image" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>10.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img className="five-star" src={FiveStarImage} alt="Star" />
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
                  <span>Senior Lawyer</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteBtnImage} alt="Image" />
              </blockquote>
            </div>
          </div>
          <div className="testimonial-card-list">
            <div className="count-member mb-20">
              <strong>15.5k</strong>
              <div className="review">
                <div className="review-icon">
                  <img className="five-star" src={FiveStarImage} alt="Star" />
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
                    Mary Bailey, <span>USA</span>
                  </h6>
                  <span>Senior Lawyer</span>
                </div>
              </div>
              <blockquote>
                <img src={QuoteBtnImage} alt="Image" />
              </blockquote>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

import TsBannerImage from "@/assets/images/thumb/ts-banner-img.webp";
import FiveStarImage from "@/assets/images/icons/five-star.svg";
import Slider from "react-slick";

export default function TestimonialThree() {
  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="testimonial-area-4">
      <div className="container-fluid">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12">
            <div className="testimonial-left-4">
              <img src={TsBannerImage} alt="Icon" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-sm-12">
            <div className="testimonail-right-4">
              <span
                className="section-subtitle pb-20 fade-slide bottom"
                data-delay="0.2"
              >
                Our Best Of testimonials
              </span>
              <h2 className="section-title fade-slide bottom" data-delay="0.4">
                What People Says <span>Our Website.</span>
              </h2>
              <Slider
                {...sliderOption}
                className="testimonial-slider-4 pt-60 fade-slide bottom"
                data-delay="0.6"
              >
                <div className="testimonial-item-4">
                  <div className="testimonail-top-list">
                    <span className="testimonial-count">12.5k</span>
                    <div className="testimonail-review">
                      <img src={FiveStarImage} alt="Icon" />
                    </div>
                    <p className="testimonail-review-text">Reviews</p>
                  </div>
                  <p className="testimonail-content">
                    Over 2000 years old. Richard McClintock, A Latin professor
                    at Hampden-Sydney College In Virginia, discovered the
                    undoubtable source.
                  </p>
                  <h3 className="testimonail-name">
                    Michele Bailey, <span>USA</span>
                  </h3>
                  <span className="testimonail-designation">Senior Lawyer</span>
                </div>
                <div className="testimonial-item-4">
                  <div className="testimonail-top-list">
                    <span className="testimonial-count">12.5k</span>
                    <div className="testimonail-review">
                      <img src={FiveStarImage} alt="Icon" />
                    </div>
                    <p className="testimonail-review-text">Reviews</p>
                  </div>
                  <p className="testimonail-content">
                    Over 2000 years old. Richard McClintock, A Latin professor
                    at Hampden-Sydney College In Virginia, discovered the
                    undoubtable source.
                  </p>
                  <h3 className="testimonail-name">
                    Michele Bailey, <span>USA</span>
                  </h3>
                  <span className="testimonail-designation">Senior Lawyer</span>
                </div>
                <div className="testimonial-item-4">
                  <div className="testimonail-top-list">
                    <span className="testimonial-count">12.5k</span>
                    <div className="testimonail-review">
                      <img src={FiveStarImage} alt="Icon" />
                    </div>
                    <p className="testimonail-review-text">Reviews</p>
                  </div>
                  <p className="testimonail-content">
                    Over 2000 years old. Richard McClintock, A Latin professor
                    at Hampden-Sydney College In Virginia, discovered the
                    undoubtable source.
                  </p>
                  <h3 className="testimonail-name">
                    Michele Bailey, <span>USA</span>
                  </h3>
                  <span className="testimonail-designation">Senior Lawyer</span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

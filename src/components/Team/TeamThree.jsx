import MemberImageOne from "@/assets/images/teams/member-1.webp";
import MemberImageTwo from "@/assets/images/teams/member-2.webp";
import MemberImageThree from "@/assets/images/teams/member-3.webp";
import MemberImageFour from "@/assets/images/teams/member-4.webp";
import LinkedInDark from "@/assets/images/icons/linkdien-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import ShareDark from "@/assets/images/icons/share-dark.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function TeamThree() {
  const sliderOption = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <section className="team-area-3 pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-12 col-md-12">
            <div className="team-member-top pb-50">
              <span
                className="section-subtitle pb-10 fade-slide bottom"
                data-delay="0.2"
              >
                Our Best Of Service
              </span>
              <h2 className="section-title fade-slide bottom" data-delay="0.4">
                Legal Practice Areas Best Of
                <span className="title-yellow">Special Team Members</span>
              </h2>
            </div>
          </div>
          <div
            className="col-xl-9 col-lg-9 col-12 m-auto fade-slide bottom"
            data-delay="0.6"
          >
            <Slider
              {...sliderOption}
              className="gallery-card-grid d-inline gallery-card-slider mb-20-mb-lg-80"
            >
              <article className="team-card ">
                <div className="img position-relative">
                  <img
                    className="team-thumb-img"
                    src={MemberImageOne}
                    alt="Crimanal"
                  />
                  <ul className="member-social-profile">
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={LinkedInDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={TwitterDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={FacebookDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={ShareDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text team-card-body">
                  <p className="mb-10 mt-10">Business Lawyer</p>
                  <div className="team-card-text d-flex justify-content-between align-items-center">
                    <h3>
                      <Link className="team-title" to="/attorneys">
                        OB. Oliver Benjamin
                      </Link>
                    </h3>
                    <Link to="/attorneys">
                      <img
                        className="team-arrow-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
              <article className="team-card ">
                <div className="img position-relative">
                  <img
                    className="team-thumb-img"
                    src={MemberImageTwo}
                    alt="Crimanal"
                  />
                  <ul className="member-social-profile">
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={LinkedInDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={TwitterDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={FacebookDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={ShareDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text team-card-body">
                  <p className="mb-10 mt-10">Family Lawyer</p>
                  <div className="team-card-text d-flex justify-content-between align-items-center">
                    <h3>
                      <Link className="team-title" to="/attorneys">
                        Isabella Elijah Leo
                      </Link>
                    </h3>
                    <Link to="/attorneys">
                      <img
                        className="team-arrow-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
              <article className="team-card ">
                <div className="img position-relative">
                  <img
                    className="team-thumb-img"
                    src={MemberImageThree}
                    alt="Crimanal"
                  />
                  <ul className="member-social-profile">
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={LinkedInDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={TwitterDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={FacebookDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={ShareDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text team-card-body">
                  <p className="mb-10 mt-10">Managing Partner</p>
                  <div className="team-card-text d-flex justify-content-between align-items-center">
                    <h3>
                      <Link className="team-title" to="/attorneys">
                        Elizabeth Alexander
                      </Link>
                    </h3>
                    <Link to="/attorneys">
                      <img
                        className="team-arrow-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
              <article className="team-card ">
                <div className="img position-relative">
                  <img
                    className="team-thumb-img"
                    src={MemberImageFour}
                    alt="Crimanal"
                  />
                  <ul className="member-social-profile">
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={LinkedInDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={TwitterDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={FacebookDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img
                          className="team-social-icon"
                          src={ShareDark}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text team-card-body">
                  <p className="mb-10 mt-10">Tax Attorney</p>
                  <div className="team-card-text d-flex justify-content-between align-items-center">
                    <h3>
                      <Link className="team-title" to="/attorneys">
                        Grace Ella Ethan
                      </Link>
                    </h3>
                    <Link to="/attorneys">
                      <img
                        className="team-arrow-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

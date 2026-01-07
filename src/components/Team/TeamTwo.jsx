import MemeberOneImage from "@/assets/images/teams/member-1.webp";
import MemeberTwoImage from "@/assets/images/teams/member-2.webp";
import MemberThreeImage from "@/assets/images/teams/member-3.webp";
import MemberFourImage from "@/assets/images/teams/member-4.webp";
import LinkedInDarkIcon from "@/assets/images/icons/linkdien-dark.svg";
import TwitterDarkIcon from "@/assets/images/icons/twitter-dark.svg";
import FacebookDarkIcon from "@/assets/images/icons/facebook-dark.svg";
import ShareDarkIcon from "@/assets/images/icons/share-dark.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import PortfolioTwoShapeTwo from "@/assets/images/shapes/p-two-shape-2.png";
import { Link } from "react-router-dom";

export default function TeamTwo() {
  return (
    <section className="team-member team-area-2 pt-140 pb-110 position-relative">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-7 m-auto text-center">
          <span
            className="section-subtitle pb-20 fade-slide bottom"
            data-delay="0.2"
          >
            Our Best Of Service
          </span>
          <h2
            className="section-title text-center pb-50 fade-slide bottom"
            data-delay="0.4"
          >
            Legal Practice Areas Best Of
            <span className="title-yellow">Special Team Members</span>
          </h2>
        </div>
        <div className="gallery-card-grid">
          <div className="fade-slide bottom" data-delay="0.2">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={MemeberOneImage}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedInDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareDarkIcon}
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
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={MemeberTwoImage}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedInDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareDarkIcon}
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
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={MemberThreeImage}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedInDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareDarkIcon}
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
          </div>
          <div className="fade-slide bottom" data-delay="0.8">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={MemberFourImage}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedInDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookDarkIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareDarkIcon}
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
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img
        className="team-shape-1 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="team-shape-2" src={AboutShapeFour} alt="Shape" />
      <img className="team-shape-3" src={PortfolioTwoShapeTwo} alt="Shape" />
    </section>
  );
}

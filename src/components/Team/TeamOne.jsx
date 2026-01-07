import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowDownYellow from "@/assets/images/icons/arrow-down-yellow.svg";

import TeamMemberOne from "@/assets/images/teams/member-1.webp";
import TeamMemberTwo from "@/assets/images/teams/member-2.webp";
import TeamMemberThree from "@/assets/images/teams/member-3.webp";
import TeamMemberFour from "@/assets/images/teams/member-4.webp";
import TeamMemberFive from "@/assets/images/teams/member-5.webp";
import TeamMemberSix from "@/assets/images/teams/member-6.webp";
import TeamMemberSeven from "@/assets/images/teams/member-7.webp";

import LinkedinIcon from "@/assets/images/icons/linkdien-dark.svg";
import TwitterIcon from "@/assets/images/icons/twitter-dark.svg";
import FacebookIcon from "@/assets/images/icons/facebook-dark.svg";
import ShareIcon from "@/assets/images/icons/share-dark.svg";

import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import { Link } from "react-router-dom";

export default function TeamOne() {
  return (
    <section className="team-member pt-140 pb-150 position-relative">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-7 m-auto text-center">
          <span
            className="section-subtitle pb-20 fade-slide bottom"
            data-delay="0.2"
          >
            فريق العمل
          </span>
          <h2
            className="section-title text-center pb-50 fade-slide bottom"
            data-delay="0.4"
          >
            نخبة من
            <span className="title-yellow"> الكفاءات القانونية</span>
          </h2>
        </div>
        <div className="gallery-card-grid">
          <div className="fade-slide bottom" data-delay="0.2">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={TeamMemberOne}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">المحامي والمؤسس</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      هادي محمد الحصين
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
                  src={TeamMemberTwo}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">مستشار قانوني</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      خبراء في الأنظمة السعودية
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
                  src={TeamMemberThree}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">أخصائي تقاضي</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      متخصص في الترافع
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
                  src={TeamMemberFour}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">فريق التوثيق</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      موثقون معتمدون
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
          <div className="fade-slide bottom" data-delay="0.2">
            <article className="team-card">
              <div className="img position-relative">
                <img
                  className="team-thumb-img"
                  src={TeamMemberFive}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">مستشار قضايا تجارية</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      خبير في القضايا التجارية
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
                  src={TeamMemberSix}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">مستشار أحوال شخصية</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      متخصص في قضايا الأسرة
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
                  src={TeamMemberSeven}
                  alt="Crimanal"
                />
                <ul className="member-social-profile">
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={LinkedinIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={TwitterIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={FacebookIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li className="social-list">
                    <Link className="team-social-link" to="#">
                      <img
                        className="team-social-icon"
                        src={ShareIcon}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text team-card-body">
                <p className="mb-10 mt-10">مستشار عقود</p>
                <div className="team-card-text d-flex justify-content-between align-items-center">
                  <h3>
                    <Link className="team-title" to="attorneys-detail">
                      متخصص في صياغة العقود
                    </Link>
                  </h3>
                  <Link to="attorneys-detail">
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
          <div
            className="fade-slide bottom d-flex align-items-center justify-content-center"
            data-delay="0.6"
          >
            <div className="d-flex justify-content-center align-items-center">
              <Link
                to="#"
                className="round-btn d-flex flex-column gap-2 justify-content-center align-items-center"
              >
                جميع الأعضاء
                <img
                  className="btn-icon-black"
                  src={ArrowDownYellow}
                  alt="Icon"
                />
              </Link>
            </div>
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
    </section>
  );
}

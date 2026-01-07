import ChooseThumb from "@/assets/images/thumb/choose-thum.webp";
import ColorIconOne from "@/assets/images/svg/color-icon-1.svg";
import ColorIconTwo from "@/assets/images/svg/color-icon-2.svg";
import ColorIconThree from "@/assets/images/svg/color-icon-3.svg";
import ColorIconFour from "@/assets/images/svg/color-icon-4.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import ChooseRightShape from "@/assets/images/shapes/choose-right-shape.png";
import { Link } from "react-router-dom";

export default function ChooseAreaTwo() {
  return (
    <section className="choose-area-4 choose-area-5 pt-120 pb-70 position-relative">
      <div className="container">
        <div className="choose-top-4 pb-40 text-center">
          <span
            className="section-subtitle pb-20 fade-slide bottom"
            data-delay="0.2"
          >
            Choose it our service
          </span>
          <h2 className="section-title fade-slide bottom" data-delay="0.4">
            Why Choose <span>Us Zstal</span>
          </h2>
        </div>
        <div className="row gy-5 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
            <div className="choose-left-4">
              <img src={ChooseThumb} alt="Image" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
            <div className="choose-right-4">
              <div className="project-item choose-our-project">
                <div className="choose-list">
                  <div className="choose-icon-img">
                    <img src={ColorIconOne} alt="Image" />
                  </div>
                  <div className="project-content text-start">
                    <h3 className="choose-title">Criminal Lawyer Defense</h3>
                    <p className="choose-text">
                      A corporate/business entity is an oit man or man Woman
                      organization
                    </p>
                  </div>
                  <Link
                    to="/testimonials"
                    className="project-icon btn-hover-gradiant"
                  >
                    <img
                      className="choose-icon"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div className="choose-list">
                  <div className="choose-icon-img">
                    <img src={ColorIconTwo} alt="Image" />
                  </div>
                  <div className="project-content text-start">
                    <h3 className="choose-title">Criminal Lawyer Defense</h3>
                    <p className="choose-text">
                      A corporate/business entity is an oit man or man Woman
                      organization
                    </p>
                  </div>
                  <Link
                    to="/testimonials"
                    className="project-icon btn-hover-gradiant"
                  >
                    <img
                      className="choose-icon"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div className="choose-list">
                  <div className="choose-icon-img">
                    <img src={ColorIconThree} alt="Image" />
                  </div>
                  <div className="project-content text-start">
                    <h3 className="choose-title">Domestic Violence</h3>
                    <p className="choose-text">
                      A corporate/business entity is an oit man or man Woman
                      organization
                    </p>
                  </div>
                  <Link
                    to="/testimonials"
                    className="project-icon btn-hover-gradiant"
                  >
                    <img
                      className="choose-icon"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div className="choose-list">
                  <div className="choose-icon-img">
                    <img src={ColorIconFour} alt="Image" />
                  </div>
                  <div className="project-content text-start">
                    <h3 className="choose-title">Assault And Battery</h3>
                    <p className="choose-text">
                      A corporate/business entity is an oit man or man Woman
                      organization
                    </p>
                  </div>
                  <Link
                    to="/testimonials"
                    className="project-icon btn-hover-gradiant"
                  >
                    <img
                      className="choose-icon"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="choose-shape-four-1 moveLeft"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="choose-shape-four-2" src={ChooseRightShape} alt="Shape" />
    </section>
  );
}

import HouseImage from "@/assets/images/services/house.webp";
import ColorIconThree from "@/assets/images/svg/color-icon-3.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ColorIconFour from "@/assets/images/svg/color-icon-4.svg";
import ColorIconSeven from "@/assets/images/svg/color-icon-7.svg";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import ChooseShape from "@/assets/images/shapes/choose-shape.png";
import { Link } from "react-router-dom";

export default function ChooseAreaOne() {
  return (
    <section className="choose-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="choose-wrapper">
          <div className="choose-left">
            <div className="fade-slide top" data-delay="0.2">
              <span className="section-subtitle">Choose it our service</span>
              <h2 className="section-title pb-40">
                Why Choose <span className="title-yellow">Us Zstal</span>
              </h2>
            </div>
            <img
              className="choose-img fade-slide bottom"
              data-delay="0.4"
              src={HouseImage}
              alt="House"
            />
          </div>
          <div className="choose-right-slider fade-slide top" data-delay="0.6">
            <div className="project-item choose-our-project">
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconThree} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Criminal Lawyer Defense</h3>
                  <p className="choose-text">
                    A corporate/business entity is an oit man or man Woman
                    organization
                  </p>
                </div>
                <Link to="/testimonials" className="project-icon">
                  <img className="choose-icon" src={ArrowTopDark} alt="Icon" />
                </Link>
              </div>
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconFour} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Domestic Violence</h3>
                  <p className="choose-text">
                    A corporate/business entity is an oit man or man Woman
                    organization
                  </p>
                </div>
                <Link to="/testimonials" className="project-icon">
                  <img className="choose-icon" src={ArrowTopDark} alt="Icon" />
                </Link>
              </div>
              <div className="choose-list">
                <div className="choose-icon-img">
                  <img src={ColorIconSeven} alt="Image" />
                </div>
                <div className="project-content text-start">
                  <h3 className="choose-title">Assault And Battery</h3>
                  <p className="choose-text">
                    A corporate/business entity is an oit man or man Woman
                    organization
                  </p>
                </div>
                <Link to="/testimonials" className="project-icon">
                  <img className="choose-icon" src={ArrowTopDark} alt="Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="choose-shape-1 moveLeft"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="choose-shape-2" src={ChooseShape} alt="Shape" />
    </section>
  );
}

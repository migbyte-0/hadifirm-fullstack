import EmergencyImageOne from "@/assets/images/thumb/em-1.webp";
import EmergencyImageTwo from "@/assets/images/thumb/em-2.webp";
import DoctorImage from "@/assets/images/home-3/doctor.webp";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import EmergencyShapeOne from "@/assets/images/shapes/emergency-shape-1.png";
import EmergencyShapeTwo from "@/assets/images/shapes/emergency-shape-2.png";
import pTwoShapeTwo from "@/assets/images/shapes/p-two-shape-2.png";
import { Link } from "react-router-dom";

export default function EmergencyCaseTwo() {
  return (
    <section className="emargency-case-2 pb-150 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div
              className="d-flex align-items-center fade-slide bottom"
              data-delay="0.2"
            >
              <span className="section-subtitle">{"Emergency Case's"}</span>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="d-flex flex-column mb-40">
              <h2 className="section-title fade-slide bottom" data-delay="0.4">
                Non-Emergency
                <span className="title-yellow">
                  Medical Transport Accidents
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gy-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="emargency-left-2">
              <div className="fade-slide bottom" data-delay="0.6">
                <p className="emargency-text">
                  A non-emergency medical transport (NEMT) company provides
                  transportation for disabled, elderly, and other people who
                  need help accidents.
                </p>
              </div>
              <img
                className="fade-slide bottom"
                data-delay="0.7"
                src={EmergencyImageOne}
                alt="image"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between flex-column">
            <div className="emargency-right-2">
              <div className="col fade-slide bottom" data-delay="0.4">
                <img className="mb-20" src={EmergencyImageTwo} alt="image" />
                <p className="emargency-subtitle">
                  NEMT accidents are different from car accidents and claims
                  must be handled carefully.
                </p>
                <p className="pb-50">
                  A non-emergency medical transport (NEMT) company provides
                  transportation for disabled, elderly, and other people who
                  need help getting to and from their medical providers.
                  Accidents and injuries can occur to these passengers in a
                  number of ways including motor vehicle accidents.
                </p>
              </div>
              <div
                className="col d-block d-md-none mb-30 fade-slide bottom"
                data-delay="0.6"
              >
                <p className="mb-20">
                  A non-emergency medical transport (NEMT) company provides
                  transportation for disabled, elderly, and other people who
                  need help accidents.
                </p>
                <img src={DoctorImage} alt="image" />
              </div>
              <div
                className="section-btn w-fit fade-slide bottom"
                data-delay="0.8"
              >
                <Link
                  to="/contact"
                  className="btn-fill s-btn d-flex align-items-center"
                >
                  Free Consultancy
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icn"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img className="emargency-shape-1" src={EmergencyShapeOne} alt="Shape" />
      <img className="emargency-shape-2" src={EmergencyShapeTwo} alt="Shape" />
      <img className="emargency-shape-two-3" src={pTwoShapeTwo} alt="Shape" />
    </section>
  );
}

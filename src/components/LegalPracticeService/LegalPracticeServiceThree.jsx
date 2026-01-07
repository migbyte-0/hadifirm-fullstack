import ServiceIconSeven from "@/assets/images/svg/service-icon-7.svg";
import ServiceIconEight from "@/assets/images/svg/service-icon-8.svg";
import ServiceIconNine from "@/assets/images/svg/service-icon-9.svg";

import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import { Link } from "react-router-dom";

export default function LegalPracticeServiceThree() {
  return (
    <section className="service-area-6 position-relative">
      <div className="container">
        <div className="service-topwrap-6 text-center pb-50">
          <span className="section-subtitle pb-10">Our Best Of Service</span>
          <h2 className="section-title">
            What People Says Our Best Of
            <span className="title-yellow">Legal Practice Areas </span>
          </h2>
        </div>
        <div className="more-service">
          <div className="service-item-4">
            <img src={ServiceIconEight} className="service-img-4" alt="img" />
            <h3>
              <Link className="service-title-4" to="/service-detail">
                Business Law
              </Link>
            </h3>
            <p className="service-text-4">
              Maecenas efficitur neque posu rutrum justo vel, placerat.
            </p>
            <Link to="/service-detail" className="service-btn-4">
              <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
            </Link>
          </div>
          <div className="service-item-4">
            <img src={ServiceIconNine} className="service-img-4" alt="img" />
            <h3>
              <Link className="service-title-4" to="/service-detail">
                Education Law
              </Link>
            </h3>
            <p className="service-text-4">
              Maecenas efficitur neque posu rutrum justo vel, placerat.
            </p>
            <Link to="/service-detail" className="service-btn-4">
              <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
            </Link>
          </div>
          <div className="service-item-4">
            <img src={ServiceIconEight} className="service-img-4" alt="img" />
            <h3>
              <Link className="service-title-4" to="/service-detail">
                Family Law
              </Link>
            </h3>
            <p className="service-text-4">
              Maecenas efficitur neque posu rutrum justo vel, placerat.
            </p>
            <Link to="/service-detail" className="service-btn-4">
              <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
            </Link>
          </div>
          <div className="service-item-4">
            <img src={ServiceIconSeven} className="service-img-4" alt="img" />
            <h3>
              <Link className="service-title-4" to="/service-detail">
                Insurance Defense
              </Link>
            </h3>
            <p className="service-text-4">
              Maecenas efficitur neque posu rutrum justo vel, placerat.
            </p>
            <Link to="/service-detail" className="service-btn-4">
              <img className="service-icon-4" src={ArrowTopDark} alt="Icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

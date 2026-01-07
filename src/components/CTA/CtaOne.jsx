import PhoneIcon from "@/assets/images/icons/phone-plus-yellow.svg";
import { Link } from "react-router-dom";

export default function CtaOne() {
  return (
    <div className="call-service">
      <div className="container">
        <div className="col-12 col-lg-10 col-xl-8 flex-column flex-md-row m-auto d-flex justify-content-start justify-content-md-center align-items-centerc gap-4">
          <div
            className="call-text text-lg-center fade-slide left"
            data-delay="0.2"
          >
            <p className="call-content">
              للتواصل والاستشارات القانونية
            </p>
          </div>
          <div
            className="call d-flex align-items-center justify-content-center cursor-Pointer text-center fade-slide right"
            data-delay="0.2"
          >
            <img className="call-icon" src={PhoneIcon} alt="Icon" />
            <Link className="call-link" to="tel:0551099998">
              0551099998
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

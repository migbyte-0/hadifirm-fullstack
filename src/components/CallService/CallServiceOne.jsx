import PhonePlusYellow from "@/assets/images/icons/phone-plus-yellow.svg";
import { Link } from "react-router-dom";

export default function CallServiceOne() {
  return (
    <div className="call-service-two">
      <div className="container">
        <div className="call-service px-3">
          <div className="col-12 col-md-10 col-lg-10 col-xl-10 flex-column flex-md-row m-auto d-flex justify-content-start justify-content-md-center align-items-centerc gap-4">
            <div className="call-text fade-slide left" data-delay="0.2">
              <p className="call-content">
                Looking For Experience Free Consultation
              </p>
            </div>
            <div
              className="call d-flex align-items-center cursor-Pointer fade-slide right"
              data-delay="0.4"
            >
              <img className="call-icon" src={PhonePlusYellow} alt="Icon" />
              <Link className="call-link" to="tel:(876)543-1234">
                (876) 543-1234
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

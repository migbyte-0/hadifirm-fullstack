import PhonePlusWhite from "@/assets/images/icons/phone-plus-white.svg";
import { Link } from "react-router-dom";

export default function CallServiceFour() {
  return (
    <div className="call-service-5">
      <div className="container">
        <div className="call-service-wrap-5">
          <div className="col-12 col-md-10 col-lg-10 col-xl-8 flex-column flex-md-row m-auto d-flex justify-content-start justify-content-md-center align-items-centerc gap-4 position-relative">
            <div className="call-text">
              <p className="call-content">
                Looking For Experience Free Consultation
              </p>
            </div>
            <div className="call d-flex align-items-center cursor-Pointer">
              <div className="call-icon-3">
                <img src={PhonePlusWhite} alt="Icon" />
              </div>
              <Link className="call-link-3" to="tel:(876)543-1234">
                (876) 543-1234
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

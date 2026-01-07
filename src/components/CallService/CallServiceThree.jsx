import PhonePlusDark from "@/assets/images/icons/phone-plus-dark-2.svg";
import { Link } from "react-router-dom";

export default function CallServiceThree() {
  return (
    <div className="call-service-4">
      <div className="call-service-wrap-4">
        <div className="container">
          <div className="col-12 col-md-10 col-lg-10 col-xl-8 flex-column flex-md-row m-auto d-flex justify-content-start justify-content-md-center align-items-centerc gap-4 position-relative">
            <div className="call-text fade-slide left" data-delay="0.2">
              <p className="call-content">
                Looking For Experience Free Consultation
              </p>
            </div>
            <div
              className="call d-flex align-items-center cursor-Pointer fade-slide right"
              data-delay="0.4"
            >
              <div className="call-icon-3">
                <img src={PhonePlusDark} alt="Icon" />
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

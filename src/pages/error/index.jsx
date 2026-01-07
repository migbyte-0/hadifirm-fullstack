import ErrorImage from "@/assets/images/bg/error.png";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-area pt-60">
      <div className="container">
        <div className="error-content">
          <div className="row">
            <div className="col-12 text-center">
              <div className="error-img mb-40">
                <img src={ErrorImage} alt="error" />
              </div>
              <div className="construction-btn d-flex justify-content-center align-items-center">
                <Link
                  to="/"
                  className="btn-fill error-btn cursor-Pointer d-flex align-items-center"
                >
                  Go To Home
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

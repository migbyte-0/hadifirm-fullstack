import ContactIconOne from "@/assets/images/svg/contact-info-icon-1.svg";
import ContactIconThree from "@/assets/images/svg/contact-info-icon-3.svg";
import MailIcon from "@/assets/images/svg/mail.svg";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <div className="contact-info-card">
      <div className="container">
        <div className="card-content fade-slide bottom" data-delay="0.2">
          <div className="card-item">
            <img
              className="contact-info-img"
              src={ContactIconThree}
              alt="Phone"
            />
            <Link className="contact-info-link" to="tel:+55(9900)66622">
              +55 (9900) 666 22
            </Link>
            <Link className="contact-info-link" to="tel:+55(9900)66622">
              +55 (9900) 666 22
            </Link>
            <p className="contact-info-text">Contact Number</p>
          </div>
          <div className="card-item">
            <img className="contact-info-img" src={MailIcon} alt="Email" />
            <Link
              className="contact-info-link"
              to="mailto:info.zstal@gmail.com"
            >
              info.zstal@gmail.com
            </Link>
            <Link className="contact-info-link" to="mailto:info.@gmail.com">
              info.@gmail.com
            </Link>
            <p className="contact-info-text">Contact Email</p>
          </div>
          <div className="card-item">
            <img
              className="contact-info-img"
              src={ContactIconOne}
              alt="Location"
            />
            <p className="contact-info-title">14/4, Bonosri, USA.</p>
            <p className="contact-info-title">road-8, house-13, canada</p>
            <p className="contact-info-text">Contact Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

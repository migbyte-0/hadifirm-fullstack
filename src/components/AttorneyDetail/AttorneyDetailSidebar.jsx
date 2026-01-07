import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import { Link } from "react-router-dom";

export default function AttorneyDetailSidebar() {
  return (
    <div className="details-left-content">
      <div className="content-box mb-30">
        <h4 className="sidebar-title">Get In Touch</h4>
        <form className="sidebar-form" action="/">
          <input
            className="sidebar-input"
            type="text"
            name="text"
            placeholder="Your Full Name"
          />
          <input
            className="sidebar-input"
            type="Email"
            name="eamil"
            placeholder="test@gamil.com"
          />
          <textarea
            className="sidebar-input"
            id="textarea"
            name="textarea"
            placeholder="Additional Message"
            rows={3}
            cols={50}
            defaultValue={""}
          />
          <button className="btn-gradiant mt-20" type="submit">
            Get In Touch
            <img src={ArrowTopBlack} alt="Icon" />
          </button>
        </form>
      </div>
      <div className="sidebar-cta-box">
        <h3 className="sidebar-cta-title text-center">
          Have you Any Query Feel please Free Contact
        </h3>
        <div className="sidebar-cta-btn">
          <div className="sidebar-cta-icon">
            <img src={PhonePlusDark} alt="Icon" />
          </div>
          <Link className="sidebar-cta-contact" to="tel:+12223334455">
            + 1 222 333 44 55
          </Link>
        </div>
      </div>
    </div>
  );
}

import PhoneIcon from "@/assets/images/icons/phone-icon.png";
import MessageIcon from "@/assets/images/icons/message.png";
import LocationIcon from "@/assets/images/icons/location.png";

import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";

import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import { Link } from "react-router-dom";

export default function FaqSidebar() {
  return (
    <div className="details-left-content">
      <div className="content-box mb-30">
        <h4 className="sidebar-title">Contact Info</h4>
        <ul className="sidebar-contact-wrap">
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={PhoneIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Contact Phone</p>
              <Link className="sidebar-contact-link" to="tel:+55(9900)66622">
                +55 (9900) 666 22
              </Link>
            </div>
          </li>
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={MessageIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Contact Mail</p>
              <Link className="sidebar-contact-link" to="mailto:info@zstal.com">
                info@zstal.com
              </Link>
            </div>
          </li>
          <li className="sidebar-contact-list gap-3 d-flex justify-content-start align-items-start">
            <img src={LocationIcon} alt="Icon" />
            <div className="text">
              <p className="sidebar-contact-title">Office Location</p>
              <p className="sidebar-contact-link">
                Head Office: 14/4, Bonosri, Road A, califurnia, USA.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content-box mb-30">
        <h4 className="sidebar-title">Social Icon Info</h4>
        <ul className="sidebar-social d-flex align-items-center">
          <li>
            <Link
              className="sidebar-social-link"
              to="www.facebook.com"
              target="_blank"
            >
              <img className="social-icon" src={FacebookDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.twitter.com"
              target="_blank"
            >
              <img className="social-icon" src={TwitterDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.instagram.com"
              target="_blank"
            >
              <img className="social-icon" src={InstagramDark} alt="Icon" />
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-social-link"
              to="www.linkdien.com"
              target="_blank"
            >
              <img className="social-icon" src={LinkedinDark} alt="Icon" />
            </Link>
          </li>
        </ul>
      </div>
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
    </div>
  );
}

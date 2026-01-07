import SearchIconWhite from "@/assets/images/icons/serach-white.svg";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import { Link } from "react-router-dom";

export default function CaseStudySidebar() {
  return (
    <div className="details-left-content">
      <div className="content-box details-entry-title mb-30 show-lg">
        <h3 className="sidebar-title">Search Hear</h3>
        {/* Search  */}
        <form className="search-wrap" action="/">
          <input
            className="search-input"
            type="text"
            placeholder="Enter Your Keyword..."
          />
          <button className="btn-search" type="submit">
            <img className="serach-icon" src={SearchIconWhite} alt="Search" />
          </button>
        </form>
      </div>
      <div className="content-box mb-30">
        <h3 className="sidebar-title">Service List</h3>
        <ul className="sidebar-list-wrap">
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              UX strategy
            </Link>
          </li>
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              Information architecture
            </Link>
          </li>
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              Prototyping
            </Link>
          </li>
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              Wireframing
            </Link>
          </li>
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              UI Design
            </Link>
          </li>
          <li className="sidebar-list">
            <Link className="sidebar-link" to="#">
              Figma Design
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-box mb-30">
        <h3 className="sidebar-title">Social Icon Info</h3>
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

import SearchIconWhite from "@/assets/images/icons/serach-white.svg";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import CalendarIcon from "@/assets/images/icons/calendar-icon.svg";

import RecentPostOne from "@/assets/images/thumb/recent-post-1.webp";
import RecentPostTwo from "@/assets/images/thumb/recent-post-2.webp";
import RecentPostThree from "@/assets/images/thumb/recent-post-3.webp";
import { Link } from "react-router-dom";

export default function BlogSidebarOne() {
  return (
    <div className="details-left-content">
      <div className="content-box details-entry-title mb-30 show-lg">
        <h3 className="sidebar-title">Search Heer</h3>
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
      {/* Recent Post  */}
      <div className="content-box recent-post-wrap mb-20">
        <h3 className="sidebar-title">Recent Blogs</h3>
        <article className="recent-post-item">
          <div className="recent-thumb-wrap">
            <img className="recent-thumb" src={RecentPostOne} alt="Crimanal" />
          </div>
          <div className="recent-post-content">
            <div className="recent-meta">
              <p className="recent-author">
                <span>by</span>
                <Link className="recent-author-link" to="#">
                  Zstal
                </Link>
              </p>
              <Link className="recent-category" to="#">
                Attorney
              </Link>
            </div>
            <h4>
              <Link className="recent-title" to="/blog-detail">
                Domestic Violence Lawyer
              </Link>
            </h4>
            <p className="blog-date">
              <img src={CalendarIcon} alt="Icon" />
              09 March 2024
            </p>
          </div>
        </article>
        <article className="recent-post-item">
          <div className="recent-thumb-wrap">
            <img className="recent-thumb" src={RecentPostTwo} alt="Crimanal" />
          </div>
          <div className="recent-post-content">
            <div className="recent-meta">
              <p className="recent-author">
                <span>by</span>
                <Link className="recent-author-link" to="#">
                  Zstal
                </Link>
              </p>
              <Link className="recent-category" to="#">
                Attorney
              </Link>
            </div>
            <h4>
              <Link className="recent-title" to="/blog-detail">
                Web Violence Lawyer
              </Link>
            </h4>
            <p className="blog-date">
              <img src={CalendarIcon} alt="Icon" />
              09 March 2024
            </p>
          </div>
        </article>
        <article className="recent-post-item">
          <div className="recent-thumb-wrap">
            <img
              className="recent-thumb"
              src={RecentPostThree}
              alt="Crimanal"
            />
          </div>
          <div className="recent-post-content">
            <div className="recent-meta">
              <p className="recent-author">
                <span>by</span>
                <Link className="recent-author-link" to="#">
                  Zstal
                </Link>
              </p>
              <Link className="recent-category" to="#">
                Attorney
              </Link>
            </div>
            <h4>
              <Link className="recent-title" to="/blog-detail">
                Domestic Violence Lawyer
              </Link>
            </h4>
            <p className="blog-date">
              <img src={CalendarIcon} alt="Icon" />
              09 March 2024
            </p>
          </div>
        </article>
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

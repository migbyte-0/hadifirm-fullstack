import PropTypes from "prop-types";
import BannerShape from "@/assets/images/shapes/banner-shape.png";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import { Link } from "react-router-dom";

InnerHero.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
};

export default function InnerHero({ backgroundImage, title }) {
  return (
    <section className="banner-area">
      <div className="container-one position-relative overflow-hidden">
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="banner-content">
            <h1
              className="section-title-lg mb-10 fade-slide bottom"
              data-delay="0.2"
            >
              {title}
            </h1>
            <ul className="breadcrumbs-list fade-slide bottom" data-delay="0.4">
              <li className="breadcrumbs-item">
                <Link className="breadcrumbs-link" to="index-1">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs-item">{title}</li>
            </ul>
          </div>
        </div>
        {/* Shape */}
        <img
          className="banner-shape zoom-in-out"
          src={BannerShape}
          alt="Shape"
        />
      </div>
      <ul className="banner-social">
        <li className="banner-social-list">
          <Link className="banner-social-link" to="www.facebook.com">
            fb
          </Link>
        </li>
        <li className="banner-social-list">
          <Link className="banner-social-link" to="www.twitter.com">
            TW
          </Link>
        </li>
        <li className="banner-social-list">
          <Link className="banner-social-link" to="www.linkdien.com">
            IN
          </Link>
        </li>
        <li className="banner-social-list">
          <Link className="banner-social-link" to="www.behance.com">
            BE
          </Link>
        </li>
      </ul>
      <div className="hero-two-contact">
        <span className="hero-two-phone">
          <img src={PhonePlusDark} alt="Icon" />
        </span>
        <Link className="hero-contact-link" to="tel:+12223334455">
          + 1 222 333 44 55
        </Link>
      </div>
    </section>
  );
}

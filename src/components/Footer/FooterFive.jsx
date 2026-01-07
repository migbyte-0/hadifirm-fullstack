import Logo from "@/assets/images/logos/logo.png";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedInDark from "@/assets/images/icons/linkdien-dark.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import { Link } from "react-router-dom";

export default function FooterFive() {
  return (
    <footer className="footer-area-5 pt-150 position-relative">
      <div className="container">
        <div className="footer-content footer-two-border">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-10 col-12 mb-40 mb-lg-0-">
              <div className="footer-left">
                <Link to="index-1" className="footer-logo mb-30 d-block">
                  <img src={Logo} alt="footer-logo" />
                </Link>
                <div className="footer-text mb-10">
                  <p className="footer-content">
                    Copyright: © 2024 <span>Zstal</span> by company. All Rights
                    Reserved.
                  </p>
                </div>
                <ul className="social-icon gap-3 d-flex">
                  <li>
                    <Link
                      className="footer-social-link"
                      to="www.facebook.com"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        src={FacebookDark}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-social-link"
                      to="www.twitter.com"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        src={TwitterDark}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-social-link"
                      to="www.instagram.com"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        src={InstagramDark}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer-social-link"
                      to="www.linkdien.com"
                      target="_blank"
                    >
                      <img
                        className="social-icon"
                        src={LinkedInDark}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
              <div className="footer-right">
                <div className="footer-nav-menu">
                  <h3 className="footer-title footer-subtitle">
                    Working Hours
                  </h3>
                  <p className="pb-20">Our Office are open 07AM - 22PM</p>
                  <p className="footer-title footer-subtitle">
                    Monday - Friday
                  </p>
                  <ul className="footer-list">
                    <li>
                      <Link className="footer-link" to="#">
                        Weekends
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-menu">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-list">
                    <li>
                      <Link className="footer-link" to="/services">
                        Areas We Serve
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/faq">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/testimonials">
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/about">
                        Payment Portal
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <h3 className="footer-title">Columbia Office</h3>
                  <ul className="footer-list">
                    <li>1820 Bull Street</li>
                    <li>Columbia, SC 29201</li>
                    <li>
                      <Link className="footer-link" to="#">
                        (803) 879-4499
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="#">
                        Directions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newlatter d-flex flex-column flex-md-row justify-content-between align-items-center pb-60 pt-50">
          <div className="col mb-20 mb-md-0">
            <h4 className="footer-newsleter">
              Looking for a <span>Newsletter?</span>
            </h4>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <form className="newletter-form" action="/">
              <input
                className="newslatter-input"
                type="text"
                placeholder="Enter Your Newslatter..."
              />
              <button className="btn-newsletter" type="submit">
                <img src={ArrowTopBlack} alt="Icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

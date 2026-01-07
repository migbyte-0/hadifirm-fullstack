import Logo from "@/assets/images/logos/logo.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import FacebookDarkIcon from "@/assets/images/icons/facebook-dark.svg";
import TwitterDarkIcon from "@/assets/images/icons/twitter-dark.svg";
import InstagramDarkIcon from "@/assets/images/icons/instagram-dark.svg";
import LinkedInDarkIcon from "@/assets/images/icons/linkdien-dark.svg";

import FooterShapeOne from "@/assets/images/shapes/footer-shape-1.png";
import FooterShapeTwo from "@/assets/images/shapes/footer-shape-2.png";
import FooterShapeThree from "@/assets/images/shapes/footer-shape-3.png";
import FooterShapeFour from "@/assets/images/shapes/footer-shape-4.png";
import { Link } from "react-router-dom";

export default function FooterThree() {
  return (
    <footer className="footer-area pt-140">
      <div className="container">
        <div className="footer-content footer-two-border">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-10 col-12 mb-40 mb-lg-0-">
              <div className="footer-left">
                <Link to="index-1" className="footer-logo mb-30 d-block">
                  <img src={Logo} alt="footer-logo" />
                </Link>
                <div className="footer-text mb-30 ">
                  <p className="footer-content">
                    Fusce sodales egestas neque, in pulvinar enim ultricies at.
                    Vivamus vitae consequat elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
              <div className="footer-right">
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
                  <h3 className="footer-title">Greenville Office</h3>
                  <ul className="footer-list">
                    <li>819 E North St Suite</li>
                    <li>234Greenville, SC</li>
                    <li>
                      <Link className="footer-link" to="tel:01(864)618-2323">
                        01(864) 618-2323
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="support">
                        Directions
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
        <div className="newlatter d-flex flex-column flex-md-row justify-content-between align-items-center pb-60 pt-40">
          <div className="col mb-20 mb-md-0">
            <h4 className="footer-newsleter">
              Looking for a <span>Newsletter?</span>
            </h4>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
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
      <div className="copyright-area">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6 col-12 mb-16 mb-md-0">
              <div className="copyright-left-area">
                <p className="copyright-text">
                  Copyright: © 2024 <Link to="#">Zstal</Link> by company. All
                  Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-12">
              <ul className="social-icon gap-3 d-flex justify-content-center justify-content-md-end">
                <li>
                  <Link
                    className="footer-social-link"
                    to="www.facebook.com"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      src={FacebookDarkIcon}
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
                      src={TwitterDarkIcon}
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
                      src={InstagramDarkIcon}
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
                      src={LinkedInDarkIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="footer-shape-1 moveBottom"
        src={FooterShapeOne}
        alt="Shape"
      />
      <img className="footer-shape-2" src={FooterShapeTwo} alt="Shape" />
      <img className="footer-shape-3" src={FooterShapeThree} alt="Shape" />
      <img
        className="footer-shape-4 moveBottom"
        src={FooterShapeFour}
        alt="Shape"
      />
    </footer>
  );
}

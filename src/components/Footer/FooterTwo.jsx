import Logo from "@/assets/images/logos/logo.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedInDark from "@/assets/images/icons/linkdien-dark.svg";
import FooterTwoShapeOne from "@/assets/images/shapes/footer-two-shape-1.png";
import FooterTwoShapeTwo from "@/assets/images/shapes/footer-two-shape-2.png";
import FooterTwoShapeThree from "@/assets/images/shapes/footer-two-shape-3.png";
import FooterTwoShapeFour from "@/assets/images/shapes/footer-two-shape-4.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import { Link } from "react-router-dom";

export default function FooterTwo() {
  return (
    <footer className="footer-area-2 pt-150 position-relative">
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logoleft-2 mb-30">
            <Link to="index-1">
              <img src={Logo} alt="footer-logo" />
            </Link>
            <p className="footer-text-2">
              Fusce sodales egestas neque, in pulvinar enim ultricies at.
              Vivamus vitae consequat elit.
            </p>
          </div>
          <div className="footer-contact-2">
            <p className="footer-contact mb-30">
              Phone For <span>Contact</span>
            </p>
            <Link className="footer-contact-number" to="tel:+55123444777">
              +55 123 444 777
            </Link>
          </div>
        </div>
        {/* Menu  */}
        <div className="footer-menuwrap-2 pb-140">
          <div className="footer-nav-menu">
            <h3 className="footer-title">Greenville Office</h3>
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
          <div className="footer-nav-menu">
            <h3 className="footer-title">Columbia Office</h3>
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
            <h4 className="footer-title">Looking for a Newsletter?</h4>
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
            <p className="footer-newsleter-text">
              <span>*</span> Call us 24/7 at 869-5414-5 or fill out
              consultation.
            </p>
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
                    <img className="social-icon" src={TwitterDark} alt="Icon" />
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
        </div>
      </div>
      {/* Shape */}
      <img className="footer-shape-two-1" src={FooterTwoShapeOne} alt="Shape" />
      <img className="footer-shape-two-2" src={FooterTwoShapeTwo} alt="Shape" />
      <img
        className="footer-shape-two-3 zoom-in-out"
        src={FooterTwoShapeThree}
        alt="Shape"
      />
      <img
        className="footer-shape-two-4"
        src={FooterTwoShapeFour}
        alt="Shape"
      />
      <img className="footer-shape-two-5" src={AboutShapeThree} alt="Shape" />
    </footer>
  );
}

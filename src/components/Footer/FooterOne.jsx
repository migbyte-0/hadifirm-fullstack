import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";

import FooterShapeOne from "@/assets/images/shapes/footer-shape-1.png";
import FooterShapeTwo from "@/assets/images/shapes/footer-shape-2.png";
import FooterShapeThree from "@/assets/images/shapes/footer-shape-3.png";
import FooterShapeFour from "@/assets/images/shapes/footer-shape-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import Logo from "@/assets/images/logos/logo.png";
import CounterOne from "../Counter/CounterOne";
import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <footer className="footer-area">
      <div className="container">
        <CounterOne />
        <div className="footer-content footer-two-border">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-10 col-12 mb-40 mb-lg-0-">
              <div className="footer-left">
                <Link to="index" className="footer-logo mb-30 d-block">
                  <img src={Logo} alt="footer-logo" />
                </Link>
                <div className="footer-text mb-30 ">
                  <p className="footer-content">
                    مكتب قانوني مرخّص ومتخصص في تقديم الخدمات القانونية والاستشارية
                    للأفراد والمنشآت في المملكة العربية السعودية.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-10 col-12">
              <div className="footer-right">
                <div className="footer-nav-menu">
                  <h3 className="footer-title">روابط سريعة</h3>
                  <ul className="footer-list">
                    <li>
                      <Link className="footer-link" to="/services">
                        الخدمات القانونية
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/contact">
                        تواصل معنا
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/faq">
                        الأسئلة الشائعة
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/testimonials">
                        آراء العملاء
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/about">
                        عن المكتب
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <h3 className="footer-title">معلومات التواصل</h3>
                  <ul className="footer-list">
                    <li>المملكة العربية السعودية</li>
                    <li>الجوال: 0551099998</li>
                    <li>
                      <Link className="footer-link" to="tel:0551099998">
                        اتصل الآن
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="mailto:hade1616@hotmail.com">
                        راسلنا
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <h3 className="footer-title">قيمنا</h3>
                  <ul className="footer-list">
                    <li>النزاهة والمصداقية</li>
                    <li>السرية المهنية</li>
                    <li>الدقة والاحتراف</li>
                    <li>المسؤولية القانونية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newlatter d-flex flex-column flex-md-row justify-content-between align-items-center pb-60 pt-40">
          <div className="col mb-20 mb-md-0">
            <h4 className="footer-newsleter">
              هل تريد <span>التواصل معنا؟</span>
            </h4>
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <form className="newletter-form" action="/">
              <input
                className="newslatter-input"
                type="text"
                placeholder="أدخل بريدك الإلكتروني..."
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
                  جميع الحقوق محفوظة © 2024 <Link to="#">مكتب المحامي هادي محمد الحصين</Link>
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
                      src={LinkedinDark}
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

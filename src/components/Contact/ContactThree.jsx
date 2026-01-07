import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import { Link } from "react-router-dom";

export default function ContactThree() {
  return (
    <section className="contact-consultation pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div
              className="blog-consulatanry-box position-relative fade-slide bottom"
              data-delay="0.2"
            >
              <span className="section-subtitle">Our Latest News</span>
              <p className="section-title mb-20">
                Best Of Legal Practice Areas <span>Latest Blogs And News</span>
              </p>
              <form className="form-wrap" action="/">
                <div className="row g-3 mb-20">
                  <div className="col-12">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="email"
                      placeholder="info.Zstal@gmail.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="+66 (121) 234 444"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-textarea"
                      placeholder="Additional Message"
                      id="w3review"
                      name="w3review"
                      rows={4}
                      cols={50}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col mb-30">
                    <p className="form-text">
                      <span>*</span> Call us 24/7 at 869-5414-5 or fill out the
                      form below to receive a free and confidential initial
                      consultation.
                    </p>
                  </div>
                  <div className="col-xl-12">
                    <button className="btn-fill" type="submit">
                      Post Comments
                      <img
                        className="btn-icon-black"
                        src={ArrowTopYellow}
                        alt="Icon"
                      />
                    </button>
                  </div>
                </div>
              </form>
              <img className="form-shape" src={ShadowShape} alt="Shape" />
            </div>
          </div>
          <div className="col-lg-4 fade-slide bottom" data-delay="0.2">
            <div className="sidebar-cta-box sidebar-cta-box-2">
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
        </div>
      </div>
    </section>
  );
}

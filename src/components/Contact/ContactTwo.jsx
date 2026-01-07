import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import ShapeCircle from "@/assets/images/shapes/shape-circle-lg.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";

export default function ContactTwo() {
  return (
    <section className="contact-area-2 position-relative">
      <div className="row">
        <div className="col-xl-6 col-lg-8 col-md-12">
          <div className="contact-left-2">
            <div className="contact-box-2 position-relative">
              <span
                className="section-subtitle pb-20 fade-slide bottom"
                data-delay="0.2"
              >
                Our Latest News
              </span>
              <h2
                className="section-title mb-20 fade-slide bottom"
                data-delay="0.4"
              >
                Best Of Legal Practice Areas
                <span className="title-yellow">Latest Blogs And News</span>
              </h2>
              <form
                className="form-wrap fade-slide bottom"
                data-delay="0.6"
                action="/"
              >
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
        </div>
      </div>
      {/* Shape */}
      <img className="contact-two-shape-1" src={ShapeCircle} alt="Shape" />
      <img className="contact-two-shape-2" src={AboutShapeThree} alt="Shape" />
    </section>
  );
}

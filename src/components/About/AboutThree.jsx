import AboutImageFive from "@/assets/images/thumb/ab-img-5.webp";
import LogoTwoSmall from "@/assets/images/logos/logo-two-small.png";
import AboutShapeOne from "@/assets/images/shapes/about-shape-1.png";
import AboutShapeTwo from "@/assets/images/shapes/about-shape-2.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import CircleShape from "@/assets/images/shapes/circle-shape.png";

export default function AboutThree() {
  return (
    <div className="about-area-5 pt-120 pb-100 position-relative">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
            <div className="about-left-5 position-relative">
              <img
                className="about-img-5 fade-slide bottom"
                data-delay="0.2"
                src={AboutImageFive}
                alt="Image"
              />
              <div className="about-circle">
                <div className="about-text-circle position-relative">
                  <div className="circle_textwrap">
                    <svg
                      viewBox="0 0 300 300"
                      width="100%"
                      className="text-circle rotate"
                    >
                      <path
                        id="criclePath"
                        d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
                        fill="transparent"
                      />
                      <text className="circle_text">
                        <textPath
                          className="circle-color"
                          xlinkHref="#criclePath"
                        >
                          Zstal law Group Company Welcome to our
                        </textPath>
                      </text>
                    </svg>
                    <div className="about-circle-logo">
                      <img src={LogoTwoSmall} alt="company-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-9 col-sm-12">
            <div className="about-right-5">
              <span
                className="section-subtitle pb-20 fade-slide bottom"
                data-delay="0.2"
              >
                Unparalleled Company About
              </span>
              <h2
                className="section-title pb-10 fade-slide bottom"
                data-delay="0.4"
              >
                Professional Lawyer At Your Complex Legal Service.
              </h2>
              <div className="fade-slide bottom" data-delay="0.6">
                <p className="about-text-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
                  velit sed quam dignissim facilisis id ac orci. Nam ultricies
                  malesuada arcu ut facilisis. Morbi ultricies ac eros id
                  mollis. Curabitur placerat leo elit, quis.
                </p>
              </div>
              <div
                className="skill-wrap-2 pt-40 fade-slide bottom"
                data-delay="0.7"
              >
                <div className="skill-item">
                  <div className="skill-bar-wrap">
                    <span
                      className="skill-progress load-85"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className="skill-text-wrap">
                    <p className="skill-text">Best Legal Defense</p>
                    <span className="skill-purcent">85%</span>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-bar-wrap">
                    <span
                      className="skill-progress load-75"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <div className="skill-text-wrap">
                    <p className="skill-text">Strive For Excellence</p>
                    <span className="skill-purcent">75%</span>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-bar-wrap">
                    <span
                      className="skill-progress load-95"
                      style={{ width: "95%" }}
                    />
                  </span>
                  <div className="skill-text-wrap">
                    <p className="skill-text">Family Law Service</p>
                    <span className="skill-purcent">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape */}
      <img
        className="about-shape-five-1 moveBottom"
        src={AboutShapeOne}
        alt="Shape"
      />
      <img
        className="about-shape-five-2 moveLeft"
        src={AboutShapeTwo}
        alt="Shape"
      />
      <img
        className="about-shape-five-3 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="about-shape-five-4" src={AboutShapeFour} alt="Shape" />
      <img className="about-shape-five-5" src={CircleShape} alt="Shape" />
    </div>
  );
}

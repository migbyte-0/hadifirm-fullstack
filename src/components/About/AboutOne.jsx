import LogoTwoSmall from "@/assets/images/logos/logo-two-small.png";
import HomeOneMan from "@/assets/images/vision_2030.jpeg";
import HomeOneWoman from "@/assets/images/Dedication & Commitment.png";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import AboutShapeOne from "@/assets/images/shapes/about-shape-1.png";
import AboutShapeTwo from "@/assets/images/shapes/about-shape-2.png";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import AboutShapeFive from "@/assets/images/shapes/about-shape-5.png";

export default function AbutOne() {
  return (
    <section className="about-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="about-content">
          <span className="section-subtitle fade-slide right" data-delay="0.2">
            من نحن
          </span>
          <div className="d-flex justify-content-between align-items-center mb-30">
            <h2
              className="about-title split_chars"
              data-cs-stagger="0.05"
              data-cs-translate-x={-100}
            >
              عن المكتب
            </h2>
            <div
              className="about-text-circle position-relative fade-slide top"
              data-delay="0.4"
            >
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
                    <textPath className="circle-color" xlinkHref="#criclePath">
                      مكتب المحامي هادي محمد الحصين مرحباً بكم
                    </textPath>
                  </text>
                </svg>
                <div className="about-circle-logo">
                  <img src={LogoTwoSmall} alt="company-logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="row about-text-contnet">
            <div className="col-lg-4 col-md-10 left-img mb-20 mb-lg-0">
              <img
                className="full-imgage fade-slide left"
                data-delay="0.2"
                src={HomeOneMan}
                alt="man"
              />
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="section-entry-title mb-20-mb-lg-80">
                <h4
                  className="about-subtitle mb-20 fade-slide right"
                  data-delay="0.2"
                >
                  رؤيتنا & <span>رسالتنا</span>
                </h4>
                <div className="fade-slide bottom" data-delay="0.4">
                  <p>
                    أن نكون مكتبًا قانونيًا رائدًا وموثوقًا في تقديم الخدمات القانونية،
                    ومرجعًا مهنيًا يعتمد عليه في حماية الحقوق وتحقيق العدالة.
                    تقديم خدمات قانونية احترافية قائمة على المعرفة النظامية والخبرة العملية،
                    مع الالتزام بالشفافية والمهنية وحفظ أسرار العملاء.
                  </p>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-5 mb-20 mb-lg-0">
                  <img
                    className="right-sub-img full-image fade-slide right"
                    data-delay="0.3"
                    src={HomeOneWoman}
                    alt="woman"
                  />
                </div>
                <div className="col-lg-6">
                  <div
                    className="section-entry-title fade-slide bottom"
                    data-delay="0.4"
                  >
                    <h4 className="about-subtitle mb-20">
                      منهجية <span>العمل</span>
                    </h4>
                    <p className="mb-16 ">
                      دراسة القضية دراسة شاملة وبيان الموقف النظامي بوضوح للعميل
                      ووضع الاستراتيجية القانونية المناسبة.
                    </p>
                    <h5 className="title-2 mb-40">
                      المتابعة المستمرة حتى صدور الحكم
                      <span>أو إنهاء النزاع.</span>
                    </h5>
                    <div className="section-btn d-inline-block">
                      <a
                        href="/consultation"
                        className="btn-fill s-btn gap-2 d-flex align-items-center"
                      >
                        استشارة مجانية
                        <img
                          className="btn-icon-black"
                          src={ArrowTopYellow}
                          alt="Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img
        className="about-shape-1 moveBottom"
        src={AboutShapeOne}
        alt="Shape"
      />
      <img className="about-shape-2 moveLeft" src={AboutShapeTwo} alt="Shape" />
      <img
        className="about-shape-3 moveBottom"
        src={AboutShapeThree}
        alt="Shape"
      />
      <img className="about-shape-4" src={AboutShapeFour} alt="Shape" />
      <img className="about-shape-5" src={AboutShapeFive} alt="Shape" />
    </section>
  );
}

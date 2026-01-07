import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import PersonalInjuryImage from "@/assets/images/portfolios/parsonal-injury.svg";
import HouseImage from "@/assets/images/portfolios/house.webp";

import PortfolioIconTwo from "@/assets/images/portfolios/icon-2.svg";
import PortfolioIconThree from "@/assets/images/portfolios/icon-3.svg";
import PortfolioIconFive from "@/assets/images/portfolios/icon-5.svg";
import PortfolioIconSix from "@/assets/images/portfolios/icon-6.svg";
import pShape from "@/assets/images/shapes/p-shape-2.png";
import { Link } from "react-router-dom";

export default function PortfolioOne() {
  return (
    <section className="portfolio-area position-relative">
      <div className="container-one">
        <div className="portfolio-content pb-120">
          <div className="container">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-150 mb-sm-50 gap-2">
              <div className="portfolio-top-wrap mb-50">
                <span
                  className="section-subtitle pb-20 fade-slide bottom"
                  data-delay="0.2"
                >
                  أحدث الدراسات القضائية
                </span>
                <h2 className="section-title move-line-3d">
                  اكتشف نجاحاتنا |
                  <span className="title-yellow"> تصفح أعمالنا</span>
                </h2>
              </div>
              <div
                className="section-btn mb-30 mb-sm-0 fade-slide top"
                data-delay="0.2"
              >
                <Link to="/contact" className="btn-fill gap-2 s-btn">
                  استشارة مجانية
                  <img
                    className="btn-icon-black"
                    src={ArrowTopYellow}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            <div className="accordion portfolio-accordion" id="myAccordion">
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.2"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingOne"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PersonalInjuryImage}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">القضايا الشخصية والمدنية</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          ندرس الوقائع بعمق لضمان حماية الحقوق الفردية وتقديم تمثيل قانوني فعال يحقق العدالة.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.4"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingTwo"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconTwo}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">نزاعات الشركات</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          نضع الاستراتيجيات المناسبة للشركات والمؤسسات لحماية استثماراتها وإنهاء النزاعات التجارية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.6"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingThree"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconThree}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">المطالبات المالية</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          نعتمد منهجية واضحة في تحصيل الحقوق المالية عبر المتابعة المستمرة حتى إنهاء النزاع.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.8"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingFour"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconSix}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">
                          قضايا العقود والشراكات
                        </h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          صياغة ومراجعة العقود التجارية والمدنية واتفاقيات الشراكة لضمان أعلى مستويات الحماية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.9"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingFive"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconFive}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">قضايا التنفيـ</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          متابعة تنفيذ الأحكام القضائية وتحصيل الحقوق المالية المتعثرة بكفاءة وسرعة.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item portfolio-accordion-item mb-30 fade-slide bottom"
                data-delay="0.8"
              >
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingSix"
                >
                  <div
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-10"
                          src={PortfolioIconSix}
                          alt="icon"
                        />
                        <h4 className="portfolio-acc-title">تسوية النزاعات</h4>
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          العمل على حل النزاعات ودياً عبر الوساطة والصلح قبل الوصول إلى القضاء أو أثناء التقاضي.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex justify-content-start align-items-start flex-column">
                        <img
                          className="mb-20 mb-md-0"
                          src={HouseImage}
                          alt="icon"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <p>
                          Car accidents happen around the Atlanta area everyday.
                          From minor fender benders to serious crashes, car
                          accidents can leave you struggling to make ends meet.
                          If you were involved in a car accident caused by
                          someone else, The Marks Law Group can help you.
                        </p>
                        <p>
                          Costly medical bills, loss of income, pain and
                          suffering, and property damage can be sought for
                          compensation after an accident. Aaron P. Marks has
                          years experience helping car accident victims attain
                          the resources they need to recover and move.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="portfolio-shape" src={pShape} alt="Shape" />
      </div>
    </section>
  );
}

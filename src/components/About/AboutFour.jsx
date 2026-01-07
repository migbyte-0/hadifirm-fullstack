import AboutFourImageOne from "@/assets/images/thumb/ab-thumb-6.webp";
import TabIconOne from "@/assets/images/icons/tab-icon-1.png";
import TabIconTwo from "@/assets/images/icons/tab-icon-2.png";
import LawImage from "@/assets/images/logos/law.png";
import CanadianImage from "@/assets/images/logos/canadian.png";
import AlbImage from "@/assets/images/logos/alb.png";

export default function AboutFour() {
  return (
    <section className="about-area-6 pb-120">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-8 col-sm-12">
            <div className="about-left-6">
              <img
                className="fade-slide left"
                data-delay="0.2"
                src={AboutFourImageOne}
                alt="Image"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-9 col-sm-12">
            <div className="about-right-6">
              <span
                className="section-subtitle pb-20 fade-slide bottom"
                data-delay="0.2"
              >
                Our Awards and clients
              </span>
              <h2
                className="section-title pb-50 fade-slide bottom"
                data-delay="0.4"
              >
                We are our website Create and solution.
              </h2>
              <div className="fade-slide bottom" data-delay="0.6">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <img className="tab-icon" src={TabIconOne} alt="Icon" />
                      Our Awards
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <img className="tab-icon" src={TabIconTwo} alt="Icon" />
                      Our Clients
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={LawImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Finance Law Awards 2021
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={CanadianImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Business Law Awards 2023
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={AlbImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Family Law Awards 2020
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={LawImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Finance Law Awards 2021
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={AlbImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Family Law Awards 2020
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="tab-img">
                        <img src={CanadianImage} alt="Image" />
                      </div>
                      <div className="tab-item-content">
                        <h3 className="section-title-sm">
                          Business Law Awards 2023
                        </h3>
                        <p className="tab-item-text">
                          Mauris ut enim sit amet lacus ornare ullamcorper.
                          Praesent placerat neque eu purus rhoncus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

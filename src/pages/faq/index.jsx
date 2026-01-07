import InnerLayout from "@/Layout/InnerLayout";
import InnerHero from "@/components/Hero/InnerHero";
import BannerBG from "@/assets/images/banners/faq-banner-bg.webp";
import CounterTwo from "@/components/Counter/CounterTwo";
import FaqSidebar from "@/components/Faq/FaqSidebar";

import FaqImage from "@/assets/images/services/faq.webp";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";

export default function FaqPage() {
  return (
    <InnerLayout>
      <main id="wrapper" className="wrapper">
        <InnerHero backgroundImage={BannerBG} title="Faq" />
        <section className="faq-area pt-150 position-relative overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-12 col-12 mb-20 mb-lg-0">
                <div className="details-left-content details-entry-title">
                  <span className="section-subtitle pb-20">
                    We Provided Our FAQ
                  </span>
                  <h2 className="section-title mb-10">
                    Zstal law group company We Provide
                    <span className="title-yellow">Frequency & question</span>
                  </h2>
                  <p className="faq-content-2">
                    Nunc eros mi, rhoncus sed orci non, luctus fringilla ligula.
                    Mauris massa lacus, iaculis elend placer scelerisque risus.
                    Maecenas sed tortor molestie, satis nibh sit amet dapibus
                    felis. Vivamus sed neque iaculis. Nunc eros mi, rhoncus sed
                    orci.
                  </p>
                  <div
                    className="accordion portfolio-accordion portfolio-accordion-2 mt-50 mb-50"
                    id="myAccordion"
                  >
                    <div className="accordion-item portfolio-accordion-item ">
                      <div
                        className="accordion-header cursor-Pointer"
                        id="headingOne"
                      >
                        <div
                          className="accordion-button collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <h3 className="faq-item-title">
                            What can we do for you with Figma?
                          </h3>
                        </div>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#myAccordion"
                      >
                        <p className="faq-content">
                          Morbi tempor pharetra dui vitae condimentum. Morbi
                          mattis cursus dignissim. Curabitur mauris massa,
                          efficitur vitae nisl nec, fringilla commodo nisl.
                          Quisque eu tellus tincidunt, vehicula arcu in, feugiat
                          velit.
                        </p>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingTwo"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                          >
                            <h3 className="faq-item-title">
                              What can we do for you with Figma?
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Morbi tempor pharetra dui vitae condimentum. Morbi
                            mattis cursus dignissim. Curabitur mauris massa,
                            efficitur vitae nisl nec, fringilla commodo nisl.
                            Quisque eu tellus tincidunt, vehicula arcu in,
                            feugiat velit.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingThree"
                        >
                          <div
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                          >
                            <h3 className="faq-item-title">
                              What does the letters FAQ stand for?
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Morbi tempor pharetra dui vitae condimentum. Morbi
                            mattis cursus dignissim. Curabitur mauris massa,
                            efficitur vitae nisl nec, fringilla commodo nisl.
                            Quisque eu tellus tincidunt, vehicula arcu in,
                            feugiat velit.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingFour"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                          >
                            <h3 className="faq-item-title">
                              What is the meaning of FAQ type?
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Morbi tempor pharetra dui vitae condimentum. Morbi
                            mattis cursus dignissim. Curabitur mauris massa,
                            efficitur vitae nisl nec, fringilla commodo nisl.
                            Quisque eu tellus tincidunt, vehicula arcu in,
                            feugiat velit.
                          </p>
                        </div>
                      </div>
                      <div className="accordion-item portfolio-accordion-item ">
                        <div
                          className="accordion-header cursor-Pointer"
                          id="headingFive"
                        >
                          <div
                            className="accordion-button collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                          >
                            <h3 className="faq-item-title">
                              What does BTS mean in text?
                            </h3>
                          </div>
                        </div>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <p className="faq-content">
                            Morbi tempor pharetra dui vitae condimentum. Morbi
                            mattis cursus dignissim. Curabitur mauris massa,
                            efficitur vitae nisl nec, fringilla commodo nisl.
                            Quisque eu tellus tincidunt, vehicula arcu in,
                            feugiat velit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className="faq-img" src={FaqImage} alt="Faq" />
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                <FaqSidebar />
              </div>
            </div>
          </div>
          <img className="about-shape-four-1" src={ShadowShape} alt="Shape" />
        </section>

        <CounterTwo classNames="pt-100 pb-110" />
      </main>
    </InnerLayout>
  );
}

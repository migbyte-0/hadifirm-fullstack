import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import AboutShapeFive from "@/assets/images/shapes/about-shape-5.png";
import { Link } from "react-router-dom";

export default function FaqOne() {
  return (
    <section className="faq-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 col-md-10">
            <span
              className="section-subtitle pb-10 fade-slide right"
              data-delay="0.2"
            >
              We Provided Our FAQ
            </span>
            <h2
              className="section-title pb-20 fade-slide bottom"
              data-delay="0.4"
            >
              Zstal law group company We Provide
              <span className="title-yellow">{"Frequency & question's"}</span>
            </h2>
            <div className="fade-slide bottom" data-delay="0.6">
              <p className="faq-text">
                Nunc eros mi, rhoncus sed orci non, luctus fringilla ligula.
                Mauris massa lacus, iaculis elend placer scelerisque risus.
                Maecenas sed tortor molestie, satis nibh sit amet dapibus felis.
                Vivamus sed neque iaculis. Nunc eros mi, rhoncus sed orci.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-gradiant fade-slide bottom"
              data-delay="0.7"
            >
              All Case Study
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
          <div
            className="col-lg-6 col-md-12 fade-slide bottom"
            data-delay="0.6"
          >
            <div
              className="accordion portfolio-accordion portfolio-accordion-2"
              id="myAccordion"
            >
              <div className="accordion-item portfolio-accordion-item">
                <div
                  className="accordion-header cursor-Pointer"
                  id="headingOne"
                >
                  <div
                    className="accordion-button collapsed"
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
                    Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                    cursus dignissim. Curabitur mauris massa, efficitur vitae
                    nisl nec, fringilla commodo nisl. Quisque eu tellus
                    tincidunt, vehicula arcu in, feugiat velit.
                  </p>
                </div>
                <div className="accordion-item portfolio-accordion-item">
                  <div
                    className="accordion-header cursor-Pointer"
                    id="headingTwo"
                  >
                    <div
                      className="accordion-button collapsed"
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
                      Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                      cursus dignissim. Curabitur mauris massa, efficitur vitae
                      nisl nec, fringilla commodo nisl. Quisque eu tellus
                      tincidunt, vehicula arcu in, feugiat velit.
                    </p>
                  </div>
                </div>
                <div className="accordion-item portfolio-accordion-item">
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
                      Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                      cursus dignissim. Curabitur mauris massa, efficitur vitae
                      nisl nec, fringilla commodo nisl. Quisque eu tellus
                      tincidunt, vehicula arcu in, feugiat velit.
                    </p>
                  </div>
                </div>
                <div className="accordion-item portfolio-accordion-item">
                  <div
                    className="accordion-header cursor-Pointer"
                    id="headingFour"
                  >
                    <div
                      className="accordion-button collapsed"
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
                      Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                      cursus dignissim. Curabitur mauris massa, efficitur vitae
                      nisl nec, fringilla commodo nisl. Quisque eu tellus
                      tincidunt, vehicula arcu in, feugiat velit.
                    </p>
                  </div>
                </div>
                <div className="accordion-item portfolio-accordion-item">
                  <div
                    className="accordion-header cursor-Pointer"
                    id="headingFive"
                  >
                    <div
                      className="accordion-button collapsed"
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
                      Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                      cursus dignissim. Curabitur mauris massa, efficitur vitae
                      nisl nec, fringilla commodo nisl. Quisque eu tellus
                      tincidunt, vehicula arcu in, feugiat velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shape  */}
          <img className="faq-shape" src={AboutShapeFive} alt="Shape" />
        </div>
      </div>
    </section>
  );
}

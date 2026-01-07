import PhoneIcon from "@/assets/images/services/phone.webp";
import CheckImage from "@/assets/images/services/check.webp";
import CheckIcon from "@/assets/images/icons/check-icon.svg";
import SimpleIconOne from "@/assets/images/svg/simple-icon-1.svg";
import SimpleIconTwo from "@/assets/images/svg/simple-icon-2.svg";

export default function ServiceContent() {
  return (
    <div className="details-left-content details-entry-title">
      <div className="text">
        <img className="mb-20" src={PhoneIcon} alt="Phone" />
        <h2 className="blog-detail-title">Car Accidents Law</h2>
        <p className="blog-detail-content">
          Nunc eros mi, rhoncus sed orci non, luctus fringilla ligula. Mauris
          massa lacus, iaculis elend placer scelerisque risus. Maecenas sed
          tortor molestie, satis nibh sit amet dapibus felis. Vivamus sed neque
          iaculis, ultrices nulla euvenenatis dui. Praesent luctus urna eu
          dapibus pulvinar. Curabitur sed magna accumsan neque fermentum
          laoreet. Nunc eros mi, rhoncus sed orci non, luctus fringilla ligula.
          Mauris massa lacus, iaculis elend.
        </p>
        <p className="blog-detail-content">
          Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis.
          Vivamus sed neque iaculis, ultrices nulla venenatis dui. Praesent
          luctus urna eu dapibus pulvinar. Curabitur sed magna accumsan neque
          fermentum laoreet. Ut nunc.
        </p>
        <p className="blog-detail-content">
          Duis sed augue condimentum, blandit sapien in, accumsan eros.
          Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus
          a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel
          erat at est aliquam laoreet. Donec tincidunt, nunc eu gravida
          malesuada, tellus leo.
        </p>
      </div>
      <div className="check mb-30">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-xl-5 col-md-10 col-lg-12 col-12 mb-20 mb-lg-0">
            <img src={CheckImage} alt="check" />
          </div>
          <div className="col-xl-7 col-md-10 col-lg-12 col-12 check-text">
            <h3 className="blog-detail-subtitle">We Serve the Best Work</h3>
            <p className="blog-detail-content">
              Integer in fringilla lacus. Nullam finibus libero id leo facilisis
              eleifend. Nunc efficitur pulvinar leo eu rutrum Nam aliquam.
              Mauris ut enim sit.
            </p>
            <ul className="check-item">
              <li className="check-list">
                <img className="check-icon" src={CheckIcon} alt="Icon" /> Will
                you provide website layout about design
              </li>
              <li className="check-list">
                <img className="check-icon" src={CheckIcon} alt="Icon" />
                Branding With Business Agency
              </li>
              <li className="check-list">
                <img className="check-icon" src={CheckIcon} alt="Icon" /> Why
                should I work with an agency over a freelancer
              </li>
              <li className="check-list">
                <img className="check-icon" src={CheckIcon} alt="Icon" /> How
                much do you charge for branding
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="blog-detail-content">
        Nulla magna elit, gravida et porta non, commodo mollis ex. Suspendisse
        at purus imperdiet, vehicula mi in, accumsan turpis. In eu ipsum eu sem
        suscipit pellentesque et sed mi. Etiam vitae molestie justo, ut finibus
        ipsum. Cras porta euismod neque, ut dictum odio blandit quis. Mauris
        commodo venenatis turpis non rhoncus. Suspendisse in odio eu mauris
        consectetur sodales nec et felis. Fusce felis enim, tristique a
        fringilla in, vehicula non leo. Aliquam in ipsum quis nibh tincidunt
        euismod.
      </p>
      <div className="simple-card mb-30">
        <div className="simple-card-list details-entry-title d-flex justify-content-between align-items-center">
          <div className="text">
            <p className="service-detail-inner-text">Real Specialist</p>
            <h4 className="blog-detail-subtitle">Car Accidents Law.</h4>
          </div>
          <img src={SimpleIconOne} alt="icon" />
        </div>
        <div className="simple-card-list details-entry-title d-flex justify-content-between align-items-center">
          <div className="text">
            <p className="service-detail-inner-text">Real Specialist</p>
            <h4 className="blog-detail-subtitle">Car Accidents Law.</h4>
          </div>
          <img src={SimpleIconTwo} alt="icon" />
        </div>
      </div>
      <p className="blog-detail-content">
        Etiam vitae molestie justo, ut finibus ipsum. Cras porta euismod neque,
        ut dictum odio blandit quis. Mauris commodo venenatis turpis non
        rhoncus. Suspendisse in odio eu mauris consectetur sodales nec et felis.
        Fusce felis enim, tristique a fringilla in, vehicula non leo. Aliquam in
        ipsum quis nibh tincidunt euismod.
      </p>
      <div className="faq-area">
        <div
          className="accordion portfolio-accordion portfolio-accordion-2 mt-10"
          id="myAccordion"
        >
          <div className="accordion-item portfolio-accordion-item ">
            <div className="accordion-header cursor-Pointer" id="headingOne">
              <div
                className="accordion-button collapsed "
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <h5 className="faq-item-title">
                  What can we do for you with Figma?
                </h5>
              </div>
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#myAccordion"
            >
              <p className="faq-content">
                Morbi tempor pharetra dui vitae condimentum. Morbi mattis cursus
                dignissim. Curabitur mauris massa, efficitur vitae nisl nec,
                fringilla commodo nisl. Quisque eu tellus tincidunt, vehicula
                arcu in, feugiat velit.
              </p>
            </div>
            <div className="accordion-item portfolio-accordion-item ">
              <div className="accordion-header cursor-Pointer" id="headingTwo">
                <div
                  className="accordion-button collapsed "
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <h5 className="faq-item-title">
                    What can we do for you with Figma?
                  </h5>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <p className="faq-content">
                  Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                  cursus dignissim. Curabitur mauris massa, efficitur vitae nisl
                  nec, fringilla commodo nisl. Quisque eu tellus tincidunt,
                  vehicula arcu in, feugiat velit.
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
                  <h5 className="faq-item-title">
                    What does the letters FAQ stand for?
                  </h5>
                </div>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#myAccordion"
              >
                <p className="faq-content">
                  Morbi tempor pharetra dui vitae condimentum. Morbi mattis
                  cursus dignissim. Curabitur mauris massa, efficitur vitae nisl
                  nec, fringilla commodo nisl. Quisque eu tellus tincidunt,
                  vehicula arcu in, feugiat velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import PartnerOneImageOne from "@/assets/images/svg/company-1.svg";
import PartnerOneImageTwo from "@/assets/images/svg/company-2.svg";
import PartnerOneImageThree from "@/assets/images/svg/company-3.svg";
import PartnerOneImageFour from "@/assets/images/svg/company-4.svg";
import PartnerOneImageFive from "@/assets/images/svg/company-5.svg";

export default function PartnerOne() {
  return (
    <div className="comapny-area-2 pb-150">
      <div className="container">
        <div className="company-grid">
          <div className="company-list fade-slide bottom" data-delay="0.2">
            <img src={PartnerOneImageOne} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.4">
            <img src={PartnerOneImageTwo} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.6">
            <img src={PartnerOneImageThree} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.8">
            <img src={PartnerOneImageFour} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.9">
            <img src={PartnerOneImageFive} alt="company" />
          </div>
        </div>
      </div>
    </div>
  );
}

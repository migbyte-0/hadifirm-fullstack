import PartnerOneImageOne from "@/assets/images/svg/company-1.svg";
import PartnerOneImageTwo from "@/assets/images/svg/company-2.svg";
import PartnerOneImageThree from "@/assets/images/svg/company-3.svg";
import PartnerOneImageFour from "@/assets/images/svg/company-4.svg";
import PartnerOneImageFive from "@/assets/images/svg/company-5.svg";
import PartnerOneImageSix from "@/assets/images/svg/company-6.svg";
import PartnerOneImageSeven from "@/assets/images/svg/company-7.svg";
import PartnerOneImageEight from "@/assets/images/svg/company-8.svg";
import PartnerOneImageNine from "@/assets/images/svg/company-9.svg";
import PartnerOneImageTen from "@/assets/images/svg/company-10.svg";

export default function PartnerTwo() {
  return (
    <div className="company-area-3 pb-150">
      <div className="container">
        <div className="company-grid company-grid-three">
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
          <div className="company-list fade-slide bottom" data-delay="0.2">
            <img src={PartnerOneImageSix} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.4">
            <img src={PartnerOneImageSeven} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.6">
            <img src={PartnerOneImageEight} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.8">
            <img src={PartnerOneImageNine} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.9">
            <img src={PartnerOneImageTen} alt="company" />
          </div>
        </div>
      </div>
    </div>
  );
}

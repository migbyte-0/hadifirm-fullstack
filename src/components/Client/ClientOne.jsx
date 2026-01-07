import CompanyOne from "@/assets/images/svg/company-1.svg";
import CompanyTwo from "@/assets/images/svg/company-2.svg";
import CompanyThree from "@/assets/images/svg/company-3.svg";
import CompanyFour from "@/assets/images/svg/company-4.svg";
import CompanyFive from "@/assets/images/svg/company-5.svg";
import CompanySix from "@/assets/images/svg/company-6.svg";
import CompanySeven from "@/assets/images/svg/company-7.svg";
import CompanyEight from "@/assets/images/svg/company-8.svg";
import CompanyNine from "@/assets/images/svg/company-9.svg";
import CompanyTen from "@/assets/images/svg/company-10.svg";

export default function ClientOne() {
  return (
    <div className="company-area pb-150">
      <div className="container">
        <div className="company-grid">
          <div className="company-list fade-slide bottom" data-delay="0.2">
            <img src={CompanyOne} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.4">
            <img src={CompanyTwo} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.6">
            <img src={CompanyThree} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.8">
            <img src={CompanyFour} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.9">
            <img src={CompanyFive} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.2">
            <img src={CompanySix} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.4">
            <img src={CompanySeven} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.6">
            <img src={CompanyEight} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.8">
            <img src={CompanyNine} alt="company" />
          </div>
          <div className="company-list fade-slide bottom" data-delay="0.9">
            <img src={CompanyTen} alt="company" />
          </div>
        </div>
      </div>
    </div>
  );
}

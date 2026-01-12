import { usePartners } from "@/context/HomeContentContext";
import PartnerOneImageOne from "@/assets/images/svg/company-1.svg";
import PartnerOneImageTwo from "@/assets/images/svg/company-2.svg";
import PartnerOneImageThree from "@/assets/images/svg/company-3.svg";
import PartnerOneImageFour from "@/assets/images/svg/company-4.svg";
import PartnerOneImageFive from "@/assets/images/svg/company-5.svg";

const defaultImages = [
  PartnerOneImageOne,
  PartnerOneImageTwo,
  PartnerOneImageThree,
  PartnerOneImageFour,
  PartnerOneImageFive,
];

export default function PartnerOneDynamic() {
  const { partners, loading } = usePartners();

  if (loading) {
    return null;
  }

  const displayPartners = partners.length > 0 ? partners : [
    { name: 'شريك 1' },
    { name: 'شريك 2' },
    { name: 'شريك 3' },
    { name: 'شريك 4' },
    { name: 'شريك 5' },
  ];

  return (
    <div className="comapny-area-2 pb-150">
      <div className="container">
        <div className="company-grid">
          {displayPartners.map((partner, index) => (
            <div
              key={partner.id || index}
              className="company-list fade-slide bottom"
              data-delay={0.2 + index * 0.2}
            >
              <img
                src={partner.image_url || defaultImages[index % defaultImages.length]}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

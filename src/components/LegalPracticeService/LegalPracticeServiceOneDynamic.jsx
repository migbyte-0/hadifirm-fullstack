import { usePracticeAreas } from "@/context/HomeContentContext";
import SlideImageOne from "@/assets/images/services/slide-img-1.webp";
import SlideImageTwo from "@/assets/images/services/slide-img-2.webp";
import SlideImageThree from "@/assets/images/services/slide-img-3.webp";
import SlideImageFour from "@/assets/images/services/slide-img-4.webp";
import SlideOneIcon from "@/assets/images/icons/s-slide-1.png";
import SlideTwoIcon from "@/assets/images/icons/s-slide-2.png";
import SlideThreeIcon from "@/assets/images/icons/s-slide-3.png";
import SlideFourIcon from "@/assets/images/icons/s-slide-4.png";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import ServiceTwoShapeOne from "@/assets/images/shapes/s-shape-two-1.png";
import ServiceTwoShapeTwo from "@/assets/images/shapes/s-shape-two-2.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const defaultImages = [SlideImageOne, SlideImageTwo, SlideImageThree, SlideImageFour];
const defaultIcons = [SlideOneIcon, SlideTwoIcon, SlideThreeIcon, SlideFourIcon];

export default function LegalPracticeServiceOneDynamic() {
  const { subtitle, title, titleHighlight, areas, loading } = usePracticeAreas();

  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 2 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) {
    return null;
  }

  const displayAreas = areas.length > 0 ? areas : [
    { title: 'الدفاع الجنائي', description: 'نقدم خدمات الدفاع في القضايا الجنائية.' },
    { title: 'مراجعة العقود', description: 'صياغة ومراجعة العقود القانونية.' },
    { title: 'قضايا الهجرة', description: 'استشارات وخدمات قانونية للهجرة.' },
    { title: 'القانون التجاري', description: 'خدمات قانونية للشركات والأعمال.' },
  ];

  return (
    <section className="service-two pt-150 pb-150 position-relative mb-sm-30">
      <div className="service-two-content text-center pb-50 mx-sm-350">
        <span
          className="section-subtitle pb-10 fade-slide bottom"
          data-delay="0.2"
        >
          {subtitle}
        </span>
        <h2
          className="section-title text-center fade-slide bottom"
          data-delay="0.4"
        >
          {title}
          <span className="title-yellow">{titleHighlight}</span>
        </h2>
      </div>
      <Slider
        {...sliderOption}
        className="service-slider-two fade-slide bottom"
        data-delay="0.6"
      >
        {displayAreas.map((area, index) => (
          <div key={area.id || index} className="service-two-slide">
            <div className="service-slide-img">
              <img src={area.image_url || defaultImages[index % defaultImages.length]} alt="Image" />
            </div>
            <div className="service-slideText-wrap">
              <div className="service-slide-iconwrap">
                <img
                  className="service-slide-icon"
                  src={area.icon_url || defaultIcons[index % defaultIcons.length]}
                  alt="Image"
                />
              </div>
              <div className="service-slide-content">
                <h3>
                  <Link className="service-slide-title" to="/service-detail">
                    {area.title}
                  </Link>
                </h3>
                <p className="service-slide-text">
                  {area.description}
                </p>
              </div>
            </div>
            <Link to="/service-detail" className="service-slide-arrowIcon">
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
        ))}
      </Slider>
      {/* Shapes */}
      <img className="service-two-shape-1" src={ServiceTwoShapeOne} alt="Shape" />
      <img className="service-two-shape-2" src={ServiceTwoShapeTwo} alt="Shape" />
    </section>
  );
}

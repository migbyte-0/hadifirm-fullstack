import Slider from "react-slick";
import { useServicesSlider } from "@/context/HomeContentContext";
import PencilImage from "@/assets/images/svg/pencil.png";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ServiceIconThree from "@/assets/images/svg/service-icon-3.svg";
import PaymentIcon from "@/assets/images/svg/payment-icon.svg";
import { Link } from "react-router-dom";

const defaultIcons = [PencilImage, ServiceIconThree, PaymentIcon];

export default function ServiceTwoDynamic() {
  const { services, loading } = useServicesSlider();

  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return null;
  }

  // Use CMS services or fallback to defaults
  const displayServices = services.length > 0 ? services : [
    { title: 'رسوم قانونية معقولة', description: 'نحرص على تقديم خدمات قانونية بأسعار تنافسية.' },
    { title: 'دعم متواصل على مدار الساعة', description: 'فريقنا متاح دائماً للرد على استفساراتكم.' },
    { title: 'خطط دفع مرنة', description: 'نوفر خيارات دفع متعددة تناسب ظروفكم.' },
  ];

  return (
    <section className="service-card-2 pb-150">
      <div className="container">
        <Slider
          {...sliderOption}
          className="service-slider service-slider-2 position-relative pb-40-md-60 fade-slide bottom"
          data-delay="0.4"
        >
          {displayServices.map((service, index) => (
            <div key={service.id || index} className="card-group text-card position-relative">
              <div className="card h-100">
                <div className="card-body">
                  <div className="img">
                    <img
                      src={service.icon_url || defaultIcons[index % defaultIcons.length]}
                      className="card-img-top mt-20 mb-40"
                      alt="img"
                    />
                  </div>
                  <h2>
                    <Link className="service-card-title" to="/service-detail">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="card-text newsroom-card-text mb-40">
                    {service.description}
                  </p>
                  <Link
                    className="card-icon btn-hover-radius"
                    to="/service-detail"
                  >
                    <img
                      className="card-icon-black"
                      src={ArrowTopDark}
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

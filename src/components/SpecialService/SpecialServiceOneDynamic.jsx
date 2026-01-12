import { useSpecialServices } from "@/context/HomeContentContext";
import ServiceIconOne from "@/assets/images/svg/service-icon-1.svg";
import ServiceIconThree from "@/assets/images/svg/service-icon-3.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import LeronBook from "@/assets/images/home-2/leron-book.webp";
import ShapeOne from "@/assets/images/shapes/s-shape-1.png";
import ShapeTwo from "@/assets/images/shapes/s-shape-2.png";
import { Link } from "react-router-dom";

const defaultIcons = [ServiceIconOne, ServiceIconOne, ServiceIconThree];

export default function SpecialServiceOneDynamic() {
  const { subtitle, title, titleHighlight, description, image, services, loading } = useSpecialServices();

  if (loading) {
    return null;
  }

  const displayServices = services.length > 0 ? services : [
    { title: 'الدفاع الجنائي', description: 'نقدم خدمات الدفاع في القضايا الجنائية بكفاءة عالية.' },
    { title: 'القضايا الأسرية', description: 'متخصصون في قضايا الأحوال الشخصية والأسرة.' },
    { title: 'الاعتداء والضرب', description: 'نترافع في قضايا الاعتداء بمختلف أنواعها.' },
  ];

  return (
    <section className="our-service pt-210 pb-100 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-10 col-md-10 col-12">
            <span
              className="section-subtitle pb-20 fade-slide right"
              data-delay="0.2"
            >
              {subtitle}
            </span>
            <h2
              className="section-title pb-10 fade-slide bottom"
              data-delay="0.4"
            >
              {title} <span className="title-yellow">{titleHighlight}</span>
            </h2>
            <div className="fade-slide bottom" data-delay="0.6">
              <p className="service-content-2 pb-20">
                {description}
              </p>
            </div>
            <div className="latest-project-right">
              <div className="project-item">
                {displayServices.map((service, index) => (
                  <div
                    key={service.id || index}
                    className="project-list fade-slide bottom"
                    data-delay={0.2 + index * 0.2}
                  >
                    <div className="project-img">
                      <img src={service.icon_url || defaultIcons[index % defaultIcons.length]} alt="Icon" />
                    </div>
                    <div className="project-content text-start">
                      <h3 className="our-service-title">
                        {service.title}
                      </h3>
                      <p>
                        {service.description}
                      </p>
                    </div>
                    <Link className="project-icon-two" to="/service-detail">
                      <img
                        className="service-arrow-icon"
                        src={ArrowTopDark}
                        alt="Icon"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10 col-md-10 col-12">
            <div className="service-img fade-slide left" data-delay="0.2">
              <img src={image || LeronBook} alt="Book" />
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img className="our-service-shape-1" src={ShapeOne} alt="Shape" />
      <img className="our-service-shape-2" src={ShapeTwo} alt="Shape" />
    </section>
  );
}

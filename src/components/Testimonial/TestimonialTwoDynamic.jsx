import { useTestimonials } from "@/context/HomeContentContext";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import FiveStarImage from "@/assets/images/icons/five-star.svg";
import ProfileImage from "@/assets/images/teams/profile.webp";
import QuoteBtnImage from "@/assets/images/svg/btn.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function TestimonialTwoDynamic() {
  const { subtitle, title, titleHighlight, buttonText, testimonials, loading } = useTestimonials();

  const sliderOption = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 570, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return null;
  }

  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    { name: 'أحمد محمد', location: 'الرياض', role: 'رجل أعمال', content: 'تجربة ممتازة مع المكتب، فريق محترف.', reviews_count: '12.5k' },
    { name: 'فاطمة العلي', location: 'جدة', role: 'محامية', content: 'خدمات قانونية احترافية ودعم متواصل.', reviews_count: '10.5k' },
    { name: 'خالد السعيد', location: 'الدمام', role: 'مدير شركة', content: 'أفضل مكتب محاماة تعاملت معه.', reviews_count: '15.5k' },
  ];

  return (
    <section className="testimonial-area ts-style-2 pb-150">
      <div className="container">
        <div className="testimonial-topwrap d-flex flex-column flex-sm-row justify-md-content-between align-items-center pb-50">
          <div className="col fade-slide bottom" data-delay="0.4">
            <span className="section-subtitle pb-20">{subtitle}</span>
            <h2 className="section-title">
              {title}
              <span className="title-yellow">{titleHighlight}</span>
            </h2>
          </div>
          <div className="section-btn d-inline-block mb-30 mb-sm-0 fade-slide top" data-delay="0.4">
            <Link to="/consultation" className="btn-fill gap-2 s-btn d-flex align-items-center">
              {buttonText}
              <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
            </Link>
          </div>
        </div>
        <Slider {...sliderOption} className="testimonial-slider testimonial-card-gallery pb-40-md-60 fade-slide bottom" data-delay="0.6">
          {displayTestimonials.map((testimonial, index) => (
            <div key={testimonial.id || index} className="testimonial-card-list">
              <div className="count-member mb-20">
                <strong>{testimonial.reviews_count || '10k'}</strong>
                <div className="review">
                  <div className="review-icon">
                    <img className="five-star" src={FiveStarImage} alt="Star" />
                  </div>
                  <small>التقييمات</small>
                </div>
              </div>
              <p className="testimonail-content">{testimonial.content}</p>
              <div className="member-profile d-flex justify-content-between align-items-center">
                <div className="member-details">
                  <img src={testimonial.image_url || ProfileImage} alt="Profile" />
                  <div className="member-info">
                    <h6 className="name">
                      {testimonial.name}, <span>{testimonial.location}</span>
                    </h6>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <blockquote>
                  <img src={QuoteBtnImage} alt="Image" />
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

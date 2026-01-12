import BannerShape from "@/assets/images/shapes/banner-shape.png";
import PhonePlusDark from "@/assets/images/icons/phone-plus-dark.svg";
import BannerBG from "@/assets/images/banners/contact-banner-bg.webp";
import { Link } from "react-router-dom";
import { useContactContent } from "@/context/ContactContentContext";

export default function ContactHeroDynamic() {
  const { getValue, getItems, getMediaUrl, loading } = useContactContent();

  const title = getValue('hero', 'title', 'تواصل معنا');
  const breadcrumbHome = getValue('hero', 'breadcrumb_home', 'الرئيسية');
  const phoneNumber = getValue('hero', 'phone_number', '0551099998');
  const phoneDisplay = getValue('hero', 'phone_display', '0551099998');
  const backgroundImage = getMediaUrl('hero', 'background_image', BannerBG);
  const phoneIcon = getMediaUrl('hero', 'phone_icon', PhonePlusDark);
  const socialLinks = getItems('social_links', [
    { label: 'fb', name: 'فيسبوك', url: '#' },
    { label: 'TW', name: 'تويتر', url: '#' },
    { label: 'IN', name: 'لينكدإن', url: '#' },
    { label: 'BE', name: 'بيهانس', url: '#' },
  ]);

  return (
    <section className="banner-area">
      <div className="container-one position-relative overflow-hidden">
        <div
          className="banner-wrapper"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="banner-content">
            <h1
              className="section-title-lg mb-10 fade-slide bottom"
              data-delay="0.2"
            >
              {title}
            </h1>
            <ul className="breadcrumbs-list fade-slide bottom" data-delay="0.4">
              <li className="breadcrumbs-item">
                <Link className="breadcrumbs-link" to="/">
                  {breadcrumbHome}
                </Link>
              </li>
              <li className="breadcrumbs-item">{title}</li>
            </ul>
          </div>
        </div>
        {/* Shape */}
        <img
          className="banner-shape zoom-in-out"
          src={BannerShape}
          alt="Shape"
        />
      </div>
      <ul className="banner-social">
        {socialLinks.map((link, index) => (
          <li key={index} className="banner-social-list">
            <Link 
              className="banner-social-link" 
              to={link.url || '#'}
              target={link.url?.startsWith('http') ? '_blank' : undefined}
              rel={link.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hero-two-contact">
        <span className="hero-two-phone">
          <img src={phoneIcon} alt="Icon" />
        </span>
        <Link className="hero-contact-link" to={`tel:${phoneNumber}`}>
          {phoneDisplay}
        </Link>
      </div>
    </section>
  );
}

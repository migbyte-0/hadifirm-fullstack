import { useContactContent } from "@/context/ContactContentContext";
import ContactIconOne from "@/assets/images/svg/contact-info-icon-1.svg";
import ContactIconThree from "@/assets/images/svg/contact-info-icon-3.svg";
import MailIcon from "@/assets/images/svg/mail.svg";
import { Link } from "react-router-dom";

export default function ContactInfoDynamic() {
  const { getValue, getMediaUrl, loading } = useContactContent();

  if (loading) {
    return (
      <div className="contact-info-card">
        <div className="container">
          <div className="card-content fade-slide bottom" data-delay="0.2">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">جاري التحميل...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const phoneIcon = getMediaUrl('info', 'phone_icon', ContactIconThree);
  const emailIcon = getMediaUrl('info', 'email_icon', MailIcon);
  const locationIcon = getMediaUrl('info', 'location_icon', ContactIconOne);

  return (
    <div className="contact-info-card">
      <div className="container">
        <div className="card-content fade-slide bottom" data-delay="0.2">
          {/* Phone Card */}
          <div className="card-item">
            <img
              className="contact-info-img"
              src={phoneIcon}
              alt="Phone"
            />
            <Link 
              className="contact-info-link" 
              to={`tel:${getValue('info', 'phone_1', '0551099998')}`}
            >
              {getValue('info', 'phone_1', '0551099998')}
            </Link>
            {getValue('info', 'phone_2') && (
              <Link 
                className="contact-info-link" 
                to={`tel:${getValue('info', 'phone_2')}`}
              >
                {getValue('info', 'phone_2')}
              </Link>
            )}
            <p className="contact-info-text">
              {getValue('info', 'phone_label', 'رقم الهاتف')}
            </p>
          </div>

          {/* Email Card */}
          <div className="card-item">
            <img className="contact-info-img" src={emailIcon} alt="Email" />
            <Link
              className="contact-info-link"
              to={`mailto:${getValue('info', 'email_1', 'hade1616@hotmail.com')}`}
            >
              {getValue('info', 'email_1', 'hade1616@hotmail.com')}
            </Link>
            {getValue('info', 'email_2') && (
              <Link 
                className="contact-info-link" 
                to={`mailto:${getValue('info', 'email_2')}`}
              >
                {getValue('info', 'email_2')}
              </Link>
            )}
            <p className="contact-info-text">
              {getValue('info', 'email_label', 'البريد الإلكتروني')}
            </p>
          </div>

          {/* Location Card */}
          <div className="card-item">
            <img
              className="contact-info-img"
              src={locationIcon}
              alt="Location"
            />
            <p className="contact-info-title">
              {getValue('info', 'location_1', 'الرياض - حي الملقا')}
            </p>
            {getValue('info', 'location_2') && (
              <p className="contact-info-title">
                {getValue('info', 'location_2')}
              </p>
            )}
            <p className="contact-info-text">
              {getValue('info', 'location_label', 'العنوان')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

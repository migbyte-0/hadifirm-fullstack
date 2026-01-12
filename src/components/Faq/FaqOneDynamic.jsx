import { useFAQ } from "@/context/HomeContentContext";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import AboutShapeFive from "@/assets/images/shapes/about-shape-5.png";
import { Link } from "react-router-dom";

export default function FaqOneDynamic() {
  const { subtitle, title, titleHighlight, description, buttonText, faqs, loading } = useFAQ();

  if (loading) {
    return null;
  }

  const displayFaqs = faqs.length > 0 ? faqs : [
    { question: 'ما هي أنواع القضايا التي تتعاملون معها؟', answer: 'نتعامل مع مجموعة واسعة من القضايا.' },
    { question: 'كيف يمكنني حجز استشارة قانونية؟', answer: 'يمكنك حجز استشارة من خلال موقعنا.' },
    { question: 'ما هي تكلفة الخدمات القانونية؟', answer: 'تختلف التكلفة حسب نوع القضية.' },
    { question: 'هل تقدمون خدمات للشركات؟', answer: 'نعم، نقدم خدمات قانونية شاملة للشركات.' },
    { question: 'كم تستغرق القضية عادةً؟', answer: 'يعتمد ذلك على نوع القضية وتعقيدها.' },
  ];

  return (
    <section className="faq-area pt-150 pb-150 position-relative">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 col-md-10">
            <span className="section-subtitle pb-10 fade-slide right" data-delay="0.2">
              {subtitle}
            </span>
            <h2 className="section-title pb-20 fade-slide bottom" data-delay="0.4">
              {title}
              <span className="title-yellow">{titleHighlight}</span>
            </h2>
            <div className="fade-slide bottom" data-delay="0.6">
              <p className="faq-text">{description}</p>
            </div>
            <Link to="/case-study" className="btn-gradiant fade-slide bottom" data-delay="0.7">
              {buttonText}
              <img src={ArrowTopBlack} alt="Icon" />
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 fade-slide bottom" data-delay="0.6">
            <div className="accordion portfolio-accordion portfolio-accordion-2" id="myAccordion">
              {displayFaqs.map((faq, index) => (
                <div key={faq.id || index} className="accordion-item portfolio-accordion-item">
                  <div className="accordion-header cursor-Pointer" id={`heading${index}`}>
                    <div
                      className={`accordion-button ${index !== 1 ? 'collapsed' : ''}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                    >
                      <h3 className="faq-item-title">{faq.question}</h3>
                    </div>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 1 ? 'show' : ''}`}
                    data-bs-parent="#myAccordion"
                  >
                    <p className="faq-content">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Shape */}
          <img className="faq-shape" src={AboutShapeFive} alt="Shape" />
        </div>
      </div>
    </section>
  );
}

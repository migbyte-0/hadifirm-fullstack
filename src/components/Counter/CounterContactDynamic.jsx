import { useContactContent } from "@/context/ContactContentContext";
import CountUp from "react-countup";

export default function CounterContactDynamic({ classNames = "pt-100 pb-110" }) {
  const { getItems, loading } = useContactContent();

  const counters = getItems('counters', [
    { value: '2', suffix: 'k+', label: 'مشروع مكتمل' },
    { value: '95', suffix: '%', label: 'نسبة النجاح' },
    { value: '55', suffix: '+', label: 'خبير قانوني' },
  ]);

  if (loading) {
    return (
      <section className={`counter-area ${classNames}`}>
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">جاري التحميل...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`counter-area ${classNames}`}>
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="counter-item fade-slide bottom" data-delay={`${0.2 + index * 0.2}`}>
                <div className="counter-content">
                  <div className="counter-number">
                    <CountUp 
                      end={parseFloat(counter.value) || 0} 
                      duration={2} 
                      enableScrollSpy 
                      scrollSpyOnce 
                    />
                    <span className="counter-suffix">{counter.suffix}</span>
                  </div>
                  <p className="counter-text">{counter.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

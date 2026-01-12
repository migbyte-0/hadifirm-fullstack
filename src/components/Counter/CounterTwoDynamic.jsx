import PropTypes from "prop-types";
import { useCounters } from "@/context/HomeContentContext";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

CounterTwoDynamic.propTypes = {
  classNames: PropTypes.string,
};

export default function CounterTwoDynamic({ classNames = "pb-110" }) {
  const { counters, loading } = useCounters();

  if (loading) {
    return null;
  }

  const displayCounters = counters.length > 0 ? counters : [
    { number: '2', suffix: 'k+', label: 'مشروع مكتمل' },
    { number: '95', suffix: '%', label: 'نسبة النجاح' },
    { number: '08', suffix: '', label: 'سنوات الخبرة' },
  ];

  return (
    <section className={`counter-area-2 ${classNames}`}>
      <div className="container">
        <div className="counter-wrap-2" id="counter">
          {displayCounters.map((counter, index) => (
            <div key={counter.id || index} className="counter-item-2 fade-slide bottom" data-delay={0.2 + index * 0.2}>
              <div className="count-project">
                <ReactVisibilitySensor delayedCall>
                  {({ isVisible }) => (
                    <span className="pe-0">
                      {isVisible ? (
                        <CountUp
                          className="count-num counter-title pe-0"
                          start={0}
                          end={parseInt(counter.number) || 0}
                        />
                      ) : (
                        0
                      )}
                    </span>
                  )}
                </ReactVisibilitySensor>
                {counter.suffix && <span className="counter-title">{counter.suffix}</span>}
              </div>
              <div className="project-shape">
                <div className="counter-circle-2">
                  <span className="counter-circle-sm" />
                </div>
                <h2 className="counter-text-2">{counter.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

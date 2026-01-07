import PropTypes from "prop-types";

import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

CounterTwo.propTypes = {
  classNames: PropTypes.string,
};

export default function CounterTwo({ classNames = "pb-110" }) {
  return (
    <section className={`counter-area-2 ${classNames}`}>
      <div className="container">
        <div className="counter-wrap-2" id="counter">
          <div className="counter-item-2 fade-slide bottom" data-delay="0.2">
            <div className="count-project">
              <ReactVisibilitySensor delayedCall>
                {({ isVisible }) => (
                  <span className="pe-0">
                    {isVisible ? (
                      <CountUp
                        className="count-num counter-title pe-0"
                        start={0}
                        end={2}
                      />
                    ) : (
                      0
                    )}
                  </span>
                )}
              </ReactVisibilitySensor>
              <span className="counter-title">k+</span>
            </div>
            <div className="project-shape">
              <div className="counter-circle-2">
                <span className="counter-circle-sm" />
              </div>
              <h2 className="counter-text-2">Project Complete</h2>
            </div>
          </div>
          <div className="counter-item-2 fade-slide bottom" data-delay="0.4">
            <div className="count-project">
              <ReactVisibilitySensor delayedCall>
                {({ isVisible }) => (
                  <span className="pe-0">
                    {isVisible ? (
                      <CountUp
                        className="count-num counter-title pe-0"
                        start={0}
                        end={95}
                      />
                    ) : (
                      0
                    )}
                  </span>
                )}
              </ReactVisibilitySensor>
              <span className="counter-title">%</span>
            </div>
            <div className="project-shape">
              <div className="counter-circle-2">
                <span className="counter-circle-sm" />
              </div>
              <h2 className="counter-text-2">Success Rate</h2>
            </div>
          </div>
          <div className="counter-item-2 fade-slide bottom" data-delay="0.6">
            <div className="count-project">
              <span className="years-of-experience counter-title p-0">0</span>
              <ReactVisibilitySensor delayedCall>
                {({ isVisible }) => (
                  <span className="pe-0">
                    {isVisible ? (
                      <CountUp
                        className="count-num counter-title pe-0"
                        start={0}
                        end={8}
                      />
                    ) : (
                      0
                    )}
                  </span>
                )}
              </ReactVisibilitySensor>
            </div>
            <div className="project-shape">
              <div className="counter-circle-2">
                <span className="counter-circle-sm" />
              </div>
              <h2 className="counter-text-2">Years Of Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

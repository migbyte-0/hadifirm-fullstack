import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function CounterOne() {
  return (
    <div className="fact" id="counter">
      <div className="project-status-content">
        <div className="project-list">
          <div className="count-project">
            <ReactVisibilitySensor delayedCall>
              {({ isVisible }) => (
                <span className="pe-0">
                  {isVisible ? (
                    <CountUp
                      className="count-num counting-number pe-0"
                      start={0}
                      end={2}
                    />
                  ) : (
                    0
                  )}
                </span>
              )}
            </ReactVisibilitySensor>
            <span className="counting-number">k+</span>
          </div>

          <div className="project-shape">
            <div className="shape-box position-relative">
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden" />
              </span>
            </div>
            <h2 className="counter-text">قضية منجزة</h2>
          </div>
        </div>
        <div className="project-list">
          <div className="count-project">
            <ReactVisibilitySensor delayedCall>
              {({ isVisible }) => (
                <span className="pe-0">
                  {isVisible ? (
                    <CountUp
                      className="count-num counting-number pe-0"
                      start={0}
                      end={95}
                    />
                  ) : (
                    0
                  )}
                </span>
              )}
            </ReactVisibilitySensor>
            <span className="counting-number">%</span>
          </div>
          <div className="project-shape">
            <div className="shape-box position-relative">
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden" />
              </span>
            </div>
            <h2 className="counter-text">نسبة النجاح</h2>
          </div>
        </div>
        <div className="project-list">
          <div className="count-project">
            <span className="years-of-experience counting-number p-0">0</span>
            <ReactVisibilitySensor delayedCall>
              {({ isVisible }) => (
                <span className="pe-0">
                  {isVisible ? (
                    <CountUp
                      className="count-num counting-number"
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
            <div className="shape-box position-relative">
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden" />
              </span>
            </div>
            <h2 className="counter-text">سنوات الخبرة</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

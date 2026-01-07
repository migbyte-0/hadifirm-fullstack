import PropTypes from "prop-types";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import LawerImage from "@/assets/images/teams/lawer.webp";
import CircleBlackImage from "@/assets/images/shapes/circle-black.png";
import { Link } from "react-router-dom";

CtaTwo.propTypes = {
  classes: PropTypes.any,
};

export default function CtaTwo({ classes = "" }) {
  return (
    <section className={`cta-area ${classes}`}>
      <div className="container">
        <div className="cta-wrapper fade-slide bottom" data-delay="0.2">
          <h2 className="section-title-lg">We Can Help!</h2>
          <p className="cta-text">
            {"It’s Fast, Easy, And There Is Absolutely No Obligation."}
          </p>
          <Link to="/contact" className="btn-fill gap-2 align-items-center">
            Free Consultancy
            <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
          </Link>
          <img className="cta-img" src={LawerImage} alt="Image" />
          <img
            className="cta-shape zoom-in-out"
            src={CircleBlackImage}
            alt="Shape"
          />
        </div>
      </div>
    </section>
  );
}

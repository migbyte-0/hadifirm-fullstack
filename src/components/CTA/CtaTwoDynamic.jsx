import PropTypes from "prop-types";
import { useCTA } from "@/context/HomeContentContext";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";
import LawerImage from "@/assets/images/teams/lawer.webp";
import CircleBlackImage from "@/assets/images/shapes/circle-black.png";
import { Link } from "react-router-dom";

CtaTwoDynamic.propTypes = {
  classes: PropTypes.any,
};

export default function CtaTwoDynamic({ classes = "" }) {
  const { title, description, buttonText, buttonLink, image, shape, loading } = useCTA();

  if (loading) {
    return null;
  }

  return (
    <section className={`cta-area ${classes}`}>
      <div className="container">
        <div className="cta-wrapper fade-slide bottom" data-delay="0.2">
          <h2 className="section-title-lg">{title}</h2>
          <p className="cta-text">{description}</p>
          <Link to={buttonLink || "/consultation"} className="btn-fill gap-2 align-items-center">
            {buttonText}
            <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
          </Link>
          <img className="cta-img" src={image || LawerImage} alt="Image" />
          <img
            className="cta-shape zoom-in-out"
            src={shape || CircleBlackImage}
            alt="Shape"
          />
        </div>
      </div>
    </section>
  );
}

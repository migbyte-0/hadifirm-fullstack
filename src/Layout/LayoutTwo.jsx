import PropTypes from "prop-types";
import OffcanvasDynamic from "@/components/Menu/OffcanvasDynamic";
import Preloader from "@/components/Preloader/Preloader";
import FooterTwo from "@/components/Footer/FooterTwo";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";
import HeaderTwoDynamic from "@/components/Header/HeaderTwoDynamic";

LayoutTwo.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutTwo({ children, preloader = false }) {
  return (
    <>
      <HeaderTwoDynamic />
      <OffcanvasDynamic />
      {preloader && <Preloader />}
      {children}
      <FooterTwo />
      <BackdropModal />
      <BackToTop />
      <AnimationPlugin />
    </>
  );
}

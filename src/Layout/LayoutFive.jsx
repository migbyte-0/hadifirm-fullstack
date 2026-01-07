import PropTypes from "prop-types";
import Offcanvas from "@/components/Menu/Offcanvas";
import Preloader from "@/components/Preloader/Preloader";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";
import HeaderFive from "@/components/Header/HeaderFive";
import FooterFive from "@/components/Footer/FooterFive";

LayoutFive.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutFive({ children, preloader = false }) {
  return (
    <>
      <HeaderFive />
      <Offcanvas />
      {preloader && <Preloader />}
      {children}
      <FooterFive />
      <BackdropModal />
      <BackToTop />
      <AnimationPlugin />
    </>
  );
}

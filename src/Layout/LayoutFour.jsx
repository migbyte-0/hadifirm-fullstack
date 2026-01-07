import PropTypes from "prop-types";
import Offcanvas from "@/components/Menu/Offcanvas";
import Preloader from "@/components/Preloader/Preloader";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";
import HeaderFour from "@/components/Header/HeaderFour";
import FooterTwo from "@/components/Footer/FooterTwo";

LayoutFour.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutFour({ children, preloader = false }) {
  return (
    <>
      <HeaderFour />
      <Offcanvas />
      {preloader && <Preloader />}
      {children}
      <FooterTwo />
      <BackdropModal />
      <BackToTop />
      <AnimationPlugin />
    </>
  );
}

import PropTypes from "prop-types";
import Offcanvas from "@/components/Menu/Offcanvas";
import Preloader from "@/components/Preloader/Preloader";
import FooterTwo from "@/components/Footer/FooterTwo";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";
import HeaderTwo from "@/components/Header/HeaderTwo";

LayoutTwo.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutTwo({ children, preloader = false }) {
  return (
    <>
      <HeaderTwo />
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

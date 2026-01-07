import PropTypes from "prop-types";
import HeaderOne from "@/components/Header/HeaderOne";
import Offcanvas from "@/components/Menu/Offcanvas";
import Preloader from "@/components/Preloader/Preloader";
import FooterOne from "@/components/Footer/FooterOne";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";

LayoutOne.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutOne({ children, preloader = false }) {
  return (
    <>
      <HeaderOne />
      <Offcanvas />
      {preloader && <Preloader />}
      {children}
      <FooterOne />
      <BackdropModal />
      <BackToTop />
      <AnimationPlugin />
    </>
  );
}

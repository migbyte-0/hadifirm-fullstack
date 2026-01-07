import PropTypes from "prop-types";
import Offcanvas from "@/components/Menu/Offcanvas";
import Preloader from "@/components/Preloader/Preloader";
import BackdropModal from "@/components/Modal/BackdropModal";
import BackToTop from "@/components/BackToTop/BackToTop";
import AnimationPlugin from "@/Plugins/AnimatePlugin";
import HeaderThree from "@/components/Header/HeaderThree";
import FooterThree from "@/components/Footer/FooterThree";

LayoutThree.propTypes = {
  children: PropTypes.any,
  preloader: PropTypes.bool,
};

export default function LayoutThree({ children, preloader = false }) {
  return (
    <>
      <HeaderThree />
      <Offcanvas />
      {preloader && <Preloader />}
      {children}
      <FooterThree />
      <BackdropModal />
      <BackToTop />
      <AnimationPlugin />
    </>
  );
}

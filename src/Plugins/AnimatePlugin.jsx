import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

import SplitText from "@/assets/js/gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

AnimationPlugin.propTypes = {
  children: PropTypes.object,
};

export default function AnimationPlugin({ children }) {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const fadeItems = gsap.utils.toArray(".fade");
      fadeItems.forEach((fadeItem) => {
        let startPosition = "top 90%",
          tweenOptions = {
            duration: 1.5,
            delay: 0.5,
            opacity: 1,
          };

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.to(fadeItem, tweenOptions);
      });

      const fadeSlideItems = gsap.utils.toArray(".fade-slide");

      fadeSlideItems.forEach((fadeSlideItem) => {
        let slideAmount = 80,
          startPosition = "top 90%",
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
          };

        if (fadeSlideItem.hasAttribute("data-cs-slide-amount")) {
          slideAmount = fadeSlideItem.getAttribute("data-cs-slide-amount");
        }

        if (fadeSlideItem.hasAttribute("data-cs-opacity")) {
          tweenOptions.opacity = fadeSlideItem.getAttribute("data-cs-opacity");
        }

        if (fadeSlideItem.hasAttribute("data-cs-ease")) {
          tweenOptions.ease = fadeSlideItem.getAttribute("data-cs-ease");
        }

        if (fadeSlideItem.hasAttribute("data-cs-duration")) {
          tweenOptions.duration =
            fadeSlideItem.getAttribute("data-cs-duration");
        }

        if (fadeSlideItem.hasAttribute("data-cs-delay")) {
          tweenOptions.delay = fadeSlideItem.getAttribute("data-cs-delay");
        }

        if (fadeSlideItem.classList.contains("right")) {
          tweenOptions.x = slideAmount;
        }

        if (fadeSlideItem.classList.contains("left")) {
          tweenOptions.x = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("top")) {
          tweenOptions.y = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("bottom")) {
          tweenOptions.y = slideAmount;
        }

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeSlideItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.from(fadeSlideItem, tweenOptions);
      });

      const splitChars = gsap.utils.toArray(".split_chars");

      splitChars.forEach((item) => {
        let isScrollAble = true,
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            autoAlpha: 0,
            stagger: 0.15,
            ease: "power2.out",
          },
          scrollTrigger = {
            trigger: item,
            start: "top 90%",
            markers: false,
          };

        if (item.hasAttribute("data-cs-duration")) {
          tweenOptions.duration = item.getAttribute("data-cs-duration");
        }

        if (item.hasAttribute("data-cs-delay")) {
          tweenOptions.delay = item.getAttribute("data-cs-delay");
        }

        if (item.hasAttribute("data-cs-ease")) {
          tweenOptions.ease = item.getAttribute("data-cs-ease");
        }

        if (item.hasAttribute("data-cs-stagger")) {
          tweenOptions.stagger = item.getAttribute("data-cs-stagger");
        }

        if (item.hasAttribute("data-cs-translate-x")) {
          tweenOptions.x = item.getAttribute("data-cs-translate-x");
        }

        if (item.hasAttribute("data-cs-translate-y")) {
          tweenOptions.y = item.getAttribute("data-cs-translate-y");
        }

        if (
          !item.hasAttribute("data-cs-translate-x") &&
          !item.hasAttribute("data-cs-translate-x")
        ) {
          tweenOptions.x = 100;
        }

        if (item.hasAttribute("data-cs-scroll-trigger")) {
          isScrollAble = item.getAttribute("data-cs-scroll-trigger");
        }

        if (item.hasAttribute("data-cs-trigger-start")) {
          scrollTrigger.start = item.getAttribute("data-cs-trigger-start");
        }

        if (isScrollAble) {
          tweenOptions.scrollTrigger = scrollTrigger;
        }

        let splittedText = new SplitText(item, {
          type: "chars, words",
          tag: "span",
          charsClass: "d-inline-block",
        });

        gsap.from(splittedText.chars, tweenOptions);
      });

      const moveLine3DItems = gsap.utils.toArray(".move-line-3d");

      moveLine3DItems.forEach((item) => {
        let startPosition = "top 90%",
          tweenOptions = {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          };

        if (item.hasAttribute("data-cs-start")) {
          startPosition = item.getAttribute("data-cs-start");
        }

        if (item.hasAttribute("data-cs-duration")) {
          tweenOptions.duration = item.getAttribute("data-cs-duration");
        }

        if (item.hasAttribute("data-cs-delay")) {
          tweenOptions.delay = item.getAttribute("data-cs-delay");
        }

        if (item.hasAttribute("data-cs-opacity")) {
          tweenOptions.opacity = item.getAttribute("data-cs-opacity");
        }

        if (item.hasAttribute("data-cs-stagger")) {
          tweenOptions.stagger = item.getAttribute("data-cs-stagger");
        }

        if (item.hasAttribute("data-cs-rotate")) {
          tweenOptions.rotationX = item.getAttribute("data-cs-rotate");
        }

        if (item.hasAttribute("data-cs-origin")) {
          tweenOptions.transformOrigin = item.getAttribute("data-cs-origin");
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: startPosition,
            duration: tweenOptions.duration,
            scrub: false,
            markers: false,
          },
        });

        const splitedText = new SplitText(item, {
          type: "lines",
        }).split({
          type: "lines",
        });
        gsap.set(item, {
          perspective: 400,
        });
        timeline.from(splitedText.lines, tweenOptions);
      });
    });

    return () => ctx.revert();
  }, []);
  return <div ref={container}>{children}</div>;
}

import { useEffect } from "react";

export default function CounterPlugin() {
  useEffect(() => {
    // var counted = 0;
    // const counterEl = document.querySelector("#counter");
    // const counterEls = document.querySelectorAll(".count-num");
    // window.addEventListener("scroll", function () {
    //   var scrollTop = window.scrollY;
    //   var counterElTop = counterEl.offsetTop;
    //   var counterElHeight = counterEl.offsetHeight;
    //   var oTop = counterElTop - window.innerHeight;
    //   if (counted == 0 && scrollTop > oTop) {
    //     counterEls.forEach((item) => {
    //       var countTo = item.getAttribute("data-count");
    //     });
    //   }
    //   // var blockHeight =
    //   //   document.getElementByClassName("game-block").clientHeight;
    //   // var callPosition = containerTop + containerHeight - blockHeight;
    // });
    // $(window).scroll(function () {
    //   var oTop = $("#counter").offset().top - window.innerHeight;
    //   if (counted == 0 && $(window).scrollTop() > oTop) {
    //     $(".count-num").each(function () {
    //       var $this = $(this),
    //         countTo = $this.attr("data-count");
    //       $({
    //         countNum: $this.text(),
    //       }).animate(
    //         {
    //           countNum: countTo,
    //         },
    //         {
    //           duration: 2000,
    //           easing: "swing",
    //           step: function () {
    //             $this.text(Math.floor(this.countNum));
    //           },
    //           complete: function () {
    //             $this.text(this.countNum);
    //           },
    //         }
    //       );
    //     });
    //     counted = 1;
    //   }
    // });
  }, []);
  return;
}

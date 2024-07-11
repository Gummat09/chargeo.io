"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // const header = document.getElementsByClassName('main-header');
  const nav = document.querySelector(".header");
  const logo = document.querySelector(".logo");
  const parallaxText = document.querySelector(".parallax-text");

  window.addEventListener("scroll", fixNav);
  window.addEventListener("scroll", ParallaxEffect);

  let image = document.querySelectorAll(".thumbnail");
  new simpleParallax(image, {
    orientation: "up",
    delay: 0.25,
    transition: "cubic-bezier(0,0,0,1)",
  });

  function ParallaxEffect() {
    const offset = window.scrollY;

    if (offset > 2300) {
      parallaxText.style.transform = `translate(-100%,-50%)`;
      parallaxText.style.width = `75%`;
    } else {
      parallaxText.style.transform = `translate(-50%,-50%)`;
      parallaxText.style.width = `25%`;
    }
  }

  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 250) {
      nav.classList.add("active");
      // header.classList.remove('my-2');
      logo.src = "logo/icon.png";
      logo.style.width = "45px";
      // console.log(header);
    } else {
      nav.classList.remove("active");
      logo.src = "logo/logo.png";
      logo.style.width = "150px";
    }
  }
});

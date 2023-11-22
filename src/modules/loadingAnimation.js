import { gsap } from "gsap";

export function runLoadingAnimation() {
  const logo = document.getElementsByClassName("p-home-mv__title");
  gsap.fromTo(
    logo,
    {
      autoAlpha: 0,
      scale: 0.2,
    },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
    }
  );
  gsap.fromTo(
    ".test-slide-title",
    {
      autoAlpha: 0,
      x: 100,
    },
    {
      autoAlpha: 1,
      x: 0,
      duration: 1,
      stagger: 0.1,
    }
  );
}

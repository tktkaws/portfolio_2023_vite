import gsap from "gsap";

export function runMvSlider() {
  gsap.to(".gsap-test", {
    xPercent: 100,
    duration: 20,
    repeat: -1,
    ease: "none",
  });
}

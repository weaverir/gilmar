import gsap from "gsap";

export const animateMagazineEnter = (
  container: HTMLElement | null,
) => {
  if (!container) return null;

  const ctx = gsap.context(() => {
    const logo = container.querySelector(
      ".magazine-logo",
    );

    const heading = container.querySelector(
      ".magazine-heading",
    );

    const cards = container.querySelectorAll(
      ".magazine-card",
    );

    gsap.fromTo(
      logo,
      {
        opacity: 0,
        y: -18,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
      },
    );

    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay: 0.15,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 35,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        delay: 0.3,
        stagger: 0.12,
        ease: "power3.out",
      },
    );
  }, container);

  return ctx;
};
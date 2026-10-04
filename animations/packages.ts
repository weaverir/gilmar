import gsap from "gsap";

export const animatePackageEnter = (
  container: HTMLElement | null,
) => {
  if (!container) return null;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".package-image-wrapper",
      {
        opacity: 0,
        x: -45,
        scale: 0.97,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".package-content > *",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.15,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".package-feature-card",
      {
        opacity: 0,
        y: 18,
        scale: 0.94,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.25,
        ease: "back.out(1.4)",
      },
    );
  }, container);

  return ctx;
};

export const animatePackageChange = (
  current: HTMLElement | null,
  next: HTMLElement | null,
  direction: 1 | -1 = 1,
) => {
  if (!current || !next) return null;

  const tl = gsap.timeline();

  tl.to(current, {
    opacity: 0,
    x: direction * -45,
    duration: 0.35,
    ease: "power2.in",
  })
    .set(next, {
      opacity: 0,
      x: direction * 45,
    })
    .to(next, {
      opacity: 1,
      x: 0,
      duration: 0.55,
      ease: "power3.out",
    });

  return tl;
};

export const animatePackageImage = (
  current: HTMLElement | null,
  next: HTMLElement | null,
  direction: 1 | -1 = 1,
) => {
  if (!current || !next) return null;

  const tl = gsap.timeline();

  tl.to(current, {
    opacity: 0,
    x: direction * -30,
    scale: 0.97,
    duration: 0.4,
    ease: "power2.inOut",
  })
    .set(next, {
      opacity: 0,
      x: direction * 30,
      scale: 0.97,
    })
    .to(next, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.65,
      ease: "power3.out",
    });

  return tl;
};

export const animateProgress = (
  element: HTMLElement | null,
  duration = 5,
) => {
  if (!element) return null;

  return gsap.fromTo(
    element,
    {
      scaleX: 0,
      transformOrigin: "left center",
    },
    {
      scaleX: 1,
      duration,
      ease: "none",
    },
  );
};
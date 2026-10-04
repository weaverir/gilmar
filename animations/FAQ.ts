import gsap from "gsap";

export const animateFaqOpen = (
  element: HTMLElement | null,
) => {
  if (!element) return null;

  gsap.killTweensOf(element);

  const height = element.scrollHeight;

  return gsap.fromTo(
    element,
    {
      height: 0,
      opacity: 0,
    },
    {
      height,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(element, {
          height: "auto",
        });
      },
    },
  );
};

export const animateFaqClose = (
  element: HTMLElement | null,
) => {
  if (!element) return null;

  gsap.killTweensOf(element);

  return gsap.to(element, {
    height: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power2.inOut",
  });
};

export const animateFaqEnter = (
  container: HTMLElement | null,
) => {
  if (!container) return null;

  const ctx = gsap.context(() => {
    const logo = container.querySelector(
      ".faq-logo",
    );

    const title = container.querySelector(
      ".faq-heading",
    );

    const image = container.querySelector(
      ".faq-image",
    );

    const items = container.querySelectorAll(
      ".faq-item",
    );

    gsap.fromTo(
      logo,
      {
        opacity: 0,
        y: -15,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "back.out(1.5)",
      },
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.15,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      image,
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        delay: 0.25,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -25,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      },
    );
  }, container);

  return ctx;
};
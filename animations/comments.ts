import gsap from "gsap";

export const animateHeroesIn = (
  container: HTMLElement | null,
) => {
  if (!container) return null;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".comment-hero",
      {
        opacity: 0,
        scale: 0.6,
        y: 20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.7)",
      },
    );

    gsap.to(".comment-hero-inner", {
      y: -5,
      duration: 2.2,
      stagger: {
        each: 0.15,
        from: "random",
      },
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, container);

  return ctx;
};

export const animateCommentChange = (
  currentCard: HTMLElement | null,
  nextCard: HTMLElement | null,
  direction: 1 | -1 = 1,
) => {
  if (!currentCard || !nextCard) return null;

  const timeline = gsap.timeline();

  timeline
    .to(currentCard, {
      opacity: 0,
      x: direction * -40,
      scale: 0.97,
      duration: 0.35,
      ease: "power2.in",
    })
    .set(nextCard, {
      x: direction * 40,
      opacity: 0,
      scale: 0.97,
    })
    .to(nextCard, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
    });

  return timeline;
};

export const animateIndicator = (
  indicator: HTMLElement | null,
  duration = 5,
) => {
  if (!indicator) return null;

  return gsap.fromTo(
    indicator,
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
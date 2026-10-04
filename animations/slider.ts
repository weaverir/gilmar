"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export function SliderAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(".slider-badge", {
          opacity: 1,
          duration: 0.6,
        })
        .to(
          ".slider-title",
          {
            opacity: 1,
            duration: 0.8,
          },
          "-=0.3",
        )
        .to(
          ".slider-description",
          {
            opacity: 1,
            duration: 0.7,
          },
          "-=0.5",
        )
        .to(
          ".slider-image",
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .to(
          ".slider-button",
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.4",
        );
    });

    return () => context.revert();
  }, []);

  return null;
}
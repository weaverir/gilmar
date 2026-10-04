"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export function HeroAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // حالت اولیه
      gsap.set(".hero-title", {
        opacity: 0,
        y: 50,
      });

      gsap.set(".hero-description", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".hero-button", {
        opacity: 0,
        y: 20,
        scale: 0.95,
      });

      gsap.set(".hero-image", {
        opacity: 0,
        scale: 1.08,
      });

      // انیمیشن
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(".hero-title", {
          opacity: 1,
          y: 0,
          duration: 0.8,
        })
        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          ".hero-button",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          "-=0.25"
        )
        .to(
          ".hero-image",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "-=0.35"
        );
    });

    return () => context.revert();
  }, []);

  return null;
}
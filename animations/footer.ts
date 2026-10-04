"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FooterAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      // حالت اولیه
      gsap.set(".footer-content", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".footer-map", {
        opacity: 0,
        scale: 1.05,
      });

      gsap.set(".footer-social", {
        opacity: 0,
        y: 20,
      });

      // انیمیشن
      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(".footer-content", {
          opacity: 1,
          y: 0,
          duration: 0.7,
        })
        .to(
          ".footer-map",
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
          },
          "-=0.4"
        )
        .to(
          ".footer-social",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.45"
        );

      ScrollTrigger.create({
        trigger: ".footer-area",
        start: "top 85%",
        once: true,
        onEnter: () => {
          timeline.play();
        },
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
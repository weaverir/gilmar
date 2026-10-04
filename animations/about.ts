"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".about-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.5,
        })
        .from(
          ".about-title",
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".about-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".about-button",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "-=0.3"
        );

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-decoration", {
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 75%",
          once: true,
        },
        opacity: 0,
        scale: 0,
        rotate: -90,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
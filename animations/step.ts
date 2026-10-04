"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StepAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(".step-badge", {
        opacity: 0,
        y: 25,
        scale: 0.85,
      });

      gsap.set(".step-title", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".step-description", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".step-button", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".step-landscape", {
        opacity: 0,
        x: -60,
        scale: 0.96,
      });

      gsap.set(".step-play", {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(".step-location", {
        opacity: 0,
        y: -15,
      });

      gsap.set(".step-compass", {
        opacity: 0,
        y: 25,
        rotate: -20,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".step-content",
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .to(".step-landscape", {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          ".step-compass",
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.6"
        )
        .to(
          ".step-play",
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .to(
          ".step-location",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          ".step-badge",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          ".step-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          ".step-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".step-button",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        );
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RoomsAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(".rooms-icon", {
        opacity: 0,
        y: 25,
        scale: 0.85,
      });

      gsap.set(".rooms-title", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".rooms-description", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".room-card", {
        opacity: 0,
        y: 60,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".rooms-content",
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .to(".rooms-icon", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        })
        .to(
          ".rooms-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          ".rooms-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          ".room-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.15"
        );
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export function ArticleAnimation() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(".article-badge", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
        })
        .to(
          ".article-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .to(
          ".article-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.5",
        )
        .to(
          ".article-item",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.25",
        );
    });

    return () => context.revert();
  }, []);

  return null;
}
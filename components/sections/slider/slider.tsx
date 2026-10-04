"use client";

import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { SliderAnimation } from "@/animations/slider";

const slides = [
  {
    id: 1,
    image: "/image/slider-1.png",
    title: "دوچرخه سواری",
  },
  {
    id: 2,
    image: "/image/slider-2.png",
    title: "قایق سواری",
  },
  {
    id: 3,
    image: "/image/slider-3.png",
    title: "پرنده نگری",
  },
];

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const getSlidePosition = (index: number) => {
    if (index === activeIndex) {
      return "active";
    }

    const leftIndex = (activeIndex - 1 + slides.length) % slides.length;

    if (index === leftIndex) {
      return "left";
    }

    return "right";
  };

  return (
    <section
      id="slider"
      dir="rtl"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28 lg:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative h-[70%] w-[70%] max-w-[1000px]">
          <Image
            src="/image/vector.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 1000px"
            className="object-contain object-center opacity-60"
            priority
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ================= TEXT ================= */}

          <div className="slider-content order-1 text-right">
            {/* Magic Stick */}

            <div className="slider-badge relative mb-7 h-16 w-24 opacity-0">
              <Image
                src="/image/Icon Container.png"
                alt=""
                fill
                className="object-contain"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-8 w-8">
                  <Image
                    src="/image/Magic Stick.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <h2 className="slider-title max-w-xl text-3xl font-black leading-[1.4] text-gray-900 opacity-0 sm:text-4xl lg:text-[42px]">
              خدمات رفاهی گیلمار برای اقامتی دلنشین
            </h2>

            <p className="slider-description mt-5 max-w-xl text-sm leading-8 text-gray-500 opacity-0 sm:text-base">
              در گیلمار، امکانات و خدمات رفاهی کامل تجربه‌ای متفاوت از
              طبیعت‌گردی را برای شما فراهم می‌کند تا در کنار آرامش و زیبایی
              طبیعت، اقامتی راحت و به‌یادماندنی داشته باشید.
            </p>
          </div>

{/* ================= SLIDER ================= */}

<div className="order-2 flex justify-center">
  <div
    className="slider-wrapper relative h-[360px] w-[680px] max-w-full sm:h-[430px] lg:h-[480px]"
    dir="ltr"
  >
    {/* Images */}
    <div className="absolute inset-0">
      {slides.map((slide, index) => {
        const position = getSlidePosition(index);

        return (
          <div
            key={slide.id}
            className={`
              slider-image
              absolute
              overflow-hidden
              rounded-[24px]
              shadow-xl
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                position === "active"
                  ? `
                    left-1/2
                    top-1/2
                    z-30
                    h-[90%]
                    w-[33%]
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-100
                    opacity-100
                  `
                  : position === "left"
                    ? `
                      left-[2%]
                      top-1/2
                      z-10
                      h-[82%]
                      w-[30%]
                      -translate-y-1/2
                      scale-100
                      opacity-50
                    `
                    : `
                      right-[2%]
                      top-1/2
                      z-20
                      h-[82%]
                      w-[30%]
                      -translate-y-1/2
                      scale-100
                      opacity-50
                    `
              }
            `}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="320px"
              priority={index === activeIndex}
              loading={index === activeIndex ? undefined : "lazy"}
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-5 pt-16">
              <span
                className={`font-bold text-white ${
                  position === "active" ? "text-sm" : "text-xs"
                }`}
              >
                {slide.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>

    {/* ================= BUTTON ================= */}

    <button
      type="button"
      onClick={handleNext}
      aria-label="تعویض تصویر"
      className="
        slider-button
        absolute
        right-[-5px]
        top-1/2
        z-50
        flex
        h-12
        w-12
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border-4
        border-white
        bg-[#20c997]
        shadow-lg
        transition-transform
        duration-300
        hover:scale-110
        active:scale-95
      "
    >
      <Image
        src="/image/slider-icon.png"
        alt=""
        width={21}
        height={21}
        className="object-contain"
      />
    </button>
  </div>
</div>
        </div>
      </Container>

      <SliderAnimation />
    </section>
  );
}
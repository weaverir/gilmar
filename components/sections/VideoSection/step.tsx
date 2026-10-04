import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { StepAnimation } from "./../../../animations/step";

export function Step() {
  return (
    <section
      id="step"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28 lg:py-36"
      dir="rtl"
    >
      {/* Background Vector */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative h-full w-full max-w-[1200px]">
          <Image
            src="/image/vector.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain object-center opacity-60"
            loading="lazy"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="step-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Video / Image - LEFT */}
          <div className="step-image-wrapper relative order-2 mx-auto h-[430px] w-full max-w-[540px] sm:h-[500px] lg:order-2 lg:h-[560px]">
            
            {/* Landscape */}
            <div className="step-landscape absolute inset-0 z-10">
              <div
                className="relative h-full w-full"
                style={{
                  maskImage: "url('/image/Subtract-1.png')",
                  WebkitMaskImage: "url('/image/Subtract-1.png')",
                  maskSize: "100% 100%",
                  WebkitMaskSize: "100% 100%",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              >
                <Image
                  src="/image/Step section.png"
                  alt="طبیعت و فضای اقامتگاه گیلماز"
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    540px
                  "
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Play Button */}
            <button
              type="button"
              aria-label="پخش ویدیو"
              className="step-play absolute left-[34%] top-[45%] z-30 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-lg">
                <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-teal-500" />
              </span>
            </button>

            {/* Compass */}
            <div className="step-compass pointer-events-none absolute bottom-0 left-[102%] z-30 h-[90px] w-[90px] -translate-x-1/2 sm:h-[110px] sm:w-[110px]">
              <Image
                src="/image/shape 1.png"
                alt=""
                fill
                sizes="110px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content - RIGHT */}
          <div className="step-text order-1 max-w-xl text-right lg:order-1">

            {/* Icon */}
            <div className="step-badge relative mb-7 h-16 w-24 opacity-0">
              <Image
                src="/image/Icon Container.png"
                alt=""
                fill
                className="object-contain"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-8 w-8">
                  <Image
                    src="/image/play.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="step-title text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              تور ویدیویی اقامتگاه گیلماز
            </h2>

            {/* Description */}
            <p className="step-description mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای دنج
              اقامتگاه گیلماز را از نزدیک تماشا کنید و پیش از سفر حال‌وهوای
              دلنشین آن را تجربه کنید.
            </p>

            {/* Button */}
            <Link
              href="/booking"
              className="step-button mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/40"
            >
              <span>اقامت در گیلماز</span>

              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-teal-500"
              >
                ←
              </span>
            </Link>
          </div>
        </div>
      </Container>

      <StepAnimation />
    </section>
  );
}
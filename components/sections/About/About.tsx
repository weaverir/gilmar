
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { aboutContent } from "@/data/home";
import { AboutAnimation } from "./../../../animations/about";

export function About() {
  const {
    title,
    description,
    buttonLabel,
    buttonHref,
  } = aboutContent;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28 lg:py-36"
      dir="rtl"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-60">
        <div className="relative h-full w-full max-w-7xl">
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="about-content max-w-xl text-right">
            <div className="relative mb-6 h-16 w-24">
              <Image
                src="/image/Icon Container.png"
                alt="Icon Container"
                fill
                className="object-contain"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-8 w-8">
                  <Image
                    src="/image/Earth.png"
                    alt="Earth Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <h2 className="about-title mt-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {title || "گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"}
            </h2>

            <p className="about-description mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              {description ||
                "گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است."}
            </p>

            <Link
              href={buttonHref || "/booking"}
              className="about-button mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/40"
            >
              <span>{buttonLabel || "اقامت در گیلمار"}</span>

              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white"
              >
                ←
              </span>
            </Link>
          </div>

          <div className="about-images relative mx-auto h-[500px] w-full max-w-[520px] sm:h-[580px]">

            <div className="about-decoration pointer-events-none absolute -inset-10 z-0 h-[120%] w-[120%]">
              <Image
                src="/image/dots-about.png"
                alt="dots decoration"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="about-image about-image-main absolute right-12 top-0 z-30 h-[380px] w-[68%]  rounded-[28px] sm:h-[320px]">
              <Image
                src="/image/about-2.png"
                alt="اقامتگاه بوم‌گردی گیلمار"
                fill
                sizes="(max-width: 640px) 68vw, 380px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />

              <div className="absolute bottom-30 -left-0 z-10 flex h-14 items-center gap-3 overflow-visible rounded-full border border-white/40 bg-white/90 py-1 pl-1 pr-5 shadow-lg backdrop-blur-md">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/image/logo-about1.png"
                    alt="لوگو ۱"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="whitespace-nowrap text-sm font-bold text-gray-800">
                  تجربه اقامت اصیل شمال
                </span>

                
              </div>
            </div>

            <div className="about-image about-image-bottom absolute -bottom-7 -right-[4%] z-20 h-[300px] w-[50%] overflow-hidden rounded-[28px] sm:h-[400px]">
              <Image
                src="/image/about-1.png"
                alt="نمای اقامتگاه گیلمار"
                fill
                sizes="(max-width: 640px) 50vw, 280px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              <div className="absolute right-5 top-30 z-40 flex h-15 items-center gap-3 rounded-full border border-white/40 bg-white/90 py-1 pl-1 pr-5 shadow-lg backdrop-blur-md">
                <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/image/logo-about1.png"
                    alt="لوگو ۲"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <span className="whitespace-nowrap text-sm font-bold text-gray-800">
                  اقامتگاه بوم‌گردی گیلمار
                </span>
              </div>
            </div>

            <div className="about-image about-image-small absolute bottom-15 left-0 z-40 h-[250px] w-[48%] overflow-hidden rounded-[28px] sm:h-[300px]">
              <Image
                src="/image/about-3.png"
                alt="تجربه اقامت اصیل شمال"
                fill
                sizes="(max-width: 640px) 48vw, 260px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </Container>

      <AboutAnimation />
    </section>
  );
}


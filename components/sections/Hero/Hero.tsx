import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { HeroAnimation } from "./../../../animations/hero";

export function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="
        relative
        mb-6
        mt-30
        min-h-[calc(100vh-100px)]
        overflow-hidden
      "
    >
      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[calc(100vh-100px)]
            flex-col
            items-center
            pt-8
            sm:pt-10
            lg:pt-6
          "
        >
          {/* =========================
              Content
          ========================== */}
          <div
            className="
              hero-content
              relative
              z-20
              flex
              w-full
              max-w-4xl
              flex-col
              items-center
              text-center
            "
          >
            <h1
              className="
                hero-title
                text-3xl
                font-extrabold
                leading-[1.45]
                tracking-tight
                text-[#171717]
                sm:text-4xl
                lg:text-[32px]
              "
            >
              اقامتگاه بوم‌گردی گیل‌مار جایی که طبیعت خانه است
            </h1>

            <p
              className="
                hero-description
                mt-4
                max-w-3xl
                text-xs
                font-bold
                leading-7
                text-[#555]
                sm:text-sm
                sm:leading-8
              "
            >
              اقامتگاه بوم‌گردی گیل‌مار، بزرگ‌ترین مجموعه اکولوژیک شمال کشور
              دارای امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی
              از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
            </p>

            {/* CTA */}
            <div className="hero-actions mt-4">
              <a
                href="#services"
                className="
                  hero-button
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-l
                  from-[#08b9d7]
                  to-[#22d49a]
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(20,190,160,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_30px_rgba(20,190,160,0.3)]
                "
              >
                

                <span>مهمان گیل‌مار شو</span>
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-lg
                    text-[#20cda0]
                    shadow-sm
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                >
                  ←
                </span>
              </a>
            </div>
          </div>

          {/* =========================
              Hero Image
          ========================== */}
          <div
            className="
              hero-image
              relative
              z-10
              mt-8
              w-full
              max-w-[1280px]
              sm:mt-10
            "
          >
            <Image
              src="/image/hero.png"
              alt="اقامتگاه بوم‌گردی گیل‌مار"
              width={1280}
              height={581}
              priority
              sizes="100vw"
              className="
                block
                h-auto
                w-full
              "
            />

            {/* =========================
                Right Info
                
            ========================== */}
            <div
              className="
                absolute
                bottom-[1%]
                right-0
                z-40
                flex
                w-[260px]
                items-center
                justify-center
                px-5
                py-4
                text-right

                max-[639px]:w-[145px]
                max-[639px]:px-2
                max-[639px]:py-1

                sm:w-[100px]
                sm:px-3
                sm:py-2

                md:w-[225px]
                md:px-4
                md:py-3

                lg:w-[260px]
                lg:px-5
                lg:py-4
              "
            >
              <div className="w-full">
                <p
                  className="
                    text-[12px]
                    font-bold
                    leading-6
                    text-[#252525]

                    max-[639px]:text-[7px]
                    max-[639px]:leading-3

                    sm:text-[8px]
                    sm:leading-4

                    md:text-[10px]
                    md:leading-5

                    lg:text-[12px]
                    lg:leading-6
                  "
                >
                  فرار از شلوغی شهر و تجربه اقامتی اصیل
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-bold
                    leading-6
                    text-[#252525]

                    max-[639px]:text-[7px]
                    max-[639px]:leading-3

                    sm:text-[8px]
                    sm:leading-4

                    md:text-[10px]
                    md:leading-5

                    lg:text-[12px]
                    lg:leading-6
                  "
                >
                  در دل طبیعت شمال
                </p>
              </div>
            </div>

            {/* =========================
                Reservation Badge
            ========================== */}
            <div
              className="
                absolute
                bottom-[1%]
                left-0
                z-50
                flex
                items-center
                gap-2
                rounded-[1.5rem]
                bg-white
                px-4
                py-3
                shadow-[0_10px_30px_rgba(20,30,50,0.14)]

                max-[639px]:gap-1
                max-[639px]:rounded-[1rem]
                max-[639px]:px-2
                max-[639px]:py-1.5

                sm:gap-1.0
                sm:px-2.5
                sm:py-2

                md:gap-2
                md:px-3
                md:py-2.5

                lg:px-4
                lg:py-3
              "
            >
              {/* Avatars */}
              <div className="flex shrink-0 -space-x-2 space-x-reverse">
                {/* Hero 1 */}
                <div
                  className="
                    relative
                    h-5
                    w-5
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white

                    max-[639px]:h-5
                    max-[639px]:w-5

                    sm:h-6
                    sm:w-6

                    md:h-7
                    md:w-7

                    lg:h-7
                    lg:w-7
                  "
                >
                  <Image
                    src="/image/hero-1.png"
                    alt="مهمان گیل‌مار"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>

                {/* Hero 2 */}
                <div
                  className="
                    relative
                    h-7
                    w-7
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white

                    max-[639px]:h-5
                    max-[639px]:w-5

                    sm:h-6
                    sm:w-6

                    md:h-7
                    md:w-7

                    lg:h-7
                    lg:w-7
                  "
                >
                  <Image
                    src="/image/hero-2.png"
                    alt="مهمان گیل‌مار"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>

                {/* Hero 3 */}
                <div
                  className="
                    relative
                    h-7
                    w-7
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-2
                    border-white

                    max-[639px]:h-5
                    max-[639px]:w-5

                    sm:h-6
                    sm:w-6

                    md:h-7
                    md:w-7

                    lg:h-7
                    lg:w-7
                  "
                >
                  <Image
                    src="/image/hero-3.png"
                    alt="مهمان گیل‌مار"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Reservation Text */}
              <span
                className="
                  whitespace-nowrap
                  text-[16px]
                  font-semibold
                  text-[#333]

                  max-[639px]:text-[7px]
                  xs:text-[6px]
                  sm:text-[9px]

                  md:text-[9px]

                  lg:text-[11px]
                "
              >
                +۱۲۰ رزرو موفق
              </span>
            </div>
          </div>
        </div>
      </Container>

      <HeroAnimation />
    </section>
  );
}
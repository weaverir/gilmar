"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  animatePackageChange,
  animatePackageEnter,
  animatePackageImage,
  animateProgress,
} from "./../../../animations/packages";

const packages = [
  {
    id: 1,

    title: "پکیج رمانتیک دو نفره",

    description:
      "شامل: ۱ شب اقامت، صبحانه، تور جنگل‌نوردی و قایق‌سواری",

    price: "۳,۲۰۰,۰۰۰ تومان",

    image: "/image/card1.png",

    features: [
      {
        id: 1,
        image: "/image/p1.png",
        title: "اقامت شبانه",
      },
      {
        id: 2,
        image: "/image/p2.png",
        title: "صبحانه",
      },
    ],
  },

  {
    id: 2,

    title: "پکیج طبیعت‌گردی",

    description:
      "شامل: ۲ شب اقامت، صبحانه، جنگل‌نوردی و تجربه طبیعت‌گردی",

    price: "۴,۸۰۰,۰۰۰ تومان",

    image: "/image/card2.png",

    features: [
      {
        id: 1,
        image: "/image/p1.png",
        title: "اقامت",
      },
      {
        id: 2,
        image: "/image/p2.png",
        title: "صبحانه",
      },
      {
        id: 3,
        image: "/image/p3.png",
        title: "طبیعت‌گردی",
      },
    ],
  },

  {
    id: 3,

    title: "پکیج کامل کمپ",

    description:
      "شامل: اقامت، صبحانه، جنگل‌نوردی، قایق‌سواری و برنامه‌های کمپ",

    price: "۶,۵۰۰,۰۰۰ تومان",

    image: "/image/card3.png",

    features: [
      {
        id: 1,
        image: "/image/p1.png",
        title: "اقامت",
      },
      {
        id: 2,
        image: "/image/p2.png",
        title: "صبحانه",
      },
      {
        id: 3,
        image: "/image/p3.png",
        title: "طبیعت‌گردی",
      },
      {
        id: 4,
        image: "/image/p4.png",
        title: "قایق‌سواری",
      },
    ],
  },

  {
    id: 4,

    title: "پکیج ماجراجویی",

    description:
      "شامل: اقامت، طبیعت‌گردی، قایق‌سواری و برنامه‌های هیجان‌انگیز",

    price: "۷,۹۰۰,۰۰۰ تومان",

    image: "/image/card4.png",

    features: [
      {
        id: 1,
        image: "/image/p1.png",
        title: "اقامت",
      },
      {
        id: 2,
        image: "/image/p3.png",
        title: "طبیعت‌گردی",
      },
      {
        id: 3,
        image: "/image/p4.png",
        title: "قایق‌سواری",
      },
    ],
  },
];

export default function Packages() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const contentRefs = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const imageRefs = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const progressRefs = useRef<
    (HTMLSpanElement | null)[]
  >([]);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeIndexRef = useRef(0);

  /**
   * Initial animation
   */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = animatePackageEnter(
      sectionRef.current,
    );

    return () => {
      ctx?.revert();
    };
  }, []);

  /**
   * Auto slider
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      const currentIndex =
        activeIndexRef.current;

      const nextIndex =
        (currentIndex + 1) % packages.length;

      animatePackageChange(
        contentRefs.current[currentIndex],
        contentRefs.current[nextIndex],
        1,
      );

      animatePackageImage(
        imageRefs.current[currentIndex],
        imageRefs.current[nextIndex],
        1,
      );

      activeIndexRef.current =
        nextIndex;

      setActiveIndex(nextIndex);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /**
   * Progress timer
   */
  useEffect(() => {
    const progress =
      progressRefs.current[activeIndex];

    if (!progress) return;

    const animation =
      animateProgress(progress, 5);

    return () => {
      animation?.kill();
    };
  }, [activeIndex]);

  /**
   * Manual change
   */
  const changePackage = (
    index: number,
  ) => {
    if (
      index === activeIndexRef.current
    ) {
      return;
    }

    const currentIndex =
      activeIndexRef.current;

    const direction =
      index > currentIndex ? 1 : -1;

    animatePackageChange(
      contentRefs.current[currentIndex],
      contentRefs.current[index],
      direction,
    );

    animatePackageImage(
      imageRefs.current[currentIndex],
      imageRefs.current[index],
      direction,
    );

    activeIndexRef.current = index;

    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#f5f8f9]
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:min-h-[620px]
        lg:py-20
      "
    >
      {/* =====================================================
          VECTOR BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-0
          z-0
          hidden
          h-[250px]
          w-[430px]
          opacity-60
          sm:block
          lg:h-[300px]
          lg:w-[520px]
        "
      >
        <Image
          src="/image/vector.png"
          alt=""
          fill
          priority
          sizes="520px"
          className="
            object-contain
            object-top
          "
        />
      </div>

      {/* =====================================================
          SOFT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[-1]
          bg-[#f5f8f9]/30
        "
      />

      {/* =====================================================
          MAIN GRID

          LTR:
          LEFT  = IMAGE
          RIGHT = CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1180px]
          items-center
          gap-10
          lg:grid-cols-[500px_minmax(0,1fr)]
          lg:gap-16
        "
        dir="ltr"
      >
        {/* =====================================================
            LEFT IMAGE
        ====================================================== */}

        <div
          className="
            order-1
            flex
            justify-center
            lg:justify-start
          "
        >
          <div
            className="
              package-image-slider
              relative
              h-[470px]
              w-full
              max-w-[500px]
              sm:h-[525px]
              lg:h-[535px]
              lg:w-[500px]
            "
          >
            {/* =================================================
                FLOATING TEXT
            ================================================== */}

            <div
              className="
                package-floating-text
                absolute
                left-[-27px]
                top-[38px]
                xl:left-[-27px]
                xl:top-[40px]
                z-40
                flex
                min-h-[74px]
                w-[155px]
                items-center
                justify-center
                rounded-[0_18px_18px_0]
               
                px-4
                py-3
                
                sm:left-[-12px]
                sm:top-[58px]
                sm:w-[165px]
              "
            >
              <p
                className="
                  text-center
                  text-[10px]
                  font-medium
                  leading-[2]
                  text-[#282828]
                  sm:text-[11px]
                "
                dir="rtl"
              >
                تجربه‌ای اقامتی اصیل در
                <br />
                دل طبیعت شمال
              </p>
            </div>

            {/* =================================================
                IMAGE SLIDES
            ================================================== */}

            {packages.map(
              (item, index) => (
                <div
                  key={item.id}
                  ref={(element) => {
                    imageRefs.current[
                      index
                    ] = element;
                  }}
                  className={`
                    package-image-wrapper
                    absolute
                    inset-0

                    ${
                      index === 0
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                  `}
                >
                  {/* ===========================================
                      PATTERN MASK
                  ============================================ */}

                  <div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                    "
                    style={{
                      maskImage:
                        "url('/image/pattern.png')",

                      WebkitMaskImage:
                        "url('/image/pattern.png')",

                      maskPosition:
                        "center",

                      WebkitMaskPosition:
                        "center",

                      maskSize:
                        "100% 100%",

                      WebkitMaskSize:
                        "100% 100%",

                      maskRepeat:
                        "no-repeat",

                      WebkitMaskRepeat:
                        "no-repeat",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={
                        index === 0
                      }
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 540px, 500px"
                      className="
                        object-cover
                        object-center
                      "
                    />
                  </div>
                </div>
              ),
            )}

            {/* =================================================
                SLIDER PROGRESS

                BOTTOM LEFT OF IMAGE
            ================================================== */}

            <div
              className="
                absolute
                bottom-[18px]
                left-[20px]
                z-40
                flex
                items-center
                gap-[9px]
              "
              dir="ltr"
            >
              {packages.map(
                (item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`نمایش ${item.title}`}
                    onClick={() =>
                      changePackage(index)
                    }
                    className="
                      relative
                      h-[4px]
                      w-[42px]
                      overflow-hidden
                      rounded-full
                      bg-white/45
                      p-0
                    "
                  >
                    <span
                      ref={(element) => {
                        progressRefs.current[
                          index
                        ] = element;
                      }}
                      className={`
                        absolute
                        inset-0
                        block
                        origin-left
                        rounded-full
                        bg-white

                        ${
                          index ===
                          activeIndex
                            ? "scale-x-100"
                            : "scale-x-0"
                        }
                      `}
                    />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <div
          className="
            order-2
            relative
            min-h-[470px]
            w-full
          "
          dir="rtl"
        >
          {packages.map(
            (item, index) => (
              <div
                key={item.id}
                ref={(element) => {
                  contentRefs.current[
                    index
                  ] = element;
                }}
                className={`
                  package-content
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-center
                  text-right

                  ${
                    index === 0
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }
                `}
              >
                {/* =================================================
                    LOGO CONTAINER
                ================================================== */}

                <div
                  className="
                    package-logo
                    package-content-item
                    mb-5
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                    "
                  >
                    {/* Outer logo container */}

                    <Image
                      src="/image/Icon Container.png"
                      alt=""
                      width={58}
                      height={58}
                      priority={
                        index === 0
                      }
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-contain
                      "
                    />

                    {/* Box */}

                    <Image
                      src="/image/box.png"
                      alt="پکیج‌های اقامت"
                      width={27}
                      height={27}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                      className="
                        relative
                        z-10
                        h-[27px]
                        w-[27px]
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    MAIN TITLE
                ================================================== */}

                <h2
                  className="
                    package-content-item
                    text-[21px]
                    font-extrabold
                    leading-[1.8]
                    text-[#181818]
                    sm:text-[25px]
                  "
                >
                  پکیج‌های ویژه اقامت در گلیمار
                </h2>

                <p
                  className="
                    package-content-item
                    mt-1
                    max-w-[570px]
                    text-[10px]
                    leading-7
                    text-[#777]
                    sm:text-[11px]
                  "
                >
                  پکیج‌های ویژه ما ترکیبی از
                  اقامت آرام، غذای محلی و
                  تفریحات هیجان‌انگیز در دل
                  طبیعت است.
                </p>

                {/* =================================================
                    PACKAGE TITLE
                ================================================== */}

                <div className="mt-7">
                  <h3
                    className="
                      package-content-item
                      text-[13px]
                      font-extrabold
                      text-[#202020]
                      sm:text-[14px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      package-content-item
                      mt-2
                      max-w-[510px]
                      text-[10px]
                      leading-6
                      text-[#777]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* =================================================
                    FEATURES
                ================================================== */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >
                  {item.features.map(
                    (feature) => (
                      <div
                        key={feature.id}
                        className="
                          package-feature-card
                          flex
                          h-[82px]
                          w-[82px]
                          flex-col
                          items-center
                          justify-center
                          rounded-[13px]
                          border
                          border-[#e8eeee]
                          bg-white/95
                          shadow-[0_8px_20px_rgba(30,55,60,.08)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_12px_25px_rgba(30,55,60,.12)]
                        "
                      >
                        <div
                          className="
                            relative
                            h-[38px]
                            w-[38px]
                          "
                        >
                          <Image
                            src={
                              feature.image
                            }
                            alt={
                              feature.title
                            }
                            fill
                            loading="lazy"
                            sizes="38px"
                            className="
                              object-contain
                            "
                          />
                        </div>

                        <span
                          className="
                            mt-1
                            text-[9px]
                            font-medium
                            text-[#555]
                          "
                        >
                          {
                            feature.title
                          }
                        </span>
                      </div>
                    ),
                  )}
                </div>

                {/* =================================================
                    PRICE + BUTTON
                ================================================== */}

                <div
                  className="
                    package-content-item
                    mt-7
                    flex
                    w-full
                    max-w-[510px]
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-extrabold
                      text-[#3aaa55]
                      sm:text-[11px]
                    "
                  >
                    قیمت:{" "}
                    {item.price}
                  </span>

                  <button
                    type="button"
                    className="
                      group
                      flex
                      h-[36px]
                      items-center
                      gap-2
                      rounded-full
                      bg-[#18c7a7]
                      px-3
                      text-[9px]
                      font-bold
                      text-white
                      shadow-[0_7px_18px_rgba(22,200,167,.2)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#10b996]
                      sm:px-4
                      sm:text-[10px]
                    "
                  >
                    <span>
                      همین حالا رزرو کن
                    </span>

                    <span
                      className="
                        flex
                        h-[24px]
                        w-[24px]
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#18c7a7]
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    >
                      ←
                    </span>
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
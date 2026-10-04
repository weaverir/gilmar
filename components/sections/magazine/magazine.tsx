"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { animateMagazineEnter } from "./../../../animations/magazine";

const articles = [
  {
    id: 1,
    title:
      "۱۰ تجربه‌ای که باید در طبیعت شمال از دست ندهید",
    description:
      "در این مقاله با بهترین تجربه‌های طبیعت‌گردی و اقامت در شمال آشنا می‌شوید و راهنمای کاملی برای یک سفر خاطره‌انگیز خواهید داشت.",
  },

  {
    id: 2,
    title:
      "۱۰ تجربه‌ای که باید در طبیعت شمال از دست ندهید",
    description:
      "در این مقاله با بهترین تجربه‌های طبیعت‌گردی و اقامت در شمال آشنا می‌شوید و راهنمای کاملی برای یک سفر خاطره‌انگیز خواهید داشت.",
  },

  {
    id: 3,
    title:
      "۱۰ تجربه‌ای که باید در طبیعت شمال از دست ندهید",
    description:
      "در این مقاله با بهترین تجربه‌های طبیعت‌گردی و اقامت در شمال آشنا می‌شوید و راهنمای کاملی برای یک سفر خاطره‌انگیز خواهید داشت.",
  },
];

export default function Magazine() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = animateMagazineEnter(
      sectionRef.current,
    );

    return () => {
      ctx?.revert();
    };
  }, []);

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
        py-14
        sm:px-6
        sm:py-16
        lg:py-20
      "
    >
      {/* ================================================
          VECTOR
          فقط برای Magazine
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[-1]
          hidden
          h-[260px]
          w-[430px]
          opacity-60
          sm:block
          lg:h-[310px]
          lg:w-[500px]
        "
      >
        <Image
          src="/image/vector.png"
          alt=""
          fill
          priority
          sizes="500px"
          className="
            object-contain
            object-left-top
          "
        />
      </div>

      {/* ================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1180px]
        "
      >
        {/* ==============================================
            HEADER
        =============================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Logo */}

          <div
            className="
              magazine-logo
              relative
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
            "
          >
            {/* Container */}

            <Image
              src="/image/Icon Container.png"
              alt=""
              width={58}
              height={58}
              priority
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
              "
            />

            {/* Plate */}

            <Image
              src="/image/Plate.png"
              alt="مجله گلیمار"
              width={27}
              height={27}
              priority
              className="
                relative
                z-10
                h-[27px]
                w-[27px]
                object-contain
              "
            />
          </div>

          {/* Heading */}

          <div className="magazine-heading">
            <h2
              className="
                mt-3
                text-[19px]
                font-extrabold
                leading-[1.8]
                text-[#202020]
                sm:text-[23px]
                lg:text-[24px]
              "
            >
              مجله و مقالات گلیمار؛ روایت سفر، طبیعت و آرامش
            </h2>

            <p
              className="
                mx-auto
                mt-1
                max-w-[600px]
                text-[9px]
                leading-6
                text-[#777]
                sm:text-[10px]
              "
            >
              در مجله گلیمار خواندنی‌هایی درباره سفر،
              فرهنگ محلی و تجربه اقامتی دلنشین برای
              شما فراهم کرده‌ایم.
            </p>
          </div>
        </div>

        {/* ==============================================
            ARTICLE CARDS
        =============================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-[14px]
          "
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="
                magazine-card
                group
                relative
                h-[300px]
                overflow-hidden
                rounded-[12px]
                bg-[#222]
                shadow-[0_14px_30px_rgba(25,45,50,.12)]
                sm:h-[315px]
                lg:h-[340px]
              "
            >
              {/* ==========================================
                  IMAGE
              =========================================== */}

              <Image
                src="/image/pic1.png"
                alt={article.title}
                fill
                loading="lazy"
                sizes="
                  (max-width: 640px) 92vw,
                  (max-width: 1024px) 48vw,
                  380px
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />

              {/* ==========================================
                  GRADIENT
              =========================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-black/5
                "
              />

              {/* ==========================================
                  CONTENT
              =========================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  p-5
                  text-right
                  text-white
                  sm:p-6
                "
              >
                <h3
                  className="
                    text-[11px]
                    font-bold
                    leading-[2]
                    sm:text-[12px]
                  "
                >
                  {article.title}
                </h3>

                <p
                  className="
                    mt-1
                    line-clamp-2
                    text-[8px]
                    leading-[2]
                    text-white/80
                    sm:text-[9px]
                  "
                >
                  {article.description}
                </p>

                <button
                  type="button"
                  className="
                    mt-3
                    text-[8px]
                    font-medium
                    text-white/90
                    transition-colors
                    hover:text-[#18c7a7]
                    sm:text-[9px]
                  "
                >
                  ادامه مطلب ←
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
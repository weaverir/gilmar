"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  animateCommentChange,
  animateHeroesIn,
  animateIndicator,
} from "./../../../animations/comments";

const comments = [
  {
    id: 1,
    text: "اقامت در کمپ آموزشی یکی از بهترین تجربه‌های زندگی من بود. فضای کاملاً دوستانه و حرفه‌ای باعث شد با انگیزه بیشتری مسیرم را ادامه بدهم.",
    name: "احسان صادقی پور",
    role: "مهمان",
  },
  {
    id: 2,
    text: "تجربه‌ای متفاوت و فوق‌العاده بود. همه چیز با دقت برنامه‌ریزی شده بود و در کنار یادگیری، لحظات بسیار خوبی را تجربه کردم.",
    name: "سارا محمدی",
    role: "مهمان",
  },
  {
    id: 3,
    text: "محیطی صمیمی و حرفه‌ای که باعث شد خیلی سریع با افراد جدید ارتباط بگیرم و تجربه‌ای ماندگار برایم ساخته شود.",
    name: "علی رضایی",
    role: "مهمان",
  },
  {
    id: 4,
    text: "از کیفیت برنامه و فضایی که برای مهمان‌ها ایجاد شده بود واقعاً لذت بردم. قطعاً یکی از تجربه‌هایی است که دوباره تکرارش می‌کنم.",
    name: "نگار احمدی",
    role: "مهمان",
  },
  {
    id: 5,
    text: "فضای آرام و صمیمی این مجموعه باعث شد تجربه‌ای بسیار خوب داشته باشم و با خاطراتی زیبا اینجا را ترک کنم.",
    name: "محمد رضایی",
    role: "مهمان",
  },
];

const heroes = [
  {
    id: 1,
    top: "8%",
    left: "14%",
    size: 48,
    image: "/image/hero-2.png",
  },
  {
    id: 2,
    top: "13%",
    left: "41%",
    size: 68,
    image: "/image/hero-1.png",
  },
  {
    id: 3,
    top: "20%",
    left: "74%",
    size: 48,
    image: "/image/hero-3.png",
  },
  {
    id: 4,
    top: "39%",
    left: "16%",
    size: 40,
    image: "/image/hero-1.png",
  },
  {
    id: 5,
    top: "40%",
    left: "84%",
    size: 42,
    image: "/image/hero-3.png",
  },
  {
    id: 6,
    top: "53%",
    left: "6%",
    size: 48,
    image: "/image/hero-2.png",
  },
  {
    id: 7,
    top: "68%",
    left: "17%",
    size: 48,
    image: "/image/hero-1.png",
  },
  {
    id: 8,
    top: "60%",
    left: "77%",
    size: 48,
    image: "/image/hero-3.png",
  },
];

export default function Comments() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndexRef = useRef(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = animateHeroesIn(sectionRef.current);

    return () => {
      ctx?.revert();
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const currentIndex = activeIndexRef.current;

      const nextIndex =
        (currentIndex + 1) % comments.length;

      animateCommentChange(
        cardRefs.current[currentIndex],
        cardRefs.current[nextIndex],
        1,
      );

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const indicator =
      indicatorRefs.current[activeIndex];

    if (!indicator) return;

    const animation = animateIndicator(
      indicator,
      5,
    );

    return () => {
      animation?.kill();
    };
  }, [activeIndex]);

  const handleChange = (index: number) => {
    if (index === activeIndexRef.current) return;

    const currentIndex = activeIndexRef.current;

    animateCommentChange(
      cardRefs.current[currentIndex],
      cardRefs.current[index],
      index > currentIndex ? 1 : -1,
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
        bg-[#f7f9fa]
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:min-h-[520px]
        lg:py-20
      "
    >
      <div className="relative mx-auto w-full max-w-[1180px]">

        {/* Logo */}
        <div className="relative z-30 flex flex-col items-center">

          <div className="relative flex h-[54px] w-[54px] items-center justify-center">

            <Image
              src="/image/Icon Container.png"
              alt=""
              width={54}
              height={54}
              priority
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
              "
            />

            <Image
              src="/image/chat.png"
              alt="نظرات مهمانان"
              width={25}
              height={25}
              priority
              className="
                relative
                z-10
                h-[25px]
                w-[25px]
                object-contain
              "
            />

          </div>

          <h2
            className="
              mt-2
              text-center
              text-[21px]
              font-extrabold
              leading-[1.7]
              text-[#191919]
              sm:text-[25px]
            "
          >
            گپ‌وگفتار نگاه مهمانان
          </h2>

          <p
            className="
              mt-1
              max-w-[520px]
              text-center
              text-[10px]
              leading-6
              text-[#888]
              sm:text-[11px]
            "
          >
            تجربه واقعی مهمانان، بهترین روایت از آرامش،
            طبیعت و حال خوب کمپ‌سفر است.
          </p>

        </div>

        {/* World */}
        <div
          className="
            relative
            mx-auto
            mt-6
            h-[350px]
            w-full
            max-w-[1100px]
            sm:mt-8
            sm:h-[390px]
            lg:h-[410px]
          "
        >

          <Image
            src="/image/world.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              object-contain
              opacity-[0.65]
            "
          />

          {/* Heroes */}
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="comment-hero absolute z-10"
              style={{
                top: hero.top,
                left: hero.left,
              }}
            >
              <div className="comment-hero-inner">

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-full
                    border-[3px]
                    border-white
                    bg-white
                    shadow-[0_5px_20px_rgba(0,0,0,0.12)]
                  "
                  style={{
                    width: hero.size,
                    height: hero.size,
                  }}
                >
                  <Image
                    src={hero.image}
                    alt=""
                    fill
                    sizes={`${hero.size}px`}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          ))}

          {/* Comment Slider */}
          <div
            className="
              absolute
              left-1/2
              top-[53%]
              z-20
              w-[calc(100%-32px)]
              max-w-[510px]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div className="relative min-h-[190px] sm:min-h-[205px]">

              {comments.map((comment, index) => (
                <div
                  key={comment.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className={`
                    absolute
                    inset-0
                    rounded-[17px]
                    border
                    border-[#e8ecee]
                    bg-white
                    px-6
                    py-6
                    shadow-[0_14px_35px_rgba(28,53,60,0.09)]
                    sm:px-10
                    sm:py-7

                    ${
                      index === 0
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                  `}
                >

                  <div className="mb-3 flex justify-center">
                    <Image
                      src="/image/comm.png"
                      alt=""
                      width={25}
                      height={25}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="
                        h-[25px]
                        w-[25px]
                        object-contain
                      "
                    />
                  </div>

                  <p
                    className="
                      mx-auto
                      max-w-[410px]
                      text-center
                      text-[11px]
                      font-medium
                      leading-[2.15]
                      text-[#5f6668]
                      sm:text-[12px]
                    "
                  >
                    {comment.text}
                  </p>

                  <div className="mt-3 text-center">

                    <div
                      className="
                        text-[11px]
                        font-extrabold
                        text-[#202020]
                        sm:text-[12px]
                      "
                    >
                      {comment.name}
                    </div>

                    <div
                      className="
                        mt-0.5
                        text-[9px]
                        text-[#999]
                      "
                    >
                      {comment.role}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* Slider dots */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-1.5
              "
              dir="ltr"
            >
              {comments.map((comment, index) => (
                <button
                  key={comment.id}
                  type="button"
                  aria-label={`نمایش نظر ${index + 1}`}
                  onClick={() => handleChange(index)}
                  className="
                    relative
                    h-[5px]
                    w-[5px]
                    overflow-hidden
                    rounded-full
                    bg-[#d6dddd]
                  "
                >
                  <span
                    ref={(element) => {
                      indicatorRefs.current[index] = element;
                    }}
                    className={`
                      absolute
                      inset-0
                      block
                      origin-left
                      rounded-full
                      bg-[#18c5a4]

                      ${
                        index === activeIndex
                          ? "scale-x-100"
                          : "scale-x-0"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
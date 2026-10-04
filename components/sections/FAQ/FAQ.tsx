"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  animateFaqClose,
  animateFaqEnter,
  animateFaqOpen,
} from "././../../../animations/FAQ";

const questions = [
  {
    id: 1,
    question: "امکان کنسلی یا تغییر رزرو وجود دارد؟",
    answer:
      "در گلیمار امکان تغییر یا لغو رزرو با توجه به شرایط و قوانین هر اقامتگاه وجود دارد. برای اطلاعات دقیق‌تر می‌توانید با پشتیبانی تماس بگیرید.",
  },
  {
    id: 2,
    question: "امکان کنسلی یا تغییر رزرو وجود دارد؟",
    answer:
      "بله، شرایط کنسلی بر اساس نوع اقامتگاه و زمان باقی‌مانده تا تاریخ رزرو متفاوت است.",
  },
  {
    id: 3,
    question: "امکان کنسلی یا تغییر رزرو وجود دارد؟",
    answer:
      "برای مشاهده شرایط دقیق کنسلی می‌توانید اطلاعات همان اقامتگاه را در صفحه رزرو بررسی کنید.",
  },
  {
    id: 4,
    question: "امکان کنسلی یا تغییر رزرو وجود دارد؟",
    answer:
      "در صورت نیاز به تغییر رزرو، پشتیبانی گلیمار می‌تواند شما را راهنمایی کند.",
  },
  {
    id: 5,
    question: "امکان کنسلی یا تغییر رزرو وجود دارد؟",
    answer:
      "شرایط هر رزرو متفاوت است و قبل از ثبت نهایی رزرو به شما نمایش داده خواهد شد.",
  },
];

export default function Faq() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [openId, setOpenId] =
    useState<number | null>(1);

  const answerRefs = useRef<
    Record<number, HTMLDivElement | null>
  >({});

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = animateFaqEnter(
      sectionRef.current,
    );

    return () => {
      ctx?.revert();
    };
  }, []);

  const changeFaq = (id: number) => {
    const previousId = openId;

    if (
      previousId !== null &&
      previousId !== id
    ) {
      animateFaqClose(
        answerRefs.current[previousId],
      );
    }

    if (previousId === id) {
      animateFaqClose(
        answerRefs.current[id],
      );

      setOpenId(null);

      return;
    }

    setOpenId(id);

    requestAnimationFrame(() => {
      animateFaqOpen(
        answerRefs.current[id],
      );
    });
  };

  return (
    <section
      ref={sectionRef}
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
        lg:py-20
      "
    >
      {/* ==========================================
          VECTOR
          کوچک و وسط صفحه
      ========================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[330px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          sm:h-[380px]
          sm:w-[600px]
          lg:h-[420px]
          lg:w-[680px]
        "
      >
        <Image
          src="/image/vector.png"
          alt=""
          fill
          sizes="(max-width: 640px) 520px, (max-width: 1024px) 600px, 680px"
          className="
            object-contain
            object-center
          "
        />
      </div>

      {/* ==========================================
          MAIN
          
          LTR باعث می‌شود:
          ستون 1 = چپ
          ستون 2 = راست
      ========================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-[70px]
          [direction:ltr]
        "
      >
        {/* ========================================
            LEFT
            FAQ BOXES
        ======================================== */}
        <div
          className="
            w-full
            lg:col-start-1
            [direction:rtl]
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[570px]
            "
          >
            <div className="space-y-3">
              {questions.map((item) => {
                const isOpen =
                  openId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`
                      faq-item
                      overflow-hidden
                      rounded-[15px]
                      border
                      border-white
                      bg-white/95
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "shadow-[0_10px_25px_rgba(30,50,55,.08)]"
                          : "shadow-[0_4px_14px_rgba(30,50,55,.04)]"
                      }
                    `}
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() =>
                        changeFaq(item.id)
                      }
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-[54px]
                        w-full
                        flex-row
                        items-center
                        gap-4
                        px-4
                        text-right
                      "
                    >
                      {/* TEXT - RIGHT SIDE OF BOX */}
                      <span
                        className="
                          flex-1
                          text-[9px]
                          font-medium
                          leading-6
                          text-[#303030]
                          sm:text-[10px]
                        "
                      >
                        {item.question}
                      </span>

                      {/* ICON - LEFT SIDE OF BOX */}
                      <span
                        className="
                          flex
                          h-[19px]
                          w-[19px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#18c7a7]
                          text-[14px]
                          font-light
                          leading-none
                          text-white
                        "
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      ref={(element) => {
                        answerRefs.current[
                          item.id
                        ] = element;
                      }}
                      className="
                        overflow-hidden
                        px-4
                      "
                      style={{
                        height:
                          isOpen
                            ? "auto"
                            : 0,
                        opacity:
                          isOpen
                            ? 1
                            : 0,
                      }}
                    >
                      <p
                        className="
                          pb-4
                          text-[8px]
                          leading-7
                          text-[#777]
                          sm:text-[9px]
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================
            RIGHT
            LOGO + TITLE + DESCRIPTION + BIN
        ======================================== */}
        <div
          className="
            w-full
            lg:col-start-2
            [direction:rtl]
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              text-center
            "
          >
            {/* LOGO */}
            <div
              className="
                faq-logo
                relative
                flex
                h-[58px]
                w-[58px]
                items-center
                justify-center
              "
            >
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

              <Image
                src="/image/qa.png"
                alt="سوالات متداول"
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

            {/* TITLE + DESCRIPTION */}
            <div
              className="
                faq-heading
                mt-2
                w-full
                max-w-[500px]
              "
            >
              <h2
                className="
                  text-[20px]
                  font-extrabold
                  leading-[1.8]
                  text-[#202020]
                  sm:text-[23px]
                  lg:text-[25px]
                "
              >
                سوالات متداول مهمان گلیمار
              </h2>

              <p
                className="
                  mx-auto
                  mt-1
                  max-w-[430px]
                  text-[9px]
                  leading-7
                  text-[#777]
                  sm:text-[10px]
                "
              >
                پاسخ پرسش‌های پرتکرار شما درباره
                اقامت، امکانات گلیمار و رزرو را در
                این بخش پیدا خواهید کرد.
              </p>
            </div>

            {/* BIN */}
            <div
              className="
                faq-image
                relative
                mt-5
                h-[230px]
                w-[300px]
                sm:h-[270px]
                sm:w-[360px]
                lg:h-[310px]
                lg:w-[420px]
              "
            >
              <Image
                src="/image/bin.png"
                alt="سوالات متداول گلیمار"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
                className="
                  object-contain
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
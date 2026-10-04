"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { ArticleAnimation } from "@/animations/article";

const articles = [
  {
    id: 1,
    title: "حفظ طبیعت و محیط زیست",
    description:
      "گیمار در دل طبیعت قرار دارد؛ لطفاً زباله‌ها را در محل مناسب قرار دهید و طبیعت را پاکیزه نگه دارید.",
    logo: "/image/article-1.png",
    rotate: "-rotate-[9deg]",
  },
  {
    id: 2,
    title: "حفظ آرامش اقامتگاه",
    description:
      "برای حفظ آرامش خود و دیگر مهمانان، لطفاً قوانین اقامتگاه را رعایت کرده و از ایجاد سر و صدای زیاد خودداری کنید.",
    logo: "/image/article-2.png",
    rotate: "rotate-[6deg]",
  },
  {
    id: 3,
    title: "مراقبت از وسایل اقامتگاه",
    description:
      "لطفاً از وسایل اقامتگاه با دقت استفاده کنید تا همه مهمانان بتوانند تجربه‌ای راحت و دلنشین داشته باشند.",
    logo: "/image/article-3.png",
    rotate: "rotate-[10deg]",
  },
];

export function Article() {
  return (
    <section
      id="article"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#f8fafc] py-24 sm:py-32 lg:py-40"
    >
      {/* =========================
          Background Vector 1
      ========================== */}
      <div className="pointer-events-none absolute left-1/2 top-[-80px] z-0 h-[600px] w-[1000px] -translate-x-1/2">
        <Image
          src="/image/vector.png"
          alt=""
          fill
          priority
          sizes="1000px"
          className="object-contain"
        />
      </div>

      {/* =========================
          Background Vector 2
      ========================== */}
      <div className="pointer-events-none absolute bottom-[-80px] left-1/2 z-0 h-[600px] w-[1000px] -translate-x-1/2">
        <Image
          src="/image/vector2.png"
          alt=""
          fill
          sizes="1000px"
          loading="lazy"
          className="object-contain"
        />
      </div>

      <Container className="relative z-10">
        {/* =========================
            Header
        ========================== */}
        <div className="article-content mx-auto max-w-2xl text-center">
          <div className="article-badge content-center flex items-center  mb-6 opacity-0">
            <div className="relative mx-auto mb-6 h-16 w-24">
                          <Image
                            src="/image/Icon Container.png"
                            alt="Icon Container"
                            fill
                            className="object-contain"
                          />
            
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative h-8 w-8">
                              <Image
                                src="/image/lightning.png"
                                alt="lightning Icon"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
          </div>

          <h2 className="article-title text-3xl font-black leading-[1.8] text-gray-900 opacity-0 sm:text-4xl lg:text-5xl">
            همراهی برای حفظ آرامش و طبیعت گیمار
          </h2>

          <p className="article-description mt-5 text-sm leading-8 text-gray-500 opacity-0 sm:text-base">
            برای حفظ آرامش همه مهمانان و طبیعت اطراف اقامتگاه، لطفاً قوانین
            مربوطه را رعایت نمایید.
          </p>
        </div>

        {/* =========================
            Articles
        ========================== */}
        <div className="article-list mt-24 grid grid-cols-1 gap-20 sm:grid-cols-3 sm:gap-16 lg:mt-28 lg:gap-24">
          {articles.map((article) => (
            <article
              key={article.id}
              className="article-item group flex flex-col items-center text-center opacity-0"
            >
              {/* =========================
                  Image Frame
              ========================== */}
              <div
                className={`
                  relative
                  h-[190px]
                  w-[190px]
                  ${article.rotate}
                  transition-all
                  duration-500
                  group-hover:-translate-y-3
                  group-hover:rotate-0
                `}
              >
                {/* Outer Frame */}
                <div
                  className="
                    absolute
                    inset-0 h-60 

                    rounded-[28px]
                    border
                    border-gray-200/80
                    bg-white/80
                    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    backdrop-blur-sm
                  "
                />

                {/* Inner Frame */}
                <div
                  className="
                    absolute
                    inset-[10px]
                    overflow-hidden
                    rounded-[21px]
                    border py-5
                    border-none
                  "
                >
                  <Image
                    src={article.logo}
                    alt={article.title}
                    fill
                    sizes="170px"
                    loading="lazy"
                    className="
                      object-contain
                      py-5
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* =========================
                  Content
              ========================== */}
              <div className="mt-18 max-w-[250px]">
                <h3 className="text-base font-black leading-8 text-gray-900 sm:text-lg">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-gray-500 sm:text-sm">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <ArticleAnimation />
    </section>
  );
}
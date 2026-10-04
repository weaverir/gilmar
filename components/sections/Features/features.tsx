import Image from "next/image";

import { Container } from "@/components/ui/Container";

import { RoomsAnimation } from "./../../../animations/rooms";

const rooms = [
  {
    id: 1,
    image: "/image/card1.png",
    title: "خانه‌ی چوبی گیلماز",
    price: "هر شب اقامت از ۱,۲۰۰,۰۰۰ تومان",
  },
  {
    id: 2,
    image: "/image/card2.png",
    title: "خانه‌ی چوبی گیلماز",
    price: "هر شب اقامت از ۱,۲۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "/image/card3.png",
    title: "خانه‌ی چوبی گیلماز",
    price: "هر شب اقامت از ۱,۲۰۰,۰۰۰ تومان",
  },
  {
    id: 4,
    image: "/image/card4.png",
    title: "خانه‌ی چوبی گیلماز",
    price: "هر شب اقامت از ۱,۲۰۰,۰۰۰ تومان",
  },
];

export function Rooms() {
  return (
    <section
      id="rooms"
      className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28 lg:py-36"
      dir="rtl"
    >
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
        <div className="rooms-content relative">
          {/* Icon */}
         <div className="rooms-icon relative z-20 mx-auto mb-7 h-16 w-24 opacity-0">
                       <Image
                         src="/image/Icon Container.png"
                         alt=""
                         fill
                         className="object-contain"
                       />
         
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="relative h-8 w-8">
                           <Image
                             src="/image/Union.png"
                             alt=""
                             fill
                             className="object-contain"
                           />
                         </div>
                       </div>
                     </div>

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-[700px] text-center">
            <h2 className="rooms-title text-2xl font-black leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              انواع اتاق‌های اقامتگاه گیلماز
            </h2>

            <p className="rooms-description mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              اتاق‌های گیلماز با فضای دنج و امکانات مناسب، برای اقامتی آرام
              در دل طبیعت آماده شده‌اند.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => (
              <article
                key={room.id}
                className="room-card group relative aspect-square overflow-hidden rounded-[18px]"
              >
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  loading="lazy"
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-right text-white">
                  <h3 className="room-card-title text-base font-bold md:text-lg">
                    {room.title}
                  </h3>

                  <p className="room-card-price mt-1 text-xs text-white/85 md:text-sm">
                    {room.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <RoomsAnimation />
    </section>
  );
}
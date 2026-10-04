import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { FooterAnimation } from "./../../../animations/footer";

const footerLinks = [
  {
    title: "کاوش در گیلماز",
    links: [
      {
        label: "سایت‌ها و اقامت",
        href: "#services",
      },
      {
        label: "راهنمای مهمان‌ها",
        href: "#guide",
      },
      {
        label: "درباره گیلماز",
        href: "#about",
      },
      {
        label: "مجله گیلماز",
        href: "#articles",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    src: "/image/Social Icons.png",
  },
  {
    label: "Youtube",
    src: "/image/Social Icons-1.png",
  },
  {
    label: "Telegram",
    src: "/image/Social Icons-2.png",
  },
  {
    label: "LinkedIn",
    src: "/image/Social Icons-3.png",
  },
];

export function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-full bg-[#f5f8fc] py-6"
    >
      <FooterAnimation />

      <Container>
        <div className="flex flex-col gap-3">

          {/* =========================
              TOP BOX
          ========================== */}
          <div
            className="
              footer-content
              overflow-hidden
              rounded-[22px]
              border
              border-[#e7edf3]
              bg-white
            "
          >
            <div
              className="
                grid
                min-h-[238px]
                grid-cols-1
                lg:grid-cols-[1.15fr_1fr_1.15fr_1.15fr]
              "
            >

              {/* LOGO + DESCRIPTION */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-8
                  lg:px-8
                "
              >
                <div
                  className="
                    relative
                    mb-4
                    h-[45px]
                    w-[135px]
                  "
                >
                  <Image
                    src="/image/logo.png"
                    alt="اقامتگاه بومگردی گیلماز"
                    fill
                    loading="lazy"
                    className="object-contain object-right"
                  />
                </div>

                <p
                  className="
                    max-w-[350px]
                    text-[12px]
                    leading-[2.1]
                    text-[#555]
                  "
                >
                  اقامتگاه بومگردی گیلماز بزرگترین مجموعه اکولوژ
                  شمال کشور با امکانات رفاهی و تفریحی متنوع، در
                  فضای منحصر‌به‌فرد و با مجوز رسمی میراث فرهنگی
                  گیلان فعالیت می‌کند.
                </p>
              </div>

              {/* EXPLORE */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-8
                "
              >
                <h3 className="mb-5 text-[16px] font-bold text-[#222]">
                  کاوش در گیلماز
                </h3>

                <ul className="space-y-3">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-[12px]
                          text-[#555]
                          transition-colors
                          hover:text-[#10bfa9]
                        "
                      >
                        <span className="ml-2">•</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div
                id="contact"
                className="
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-8
                "
              >
                <h3 className="mb-5 text-[16px] font-bold text-[#222]">
                  راه‌های ارتباط با گیلماز
                </h3>

                <div
                  className="
                    space-y-2
                    text-[12px]
                    leading-[2]
                    text-[#555]
                  "
                >
                  <p>
                    تلفن پشتیبانی:
                    <span className="mr-1">
                      ۰۱۳۴۴۷۶۵۷۱۱ - ۰۱۳۴۴۷۶۵۷۴۰
                    </span>
                  </p>

                  <p>
                    ایمیل:
                    <a
                      href="mailto:Info@Gilmar-Gilan.Com"
                      dir="ltr"
                      className="mr-1 hover:text-[#10bfa9]"
                    >
                      Info@Gilmar-Gilan.Com
                    </a>
                  </p>

                  <p className="max-w-[390px]">
                    موقعیت گیلماز: گیلان، رشت به فومن،
                    روستای ملاسر، خیابان کوچه‌داران،
                    اقامتگاه گیلماز
                  </p>
                </div>
              </div>

              {/* MAP */}
              <div
                className="
                  footer-map
                  relative
                  min-h-[238px]
                  overflow-hidden
                "
              >
                <Image
                  src="/image/map.png"
                  alt="موقعیت اقامتگاه گیلماز"
                  fill
                  loading="lazy"
                  className="object-cover"
                />

                <Image
                  src="/image/Subtract.png"
                  alt=""
                  fill
                  loading="lazy"
                  className="
                    pointer-events-none
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    left-[43%]
                    top-[52%]
                    h-[14px]
                    w-[14px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#11c7b0]
                    shadow-[0_0_0_5px_rgba(17,199,176,0.15)]
                  "
                />
              </div>
            </div>
          </div>

          {/* =========================
              BOTTOM BOX
          ========================== */}
          <div
            className="
              footer-social
              flex
              min-h-[60px]
              items-center
              justify-between
              gap-5
              rounded-[22px]
              border
              border-[#e7edf3]
              bg-white
              px-6
              py-3
            "
          >
            {/* COPYRIGHT */}
            <p className="text-[11px] text-[#555]">
              © تمامی حقوق برای اقامتگاه بومگردی گیلماز محفوظ است.
            </p>
            {/* SOCIAL */}
            <div
              dir="ltr"
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-[linear-gradient(135deg,#12d17f_0%,#10cbb7_48%,#08b5cf_100%)]
                    transition-transform
                    duration-200
                    hover:-translate-y-[1px]
                  "
                >
                  <Image
                    src={social.src}
                    alt={social.label}
                    width={19}
                    height={19}
                    loading="lazy"
                    className="h-[19px] w-[19px] object-contain"
                  />
                </a>
              ))}
            </div>

            
          </div>

        </div>
      </Container>
    </footer>
  );
}
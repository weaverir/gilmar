"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "خانه",
    href: "#home",
  },
  {
    label: "درباره ما",
    href: "#about",
  },
  {
    label: "خدمات",
    href: "#services",
  },
  {
    label: "مقالات",
    href: "#articles",
  },
  {
    label: "تماس با ما",
    href: "#contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="pt-4">
        {/* Liquid Glass Container */}
        <div
          className="
            relative
            rounded-full
            border
            border-white/40
            bg-white/[0.18]
            p-[10px]
            shadow-[0_8px_40px_rgba(0,0,0,0.06)]
            backdrop-blur-2xl
            backdrop-saturate-150
          "
        >
          {/* Inner Gray Ring */}
          <div
            className="
              rounded-full
              border
              border-gray-400/40
            "
          >
            <nav
              className="
                relative
                flex
                h-[72px]
                items-center
                justify-between
                overflow-hidden
                rounded-full
                bg-white/[0.12]
                px-5
              "
            >
              {/* Glass Highlight */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-white/70
                "
              />

              {/* Logo */}
              <Link
                href="#home"
                aria-label="صفحه اصلی"
                className="relative z-10 flex shrink-0 items-center"
              >
                <Image
                  src="/image/logo.png"
                  alt="Logo"
                  width={120}
                  height={42}
                  priority
                  className="h-auto w-[105px] object-contain"
                />
              </Link>

              {/* Navigation */}
              <div className="hidden items-center gap-7 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      relative
                      px-2
                      py-2
                      text-sm
                      font-medium
                      text-[#17202a]
                      transition-all
                      duration-300
                      hover:text-[#35cfa1]
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Action */}
              <div className="relative z-10 flex items-center gap-3">
                <Link
                  href="#contact"
                  className="
                    hidden
                    rounded-full
                    border
                    border-white/20
                    bg-[#17202a]/90
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#35cfa1]
                    sm:inline-flex
                  "
                >
                  شروع کنید
                </Link>

                {/* Mobile */}
                <button
                  type="button"
                  aria-label={
                    isMenuOpen
                      ? "بستن منو"
                      : "باز کردن منو"
                  }
                  aria-expanded={isMenuOpen}
                  onClick={() =>
                    setIsMenuOpen((prev) => !prev)
                  }
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-400/40
                    bg-white/20
                    backdrop-blur-md
                    md:hidden
                  "
                >
                  <span className="relative block h-5 w-5">
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 h-[1.5px] w-5 bg-[#17202a] transition-transform duration-300",
                        isMenuOpen && "rotate-45"
                      )}
                    />

                    <span
                      className={cn(
                        "absolute left-0 top-1/2 h-[1.5px] w-5 bg-[#17202a] transition-transform duration-300",
                        isMenuOpen && "-rotate-45"
                      )}
                    />
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const abar = localFont({
  src: [
    {
      path: "../fonts/Abar FaNum/AbarMidFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Abar FaNum/AbarMidFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Abar FaNum/AbarMidFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Abar FaNum/AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Abar FaNum/AbarMidFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Company Task",
  description: "Frontend implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={abar.variable}>
        {children}
      </body>
    </html>
  );
}
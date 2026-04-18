import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-geist-sans",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSansThaiMonoFallback = IBM_Plex_Sans_Thai({
  variable: "--font-geist-mono",
  subsets: ["thai"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบประเมินความเสี่ยงผู้ขอสินเชื่อ",
  description: "หน้าเข้าสู่ระบบสำหรับระบบประเมินความเสี่ยงผู้ขอสินเชื่อ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${ibmPlexSansThai.variable} ${ibmPlexSansThaiMonoFallback.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

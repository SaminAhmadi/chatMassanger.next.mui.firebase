// main
import type { Metadata } from "next";
import { ReactNode } from "react";
// style
import "@/src/assets/styles/globals.scss";
// components
import MainLayout from "@/src/core/layout/main_layout";

export const metadata: Metadata = {
  title: "Chat Messenger App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa-ir" dir="rtl">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

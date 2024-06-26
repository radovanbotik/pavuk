import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime, Italiana } from "next/font/google";
import { lora } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} relative h-screen w-full overflow-hidden italic`}
      >
        {children}
      </body>
    </html>
  );
}

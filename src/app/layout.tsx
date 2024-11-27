import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import React from "react";
import GuideComponent from "@/app/components/guide/GuideComponent";
import SearchComponent from "@/app/components/search/SearchComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MovieDB - Movies and TV shows",
  description: "The MovieDB is an database for movies and TV shows and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      <div className={'container'}>
          <GuideComponent/>
          <div className={'inner-container'}>
              <HeaderComponent/>
              <SearchComponent/>
              {children}
          </div>
      </div>
      </body>
    </html>
  );
}

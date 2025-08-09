import type { Metadata } from "next";
// no dynamic import here; use client components directly
import { Geist, Geist_Mono } from "next/font/google";
import ThemeInitializer from "@/components/ThemeInitializer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "⧫ Mohammad Ayaan ⧫",
  description:
    "Mohammad Ayaan Siddiqui, a Full Stack Web3 Developer, Crypto Investor and MBA graduate. Explore my projects and professional experience in blockchain development.",
  keywords:
    "Mohammad Ayaan Siddiqui, moayaan.eth, MBA, MBA in Blockchain Management, Crypto Investor, Full Stack Web3 Developer, Next.js, MERN stack, Solidity, Hardhat, Blockchain Developer, Web3, Smart Contracts, Decentralized Applications, GitHub, Docker, IPFS, Rust, Solana, Ethereum, Blockchain Projects, Crypto Enthusiast, Decentralized Maxi",
};

import Background3D from "@/components/Background3D";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeInitializer />
        <ThemeSwitcher />
        {/* 3D background (client-only) */}
        <Background3D />
        {/* Foreground content */}
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}

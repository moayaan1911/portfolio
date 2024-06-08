/** @format */

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '⧫ moayaan.eth ⧫',
  description:
    'Mohammad Ayaan Siddiqui, a Full Stack Web3 Developer with expertise in Next.js, MERN stack, Solidity, Hardhat, and more. Explore my projects and professional experience in blockchain development.',
  keywords:
    'Mohammad Ayaan Siddiqui, moayaan.eth, Full Stack Web3 Developer, Next.js, MERN stack, Solidity, Hardhat, Blockchain Developer, Web3, Smart Contracts, Decentralized Applications, GitHub, Docker, IPFS, Rust, Solana, Ethereum, Blockchain Projects, Crypto Enthusiast, Decentralized Maxi',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='description'
          content={metadata.description}
        />
        <meta
          name='keywords'
          content={metadata.keywords}
        />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

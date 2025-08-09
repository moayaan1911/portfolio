"use client";

import Image from "next/image";
import { details } from "@/lib/details";
import {
  SiLinkedin,
  SiGithub,
  SiHashnode,
  SiUpwork,
  SiTelegram,
  SiBuymeacoffee,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiExternalLink } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 pt-28 pb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          <Image
            src={details.profile}
            alt="Profile"
            width={180}
            height={180}
            className="rounded-full border-4 accent-border shadow-lg w-32 h-32 md:w-[180px] md:h-[180px]"
          />
        </div>
        <div className="flex-1 min-w-0 text-center md:text-left">
          <div className="text-xl md:text-2xl lg:text-3xl font-serif italic opacity-90">
            {details.salam}
          </div>
          <h1 className="mt-1 text-2xl md:text-3xl lg:text-4xl font-semibold accent-text">
            {details.tagline}
          </h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed">
            {details.description}
          </p>
          {/* Socials */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {details.socials.map((s) => {
              const name = s.name.toLowerCase();
              const map: Record<string, React.ReactNode> = {
                linkedin: <SiLinkedin size={18} />,
                github: <SiGithub size={18} />,
                hashnode: <SiHashnode size={18} />,
                upwork: <SiUpwork size={18} />,
                twitter: <FaXTwitter size={18} />,
                x: <FaXTwitter size={18} />,
                telegram: <SiTelegram size={18} />,
                email: <FiMail size={18} />,
                buymeacoffee: <SiBuymeacoffee size={18} />,
                donate: (
                  <span
                    role="img"
                    aria-label="Palestine">
                    🇵🇸
                  </span>
                ),
              };
              const icon = map[name] ?? <FiExternalLink size={16} />;
              return (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-full border-2 accent-border px-3 py-1.5 bg-white/80 backdrop-blur transition-all duration-300 cursor-pointer accent-text md:hover:bg-[var(--accent)] md:hover:border-[var(--accent)] md:hover:text-white md:hover:[&>*]:text-white">
                  <span className="flex items-center gap-1 transition-colors duration-300 md:group-hover:hidden">{icon}</span>
                  <span className="ml-1 items-center gap-1 text-sm hidden md:group-hover:flex transition-all duration-300">
                    <FiExternalLink />
                    <span>Go to {s.name}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { details } from "@/lib/details";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 accent-text text-center">Contact</h2>
      <div className="rounded-2xl border-2 accent-border p-4 md:p-8 bg-white/90 backdrop-blur-sm shadow-lg text-center">
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 md:mb-6 whitespace-pre-line">{details.connect.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <a
            href={`mailto:${details.connect.email}`}
            className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm font-medium rounded-lg bg-[var(--accent)] border-2 border-[var(--accent)] text-white md:hover:bg-white md:hover:!text-[var(--accent)] md:hover:[&>*]:!text-[var(--accent)] transition-all duration-300">
            📧 Get in touch <FiExternalLink />
          </a>
          <a
            href="/AyaanResume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm font-medium rounded-lg bg-white border-2 accent-border accent-text md:hover:bg-[var(--accent)] md:hover:border-[var(--accent)] md:hover:!text-white md:hover:[&>*]:!text-white transition-all duration-300">
            📄 View Resume <FiExternalLink />
          </a>
        </div>
        
        {/* Thank you section with gif */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-200">
          <Image
            src={details.connect.celebrationGif}
            alt="Celebration"
            width={50}
            height={50}
            className="w-12 h-12 md:w-15 md:h-15 rounded-lg"
            unoptimized
          />
          <p className="text-sm md:text-lg font-medium accent-text italic text-center">
            {details.connect.thankYouMessage}
          </p>
        </div>
      </div>
    </section>
  );
}

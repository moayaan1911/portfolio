"use client";

import Image from "next/image";
import { details } from "@/lib/details";
import { FiExternalLink } from "react-icons/fi";

export default function Skills() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 accent-text text-center">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {details.skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative w-full aspect-square rounded-2xl border-2 accent-border bg-white/80 backdrop-blur-md shadow-lg md:hover:shadow-2xl transition-all duration-500 overflow-hidden md:hover:scale-105 md:hover:-translate-y-1">
            
            {/* Mobile/Desktop Default state - Large icon and title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-4 transition-all duration-500 md:group-hover:opacity-0 md:group-hover:scale-90">
              <div className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 mb-1 md:mb-3 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs md:text-sm lg:text-base font-bold text-center accent-text leading-tight px-1 md:px-2">
                {skill.name}
              </h3>
            </div>

            {/* Desktop-only Hover overlay - Description and link */}
            <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/95 backdrop-blur-lg p-3 flex flex-col border-2 border-white/30 rounded-2xl">
              
              {/* Header with small icon and name */}
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs font-bold accent-text truncate">
                  {skill.name}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-xs text-gray-700 leading-relaxed flex-1 mb-2 relative z-10">
                {skill.description}
              </p>
              
              {/* CTA Button */}
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 self-start text-xs font-semibold accent-text hover:underline transition-all duration-300 relative z-10 glass-btn px-2 py-1 rounded-lg">
                Learn more <FiExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { details } from "@/lib/details";
import { FiExternalLink, FiArrowUpRight, FiBriefcase } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 accent-text text-center">
        Professional Experience
      </h2>

      <div className="relative md:pl-8">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 accent-btn opacity-30"></div>

        <div className="space-y-6 md:space-y-8">
          {details.experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.timeline}`}
              className="relative">
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block absolute -left-2 top-6 w-4 h-4 rounded-full bg-white border-3 accent-border shadow-md z-10"></div>

              {/* Experience card */}
              <div className="md:ml-6 group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border-2 accent-border shadow-md md:hover:shadow-xl transition-all duration-300 md:hover:scale-[1.01] md:hover:-translate-y-1">
                  {/* Header - Mobile: stacked, Desktop: inline */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Company logo */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-sm flex-shrink-0 bg-white p-1.5 md:p-2">
                        <Image
                          src={exp.image}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Company name and visit link - Mobile: stacked, Desktop: inline */}
                      <div className="flex flex-col md:flex-row md:items-center md:gap-3">
                        <h3 className="text-base md:text-lg font-bold accent-text">
                          {exp.company}
                        </h3>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 text-xs font-medium accent-text md:hover:bg-[var(--accent)] md:hover:text-white md:hover:[&>*]:text-white rounded-lg transition-all duration-300 self-start">
                            <FiExternalLink className="w-3 h-3" />
                            <span>Visit Company</span>
                            <FiArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full self-start md:self-center">
                      {exp.timeline}
                    </div>
                  </div>

                  {/* Job title */}
                  <div className="flex items-center gap-2 mb-3">
                    <FiBriefcase className="w-4 h-4 text-gray-500" />
                    <p className="text-sm md:text-base font-medium text-gray-700">
                      {exp.designation}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 md:px-3 py-1 text-xs font-medium italic rounded-full text-white bg-[var(--accent)] shadow-sm">
                        #{tag.replace(/\s+/g, "-")}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

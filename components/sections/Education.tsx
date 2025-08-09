"use client";

import Image from "next/image";
import { details } from "@/lib/details";
import { FiExternalLink, FiBookOpen, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 accent-text text-center">
        🎓 Education
      </h2>

      <div className="space-y-6">
        {details.education.map((edu) => (
          <div
            key={edu.degree}
            className="group relative">
            {/* Education Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 accent-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                {/* University Logo */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-white p-2">
                    <Image
                      src={edu.image}
                      alt={edu.university}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Status indicator */}
                  <div
                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                      edu.timeline.includes("Ongoing")
                        ? "bg-green-400 animate-pulse"
                        : "bg-blue-400"
                    }`}></div>
                </div>

                {/* Education Details */}
                <div className="flex-1 min-w-0">
                  {/* Degree and Timeline Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FiAward className="w-5 h-5 accent-text" />
                      <h3 className="text-lg font-bold accent-text">
                        {edu.degree}
                      </h3>
                    </div>

                    {/* Timeline pill */}
                    <div
                      className={`text-sm px-3 py-1 rounded-full ${
                        edu.timeline.includes("Ongoing")
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                      {edu.timeline}
                    </div>
                  </div>

                  {/* University */}
                  <div className="flex items-center gap-2 mb-3">
                    <FiBookOpen className="w-4 h-4 text-blue-500" />
                    <a
                      href={edu.universityLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                      {edu.university}
                    </a>
                    <FiExternalLink className="w-3 h-3 text-blue-500" />
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Action Button */}
                  {edu.degreeLink && (
                    <a
                      href={edu.degreeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border rounded-lg text-sm font-medium accent-text hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white hover:[&>*]:text-white transition-all duration-300">
                      <FiAward className="w-4 h-4" />
                      <span>View Degree</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

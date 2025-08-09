"use client";

import Image from "next/image";
import { details } from "@/lib/details";
import { FiExternalLink, FiAward } from "react-icons/fi";

export default function Certifications() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 accent-text text-center">🏆 Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {details.certifications.map((cert) => (
          <div
            key={cert.title}
            className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 accent-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col h-full">
            
            {/* Header with logo and title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-white p-2">
                <Image
                  src={cert.image}
                  alt={cert.provider}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold accent-text leading-tight mb-1">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <FiAward className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">{cert.provider}</span>
                </div>
              </div>
            </div>
            
            {/* Date in pill */}
            <div className="flex justify-center mb-4">
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Completed: {cert.date}
              </div>
            </div>
            
            {/* Spacer to push button to bottom */}
            <div className="flex-1"></div>
            
            {/* View Credential Button - Always Visible */}
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border rounded-lg text-sm font-medium accent-text hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white hover:[&>*]:text-white transition-all duration-300 w-full justify-center">
              <FiAward className="w-4 h-4" />
              <span>View Credential</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

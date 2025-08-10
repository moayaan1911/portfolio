"use client";

import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiMoreHorizontal,
  FiYoutube,
} from "react-icons/fi";
import { useMemo, useState } from "react";
import { details } from "@/lib/details";

type Project = (typeof details)["projects"][number] & { featured?: boolean };

export default function Projects() {
  const [tab, setTab] = useState<"featured" | "others">("featured");
  const { featured, others } = useMemo(() => {
    const featured = details.projects.filter((p) => (p as Project).featured);
    const others = details.projects.filter((p) => !(p as Project).featured);
    return {
      featured: featured as Project[],
      others: others as Project[],
    };
  }, []);

  const list = tab === "featured" ? featured : others;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold accent-text mb-2">Projects</h2>
      </div>

      {/* Tab Switcher - Hidden on mobile */}
      <div className="hidden md:flex justify-center mb-8">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              tab === "featured"
                ? "bg-[var(--accent)] text-white shadow-lg"
                : "text-gray-600 hover:text-[var(--accent)] hover:bg-white"
            }`}
            onClick={() => setTab("featured")}>
            <FiStar className="w-4 h-4" />
            Featured ({featured.length})
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
              tab === "others"
                ? "bg-[var(--accent)] text-white shadow-lg"
                : "text-gray-600 hover:text-[var(--accent)] hover:bg-white"
            }`}
            onClick={() => setTab("others")}>
            <FiMoreHorizontal className="w-4 h-4" />
            Others ({others.length})
          </button>
        </div>
      </div>

      {/* Projects Grid - Desktop shows selected tab, Mobile shows only featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Desktop: Show selected tab */}
        <div className="hidden md:contents">
          {list.map((project: Project) => (
            <div
              key={project.title}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl border-2 accent-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden">
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold accent-text mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 line-height-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium italic rounded-full text-white bg-[var(--accent)] shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
                        #{tag.replace(/\s+/g, "-")}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] border-2 border-[var(--accent)] text-white rounded-lg font-medium hover:bg-white hover:text-[var(--accent)] transition-all duration-300">
                      Live Site
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border accent-text rounded-lg font-medium hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300">
                      <FiGithub className="w-4 h-4 group-hover/btn:text-white" />
                      <span className="group-hover/btn:text-white">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border accent-text rounded-lg font-medium hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300">
                      <FiYoutube className="w-4 h-4 group-hover/btn:text-white" />
                      <span className="group-hover/btn:text-white">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Show only featured projects, no hover effects */}
        <div className="md:hidden contents">
          {featured.map((project: Project) => (
            <div
              key={project.title}
              className="bg-white/90 backdrop-blur-sm rounded-2xl border-2 accent-border shadow-lg overflow-hidden">
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold accent-text mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium italic rounded-full text-white bg-[var(--accent)] shadow-sm">
                        #{tag.replace(/\s+/g, "-")}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons - No hover effects on mobile */}
                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] border-2 border-[var(--accent)] text-white rounded-lg font-medium">
                      Live Site
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border accent-text rounded-lg font-medium">
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 accent-border accent-text rounded-lg font-medium">
                      <FiYoutube className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

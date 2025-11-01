"use client";

import React, { useState } from "react";
import { ExternalLink, Play, Eye, X } from "lucide-react";
import Image from "next/image";
import bg1 from "@/public/media/bg/bg1.png";
import bg2 from "@/public/media/bg/bg2.png";
import bg3 from "@/public/media/bg/bg3.png";
import bg4 from "@/public/media/bg/bg4.png";
import bg5 from "@/public/media/bg/bg5.png";
import bg6 from "@/public/media/bg/bg6.png";
import bg7 from "@/public/media/bg/bg7.png";
import bg8 from "@/public/media/bg/bg8.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<any>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Wanderlogue",
      description: "Your Group Trips, Finally Organized.",
      category: "website",
      image: bg1,
      type: "web",
      tags: ["UI/UX", "Web", "Figma"],
      demo: "/media/videos/liveone.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=6-49&p=f&t=cfQPPytRvBCLEqRC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A49",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 2,
      title: "Project Homeboard",
      description: "From Dream to Design. Your Home Renovation, Organized.",
      category: "website",
      image: bg2,
      type: "web",
      tags: ["UI/UX", "Web", "Figma"],
      demo: "/media/videos/livetwo.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=29-149&t=j7yhl9VvhBBVWomK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A149&show-proto-sidebar=1",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 3,
      title: "Paisa Planner",
      description: "Your Financial Wellness Companion",
      category: "app",
      image: bg3,
      type: "app",
      tags: ["UI/UX", "App", "Figma"],
      demo: "/media/videos/livethree.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=137-1662&p=f&t=iQb246dDVLo4PnvI-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A1662&show-proto-sidebar=1",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 4,
      title: "Katalog",
      description: "Your personal home inventory in one tap.",
      category: "app",
      image: bg4,
      type: "app",
      tags: ["UI/UX", "App", "Figma"],
      demo: "/media/videos/livefour.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=137-2400&p=f&t=saozqN80eonjaOjH-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A2397&show-proto-sidebar=1",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 5,
      title: "Echo",
      description: "Preserve Your Stories. Connect with the Future.",
      category: "app",
      image: bg5,
      type: "app",
      tags: ["UI/UX", "App", "Figma"],
      demo: "/media/videos/livefive.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=160-3290&p=f&t=saozqN80eonjaOjH-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=158%3A3276&show-proto-sidebar=1",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 6,
      title: "ZenFit App Landing Page",
      description: "Elevate Your Fitness with ZenFit & AI Zen!",
      category: "website",
      image: bg6,
      type: "web",
      tags: ["UI/UX", "Web", "Figma"],
      demo: "/media/videos/livesix.mp4",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=225-537&p=f&t=w9SuAhVazrGtYpgx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=225%3A537",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 7,
      title: "Lush Interiors",
      description: "The All-in-One Construction Management Platform.",
      category: "app",
      image: bg7,
      type: "app",
      tags: ["UI/UX", "App", "Figma"],
      demo: "/media/videos/liveseven.mp4",
      prototype:
        "https://www.figma.com/proto/19ra3zydq1SYAlOUKETep0/Lush-Interiors?node-id=974-143&t=I4HPzkHRJDfFyri4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=974%3A143",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
    {
      id: 8,
      title: "CityWatch",
      description: "Municipal Surveillance & Enforcement App",
      category: "app",
      image: bg8,
      type: "app",
      tags: ["UI/UX", "App", "Figma"],
      demo: "/media/videos/liveeight.mp4",
      prototype:
        "https://www.figma.com/proto/7aA09UWlBi1HtU6jYTMQXW/Waste-Management?node-id=0-6&p=f&t=keFbPlJZaYy1ZrCe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A6",
      hasPrototype: true,
      hasCaseStudy: true,
      hasDemo: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "website", label: "Website" },
    { id: "app", label: "App" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const scrollToCaseStudy = (projectId: number) => {
    const section = document.getElementById(`case-study-${projectId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (url: string, type: string) => {
    setVideoUrl(url);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl(null);
    setModalType(null);
  };

  return (
    <section id="projects" className="py-20 bg-[#F6FBFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#0B2235]/70 max-w-2xl mx-auto">
            A selection of recent work showcasing user-centered design solutions
            across web and mobile platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-[#EAF8FF] p-2 rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? "bg-[#8FCFF0] text-[#0B2235] shadow-md"
                    : "text-[#0B2235]/70 hover:text-[#0B2235] hover:bg-white/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2235]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    {project.hasDemo && (
                      <button
                        onClick={() => openModal(project.demo, project.type)}
                        className="px-4 py-2 bg-white text-[#0B2235] font-medium rounded-lg hover:bg-[#BEE6FF] transition-colors duration-200 flex items-center shadow-lg"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#BEE6FF] text-[#0B2235] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-[#0B2235] mb-2 group-hover:text-[#8FCFF0] transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-[#0B2235]/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.hasCaseStudy && (
                    <button
                      onClick={() => scrollToCaseStudy(project.id)}
                      className="flex-1 px-4 py-2 border-2 border-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#8FCFF0] transition-colors duration-200 flex items-center text-sm"
                      aria-label={`View ${project.title} case study`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Case Study
                    </button>
                  )}
                  {project.hasPrototype && (
                    <button
                      onClick={() => window.open(project.prototype, "_blank")}
                      className="flex-1 px-4 py-2 bg-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#BEE6FF] transition-colors duration-200 flex items-center justify-center text-sm"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Prototype
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className={`relative bg-black p-1 rounded-lg shadow-2xl w-full ${
              modalType === "app" ? "max-w-xs" : "max-w-4xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 -right-2 text-white hover:text-gray-300 z-10"
              aria-label="Close video player"
            >
              <X size={32} />
            </button>
            <video
              className={`w-full rounded ${
                modalType === "app" ? "aspect-[9/19]" : "aspect-video"
              }`}
              src={videoUrl || ""}
              controls
              autoPlay
              onEnded={closeModal}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

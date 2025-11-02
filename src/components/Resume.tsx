"use client";

import React, { useState } from "react";
import {
  Download,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
} from "lucide-react";

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      role: "Lead UI/UX Designer",
      company: "STUDIOARG",
      location: "Hyderabad, India",
      duration: "Jul 2025 – Present",
      description:
        "Led all digital design initiatives for StudioARG, a premier interior design and architecture firm. Spearheaded the design of the primary company website, client portals, and internal project visualization tools. Focused on translating the firm's luxury brand identity into a seamless digital experience to attract high-value clients and streamline project communication.",
      achievements: [],
    },
    {
      role: "Lead UI/UX Designer",
      company: "XverseMeta Technologies",
      location: "Hyderabad, India",
      duration: "Jan 2025 – Jun 2025",
      description:
        "Led product design for a B2B SaaS platform serving 50K+ users. Focused on onboarding and dashboard optimization to improve user engagement and retention.",
      achievements: [
        "Led a design system overhaul that reduced design-to-development handoff time by 60%.",
        "Redesigned onboarding flows and dashboard, increasing user engagement by 40%.",
        "Mentored 2 junior designers and established regular design review processes.",
        "Collaborated closely with product and engineering on roadmap planning and feature prioritization.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Multiple (CodeAlpha, Main Flow)",
      location: "Remote",
      duration: "Jan 2023 – Mar 2023",
      description:
        "Completed internship placements and training programs across several companies, contributing to web design and web development projects including.",
      achievements: [
        "Converted Figma designs into responsive, accessible HTML/CSS/JS pages with cross-browser compatibility",
        "Implemented interactive UI components and prototypes (vanilla JS / React) to demonstrate product flows",
        "Integrated RESTful APIs for dynamic content and client-side form handling with validation and error states",
        "Optimized assets (images, SVGs) and implemented lazy-loading to improve page performance",
        "Improved accessibility by adding ARIA attributes, keyboard navigation support, and adequate touch targets",
        "Set up Git workflow (feature branches, pull requests) and assisted with deployments to staging (Netlify/Vercel)",
        "Documented components and handoff notes to streamline developer collaboration",
        "Troubleshot and resolved front-end bugs, and iterated on UI based on feedback from designers and users",
      ],
    },
    {
      role: "UI/UX Design Intern",
      company:
        "Multiple (EazyByts Infotech, CodSoft, CodersCave, Extion Infotech, EvolveIntern)",
      location: "Remote",
      duration: "Jan 2022 – Dec 2024",
      description:
        "Completed internship placements and training programs across several companies, contributing to UI/UX and web design projects including wireframes, prototypes, and user testing.",
      achievements: [
        "Designed wireframes and interactive prototypes used in stakeholder reviews and usability testing.",
        "Contributed to component libraries and pattern documentation to improve consistency across projects.",
        "Assisted with user research sessions and synthesized findings into actionable design improvements.",
        "Delivered clickable Figma prototypes and supported developer handoff.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Vardhaman College of Engineering",
      duration: "2021 - 2025",
      details:
        "Graduated with Bachelors  of Technology in Computer Science and Engineering",
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Narayana Junior College",
      duration: "2019 - 2021",
      details:
        "Completed Higher Secondary (equivalent to Class 11–12 / A-levels)",
    },
    {
      degree: "Secondary School Certificate",
      school: "St.Ann's Girls High School",
      duration: "2008 - 2019",
      details: "Completed secondary schooling (Class 10)",
    },
  ];

  const certifications = [
    "Google UX Design Professional Certificate",
    "UI/UX & Web Design Internship — CodSoft, CodersCave, EazyByts, Extion Infotech, EvolveIntern",
    "UI/UX & Web Design Training — Internshala Trainings",
    "UI/UX Design Certificate — Great Learning",
    "Web Development Certification — CodeAlpha, Main Flow",
  ];

  return (
    <section id="resume" className="py-20 bg-[#F6FBFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-4">
            Experience & Background
          </h2>
          <p className="text-lg text-[#0B2235]/70 max-w-2xl mx-auto mb-8">
            3+ years of design experience across startups, agencies, and
            enterprise companies.
          </p>

          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-[#BEE6FF] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Download resume PDF"
          >
            <Download className="w-5 h-5 mr-3" />
            Download Resume
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#0B2235]">
              Work Experience
            </h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 text-[#0B2235]/70 hover:text-[#0B2235] transition-colors duration-200"
              aria-label={
                isExpanded
                  ? "Collapse experience details"
                  : "Expand experience details"
              }
            >
              <span className="text-sm font-medium">
                {isExpanded ? "Show Less" : "Show Details"}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#D7EEF9]"></div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="relative z-10 w-8 h-8 bg-[#8FCFF0] rounded-full flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-[#0B2235] rounded-full"></div>
                  </div>

                  <div className="ml-12 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-[#0B2235] mb-1">
                          {job.role}
                        </h4>
                        <div className="flex items-center gap-4 text-[#0B2235]/70">
                          <span className="font-medium">{job.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#0B2235]/60">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#0B2235]/80 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {isExpanded && (
                      <div className="border-t border-[#D7EEF9] pt-4">
                        <h5 className="font-semibold text-[#0B2235] mb-3">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#8FCFF0] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-[#0B2235]/70 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B2235] mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-[#EAF8FF] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#0B2235] mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-[#0B2235]/70 mb-2">
                    <span className="font-medium">{edu.school}</span>
                    <span>•</span>
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <p className="text-sm text-[#0B2235]/60">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B2235] mb-6">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#EAF8FF] rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-[#8FCFF0] rounded-full flex-shrink-0"></div>
                  <span className="text-[#0B2235] font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#EAF8FF] to-[#BEE6FF] rounded-2xl">
          <h3 className="text-2xl font-bold text-[#0B2235] mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-[#0B2235]/70 mb-6">
            Let's discuss how I can help bring your design vision to life.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-white transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;

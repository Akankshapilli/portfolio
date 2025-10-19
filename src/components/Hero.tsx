"use client";

import React, { useState } from "react";
import { ArrowRight, Eye, Mail, X } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/media/hero-ai.png";
import "@/app/globals.css";

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-28 pb-16 md:py-24 bg-gradient-to-br from-[#F6FBFF] to-[#EAF8FF]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2235] leading-tight">
                UI/UX & Product Designer
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8FCFF0] to-[#BEE6FF]"></div>
              <p className="text-xl md:text-2xl text-[#0B2235]/80 font-light">
                Clean, human-centered interfaces
              </p>
            </div>

            <p className="text-lg text-[#0B2235]/70 leading-relaxed max-w-lg">
              I design usable web & app experiences for early-stage startups and
              product teams. Available for freelance and full-time roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-[#BEE6FF] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="Hire me - go to contact section"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-8 py-4 border-2 border-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-[#8FCFF0] transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-1"
                aria-label="View resume"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Resume
              </button>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-[#BEE6FF] rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-16/9 relative">
                <Image
                  src={heroImage}
                  alt="UI/UX Design Portfolio Showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#BEE6FF] rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8FCFF0]/30 rounded-full"></div>
          </div>
        </div>
      </div>
      {showResumeModal && (
        <div
          // Backdrop
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowResumeModal(false)}
        >
          {/* Modal Content */}
          <div
            className="relative w-11/12 max-w-4xl h-[85vh] bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal on content click
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 bg-white text-[#0B2235] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-xl"
              title="Resume PDF Viewer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

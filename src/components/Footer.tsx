"use client";

import React from "react";
import { Mail, Linkedin, Github, Dribbble, Slice } from "lucide-react";
import Image from "next/image";
import logo from "@/public/media/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B2235] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <Image
                  src={logo}
                  alt="Akanksha Pilli Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Akanksha Pilli</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              UI/UX Designer crafting human-centered digital experiences for
              startups and enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <nav className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-white/70 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>UI/UX Design</li>
              <li>App Design</li>
              <li>Web Design</li>
              <li>User Research</li>
              <li>Prototyping</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:akankshapilli08@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                akankshapilli08@gmail.com
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https:www.linkedin.com/in/akankshapilli08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8FCFF0] hover:text-[#0B2235] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/Akankshapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8FCFF0] hover:text-[#0B2235] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://dribbble.com/akankshapilli08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8FCFF0] hover:text-[#0B2235] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Dribbble className="w-4 h-4" />
                </a>

                <a
                  href="https://www.behance.net/akankshapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8FCFF0] hover:text-[#0B2235] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Slice className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/50">
            © {currentYear} Akanksha Pilli. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

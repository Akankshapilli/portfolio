"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/public/media/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "case-studies", label: "Case Studies" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F6FBFF]/95 backdrop-blur-sm border-b border-[#D7EEF9] z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src={logo}
                alt="Akanksha Pilli Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  activeSection === item.id
                    ? "text-[#0B2235]"
                    : "text-[#0B2235]/70 hover:text-[#0B2235]"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-[#8FCFF0] transform transition-transform duration-200 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#BEE6FF] transition-colors duration-200"
              aria-label="Hire me - go to contact section"
            >
              <Mail className="w-4 h-4 inline-block mr-2" />
              Hire Me
            </button>
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="px-6 py-2 border-2 border-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#8FCFF0] transition-colors duration-200"
              aria-label="Download resume PDF"
            >
              <Download className="w-4 h-4 inline-block mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0B2235] hover:bg-[#EAF8FF] rounded-lg transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D7EEF9]">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-[#0B2235] bg-[#EAF8FF]"
                      : "text-[#0B2235]/70 hover:text-[#0B2235] hover:bg-[#EAF8FF]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-[#D7EEF9]">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 bg-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#BEE6FF] transition-colors duration-200 text-center"
                >
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  Hire Me
                </button>
                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="px-4 py-2 border-2 border-[#8FCFF0] text-[#0B2235] font-medium rounded-lg hover:bg-[#8FCFF0] transition-colors duration-200 text-center"
                >
                  <Download className="w-4 h-4 inline-block mr-2" />
                  Resume
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

"use client";

import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Github,
  Linkedin,
  Dribbble,
  Slice,
  Send,
  Clock,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    try {
      // This is the new part: it calls your API
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success!
        alert(
          "Thank you for your message! I'll get back to you within 12-24 hours."
        );
        setFormData({ name: "", email: "", budget: "", message: "" });
      } else {
        // Handle server errors
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Fetch error:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#EAF8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-[#0B2235]/70 max-w-2xl mx-auto">
            Ready to bring your design vision to life? Let's discuss your
            project and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0B2235] mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#0B2235] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full text-[#0B2235] px-4 py-3 border-2 border-[#D7EEF9] rounded-xl focus:border-[#8FCFF0] focus:outline-none transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0B2235] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-[#0B2235] px-4 py-3 border-2 border-[#D7EEF9] rounded-xl focus:border-[#8FCFF0] focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#0B2235] mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full text-[#0B2235] px-4 py-3 border-2 border-[#D7EEF9] rounded-xl focus:border-[#8FCFF0] focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-[#BEE6FF] transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-[#EAF8FF] rounded-xl flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#8FCFF0] flex-shrink-0" />
              <p className="text-sm text-[#0B2235]/70">
                <span className="font-medium">
                  Typically replies within 12 - 24 hours
                </span>{" "}
                during business days
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#0B2235] mb-6">
                Other Ways to Connect
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:akankshapilli08@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8FCFF0] to-[#BEE6FF] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0B2235]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                      Email Me Directly
                    </div>
                    <div className="text-sm text-[#0B2235]/60">
                      akankshapilli08@gmail.com
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#0B2235]/30 group-hover:text-[#8FCFF0] transition-colors duration-200 ml-auto" />
                </a>

                <a
                  href="https://calendly.com/akankshapilli08"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8FCFF0] to-[#BEE6FF] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#0B2235]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                      Schedule a Call
                    </div>
                    <div className="text-sm text-[#0B2235]/60">
                      Book a 30-minute consultation
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#0B2235]/30 group-hover:text-[#8FCFF0] transition-colors duration-200 ml-auto" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#0B2235] mb-6">
                Find Me Online
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https:www.linkedin.com/in/akankshapilli08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <Linkedin className="w-6 h-6 text-[#8FCFF0]" />
                  <span className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/Akankshapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <Github className="w-6 h-6 text-[#8FCFF0]" />
                  <span className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                    GitHub
                  </span>
                </a>

                 <a
                  href="https://dribbble.com/akankshapilli08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <Dribbble className="w-6 h-6 text-[#8FCFF0]" />
                  <span className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                    Dribbble
                  </span>
                </a>

                <a
                  href="https://www.behance.net/akankshapilli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-[#EAF8FF] transition-colors duration-200 group"
                >
                  <Slice className="w-6 h-6 text-[#8FCFF0]" />
                  <span className="font-medium text-[#0B2235] group-hover:text-[#8FCFF0] transition-colors duration-200">
                    Behance
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

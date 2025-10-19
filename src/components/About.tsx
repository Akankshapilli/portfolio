import React from "react";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/media/hero-ai.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F6FBFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image/Avatar */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-[#BEE6FF] to-[#8FCFF0] rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#8FCFF0] to-[#BEE6FF] rounded-full overflow-hidden">
                    <Image
                      src={heroImage}
                      alt="Akanksha Pilli - UI/UX Designer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#BEE6FF] rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-8 h-8 text-[#0B2235]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-6">
                About Me
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-[#0B2235]/80 leading-relaxed mb-6">
                  I'm a passionate UI/UX designer with 3+ years of experience
                  crafting digital experiences that bridge the gap between user
                  needs and business goals. I specialize in creating intuitive
                  interfaces for web applications and mobile products.
                </p>
                <p className="text-lg text-[#0B2235]/80 leading-relaxed">
                  My approach combines user research, strategic thinking, and
                  visual design to deliver solutions that are both beautiful and
                  functional. I believe great design should be invisible to
                  users but impactful for businesses.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#EAF8FF] rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-[#8FCFF0] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0B2235] mb-1">3+</div>
                <div className="text-sm text-[#0B2235]/70 font-medium">
                  Years Experience
                </div>
              </div>

              <div className="bg-[#EAF8FF] rounded-xl p-6 text-center">
                <CheckCircle className="w-8 h-8 text-[#8FCFF0] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0B2235] mb-1">
                  Available
                </div>
                <div className="text-sm text-[#0B2235]/70 font-medium">
                  For Hire
                </div>
              </div>

              <div className="bg-[#EAF8FF] rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-[#8FCFF0] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0B2235] mb-1">
                  Remote
                </div>
                <div className="text-sm text-[#0B2235]/70 font-medium">
                  Based in India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

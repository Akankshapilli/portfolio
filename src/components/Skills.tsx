import React from "react";
import { Search, Palette, Smartphone, Code } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "UX Research",
      icon: Search,
      skills: [
        { name: "User Interviews", level: 90 },
        { name: "Usability Testing", level: 85 },
        { name: "A/B Testing", level: 80 },
        { name: "Analytics", level: 75 },
      ],
    },
    {
      category: "UI Design",
      icon: Palette,
      skills: [
        { name: "Visual Design", level: 95 },
        { name: "Design Systems", level: 95 },
        { name: "Typography", level: 95 },
        { name: "Color Theory", level: 95 },
      ],
    },
    {
      category: "Product Design",
      icon: Smartphone,
      skills: [
        { name: "Wireframing", level: 95 },
        { name: "Prototyping", level: 90 },
        { name: "User Flows", level: 90 },
        { name: "Information Architecture", level: 85 },
      ],
    },
    {
      category: "Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "React Basics", level: 70 },
        { name: "Responsive Design", level: 90 },
        { name: "Accessibility", level: 85 },
      ],
    },
  ];

  const tools = [
    "Figma",
    "Sketch",
    "Framer",
    "Canva",
    "FigJam",
    "Notion",
    "ClickUp",
    "VS Code",
    "Xcode",
  ];

  return (
    <section id="skills" className="py-20 bg-[#EAF8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#0B2235]/70 max-w-2xl mx-auto">
            A comprehensive skillset spanning user research, interface design,
            and front-end development fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skillCategory) => {
            const Icon = skillCategory.icon;
            return (
              <div
                key={skillCategory.category}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8FCFF0] to-[#BEE6FF] rounded-xl flex items-center justify-center mr-3">
                    <Icon className="w-6 h-6 text-[#0B2235]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B2235]">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillCategory.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-[#0B2235]">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[#0B2235]/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-[#D7EEF9] rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#8FCFF0] to-[#BEE6FF] h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#0B2235] mb-8">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-6 py-3 bg-white text-[#0B2235] font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import React, { useInsertionEffect, useState } from "react";
import { Calendar, Users, Wrench, Target, Eye, X, Play } from "lucide-react";
import Image from "next/image";
import bg1 from "@/public/media/bg/bg1.png";
import bg2 from "@/public/media/bg/bg2.png";
import bg3 from "@/public/media/bg/bg3.png";
import bg4 from "@/public/media/bg/bg4.png";
import bg5 from "@/public/media/bg/bg5.png";
import bg6 from "@/public/media/bg/bg6.png";

import wu1 from "@/public/media/users/wu1.png";
import wu2 from "@/public/media/users/wu2.png";
import pu1 from "@/public/media/users/pu1.png";
import pu2 from "@/public/media/users/pu2.png";
import ppu1 from "@/public/media/users/ppu1.png";
import ppu2 from "@/public/media/users/ppu2.png";
import ku1 from "@/public/media/users/ku1.png";
import ku2 from "@/public/media/users/ku2.png";
import eu1 from "@/public/media/users/eu1.png";
import eu2 from "@/public/media/users/eu2.png";
import zu1 from "@/public/media/users/zu1.png";
import zu2 from "@/public/media/users/zu2.png";

import w1 from "@/public/media/wanderlogue/w1.png";
import w2 from "@/public/media/wanderlogue/w2.png";
import w3 from "@/public/media/wanderlogue/w3.png";
import w4 from "@/public/media/wanderlogue/w4.png";
import w5 from "@/public/media/wanderlogue/w5.png";
import w6 from "@/public/media/wanderlogue/w6.png";

import p1 from "@/public/media/projecthomeboard/p1.png";
import p2 from "@/public/media/projecthomeboard/p2.png";
import p3 from "@/public/media/projecthomeboard/p3.png";
import p4 from "@/public/media/projecthomeboard/p4.png";
import p5 from "@/public/media/projecthomeboard/p5.png";
import p6 from "@/public/media/projecthomeboard/p6.png";
import p7 from "@/public/media/projecthomeboard/p7.png";
import p8 from "@/public/media/projecthomeboard/p8.png";
import p9 from "@/public/media/projecthomeboard/p9.png";
import p10 from "@/public/media/projecthomeboard/p10.png";
import p11 from "@/public/media/projecthomeboard/p11.png";
import p12 from "@/public/media/projecthomeboard/p12.png";
import p13 from "@/public/media/projecthomeboard/p13.png";
import p14 from "@/public/media/projecthomeboard/p14.png";
import p15 from "@/public/media/projecthomeboard/p15.png";

import pp1 from "@/public/media/paisaplanner/pp1.png";
import pp2 from "@/public/media/paisaplanner/pp2.png";
import pp3 from "@/public/media/paisaplanner/pp3.png";
import pp4 from "@/public/media/paisaplanner/pp4.png";
import pp5 from "@/public/media/paisaplanner/pp5.png";
import pp6 from "@/public/media/paisaplanner/pp6.png";
import pp7 from "@/public/media/paisaplanner/pp7.png";
import pp8 from "@/public/media/paisaplanner/pp8.png";
import pp9 from "@/public/media/paisaplanner/pp9.png";
import pp10 from "@/public/media/paisaplanner/pp10.png";
import pp11 from "@/public/media/paisaplanner/pp11.png";
import pp12 from "@/public/media/paisaplanner/pp12.png";
import pp13 from "@/public/media/paisaplanner/pp13.png";
import pp14 from "@/public/media/paisaplanner/pp14.png";
import pp15 from "@/public/media/paisaplanner/pp15.png";
import pp16 from "@/public/media/paisaplanner/pp16.png";
import pp17 from "@/public/media/paisaplanner/pp17.png";
import pp18 from "@/public/media/paisaplanner/pp18.png";
import pp19 from "@/public/media/paisaplanner/pp19.png";
import pp20 from "@/public/media/paisaplanner/pp20.png";
import pp21 from "@/public/media/paisaplanner/pp21.png";

import k1 from "@/public/media/katalog/k1.png";
import k2 from "@/public/media/katalog/k2.png";
import k3 from "@/public/media/katalog/k3.png";
import k4 from "@/public/media/katalog/k4.png";
import k5 from "@/public/media/katalog/k5.png";
import k6 from "@/public/media/katalog/k6.png";
import k7 from "@/public/media/katalog/k7.png";
import k8 from "@/public/media/katalog/k8.png";
import k9 from "@/public/media/katalog/k9.png";
import k10 from "@/public/media/katalog/k10.png";
import k11 from "@/public/media/katalog/k11.png";
import k12 from "@/public/media/katalog/k12.png";
import k13 from "@/public/media/katalog/k13.png";
import k14 from "@/public/media/katalog/k14.png";
import k15 from "@/public/media/katalog/k15.png";
import k16 from "@/public/media/katalog/k16.png";
import k17 from "@/public/media/katalog/k17.png";
import k18 from "@/public/media/katalog/k18.png";
import k19 from "@/public/media/katalog/k19.png";
import k20 from "@/public/media/katalog/k20.png";

import e1 from "@/public/media/echo/e1.png";
import e2 from "@/public/media/echo/e2.png";
import e3 from "@/public/media/echo/e3.png";
import e4 from "@/public/media/echo/e4.png";
import e5 from "@/public/media/echo/e5.png";
import e6 from "@/public/media/echo/e6.png";
import e7 from "@/public/media/echo/e7.png";
import e8 from "@/public/media/echo/e8.png";
import e9 from "@/public/media/echo/e9.png";
import e10 from "@/public/media/echo/e10.png";
import e11 from "@/public/media/echo/e11.png";

import z1 from "@/public/media/zenfit/z1.png";
import z2 from "@/public/media/zenfit/z2.png";
import z3 from "@/public/media/zenfit/z3.png";
import z4 from "@/public/media/zenfit/z4.png";
import z5 from "@/public/media/zenfit/z5.png";
import z6 from "@/public/media/zenfit/z6.png";
import z7 from "@/public/media/zenfit/z7.png";
import z8 from "@/public/media/zenfit/z8.png";
import z9 from "@/public/media/zenfit/z9.png";

const CaseStudies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<any>(null);
  const [modalType, setModalType] = useState<string | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Wanderlogue",
      type: "web",
      subtitle: "Your AI-Powered Travel Storyteller",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=6-49&p=f&t=cfQPPytRvBCLEqRC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A49",
      demo: "/media/videos/liveone.mp4",
      hero: bg1,
      meta: {
        role: "UI/UX Designer",
        timeline: "4 months",
        tools: "Figma",
        outcome:
          "70% of new users created their first travelogue within a week",
      },
      problem: {
        problemStatement:
          "Travelers capture countless photos and memories, but these digital fragments often remain disorganized in camera rolls or are shared disjointedly on social media. There's a lack of a dedicated platform to weave these moments into a cohesive, engaging, and easily shareable travel story.",
        userQuotes: [
          '"I have over 2,000 photos from my trip to Italy, but they\'re just sitting in my phone. It feels overwhelming to even start organizing them."',
          '"Instagram feels too public and curated. I want a more personal space to write down the real stories and funny moments from my travels."',
          '"I try to journal, but I always forget details later. I wish my photos and my notes were automatically in the same place."',
        ],
        userPersonas: [
          {
            name: "Alex",
            title: "The Adventurer",
            image: wu1,
            bio: "A 28-year-old marketing professional who takes 2-3 international trips a year, seeking authentic, off-the-beaten-path destinations.",
            quote:
              "My travel memories feel so fragmented. They're just a chaotic mess in my camera roll, and I lose the story behind the moments.",
            goals: [
              "Wants a single, beautiful place to organize travel records.",
              "Needs an easy way to share rich stories with close friends.",
              "Hopes to capture the small details and feelings of a trip.",
            ],
            frustrations: [
              "Feels overwhelmed by their massive, unsorted camera roll.",
              "Finds traditional blogging platforms too complicated and slow.",
              "Believes social media posts are too superficial to capture the full journey.",
            ],
          },
          {
            name: "Maya",
            title: "The Memory Weaver",
            image: wu2,
            bio: "A 42-year-old graphic designer and mother of two. She plans one major family vacation each year and wants to preserve those core memories for her children.",
            quote:
              "After our trips, our photos are scattered across three different phones. We never manage to put them all together into one story that we can all look back on.",
            goals: [
              "To easily combine photos and notes from her entire family into one place.",
              "Create a lasting digital scrapbook for her kids to cherish in the future.",
              "Privately share the complete, rich story with grandparents and close relatives.",
            ],
            frustrations: [
              "The hassle of collecting photos from her husband's and kids' devices is immense.",
              "Photo book software feels dated and can't include videos or interactive elements.",
              "Is concerned about privacy and doesn't want to overshare family moments on public social media.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Research & Discovery",
          duration: "3 weeks",
          keyActivities:
            "User interviews (8 travelers), competitive analysis (vs. Instagram, Journey, Polarsteps), persona development.",
          keyInsights:
            "The biggest pain point is not the *lack* of content, but the overwhelming effort required to organize it. Users want an experience that feels creative and personal, not like a chore.",
        },
        {
          phase: "Ideation & Strategy",
          duration: "2 weeks",
          keyActivities:
            "How Might We sessions, storyboarding user journeys, brainstorming AI features, creating low-fidelity wireframes in Miro.",
          outcome:
            "Defined the core feature set for the MVP: AI-assisted content grouping, map-based timeline, and customizable journal templates. Decided to postpone social network features to focus on the creation experience.",
        },
        {
          phase: "UX Design",
          duration: "4 weeks",
          keyActivities:
            "Detailed wireframing, information architecture, building a cohesive user flow for creating a travelogue from scratch.",
          outcome:
            "A complete, high-fidelity wireframe prototype that mapped the entire user journey, from onboarding to publishing their first story.",
        },
        {
          phase: "UI Design",
          duration: "4 weeks",
          keyActivities:
            "Developing the design system, crafting a visually immersive interface, designing multiple journal themes (e.g., 'Modern Minimalist', 'Vintage Postcard').",
          outcome:
            "A comprehensive style guide and component library in Figma that ensured consistency and sped up development.",
        },
        {
          phase: "Prototyping & Testing",
          duration: "3 weeks",
          keyActivities:
            "Building high-fidelity prototypes in Protopie, conducting 5 moderated usability tests via UserTesting.com, iterating based on feedback.",
          keyInsights:
            "Users loved the AI suggestions but wanted more manual control over photo selection. The initial 'Publish' button was unclear. We renamed it to 'Share Your Story' and added a confirmation step, which increased user confidence.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-poppins)" }}>Poppins</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-poppins)" }}>
                A modern, geometric sans-serif used for impactful headings and
                marketing copy to create a friendly and organized feel.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-inter)" }}>Inter</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-inter)" }}>
                A highly legible and versatile sans-serif optimized for user
                interfaces, ensuring clarity for body text, labels, and all
                functional UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#EF6351",
            name: "Vibrant Coral",
            use: "Primary CTAs, action buttons, and key highlights.",
          },
          secondary: {
            hex: "#4CB6AC",
            name: "Tropical Teal",
            use: "Secondary buttons, backgrounds, and brand accents.",
          },
          accent: {
            hex: "#F7B801",
            name: "Sunny Yellow",
            use: "Highlights, ratings (stars), and important callouts.",
          },
          neutrals: [
            {
              hex: "#F7FBF9",
              name: "Mint White",
              use: "Main background color for sections.",
            },
            {
              hex: "#8D99AE",
              name: "Stone Gray",
              use: "Secondary text, labels, placeholders, and borders.",
            },
            {
              hex: "#2B3843",
              name: "Deep Charcoal",
              use: "Main body text and headings for high readability.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "An AI-assisted mobile app that helps travelers transform their scattered photos and notes into beautiful, narrative-driven travelogues. Wanderlogue automatically organizes content by location and timeline, suggests story chapters, and provides elegant templates to create a shareable digital journal.",
        type: "web",
        keyFeatures: [w1, w2, w3, w4, w5, w6],
      },
      impact: {
        impactMetrics: [
          {
            metric: "User Retention (60-day)",
            value: "50%",
            note: "Significantly higher than the industry average for journaling apps.",
          },
          {
            metric: "Travelogues Created (First Quarter)",
            value: "25,000+",
            note: "Demonstrates strong user engagement with the core feature.",
          },
          {
            metric: "App Store Rating",
            value: "4.8 Stars",
            note: "Based on over 1,200 user reviews.",
          },
          {
            metric: "Adoption of Core Feature",
            value: "70%",
            note: "Percentage of new users who created their first travelogue within one week of downloading.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "Balancing the power of AI suggestions with the user's desire for creative control was a constant challenge. Early prototypes were too automated, making users feel like they weren't telling their *own* story.",
          "Technical constraints around background processing for photo analysis meant we had to design a very clear and communicative 'importing' state for the user.",
        ],
        whatIdDoDifferently:
          "I would involve developers earlier in the ideation phase to get feedback on the feasibility of some of the more ambitious AI features. This would have streamlined our design process and avoided some late-stage scope adjustments.",
        keyTakeaways:
          "This project reinforced that the best products don't just provide tools; they reduce friction. By focusing on the core problem of 'feeling overwhelmed,' we created a solution that resonated deeply with users. It also taught me the value of user testing in finding the perfect balance between automation and manual input.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
    {
      id: 2,
      title: "Project Homeboard",
      type: "web",
      subtitle: "Your Home Renovation, Organized.",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=29-149&t=j7yhl9VvhBBVWomK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A149&show-proto-sidebar=1",
      demo: "/media/videos/livetwo.mp4",
      hero: bg2,
      meta: {
        role: "UI/UX Designer",
        timeline: "5 months",
        tools: "Figma",
        outcome: "Reduced project planning time for users by an average of 40%",
      },
      problem: {
        problemStatement:
          "Home renovation projects are notoriously chaotic. Homeowners juggle inspiration from Pinterest, budgets in spreadsheets, vendor contacts in emails, and timelines in notebooks. This fragmentation leads to stress, budget overruns, and a disconnect between the initial vision and the final outcome. There is no central source of truth to manage the entire process seamlessly.",
        userQuotes: [
          "\"I have a thousand screenshots for my kitchen remodel, but my budget is on a random spreadsheet and I can never find my contractor's quote when I need it. It's a complete mess.\"",
          "\"Keeping track of payments to the plumber, the electrician, and the cabinet maker is a full-time job. I'm constantly terrified I'm going over budget.\"",
          '"My partner and I can never agree because our ideas are scattered everywhere. We need one place to build our vision together and see how it fits the plan."',
        ],
        userPersonas: [
          {
            name: "James & Sarah",
            title: "The First-Time Renovators",
            image: pu1,
            bio: "A couple in their early 30s who just bought their first home. They are excited but completely overwhelmed by their upcoming kitchen and bathroom remodel.",
            quote:
              "We have the vision, but we have no idea how to manage the actual project. We're afraid of making costly mistakes.",
            goals: [
              "To stay firmly within their set budget.",
              "Have a clear, step-by-step plan to follow.",
              "Easily collaborate on design choices and track progress.",
            ],
            frustrations: [
              "Lack of a centralized system to track everything.",
              "Difficulty visualizing how their budget translates to real-world costs.",
              "Poor communication and organization with multiple vendors.",
            ],
          },
          {
            name: "Chloe",
            title: "The DIY Designer",
            image: pu2,
            bio: "A 45-year-old marketing director with a passion for interior design, managing a major living room renovation herself.",
            quote:
              "I know exactly what I want aesthetically, but managing the logistics—the quotes, the schedules, the deliveries—is draining all my creative energy.",
            goals: [
              "Streamline project management to focus on creative decisions.",
              "Effectively manage multiple vendor timelines and payments.",
              "Maintain a clear overview of the project's status at all times.",
            ],
            frustrations: [
              "Juggling too many disconnected tools (notes apps, spreadsheets, email).",
              "Forgetting small but critical tasks in the flood of information.",
              "Finding it hard to get a quick, high-level view of project health.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Research & Discovery",
          duration: "4 weeks",
          keyActivities:
            "Interviews with 10 homeowners and 3 interior designers, competitive analysis (Houzz, Asana, Monday.com), journey mapping the typical renovation process.",
          keyInsights:
            "Users feel most anxious about three things: budget, timeline, and communication. A successful tool must address all three in a single, easy-to-understand interface.",
        },
        {
          phase: "Strategy & Ideation",
          duration: "3 weeks",
          keyActivities:
            "Feature prioritization using the MoSCoW method, defining the core user flow for project setup, low-fidelity wireframing of the dashboard and key modules.",
          outcome:
            "Defined the MVP to include a Vision Board, Budget Tracker, Vendor Manager, and a simple Task Planner. Decided to postpone advanced features like 3D visualization.",
        },
        {
          phase: "UX Design",
          duration: "5 weeks",
          keyActivities:
            "High-fidelity wireframing, designing the information architecture for nested project data (e.g., expenses within a vendor), building interactive prototypes.",
          outcome:
            "A comprehensive user flow from onboarding to active project management, focusing on a clear and calming user experience to reduce user anxiety.",
        },
        {
          phase: "UI Design",
          duration: "4 weeks",
          keyActivities:
            "Creating a sophisticated and calming design system, designing all screen states, and building a reusable component library in Figma.",
          outcome:
            "A polished, consistent UI that reinforces the brand's promise of organization and elegance, with a component library that accelerated development handoff.",
        },
        {
          phase: "Prototyping & Testing",
          duration: "4 weeks",
          keyActivities:
            "Building high-fidelity Figma prototypes, conducting 6 moderated usability tests with target users, iterating on the budget and task management flows.",
          keyInsights:
            "Users wanted more granular control in the budget tracker (e.g., categorizing expenses and splitting payments). The initial dashboard felt too data-heavy; we simplified it to show only top-level KPIs.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-playfairDisplay)" }}>
                Playfair Display
              </span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-playfairDisplay)" }}>
                A high-contrast, elegant serif with a sophisticated, editorial
                feel. Used for major headings and titles to evoke a sense of
                luxury and timeless style.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-lato)" }}>Lato</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-lato)" }}>
                A warm, friendly, and highly readable sans-serif. Its clean and
                approachable structure provides clarity for body text, labels,
                and all UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#7A8760",
            name: "Olive Green",
            use: "Primary buttons, active states, and key branding elements.",
          },
          secondary: {
            hex: "#3B4A49",
            name: "Deep Teal",
            use: "Body text, headings, and secondary UI elements for high contrast.",
          },
          accent: {
            hex: "#C77A42",
            name: "Terracotta",
            use: "Highlights, notifications, and accent elements to draw attention.",
          },
          neutrals: [
            {
              hex: "#F8F6F2",
              name: "Cream White",
              use: "Main app background for a warm, airy feel.",
            },
            {
              hex: "#EAE3D6",
              name: "Light Beige",
              use: "Card backgrounds and content containers.",
            },
            {
              hex: "#A8A39A",
              name: "Stone Taupe",
              use: "Borders, dividers, and disabled states.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "Project Homeboard is an elegant, all-in-one web platform that centralizes every aspect of a home renovation. It combines a visual vision board, a granular budget tracker, a vendor management system, and a task planner into a single, cohesive dashboard, empowering homeowners to manage their projects with confidence and clarity.",
        type: "web",
        keyFeatures: [
          p1,
          p2,
          p3,
          p4,
          p5,
          p6,
          p7,
          p8,
          p9,
          p10,
          p11,
          p12,
          p13,
          p14,
          p15,
        ],
      },
      impact: {
        impactMetrics: [
          {
            metric: "User-Reported Stress Levels",
            value: "Reduced by 50%",
            note: "Based on post-project user surveys comparing their experience with past renovations.",
          },
          {
            metric: "Budget Adherence",
            value: "85%",
            note: "Percentage of projects completed within 5% of the original budget using the tracker.",
          },
          {
            metric: "Active Engagement",
            value: "90%",
            note: "Percentage of users who logged in more than 3 times a week during their project's duration.",
          },
          {
            metric: "Task Completion Rate",
            value: "95%",
            note: "Percentage of tasks logged in 'The Plan' that were marked as complete.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "Designing an interface that was simple enough for a novice homeowner but still provided enough depth and functionality for a power user or a professional designer.",
          "The main challenge was integrating diverse data types—visuals (Vision Board), finances (Budget), and logistics (Plan)—into one intuitive and non-overwhelming dashboard.",
        ],
        whatIdDoDifferently:
          "I would conduct co-design sessions with both homeowners and contractors earlier in the process. This would help uncover shared pain points in their communication and build features that serve both sides of the equation more effectively from the start.",
        keyTakeaways:
          "This project taught me that for complex tasks like home renovation, the user's emotional state is as important as the functionality. By creating a calm, organized, and beautiful interface, we didn't just provide a tool; we provided peace of mind, which was our ultimate goal.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
    {
      id: 3,
      title: "Paisa Planner",
      type: "app",
      subtitle: "Your Financial Wellness Companion",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=137-1662&p=f&t=iQb246dDVLo4PnvI-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A1662&show-proto-sidebar=1",
      demo: "/media/videos/livethree.mp4",
      hero: bg3,
      meta: {
        role: "UI/UX Designer",
        timeline: "3 months",
        tools: "Figma",
        outcome: "Increased user savings goal creation by 60% post-launch",
      },
      problem: {
        problemStatement:
          "Young professionals and students often struggle with financial discipline. They find it difficult to track their daily spending, manage multiple accounts, and actively save for specific goals. Existing banking apps are often transactional and lack intuitive, goal-oriented features, leading to financial anxiety and a lack of clear progress.",
        userQuotes: [
          '"I get my salary, and by the end of the month, I have no idea where it all went. The donut charts in my bank app don\'t really help me change my habits."',
          "\"I want to save for a new laptop and a vacation, but it's all in one big savings account. I never know if I'm on track or if I'm 'stealing' from one goal for another.\"",
          '"I have two bank accounts and a credit card. To see my total spending, I have to open three different apps and use a calculator. It\'s too much work."',
        ],
        userPersonas: [
          {
            name: "Rohan",
            title: "The Ambitious Saver",
            image: ppu1,
            bio: "A 24-year-old software developer who just started his first job. He wants to manage his new income responsibly and save for big-ticket items.",
            quote:
              "I need a simple way to see all my money in one place and set aside cash for my goals, separate from my spending money.",
            goals: [
              "Track monthly spending by category automatically.",
              "Create and fund multiple savings 'pots' or goals.",
              "Get a clear, high-level view of his net worth and spending habits.",
            ],
            frustrations: [
              "Finds traditional bank apps clunky and hard to navigate.",
              "Forgets to log manual expenses.",
              "Loses motivation when savings goals feel too far away or abstract.",
            ],
          },
          {
            name: "Priya",
            title: "The Budget Balancer",
            image: ppu2,
            bio: "A 30-year-old freelance graphic designer with a variable income. She needs to manage her finances tightly to ensure stability.",
            quote:
              "My income fluctuates, so I need to be really careful with my budget. I need to know exactly what's coming in and going out.",
            goals: [
              "To get a clear breakdown of spending vs. income each month.",
              "Link all her accounts (business & personal) for a complete financial picture.",
              "Set up recurring emergency funds and tax savings goals.",
            ],
            frustrations: [
              "It's hard to separate business expenses from personal spending.",
              "Feels overwhelmed by complex spreadsheets.",
              "Worries about unexpected expenses derailing her budget.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Research & Discovery",
          duration: "4 weeks",
          keyActivities:
            "User interviews (10 young professionals), competitive analysis (vs. Mint, YNAB, bank apps), persona creation.",
          keyInsights:
            "Users don't just want to *track* money; they want to feel *in control* of it. Goal-setting was the most requested feature to bridge the gap between tracking and action.",
        },
        {
          phase: "Ideation & Strategy",
          duration: "2 weeks",
          keyActivities:
            "How Might We sessions on 'making saving fun', user flow storyboarding for 'Goal Creation', low-fidelity wireframes.",
          outcome:
            "Defined the MVP core loop: Link Accounts -> View Dashboard Insights -> Create & Fund Goals. Decided to postpone investment tracking to focus on spending and saving.",
        },
        {
          phase: "UX Design",
          duration: "4 weeks",
          keyActivities:
            "Detailed wireframing of all screens, designing the information architecture for the settings menu, prototyping the goal creation flow.",
          outcome:
            "A complete high-fidelity wireframe set in Figma, mapping the entire user journey from onboarding to creating the first savings goal.",
        },
        {
          phase: "UI Design",
          duration: "3 weeks",
          keyActivities:
            "Developing a 'dark-mode first' design system, creating a calming and sophisticated UI with purple accents to reduce financial stress, component library creation.",
          outcome:
            "A comprehensive style guide and component library that ensured a sleek, modern, and consistent feel across the entire application.",
        },
        {
          phase: "Prototyping & Testing",
          duration: "3 weeks",
          keyActivities:
            "Building high-fidelity prototypes, conducting 5 moderated usability tests, iterating on the dashboard's information hierarchy.",
          keyInsights:
            "Users wanted the 'Spending by Category' to be more prominent. The 'Add New Goal' CTA was initially hard to find; we moved it to a more central location.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-lora)" }}>Lora</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-lora)" }}>
                An elegant, well-balanced serif used for headings and titles to
                bring a touch of classic sophistication and editorial quality.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-inter)" }}>Inter</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-inter)" }}>
                A highly legible and versatile sans-serif optimized for user
                interfaces, ensuring clarity for body text, labels, and all
                functional UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#B0A8B9",
            name: "Muted Mauve",
            use: "Primary CTAs, active states, icons, and progress bars.",
          },
          secondary: {
            hex: "#FFFFFF",
            name: "Pure White",
            use: "Key text, headings, and interactive button text.",
          },
          accent: {
            hex: "#D0C9D6",
            name: "Light Mauve",
            use: "Secondary buttons and highlights.",
          },
          neutrals: [
            {
              hex: "#1C1C1E",
              name: "Near Black",
              use: "Main app background.",
            },
            {
              hex: "#3A3A3C",
              name: "Dark Gray",
              use: "Content card backgrounds (e.g., goals, settings).",
            },
            {
              hex: "#8E8E93",
              name: "Medium Gray",
              use: "Secondary text, labels, and placeholders.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "Paisa Planner is a sleek, dark-mode mobile app designed to simplify personal finance. It provides a consolidated dashboard for all accounts, detailed spending insights, and an intuitive, motivating system for creating and tracking specific savings goals, turning financial anxiety into actionable progress.",
        type: "app",
        keyFeatures: [
          pp1,
          pp2,
          pp3,
          pp4,
          pp5,
          pp6,
          pp7,
          pp8,
          pp9,
          pp10,
          pp11,
          pp12,
          pp13,
          pp14,
          pp15,
          pp16,
          pp17,
          pp18,
          pp19,
          pp20,
          pp21,
        ],
      },
      impact: {
        impactMetrics: [
          {
            metric: "Active Goal Setting",
            value: "60% Increase",
            note: "Percentage of active users who created at least one savings goal in their first month.",
          },
          {
            metric: "App Store Rating",
            value: "4.5 Stars",
            note: "Average user rating on the App Store after 3 months.",
          },
          {
            metric: "Core Feature Adoption",
            value: "85%",
            note: "Percentage of users who successfully linked at least one bank account.",
          },
          {
            metric: "User Retention (30-day)",
            value: "45%",
            note: "Demonstrates strong habit-forming potential and app value.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "The biggest challenge was designing a 'dark-mode first' UI that was not only aesthetically pleasing but also met accessibility (WCAG) standards for color contrast, especially with financial data.",
          "Simplifying complex financial data (like spending breakdowns) into easily digestible charts without losing critical information.",
        ],
        whatIdDoDifferently:
          "I would have spent more time testing the onboarding flow for linking bank accounts. This is a high-friction step with a high drop-off rate, and simplifying it further with more direct API feedback would be a priority.",
        keyTakeaways:
          "For finance apps, trust and clarity are paramount. A clean, calm, and professional UI is not just a 'skin'—it's a core feature that builds user confidence. Focusing on a single, actionable loop (View -> Set Goal -> Save) was more effective than trying to build a 'do-everything' app.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
    {
      id: 4,
      title: "Katalog",
      type: "app",
      subtitle: "Your personal home inventory in one tap",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=137-2400&p=f&t=saozqN80eonjaOjH-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A2397&show-proto-sidebar=1",
      demo: "/media/videos/livefour.mp4",
      hero: bg4,
      meta: {
        role: "UI/UX Designer",
        timeline: "3 months",
        tools: "Figma",
        outcome:
          "80% of users cataloged 10+ items, with 50% using the 'Lent Out' feature in the first month",
      },
      problem: {
        problemStatement:
          "People own countless items, but have no simple way to track them. Belongings get lost in storage, or more commonly, lent to friends and family and forgotten. This leads to clutter, mental overhead, and the awkwardness of trying to remember who borrowed what, and when.",
        userQuotes: [
          "\"I lent my favorite jacket to a friend, but I can't remember which friend. It's been six months and now it's just gone.\"",
          "\"I *know* I have that specific screwdriver bit, but I've spent 20 minutes tearing my garage apart. I have no idea what's in which box.\"",
          '"When we moved, we used a spreadsheet for insurance. It was awful, clunky, and had no photos. I gave up after one room."',
        ],
        userPersonas: [
          {
            name: "Sarah",
            title: "The Social Connector",
            image: ku1,
            bio: "A 32-year-old project manager living in a city apartment. She frequently hosts friends and shares her belongings, like books, kitchen gadgets, and tools.",
            quote:
              "I love sharing my things, but I've lost so many good books because I just forget who I gave them to. I feel too awkward to ask!",
            goals: [
              "Wants a simple list of all items she has lent out.",
              "Needs to quickly find items she's stored away.",
              "Hopes to set reminders to ask for items back politely.",
            ],
            frustrations: [
              "Forgets who has her belongings, making her hesitant to lend.",
              "Note apps and to-do lists are too messy for tracking items.",
              "Feels overwhelmed by 'clutter' even when she's organized.",
            ],
          },
          {
            name: "David",
            title: "The Careful Curator",
            image: ku2,
            bio: "A 45-year-old father of two who just moved into a new house. He owns valuable tools, electronics, and collections and wants a record for insurance.",
            quote:
              "I need a definitive list of my valuables for insurance. And I want to know exactly what's in the 'Storage - Attic' boxes without climbing up there.",
            goals: [
              "Create a comprehensive home inventory with photos and purchase dates.",
              "Organize items by room and specific container (e.g., 'Box #3').",
              "Easily find warranty information for his electronics.",
            ],
            frustrations: [
              "Spreadsheets are clunky and don't work well on mobile.",
              "It's impossible to remember where small, specific items are stored.",
              "His family members put things in different places, losing them.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Research & Discovery",
          duration: "3 weeks",
          keyActivities:
            "User interviews (10 homeowners & renters), competitive analysis (vs. Sortly, MyStuff, and note-taking apps), persona development.",
          keyInsights:
            "The biggest barrier is the 'data entry' friction. Users dread cataloging. The 'loan tracking' feature was the most requested differentiator, as no simple app solved this specific, emotional problem well.",
        },
        {
          phase: "Ideation & Strategy",
          duration: "2 weeks",
          keyActivities:
            "How Might We sessions, user journey mapping for 'Add Item' and 'Lend Item' flows, feature prioritization (MVP: Photo add, room/container sorting, loan tracking).",
          outcome:
            "Defined the core loop: 1. Add Room/Container -> 2. Add Item (fast) -> 3. Lend Item. We postponed barcode scanning and warranty reminders to focus on making this core loop perfect.",
        },
        {
          phase: "UX Design",
          duration: "4 weeks",
          keyActivities:
            "Low-fidelity wireframing in Miro, building high-fidelity wireframes in Figma, defining the information architecture (Room -> Container -> Item -> Item Status).",
          outcome:
            "A complete, high-fidelity wireframe prototype that mapped the entire user journey, from onboarding to lending their first item.",
        },
        {
          phase: "UI Design",
          duration: "3 weeks",
          keyActivities:
            "Developing the design system based on a warm, tangible, and non-corporate feel. Crafting a clean, card-based interface to make the inventory feel manageable.",
          outcome:
            "A comprehensive style guide and component library in Figma, using a warm, calming color palette to make the 'chore' of cataloging feel simple and light.",
        },
        {
          phase: "Prototyping & Testing",
          duration: "2 weeks",
          keyActivities:
            "Building interactive prototypes in Figma, conducting 5 moderated usability tests, iterating on the 'Lent Item' flow.",
          keyInsights:
            "Users were confused about *how* to mark an item as 'lent'. The initial flow was hidden in a menu. We moved the 'Lend Item' button to a primary CTA on the item detail screen, which solved all confusion.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-playfairDisplay)" }}>
                Playfair Display
              </span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-playfairDisplay)" }}>
                A high-contrast, elegant serif with a sophisticated, editorial
                feel. Used for major headings and titles to evoke a sense of
                luxury and timeless style.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-inter)" }}>Inter</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-inter)" }}>
                A highly legible and versatile sans-serif optimized for user
                interfaces, ensuring clarity for body text, labels, and all
                functional UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#D75A5A",
            name: "Warm Coral",
            use: "Primary CTAs, add buttons, and the 'Lent Out' status.",
          },
          secondary: {
            hex: "#468980",
            name: "Deep Teal",
            use: "Secondary buttons, icons, and informational accents.",
          },
          accent: {
            hex: "#E9B44C",
            name: "Mustard Yellow",
            use: "Highlights, search bars, and important callouts.",
          },
          neutrals: [
            {
              hex: "#FBF7EF",
              name: "Cream Parchment",
              use: "Main app background, giving a warm, tangible feel.",
            },
            {
              hex: "#F3EADF",
              name: "Light Beige",
              use: "Card backgrounds, text inputs, and UI panels.",
            },
            {
              hex: "#4A4441",
              name: "Charcoal Brown",
              use: "Main body text, headings, and icons for high contrast.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "Katalog is a simple, visually-driven mobile app that helps you create a personal inventory of your belongings. It lets you quickly catalog items with photos and notes, organize them by room or container, and—most importantly—easily track items you've lent to friends and family.",
        type: "app",
        keyFeatures: [
          k1,
          k2,
          k3,
          k4,
          k5,
          k6,
          k7,
          k8,
          k9,
          k10,
          k11,
          k12,
          k13,
          k14,
          k15,
          k16,
          k17,
          k18,
          k19,
          k20,
        ],
      },
      impact: {
        impactMetrics: [
          {
            metric: "Loan Tracking Adoption",
            value: "50%",
            note: "Percentage of active users who used the 'Lent Out' feature at least once in their first 30 days.",
          },
          {
            metric: "Average Items Cataloged",
            value: "22",
            note: "Average number of items added per active user, indicating high engagement with the core loop.",
          },
          {
            metric: "App Store Rating",
            value: "4.7 Stars",
            note: "Based on over 800 user reviews, frequently praising the 'Lent Out' feature as a 'life-saver'.",
          },
          {
            metric: "Initial Engagement",
            value: "80%",
            note: "Percentage of new users who successfully cataloged their first 10 items within one week.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "The biggest challenge was overcoming the 'data entry' friction. Users are excited by the *idea* of an inventory but dread the *work*. We had to make the 'Add Item' flow incredibly fast and simple.",
          "Balancing simplicity with power. Some users wanted detailed fields (warranty, serial #, value), while others just wanted a photo and a name. We solved this with an optional 'Add More Details' toggle.",
        ],
        whatIdDoDifferently:
          "I would have focused on the 'Lent Out' feature even *more* from the beginning. Our initial research highlighted it, but we still treated it as secondary to the 'inventory' part. It's the true unique selling proposition, and I would make it central to the onboarding experience.",
        keyTakeaways:
          "This project proved that a successful app finds a *specific, emotional* pain point. 'Losing track of your stuff' is abstract, but 'Feeling awkward asking your friend for your book back' is a concrete, relatable problem. By solving the specific, we solved the general.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
    {
      id: 5,
      title: "Echo",
      type: "app",
      subtitle: "Preserve Your Stories. Connect with the Future",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=160-3290&p=f&t=saozqN80eonjaOjH-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=158%3A3276&show-proto-sidebar=1",
      demo: "/media/videos/livefive.mp4",
      hero: bg5,
      meta: {
        role: "UI/UX Designer",
        timeline: "4 months",
        tools: "Figma",
        outcome:
          "75% of new users successfully sealed their first time capsule within one week",
      },
      problem: {
        problemStatement:
          "People want to preserve meaningful memories for their future selves or loved ones, but digital files get lost in a sea of unorganized cloud storage. Physical time capsules are clumsy and impractical. There's no dedicated, secure platform to 'send a message to the future'—to lock away memories, stories, and advice until a specific, meaningful date.",
        userQuotes: [
          "\"I write letters to my daughter for her future birthdays, but they're just in a Word doc on an old hard drive. I'm terrified she'll never see them.\"",
          '"I love the *idea* of writing to my future self, but I have no self-control. If I use a notes app, I\'ll just read it tomorrow. It loses the magic."',
          "\"My parents recorded some camcorder videos of me as a baby, but they're mixed in with thousands of random photos. I wish they were all in one 'box' with the stories.\"",
        ],
        userPersonas: [
          {
            name: "Maria",
            title: "The New Parent",
            image: eu1,
            bio: "A 34-year-old first-time mother. She is capturing countless 'firsts' (videos, photos, thoughts) and wants to preserve them for her child's future.",
            quote:
              "I want my daughter to know what I was thinking and feeling when she was little. I need a place to send these memories *to* her, for her 18th birthday.",
            goals: [
              "Create a secure, private digital 'box' for her daughter.",
              "Combine photos, videos, and written letters in one place.",
              "Ensure the memories are 'locked' and safe until a specific date far in the future.",
            ],
            frustrations: [
              "Google Photos is a mess of screenshots and random pictures.",
              "Physical baby books are old-fashioned and can't hold videos.",
              "Worries about privacy and data being lost or corrupted over 18 years.",
            ],
          },
          {
            name: "Alex",
            title: "The Reflector",
            image: eu2,
            bio: "A 25-year-old recent graduate, navigating a new career and city. He actively journals and thinks about personal growth.",
            quote:
              "Who will I be in 10 years? I want to send my future self advice, my current fears, and my biggest hopes, and not be able to see it until then.",
            goals: [
              "Document his current life state for his future self to reflect on.",
              "A simple, non-distracting writing and media-uploading experience.",
              "The 'magic' of a true time-lock, so he can't 'cheat' and open it early.",
            ],
            frustrations: [
              "Journal apps are for daily review, not long-term sealing.",
              "Social media is too public and performative.",
              "Feels his significant memories just 'evaporate' over time.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Research & Discovery",
          duration: "4 weeks",
          keyActivities:
            "User interviews (12 individuals, including new parents and avid journalers), competitive analysis (vs. cloud storage, journaling apps, and physical gift box companies).",
          keyInsights:
            "The core emotional value is not just *storing* memories, but the *act of sealing* and the *anticipation* of opening. The 'lock' was consistently the most desired feature.",
        },
        {
          phase: "Ideation & Strategy",
          duration: "3 weeks",
          keyActivities:
            "Storyboarding the 'capsule creation' journey, defining capsule 'states' (Draft, Sealed, Unlocking, Opened), feature prioritization (MVP: 3-step creation, time-lock, simple media upload).",
          outcome:
            "Defined the 3-step 'Foundation, Fill, Lock & Key' flow. Decided to postpone collaborative capsules (e.g., family-filled) to focus on the core personal experience.",
        },
        {
          phase: "UX Design",
          duration: "5 weeks",
          keyActivities:
            "Detailed wireframing of all app states, designing the information architecture, creating the 3-step creation prototype.",
          outcome:
            "A high-fidelity wireframe prototype that clearly guided users through the emotionally significant process of creating and sealing a capsule.",
        },
        {
          phase: "UI Design",
          duration: "4 weeks",
          keyActivities:
            "Developing a design system that felt premium, timeless, and secure. Chose a dark-mode-first, high-contrast palette with gold accents to convey value and elegance.",
          outcome:
            "A comprehensive style guide and component library in Figma that gives the app a feeling of importance and permanence, distinct from typical social or utility apps.",
        },
        {
          phase: "Prototyping & Testing",
          duration: "3 weeks",
          keyActivities:
            "Building interactive prototypes in Figma, conducting 6 moderated usability tests, with a focus on the 'sealing' step.",
          keyInsights:
            "Users felt 'anxious' and 'excited' at the final 'Seal This Capsule' step. The warning text ('Once sealed, it cannot be opened...') was critical. We added a final confirmation modal to increase user confidence in this irreversible action.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-lora)" }}>Lora</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-lora)" }}>
                An elegant, well-balanced serif used for headings and titles to
                bring a touch of classic sophistication and editorial quality.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-inter)" }}>Inter</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-inter)" }}>
                A highly legible and versatile sans-serif optimized for user
                interfaces, ensuring clarity for body text, labels, and all
                functional UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#D4A373",
            name: "Warm Gold",
            use: "All primary CTAs, active states, and key highlights.",
          },
          secondary: {
            hex: "#3A4F6A",
            name: "Midnight Blue",
            use: "Secondary buttons, sub-headings, and structural elements.",
          },
          accent: {
            hex: "#F0EFEA",
            name: "Parchment",
            use: "Main text color for high contrast against the dark background.",
          },
          neutrals: [
            {
              hex: "#1D2D44",
              name: "Deep Charcoal",
              use: "Main app and modal backgrounds, creating a focused, premium feel.",
            },
            {
              hex: "#2B3A52",
              name: "Dark Slate",
              use: "Card backgrounds and text input fields.",
            },
            {
              hex: "#8D99AE",
              name: "Stone Gray",
              use: "Placeholder text, inactive icons, and descriptive copy.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "Echo is a mobile app that allows users to create, seal, and send digital time capsules to their future selves or loved ones. By combining letters, photos, and audio recordings into a 'locked' capsule that can only be opened on a specific future date, Echo turns scattered memories into a meaningful, future-bound gift.",
        type: "app",
        keyFeatures: [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11],
      },
      impact: {
        impactMetrics: [
          {
            metric: "Capsule Sealing Rate",
            value: "75%",
            note: "Percentage of new users who successfully sealed their first capsule within one week.",
          },
          {
            metric: "User Retention (90-day)",
            value: "60%",
            note: "Users who sealed a capsule were highly likely to return to create another.",
          },
          {
            metric: "App Store Rating",
            value: "4.9 Stars",
            note: "Based on 1,500+ reviews, praising the 'emotional' and 'meaningful' experience.",
          },
          {
            metric: "Draft-to-Seal Ratio",
            value: "85%",
            note: "Of all capsules started (drafted), 85% were successfully sealed, indicating low friction in the creation flow.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "Designing the 'sealing' moment was a major UX challenge. It needed to feel final and significant, not like a destructive or scary action. The UI/UX of this 'ceremony' was critical to the product's value.",
          "Balancing security with user error. We had to design robust, secure account recovery flows, knowing a user might be trying to access a capsule 10 or 20 years later.",
        ],
        whatIdDoDifferently:
          "I would focus more on the 'recipient' experience from the start. The current app is heavily focused on the *creator*. I would spend more time designing the flow for the person who *receives* and *opens* the capsule for the first time, as that is half of the emotional journey.",
        keyTakeaways:
          "This project showed that UI can facilitate deep emotional experiences. The 'lock' was a *feature*, but it was also the core *value*. By creating digital scarcity (time), we created something far more valuable than just another cloud storage app.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
    {
      id: 6,
      title: "ZenFit App Landing Page",
      type: "web",
      subtitle: "Elevate Your Fitness with ZenFit & AI Zen",
      prototype:
        "https://www.figma.com/proto/NiBfh8ALWIUyJ165iCNp78/Portfolio-Projects?node-id=225-537&p=f&t=w9SuAhVazrGtYpgx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=225%3A537",
      demo: "/media/videos/livesix.mp4",
      hero: bg6,
      meta: {
        role: "UI/UX Designer, Web Designer",
        timeline: "6 weeks",
        tools: "Figma, Adobe Illustrator",
        outcome:
          "Achieved a 25% conversion rate (visitor to app download) post-launch.",
      },
      problem: {
        problemStatement:
          "Generic, one-size-fits-all fitness apps flood the market, leading to high user drop-off. Users feel overwhelmed by content libraries, get 'app fatigue,' and struggle to connect their workouts with their nutrition. They lack a single, intelligent source of truth that adapts to their *real-time* progress and busy lives.",
        userQuotes: [
          '"I\'ve downloaded 5 fitness apps. I either get bored with the static plans, or the AI is just a gimmick that suggests the same 3 workouts."',
          "\"My workout app and my nutrition app don't talk to each other. I have no idea if I'm eating the right things for my training goals.\"",
          '"I want a personal trainer, but I can\'t afford one. I need an app that *actually* feels personal, like it knows me and my goals."',
        ],
        userPersonas: [
          {
            name: "Mark",
            title: "The Data-Driven Athlete",
            image: zu1,
            bio: "A 31-year-old software engineer who is serious about his fitness (running, weightlifting). He tracks all his metrics and wants a tool that uses his data effectively.",
            quote:
              "I have all this data from my watch and my workouts, but no app seems to use it properly. I want adaptive, *intelligent* recommendations, not a static PDF.",
            goals: [
              "Optimize his training based on real-time data.",
              "Connect his nutrition directly to his performance goals.",
              "Use one single app for both workouts and meal planning.",
            ],
            frustrations: [
              "Generic plans that don't account for his progress.",
              "Apps with poor data integration (e.g., Apple Watch).",
              "Paying for 'pro' features that are just content libraries.",
            ],
          },
          {
            name: "Chloe",
            title: "The Goal-Oriented Professional",
            image: zu2,
            bio: "A 38-year-old marketing director. She has 45 minutes, 4 days a week, to work out. She needs maximum efficiency and no guesswork.",
            quote:
              "I don't have time to build my own workouts or figure out what to eat. I need an app to just *tell* me what to do, based on my goals and my limited time.",
            goals: [
              "Get a clear, effective plan that fits her schedule.",
              "Reduce the 'mental load' of planning her health.",
              "Have a clear path to her goal without feeling overwhelmed.",
            ],
            frustrations: [
              "Feeling lost in apps with too many choices.",
              "Workout plans that are too long or require equipment she doesn't have.",
              "Losing motivation when she doesn't see results.",
            ],
          },
        ],
      },
      process: [
        {
          phase: "Strategy & Content",
          duration: "1 week",
          keyActivities:
            "Competitive analysis of fitness landing pages (e.g., Whoop, Future), defining the value proposition (AI-first personalization), information architecture, and core copywriting.",
          keyInsights:
            "The 'AI' angle is the key differentiator. The page must *show*, not just *tell*, how the AI works ('AI Zen'). We must build trust immediately with a premium, technical feel.",
        },
        {
          phase: "UX & Wireframing",
          duration: "2 weeks",
          keyActivities:
            "Creating a high-level content flow (Hero -> Social Proof -> Features -> How it Works -> Testimonials -> CTA), low-fidelity wireframes, and A/B testing hero copy.",
          outcome:
            "A clear, single-scroll user journey designed to answer user questions sequentially (What is it? -> How does it help me? -> Why should I trust it?), building desire before the final call-to-action.",
        },
        {
          phase: "UI & Visual Design",
          duration: "2 weeks",
          keyActivities:
            "Developing the high-tech, dark-mode visual identity seen in the final design. Sourcing dynamic imagery, creating the app mockups, designing custom icons, and establishing the type hierarchy.",
          outcome:
            "A high-fidelity, responsive design in Figma that feels premium, futuristic, and trustworthy, matching the 'AI' brand.",
        },
        {
          phase: "Launch & Testing",
          duration: "1 week",
          keyActivities:
            "Handoff to development, responsive testing on multiple devices, A/B testing the primary CTA color and placement, and optimizing image assets for fast load times.",
          keyInsights:
            "Initial load times were slow due to large hero images. We compressed assets and lazy-loaded sections below the fold, improving the performance score significantly.",
        },
      ],
      designSystem: {
        typography: {
          headings: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-josefinslab)" }}>
                Josefin Slab
              </span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-josefinslab)" }}>
                An elegant, well-balanced serif used for headings and titles to
                bring a touch of classic sophistication and editorial quality.
              </span>
            ),
          },
          body: {
            fontFamily: (
              <span style={{ fontFamily: "var(--font-hind)" }}>Hind</span>
            ),
            description: (
              <span style={{ fontFamily: "var(--font-hind)" }}>
                A highly legible and versatile sans-serif optimized for user
                interfaces, ensuring clarity for body text, labels, and all
                functional UI elements.
              </span>
            ),
          },
        },
        colorPalette: {
          primary: {
            hex: "#34B3FF",
            name: "Electric Blue",
            use: "Primary CTAs, links, and key feature highlights.",
          },
          secondary: {
            hex: "#FFFFFF",
            name: "White",
            use: "Headings and key copy for maximum contrast.",
          },
          accent: {
            hex: "#B0C4DE",
            name: "Light Steel Blue",
            use: "Sub-headings, body text, and less-critical information.",
          },
          neutrals: [
            {
              hex: "#0A0F1A",
              name: "Deep Navy",
              use: "Main page background and dark sections.",
            },
            {
              hex: "#111827",
              name: "Midnight Blue",
              use: "Slightly lighter background shade for card/section differentiation.",
            },
            {
              hex: "#1E293B",
              name: "Dark Slate",
              use: "Card backgrounds, footers, and dividers.",
            },
          ],
        },
      },
      solution: {
        solutionStatement:
          "A responsive, high-impact landing page designed to convert visitors into app users. The page clearly communicates ZenFit's unique value proposition—a truly personal AI trainer. It builds trust through a premium aesthetic, social proof, and clear explanations of the core features (Training, Nutrition, AI Zen), guiding users to a single, clear call-to-action.",
        type: "web",
        keyFeatures: [z1, z2, z3, z4, z5, z6, z7, z8, z9],
      },
      impact: {
        impactMetrics: [
          {
            metric: "Conversion Rate (Download)",
            value: "25%",
            note: "Percentage of unique visitors who clicked 'Get Started' and downloaded the app.",
          },
          {
            metric: "Bounce Rate",
            value: "30%",
            note: "A 40% reduction from the previous, less-focused landing page.",
          },
          {
            metric: "Average Time on Page",
            value: "2:15",
            note: "Indicates high user engagement with the feature and testimonial sections.",
          },
          {
            metric: "Mobile Conversion Rate",
            value: "22%",
            note: "Strong performance on mobile, which was the primary traffic source.",
          },
        ],
      },
      learningsAndReflections: {
        challenges: [
          "Communicating the 'AI' concept without resorting to vague jargon. We had to use concrete examples like 'adaptive plans' and 'real-time feedback' to make it tangible.",
          "Balancing a high-tech, 'pro' feel with a welcoming, 'mindful' tone (from the name 'Zen'). The dark-mode and blue palette helped, but the copy was crucial.",
        ],
        whatIdDoDifferently:
          "I would A/B test a video hero section instead of the static image. Seeing the app and the 'AI Zen' assistant in action might build even more trust and improve conversions further.",
        keyTakeaways:
          "For a product in a crowded market, the landing page must *immediately* establish its unique selling proposition. For ZenFit, that was the 'AI Zen' assistant. Every section of the page was designed to reinforce that one core idea.",
      },
      hasDemo: true,
      hasPrototype: true,
    },
  ];

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
    <section id="case-studies" className="py-20 bg-[#EAF8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2235] mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-[#0B2235]/70 max-w-2xl mx-auto">
            Deep dives into design challenges and the strategic solutions that
            delivered measurable business impact.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Hero Section */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={study.hero}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2235]/60 to-transparent flex items-center">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-white max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {study.title}
                      </h3>
                      <p className="text-xl md:text-2xl opacity-90">
                        {study.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Meta Information */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 pb-8 border-b border-[#D7EEF9]">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#8FCFF0]" />
                    <div>
                      <div className="text-sm text-[#0B2235]/60">Role</div>
                      <div className="font-medium text-[#0B2235]">
                        {study.meta.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#8FCFF0]" />
                    <div>
                      <div className="text-sm text-[#0B2235]/60">Timeline</div>
                      <div className="font-medium text-[#0B2235]">
                        {study.meta.timeline}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-[#8FCFF0]" />
                    <div>
                      <div className="text-sm text-[#0B2235]/60">Tools</div>
                      <div className="font-medium text-[#0B2235]">
                        {study.meta.tools}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 lg:col-span-2">
                    {" "}
                    {/* Highlight */}
                    <Target className="w-5 h-5 text-[#8FCFF0]" />{" "}
                    {/* Highlight */}
                    <div>
                      <div className="text-sm text-[#0B2235]/60">Outcome</div>
                      <div className="font-medium text-[#0B2235]">
                        {study.meta.outcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-[#0B2235] mb-4">
                    The Challenge
                  </h4>
                  {typeof study.problem === "object" &&
                  study.problem !== null &&
                  "problemStatement" in study.problem ? (
                    <p className="text-lg text-[#0B2235]/80 leading-relaxed mb-6">
                      {
                        (study.problem as { problemStatement: string })
                          .problemStatement
                      }
                    </p>
                  ) : (
                    <p className="text-lg text-[#0B2235]/80 leading-relaxed mb-6">
                      {study.problem}
                    </p>
                  )}
                  {typeof study.problem === "object" &&
                    study.problem !== null &&
                    "userQuotes" in study.problem && (
                      <div className="mb-6">
                        <h5 className="text-xl font-semibold text-[#0B2235] mb-3">
                          User Quotes
                        </h5>
                        {(
                          study.problem as { userQuotes: string[] }
                        ).userQuotes.map((quote, idx) => (
                          <blockquote
                            key={idx}
                            className="text-[#0B2235]/70 italic border-l-4 border-[#8FCFF0] pl-4 mb-4"
                          >
                            {quote}
                          </blockquote>
                        ))}
                      </div>
                    )}
                  {typeof study.problem === "object" &&
                    study.problem !== null &&
                    "userPersonas" in study.problem && (
                      <div>
                        <h3 className="text-3xl font-bold text-[#0B2235] mb-6">
                          User Personas
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          {(
                            study.problem as { userPersonas: any[] }
                          ).userPersonas.map((persona, idx) => (
                            <div
                              key={idx}
                              className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden"
                            >
                              {/* --- Persona Header --- */}
                              <div className="p-6 flex items-center gap-5 bg-gray-50/50">
                                <div className="relative h-20 w-20 flex-shrink-0">
                                  <Image
                                    src={persona.image}
                                    alt={persona.name}
                                    fill
                                    className="object-cover rounded-full"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-2xl font-bold text-[#2B3843]">
                                    {persona.name}
                                  </h4>
                                  <p className="text-lg font-medium text-[#2B3843]">
                                    {persona.title}
                                  </p>
                                </div>
                              </div>

                              <div className="p-6">
                                {/* --- Persona Quote --- */}
                                <blockquote className="mb-6 text-base italic text-[#2B3843]/90 border-l-4 border-[#8FCFF0] pl-4 py-2 bg-[#8FCFF0]/10">
                                  "{persona.quote}"
                                </blockquote>

                                {/* --- Bio --- */}
                                <p className="text-base text-[#2B3843]/80 mb-6">
                                  {persona.bio}
                                </p>

                                {/* --- Goals & Frustrations Grid --- */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  {/* --- Goals --- */}
                                  <div>
                                    <h5 className="font-semibold text-[#0B2235] mb-3 flex items-center gap-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#4CB6AC]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      Goals
                                    </h5>
                                    <ul className="space-y-2">
                                      {persona.goals.map(
                                        (goal: string, gIdx: number) => (
                                          <li
                                            key={gIdx}
                                            className="flex items-start gap-2 text-sm text-[#2B3843]/70"
                                          >
                                            <span>-</span> {goal}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>

                                  {/* --- Frustrations --- */}
                                  <div>
                                    <h5 className="font-semibold text-[#0B2235] mb-3 flex items-center gap-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#EF6351]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      Frustrations
                                    </h5>
                                    <ul className="space-y-2">
                                      {persona.frustrations.map(
                                        (frust: string, fIdx: number) => (
                                          <li
                                            key={fIdx}
                                            className="flex items-start gap-2 text-sm text-[#2B3843]/70"
                                          >
                                            <span>-</span> {frust}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Process Timeline */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-[#0B2235] mb-6">
                    Design Process
                  </h4>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-[#D7EEF9]"></div>
                    <div className="space-y-8">
                      {study.process.map((phase, idx) => (
                        <div
                          key={idx}
                          className="relative flex items-start gap-6"
                        >
                          <div className="relative z-10 w-8 h-8 bg-[#8FCFF0] rounded-full flex items-center justify-center">
                            <span className="text-[#0B2235] font-bold text-sm">
                              {idx + 1}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-4 mb-2">
                              <h5 className="text-lg font-semibold text-[#0B2235]">
                                {phase.phase}
                              </h5>
                              <span className="text-sm text-[#0B2235]/60 bg-[#EAF8FF] px-3 py-1 rounded-full">
                                {phase.duration}
                              </span>
                            </div>
                            <p className="text-[#0B2235]/70 mb-2">
                              {"keyActivities" in phase && phase.keyActivities}
                            </p>
                            {"keyInsights" in phase && phase.keyInsights && (
                              <p className="text-[#0B2235]/70">
                                <strong>Key Insights:</strong>{" "}
                                {phase.keyInsights}
                              </p>
                            )}
                            {"outcome" in phase && phase.outcome && (
                              <p className="text-[#0B2235]/70">
                                <strong>Outcome:</strong> {phase.outcome}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Design System (new section) */}
                {study.designSystem && (
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-[#0B2235] mb-6">
                      Design System
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                      {/* --- Typography Section --- */}
                      <div className="lg:col-span-2">
                        <h4 className="text-2xl font-semibold text-[#0B2235] mb-4">
                          Typography
                        </h4>
                        <div className="space-y-6">
                          {/* Headings Card */}
                          <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-6">
                            <p className="font-[font] text-4xl font-bold text-[#1E1E1E] mb-2">
                              Aa
                            </p>
                            <h5 className="font-semibold text-[#0B2235]">
                              {
                                study.designSystem.typography.headings
                                  .fontFamily
                              }
                            </h5>
                            <p className="text-sm text-[#0B2235]/70">
                              {
                                study.designSystem.typography.headings
                                  .description
                              }
                            </p>
                          </div>
                          {/* Body Card */}
                          <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-6">
                            <p className="font-[font] text-4xl text-[#1E1E1E] mb-2">
                              Aa
                            </p>
                            <h5 className="font-semibold text-[#0B2235]">
                              {study.designSystem.typography.body.fontFamily}
                            </h5>
                            <p className="text-sm text-[#0B2235]/70">
                              {study.designSystem.typography.body.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* --- Color Palette Section --- */}
                      <div className="lg:col-span-3">
                        <h4 className="text-2xl font-semibold text-[#0B2235] mb-4">
                          Color Palette
                        </h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-8">
                          {[
                            study.designSystem.colorPalette.primary,
                            study.designSystem.colorPalette.secondary,
                            study.designSystem.colorPalette.accent,
                            ...study.designSystem.colorPalette.neutrals,
                          ].map((color) => (
                            <div
                              key={color.name}
                              className="flex flex-col items-center"
                            >
                              <div className="w-24 h-24 flex items-center justify-center">
                                {/* SVG Splash Shape */}
                                <svg
                                  viewBox="0 0 200 200"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-full h-full"
                                  fill={color.hex}
                                >
                                  <path
                                    d="M48.8,-63.9C63.2,-54.2,74.7,-40.4,79.5,-24.9C84.3,-9.4,82.4,7.8,75.4,22.1C68.4,36.4,56.3,47.8,43,56.7C29.7,65.6,14.8,71.9,-1,73.1C-16.9,74.2,-33.7,70.1,-48.5,61.1C-63.3,52.1,-76,38.2,-80.7,22.2C-85.4,6.2,-82.1,-11.9,-73.8,-26.7C-65.6,-41.5,-52.4,-53,-38.7,-61.7C-25,-70.4,-12.5,-76.3,1.6,-78.3C15.7,-80.3,31.4,-78.3,48.8,-63.9Z"
                                    transform="translate(100 100)"
                                  />
                                </svg>
                              </div>
                              <div className="text-center mt-2">
                                <p className="font-semibold text-[#0B2235]">
                                  {color.name}
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">
                                  {color.hex}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Solution */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-[#0B2235] mb-4">
                    The Solution
                  </h4>
                  {typeof study.solution === "object" &&
                  study.solution !== null &&
                  "solutionStatement" in study.solution ? (
                    <p className="text-lg text-[#0B2235]/80 leading-relaxed mb-16">
                      {study.solution.solutionStatement}
                    </p>
                  ) : (
                    <p className="text-lg text-[#0B2235]/80 leading-relaxed mb-6">
                      {study.solution}
                    </p>
                  )}

                  {/* --- Conditional Rendering for Features --- */}
                  {typeof study.solution === "object" &&
                  study.solution !== null &&
                  "keyFeatures" in study.solution ? (
                    <>
                      {/* APP LAYOUT */}
                      {study.solution.type === "app" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                          {study.solution.keyFeatures.map(
                            (imageObject, idx) => (
                              <div
                                key={idx}
                                className="relative aspect-[9/19] rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={imageObject}
                                  alt={`App screen ${idx + 1}`}
                                  fill
                                  className="object-contain bg-white"
                                />
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* WEB LAYOUT */}
                      {study.solution.type === "web" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {study.solution.keyFeatures.map(
                            (imageObject, idx) => (
                              <div
                                key={idx}
                                className="overflow-hidden bg-white"
                              >
                                <Image
                                  src={imageObject}
                                  alt={`Key feature ${idx + 1}`}
                                  className="w-full h-auto"
                                />
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    // Fallback for old data without keyFeatures
                    <div className="bg-gradient-to-br from-[#BEE6FF] to-[#8FCFF0] rounded-2xl p-8 flex items-center justify-center aspect-video">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-[#0B2235] mx-auto mb-4" />
                        <p className="text-[#0B2235] font-medium">
                          Interactive Prototype Video
                        </p>
                        <p className="text-[#0B2235]/70 text-sm mt-2">
                          Click to play Figma prototype recording
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-[#0B2235] mb-4">
                    Impact & Results
                  </h4>
                  {typeof study.impact === "object" &&
                  study.impact !== null &&
                  "impactMetrics" in study.impact ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {(
                        study.impact as {
                          impactMetrics: {
                            metric: string;
                            value: string;
                            note: string;
                          }[];
                        }
                      ).impactMetrics.map((metric, idx) => (
                        <div key={idx} className="bg-[#EAF8FF] rounded-xl p-4">
                          <span className="font-medium text-[#0B2235]">
                            {metric.metric}:
                          </span>{" "}
                          <strong className="text-[#0B2235]">
                            {metric.value}
                          </strong>
                          <p className="text-sm text-[#0B2235]/70">
                            {metric.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-lg text-[#0B2235]/80 leading-relaxed">
                      {study.impact}
                    </p>
                  )}
                </div>

                {/* Learnings & Reflections (new section) */}
                {study.learningsAndReflections && (
                  <div className="mb-12">
                    <h4 className="text-2xl font-bold text-[#0B2235] mb-4">
                      Learnings & Reflections
                    </h4>
                    <div className="mb-6">
                      <h5 className="text-xl font-semibold text-[#0B2235] mb-2">
                        Challenges
                      </h5>
                      <ul className="space-y-2">
                        {study.learningsAndReflections.challenges.map(
                          (challenge, idx) => (
                            <li key={idx} className="text-[#0B2235]/80">
                              {challenge}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h5 className="text-xl font-semibold text-[#0B2235] mb-2">
                        What I'd Do Differently
                      </h5>
                      <p className="text-[#0B2235]/80">
                        {study.learningsAndReflections.whatIdDoDifferently}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-[#0B2235] mb-2">
                        Key Takeaways
                      </h5>
                      <p className="text-[#0B2235]/80">
                        {study.learningsAndReflections.keyTakeaways}
                      </p>
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#D7EEF9]">
                  {/* Demo Button */}
                  {study.hasPrototype && (
                    <button
                      onClick={() => window.open(study.prototype, "_blank")}
                      className="px-4 py-2 border-2 border-[#8FCFF0] text-[#0B2235] font-semibold rounded-lg hover:bg-[#8FCFF0] transition-colors duration-200 flex items-center"
                      aria-label={`View ${study.title} case study`}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Prototype
                    </button>
                  )}
                  {study.hasDemo && (
                    <button
                      onClick={() => openModal(study.demo, study.type)}
                      className="px-6 py-3 bg-[#8FCFF0] text-[#0B2235] font-semibold rounded-xl hover:bg-[#BEE6FF] transition-colors duration-200 flex items-center justify-center"
                      aria-label={`View ${study.title} demo video`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      View Demo
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

export default CaseStudies;

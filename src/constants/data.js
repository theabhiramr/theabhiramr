import React, { useRef } from "react";
import { epiqsolutionsJpeg } from "../assets";
import { evbuddyJpeg } from "../assets";
import { bmsJpeg } from "../assets";

const workExperience = [
  {
    title: "Cloud Developer Co-op",
    subtitle: "Bristol Myers Squibb",
    dates: "Upcoming",
    location: "Princeton, NJ",
    image: bmsJpeg,
    content: [
      "Collaborate with cross-functional teams to design, develop, and deploy cloud-based solutions that enhance pharmaceutical research and development processes",
      "Provide support in migrating legacy applications to cloud platforms, ensuring scalability, security, and compliance with industry standards",
      "Engage in the usage of cutting-edge cloud technologies and services to optimize data management and analytics for improved decision-making",
    ],
    link: "https://www.bms.com",
  },
  {
    title: "Software Development Engineering Co-op",
    subtitle: "Epiq Solutions",
    dates: "Apr 2024 - Sep 2024",
    location: "Mount Airy, MD",
    image: epiqsolutionsJpeg,
    content: [
      "Programmed JSON interfaces for software defined radios (SDRs) in Python, adhering to development and operations (DevOps) practices to improve code performance by 15%",
      "Built unified VITA49 packet parser libraries for 32-bit SDR architectures using Test Driven Development (TDD), improving production testing efficiency by 20%",
      "Designed Linux user interfaces (UIs) in Python for test stations using PyQt and Matplotlib modules to streamline production testing procedures",
      "Tested 200+ digital, tuner and reference modules in SDRs for appropriate phase noise and power distribution, hitting quality assurance (QA) targets",
    ],
    link: "https://epiqsolutions.com",
  },
  {
    title: "Software Development Intern",
    image: evbuddyJpeg,
    subtitle: "EV Buddy, Inc.",
    location: "Edison, NJ",
    dates: "Jun 2023 - Sep 2023",
    content: [
      "Researched EV charging protocols (CCS, CHAdeMO) and developed technical specifications for vehicle-to-vehicle charging solution, informing prototype architecture",
      "Programmed sniffer data parsing software in C++ and Python to analyze EV charging protocols, improving success of prototype by 45%",
      "Used OpenEVSE Arduino embedded system to build a prototype architecture that interfaced with RS485 and CAN protocols used in EVs",
      "Developed user experience (UX) flow for a social app over 50+ Figma design iterations to electric vehicle (EV) owners",
    ],
    link: "https://evbuddy.net",
  },
];

const projects = [
  {
    title: "Janata",
    subtitle: "Chinmaya Mission",
    dates: "Aug 2025 - Present",
    content: [
      "Architect and lead development of cross-platform social media app to foster better community for Chinmaya Mission's 1000+ member youth wing, Chinmaya Yuva Kendra (CHYK)",
      "Develop front-end components utilizing React Native and Nativewind to implement geolocation and social media feed services, contributing to 45% of Minimum Viable Product (MVP)",
      "Integrate features such as community forum, location services, and event management to enhance user engagement and foster a sense of community among members",
      "Implement Agile methodologies to follow an industry standard development practices on a 2 week sprint timelines and execute on 25+ user stories to ensure fast and flexible development",
    ],
    technologies: [
      "NodeJS",
      "React",
      "Expo",
      "Nativewind",
      "Cloudflare Workers",
      "Hono",
      "Posthog",
    ],
    additional:
      "This app is in a private beta! Launches at Chinmaya Mahasamadhi Camp on July 1st, 2026",
    link: "https://chinmayajanata.org",
    githubLink: "https://github.com/Project-Janatha/Project-Janatha",
  },
  {
    title: "Portfolio Website",
    dates: "Apr 2025 - Present",
    content: [
      "Develop and maintain an interactive and user-friendly portfolio website using React and Tailwind CSS to become a more experienced developer.",
      "Create a responsive design, dark mode, and smooth animations using React hooks and external libraries to showcase the extent of what can be created with modern web development tools.",
      "Deploy using Firebase and Cloudflare for safety and security and to adhere to industry standard development practices, providing insight into the app development lifecycle.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Firebase",
      "Cloudflare Pages",
    ],
    githubLink: "https://github.com/theabhiramr/theabhiramr",
    link: "https://theabhiramr.com/",
  },
  {
    title: "NYT Games Birthday Puzzle",
    dates: "Jan 2024",
    content: [
      "Developed a web-based clone of New York Times Games, using NextJS, Tailwind CSS and Vercel for an interactive birthday gift for my dad",
      "Implemented responsive design principles to ensure optimal user experience across various devices and screen sizes",
    ],
    technologies: ["JavaScript", "React", "NextJS", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/theabhiramr/appa-55-surprise",
    link: "https://appa-55-surprise.vercel.app/",
    additional:
      "This was a fun little app I vibecoded in a day for my dad's 55th birthday. Play the games to see what we got him 👀",
  },
  {
    title: "CrashMath",
    subtitle: "College of Computing & Informatics, Drexel University",
    dates: "Jan 2023 - Jun 2023",
    content: [
      "Led the creation of a gamified calculus learning platform powered by generative AI trained on 200+ exam questions to provide feedback and track performance",
      "Wrote over 1000 lines of code in HTML, CSS and JavaScript to provide a smooth and approachable user interface to enable stronger learning, contributing to 40% of the MVP",
      "Coordinated efforts with a multifunctional team to execute on over 25 user stories across a 5-sprint timeline to deliver on 500+ action items for the MVP",
    ],
    technologies: ["JavaScript", "CSS", "HTML", "Firebase", "OpenAI API"],
    additional:
      "Unfortunately, due to Firebase restrictions, the app is no longer functional.",
    link: "https://crashmath-16dc6.web.app/",
  },
];

export { workExperience, projects };

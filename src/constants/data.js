import { epiqsolutionsJpeg, evbuddyJpeg, bmsJpeg, drexelJpeg, upfPng, hhsPng } from "../assets";

const workExperience = [
  {
    title: "Cloud Developer Co-op",
    org: "Bristol Myers Squibb",
    dates: "Upcoming",
    location: "Princeton, NJ",
    image: bmsJpeg,
    content: [
      "Transform 100+ BMS training materials into clearer, interactive content using Claude Code via custom MCP servers.", 
      "Streamline AWS Fargate and ALB deployments across 75+ Cloud team projects with agentic workflows and GitHub Actions, cutting development time by 4 months. ",
      "Build improved notification pipelines with Amazon SQS and SES to alert employees of critical CloudWatch events across 500+ AWS accounts on the BMS Multiverse Platform.",
      "Author whitepaper on implementing AWS MCP and AgentCore within BMS, outlining adoption strategies for more efficient agentic workflow orchestration"

    ],
    links: [
      { label: "Organization", href: "https://www.bms.com" }
    ],
  },
  {
    title: "Software Development Engineering Co-op",
    org: "Epiq Solutions",
    dates: "Apr 2024 - Sep 2024",
    location: "Mount Airy, MD",
    image: epiqsolutionsJpeg,
    content: [
      "Programmed JSON interfaces for software defined radios (SDRs) in Python, adhering to development and operations (DevOps) practices to improve code performance by 15%",
      "Built unified VITA49 packet parser libraries for 32-bit SDR architectures using Test Driven Development (TDD), improving production testing efficiency by 20%",
      "Designed Linux user interfaces (UIs) in Python for test stations using PyQt and Matplotlib modules to streamline production testing procedures",
      "Tested 200+ digital, tuner and reference modules in SDRs for appropriate phase noise and power distribution, hitting quality assurance (QA) targets",
    ],
    links: [
      { label: "Organization", href: "https://epiqsolutions.com" }
    ],
  },
  {
    title: "Software Development Intern",
    org: "EV Buddy, Inc.",
    image: evbuddyJpeg,
    location: "Edison, NJ",
    dates: "Jun 2023 - Sep 2023",
    content: [
      "Researched EV charging protocols (CCS, CHAdeMO) and developed technical specifications for vehicle-to-vehicle charging solution, informing prototype architecture",
      "Programmed sniffer data parsing software in C++ and Python to analyze EV charging protocols, improving success of prototype by 45%",
      "Used OpenEVSE Arduino embedded system to build a prototype architecture that interfaced with RS485 and CAN protocols used in EVs",
      "Developed user experience (UX) flow for a social app over 50+ Figma design iterations to electric vehicle (EV) owners",
    ],
    links: [
      { label: "Organization", href: "https://evbuddy.net" }
    ],
  },
];

const projects = [
  {
    title: "Janata",
    org: "Chinmaya Mission",
    dates: "Aug 2025 - Present",
    content: [
      "Architect and lead development of cross-platform social media app to foster better community for Chinmaya Mission's 1000+ member youth wing, Chinmaya Yuva Kendra (CHYK)",
      "Develop front-end components utilizing React Native and Nativewind to implement geolocation and social media feed services, contributing to 45% of Minimum Viable Product (MVP)",
      "Integrate features such as community forum, location services, and event management to enhance user engagement and foster a sense of community among members",
      "Implement Agile methodologies to follow an industry standard development practices on a 2 week sprint timelines and execute on 25+ user stories to ensure fast and flexible development",
    ],
    technologies: [
      "Node.js",
      "React",
      "Expo",
      "Nativewind",
      "Cloudflare Workers",
      "Hono",
      "Posthog",
    ],
    additional:
      "This app is in a private beta! Launches at Chinmaya Mahasamadhi Camp on July 1st, 2026",
    links: [
      { label: "Visit", href: "https://chinmayajanata.org" },
      { label: "GitHub", href: "https://github.com/Project-Janata/Janata" }
    ],
  },
  {
    title: "Portfolio Website",
    dates: "Apr 2025 - Present",
    content: "An interactive and user-friendly portfolio website inspired by websites like Linear, GitHub and Vercel. Built with React, Vite and Tailwind CSS, and deployed on Firebase.",
    technologies: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Cloudflare Pages",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/theabhiramr/theabhiramr" },
      { label: "Visit", href: "https://theabhiramr.com/" }
    ],
  },
  {
    title: "CrashMath",
    org: "College of Computing & Informatics, Drexel University",
    dates: "Jan 2023 - Jun 2023",
    content: "A gamified calculus learning platform that leverages intelligent tutoring chatbot to provide personalized problem-solving assistance.",
    technologies: ["JavaScript", "CSS", "HTML", "Firebase", "OpenAI API"],
    additional:
      "Unfortunately, the backend of this app is no longer functional.",
    links: [
      { label: "Visit", href: "https://crashmath-16dc6.web.app/" }
    ],
  },
];

const education = [
  {
    title: "B.S. in Computer Science",
    org: "Drexel University",
    location: "Philadelphia, PA",
    dates: "Sep 2022 - Present",
    image: drexelJpeg,
    meta: [
      { label: "Minor", value: "Business Analytics" },
      {
        label: "Honors",
        value: "Dean's List (2022), Pennoni Honors Program, A.J. Drexel Scholarship",
      },
      { label: "Activities", value: "Drexel Society of Artificial Intelligence" },
    ],
    links: [{ label: "Organization", href: "https://drexel.edu/cs" }],
  },
  {
    title: "International Exchange — Engineering",
    org: "Universitat Pompeu Fabra",
    location: "Barcelona, Spain",
    dates: "Jan 2025 - Mar 2025",
    image: upfPng,
    meta: [{ label: "Activities", value: "Erasmus Student Network" }],
    links: [{ label: "Organization", href: "https://www.upf.edu/web/incoming" }],
  },
  {
    title: "High School Diploma",
    org: "Hightstown High School",
    location: "Hightstown, NJ",
    dates: "Sep 2018 - Jun 2022",
    image: hhsPng,
    meta: [
      {
        label: "Honors",
        value: "Math Honors Society, Honor Roll, AP Capstone Diploma",
      },
      { label: "Activities", value: "Robotics, SAATHH, DECA, Track & Field" },
    ],
    links: [{ label: "Organization", href: "https://www.ewrsd.org/o/hhs" }],
  },
];

export { workExperience, projects, education };

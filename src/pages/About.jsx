import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { Timeline, TechBadge } from "../components";
import {
  drexelJpeg,
  upfPng,
  hhsPng,
  profileJpeg,
  aboutPic1Jpg,
  aboutPic2Jpg,
  aboutPic3Jpg,
} from "../assets";

const paragraphs = [
  "I am an Honors CS at Drexel with a focus on AI/ML and Systems. I recently studied at Universitat Pompeu Fabra in Barcelona — an experience that reshaped how I view global software development.",
  "I have worked on bridging the gap between LLMs and practical education and building community-driven social platforms in my projects. I believe that if there is a better way to do something, I can build it.",
  "From developing V2V charging systems at EV Buddy to streamlining SDR production at Epiq Solutions, I thrive in high-stakes engineering environments. I hope to continue challenging myself during my upcoming co-op at Bristol Myers Squibb this summer.",
];

const timelineItems = [
  {
    title: "Drexel University",
    subtitle: "B.S. in Computer Science",
    location: "Philadelphia, PA",
    dates: "Sep 2022 - Present",
    minor: "Business Analytics",
    honorsAwards:
      "Dean's List (2022), Pennoni Honors Program, A.J. Drexel Scholarship",
    activities: "Drexel Society of Artificial Intelligence",
    image: drexelJpeg,
    link: "https://drexel.edu/cs",
  },
  {
    title: "Universitat Pompeu Fabra",
    subtitle: "International Exchange - Engineering",
    location: "Barcelona, Spain",
    dates: "Jan 2025 - Mar 2025",
    activities: "Erasmus Student Network",
    image: upfPng,
    link: "https://www.upf.edu/web/incoming",
  },
  {
    title: "Hightstown High School",
    location: "Hightstown, NJ",
    dates: "Sep 2018 - Jun 2022",
    honorsAwards: "Math Honors Society, Honor Roll, AP Capstone Diploma",
    activities: "Robotics, SAATHH, DECA, Track & Field",
    image: hhsPng,
    link: "https://www.ewrsd.org/o/hhs",
  },
];

const programmingLanguages = [
  "Python",
  "C",
  "C++",
  "Java",
  "C#",
  "Makefile",
  "JavaScript",
  "TypeScript",
  "Assembly",
  "R",
];
const toolsFrameworks = [
  "VS Code",
  "IntelliJ",
  "PyCharm",
  "Git",
  "React",
  "NextJS",
  "Tailwind CSS",
  "Expo",
  "Firebase",
  "LangChain",
  "OpenAI API",
  "PyTorch",
  "Jupyter",
];

const skills = [
  "Full Stack Development",
  "Embedded Systems",
  "Cloud Computing",
  "DevOps",
  "Agile",
  "Kanban",
];

const photos = [
  {
    src: aboutPic1Jpg,
    alt: "Montjuic, Barcelona",
    caption: "View from Montjuic in Barcelona, Spain",
  },
  {
    src: aboutPic2Jpg,
    alt: "Amber Fort, India",
    caption: "View of Amber Fort in Jaipur, Rajasthan, India",
  },
  {
    src: aboutPic3Jpg,
    alt: "A dog",
    caption: "My dog, Aria (She want a snuggle)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const [skipped, setSkipped] = useState(false);
  const bioText =
    "I want to use my skills to build impactful, scalable technologies.";
  const { displayText, isTyping } = useTypewriter(bioText, 40, 500);

  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const finalText = skipped ? bioText : displayText;

  useEffect(() => {
    document.title = "Abhi Ramachandran";
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8 lg:py-24">
      <section className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-20">
        {/* LEFT COLUMN: Sticky Identity (Desktop Only) */}
        <div className="flex flex-col space-y-6 lg:sticky lg:top-24 lg:col-span-5 lg:h-fit">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="relative inline-block">
              <a
                href="https://github.com/theabhiramr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={profileJpeg}
                  alt="Abhi"
                  className="border-border h-24 w-24 rounded-2xl border object-cover grayscale-[0.5] transition-all duration-500 hover:grayscale-0 lg:h-36 lg:w-36"
                />
              </a>
              <div className="bg-accent border-background absolute -right-1 -bottom-1 h-5 w-5 rounded-full border-[3px] lg:h-6 lg:w-6 lg:border-4" />
            </div>

            <h1 className="text-content mt-6 text-3xl leading-tight font-bold tracking-tighter lg:mt-8 lg:text-5xl">
              Abhi <br className="block lg:block" />
              <span className="text-muted/40"> Ramachandran</span>
            </h1>
          </motion.div>

          {/* Typewriter Hook */}
          <div
            className="min-h-[80px] cursor-pointer lg:min-h-[100px]"
            onClick={() => setSkipped(true)}
          >
            <p className="text-content max-w-sm font-mono text-base leading-relaxed lg:text-lg">
              <span className="text-accent font-bold">{">"} </span>
              {finalText}
              <span
                className={`typing-cursor ${isTyping && !skipped ? "typing-pause" : "typing-blink"}`}
              />
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-wrap gap-2 pt-2 lg:gap-4"
          >
            {skills.map((tag) => (
              <span
                key={tag}
                className="text-muted/50 border-border rounded-full border px-3 py-1 text-[9px] font-bold tracking-widest uppercase lg:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Narrative & Details */}
        <div className="space-y-12 lg:col-span-7 lg:space-y-16" ref={aboutRef}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className="space-y-4 lg:space-y-6"
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-muted font-inter text-[15px] leading-relaxed lg:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Education Mini-Timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h4 className="text-accent mb-6 text-[10px] font-bold tracking-[0.2em] uppercase lg:mb-8 lg:text-[11px]">
              Education
            </h4>
            <div className="border-border/30 ml-1 border-l pl-4 lg:ml-0 lg:pl-6">
              <Timeline items={timelineItems} />
            </div>
          </motion.div>

          {/* Technical Grid */}
          <div className="grid grid-cols-1 gap-10 pt-4 sm:grid-cols-2 lg:pt-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h4 className="text-muted/60 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase lg:text-[11px]">
                Languages
              </h4>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {programmingLanguages.map((lang) => (
                  <TechBadge key={lang} techString={lang} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h4 className="text-muted/60 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase lg:text-[11px]">
                Tools & Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {toolsFrameworks.map((tool) => (
                  <TechBadge key={tool} techString={tool} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="mt-16 lg:mt-24">
        {/* Add photo gallery content here if needed */}
      </section>
    </div>
  );
}

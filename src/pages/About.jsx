import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { Timeline, TechBadge } from "../components";
import { profilePng } from "../assets";
import { education } from "../constants/data";
import { fadeUp, stagger, inViewOptions } from "../utils/animations";

const programmingLanguages = [
  "Python", "C", "C++", "Java", "C#", "Makefile",
  "JavaScript", "TypeScript", "Markdown", "Assembly", "R", "Dockerfile",
];

const toolsFrameworks = [
  "VS Code", "IntelliJ", "PyCharm", "Git", "Node.js", "Expo", "AWS", "Firebase", "Claude Code", "MCP",
  "PyTorch", "Jupyter", "Docker", "Databricks"
];

const skills = [
  "Full Stack Development", "Embedded Systems", "Cloud Computing",
  "DevOps", "Agile", "Kanban", "Agentic AI"
];

function ScrollReveal({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={shouldReduceMotion ? {} : fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [skipped, setSkipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const bioText = "I want to use my skills to build impactful, scalable technologies.";
  const { displayText, isTyping } = useTypewriter(bioText, 40, 500);
  const finalText = skipped ? bioText : displayText;

  // Each block gets its own ref so it fades in at its own scroll position
  const bioRef = useRef(null);
  const eduRef = useRef(null);
  const langRef = useRef(null);
  const toolsRef = useRef(null);
  const skillsRef = useRef(null);

  const bioInView = useInView(bioRef, inViewOptions);
  const eduInView = useInView(eduRef, inViewOptions);
  const langInView = useInView(langRef, inViewOptions);
  const toolsInView = useInView(toolsRef, inViewOptions);
  const skillsInView = useInView(skillsRef, inViewOptions);

  useEffect(() => {
    document.title = "Abhi Ramachandran";
  }, []);

  const motionProps = (inView) =>
    shouldReduceMotion
      ? {}
      : { variants: fadeUp, initial: "hidden", animate: inView ? "visible" : "hidden" };

  return (
    <div className="py-12">
      <section className="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-20">
        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-6 lg:sticky lg:top-24 lg:col-span-5 lg:h-fit">
          <motion.div
            variants={shouldReduceMotion ? {} : fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative inline-block">
              <a href="https://github.com/theabhiramr" target="_blank" rel="noopener noreferrer">
                <img
                  src={profilePng}
                  alt="Abhi Ramachandran"
                  className="border-border h-24 w-24 rounded-2xl border object-cover grayscale-[0.5] transition-all duration-500 hover:grayscale-0 lg:h-36 lg:w-36"
                />
              </a>
              <div className="bg-accent border-background absolute -right-1 -bottom-1 h-5 w-5 rounded-full border-[3px] lg:h-6 lg:w-6 lg:border-4" />
            </div>

            <h1 className="text-content mt-6 text-3xl leading-tight font-bold tracking-tighter lg:mt-8 lg:text-5xl">
              Abhi <br />
              <span className="text-muted/40"> Ramachandran</span>
            </h1>
          </motion.div>

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

          {/* Skills — stagger each badge individually */}
          <motion.div
            ref={skillsRef}
            variants={shouldReduceMotion ? {} : stagger}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2 pt-2 lg:gap-4"
          >
            {skills.map((tag) => (
              <motion.span
                key={tag}
                variants={shouldReduceMotion ? {} : fadeUp}
                className="text-muted/50 border-border rounded-full border px-3 py-1 text-[9px] font-bold tracking-widest uppercase lg:text-[10px]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-12 lg:col-span-7 lg:space-y-16">
          {/* Bio paragraphs — stagger each paragraph */}
          <motion.div
            ref={bioRef}
            variants={shouldReduceMotion ? {} : stagger}
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            className="space-y-4 lg:space-y-6"
          >
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-muted font-inter text-[15px] leading-relaxed lg:text-lg"
            >
              I am an Honors CS student at{" "}
              <a href="https://drexel.edu/cs" rel="noopener noreferrer" target="_blank" className="text-muted hover:text-accent">
                Drexel University
              </a>{" "}
              doing concentrations in AI/ML and Computer Systems. I recently studied at{" "}
              <a href="https://www.upf.edu/en/" rel="noopener noreferrer" target="_blank" className="text-muted hover:text-accent">
                Universitat Pompeu Fabra
              </a>{" "}
              in Barcelona — an experience that reshaped how I view global software development.
            </motion.p>
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-muted font-inter text-[15px] leading-relaxed lg:text-lg"
            >
              I have worked on bridging the gap between LLMs and practical education and
              building community-driven social platforms in my projects. I believe that if
              there is a better way to do something, I can build it.
            </motion.p>
            <motion.p
              variants={shouldReduceMotion ? {} : fadeUp}
              className="text-muted font-inter text-[15px] leading-relaxed lg:text-lg"
            >
              From developing V2V charging systems at{" "}
              <a href="https://evbuddy.net" rel="noopener noreferrer" target="_blank" className="text-muted hover:text-accent">
                EV Buddy
              </a>{" "}
              to streamlining SDR production at{" "}
              <a href="https://epiqsolutions.com" rel="noopener noreferrer" target="_blank" className="text-muted hover:text-accent">
                Epiq Solutions
              </a>
              , I thrive in high-stakes engineering environments. I hope to continue
              challenging myself during my upcoming co-op at{" "}
              <a href="https://www.bms.com" rel="noopener noreferrer" target="_blank" className="text-muted hover:text-accent">
                Bristol Myers Squibb
              </a>{" "}
              this summer.
            </motion.p>
          </motion.div>

          {/* Education */}
          <div>
            <motion.h4
              ref={eduRef}
              {...motionProps(eduInView)}
              className="text-accent mb-6 text-[10px] font-bold tracking-[0.2em] uppercase lg:mb-8 lg:text-[11px]"
            >
              Education
            </motion.h4>
            <div className="border-border/30 ml-1 border-l pl-4 lg:ml-0 lg:pl-6">
              <Timeline items={education} />
            </div>
          </div>

          {/* Languages + Tools */}
          <div className="grid grid-cols-1 gap-10 pt-4 sm:grid-cols-2 lg:pt-8">
            <motion.div ref={langRef} {...motionProps(langInView)}>
              <h4 className="text-muted/60 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase lg:text-[11px]">
                Languages
              </h4>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {programmingLanguages.map((lang) => (
                  <TechBadge key={lang} techString={lang} />
                ))}
              </div>
            </motion.div>

            <motion.div ref={toolsRef} {...motionProps(toolsInView)}>
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
    </div>
  );
}

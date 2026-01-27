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
  "Honors CS at Drexel with a focus on AI/ML and Systems. Recently studied at Universitat Pompeu Fabra in Barcelona—an experience that reshaped how I view global engineering.",
  "I specialize in bridging the gap between LLMs and practical education (DragonLearn) and building community-driven social platforms (Project Janata).",
  "From developing V2V charging systems at EV Buddy to streamlining SDR production at Epiq Solutions, I thrive in high-stakes engineering environments.",
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

const Home = () => {
  const [skipped, setSkipped] = useState(false);
  const bioText =
    "I build intelligent systems, scalable architectures, and accessible digital experiences.";
  const { displayText, isTyping, isComplete } = useTypewriter(bioText, 40, 500);

  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const finalText = skipped ? bioText : displayText;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-24">
      {/* SECTION 1: THE INTEGRATED HERO */}
      <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Left Column: Identity & Hook (40%) */}
        <div className="sticky top-24 space-y-8 lg:col-span-5">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="relative inline-block">
              <img
                src={profileJpeg}
                alt="Abhi"
                className="border-border h-24 w-24 rounded-2xl border object-cover grayscale-[0.5] transition-all duration-500 hover:grayscale-0"
              />
              <div className="bg-accent border-background absolute -right-2 -bottom-2 h-6 w-6 rounded-full border-4" />
            </div>

            <h1 className="text-content mt-8 text-4xl leading-none font-bold tracking-tighter lg:text-5xl">
              Abhi <br /> <span className="text-muted/40">Ramachandran</span>
            </h1>
          </motion.div>

          <div
            className="min-h-[100px] cursor-pointer"
            onClick={() => setSkipped(true)}
          >
            <p className="text-content max-w-sm font-mono text-lg leading-relaxed">
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
            className="flex gap-4 pt-4"
          >
            {/* Tech pill summary */}
            {["AI/ML", "Systems", "React"].map((tag) => (
              <span
                key={tag}
                className="text-muted/50 border-border rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Narrative & Details (60%) */}
        <div className="space-y-16 lg:col-span-7" ref={aboutRef}>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className="space-y-6"
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-muted font-inter text-base leading-relaxed lg:text-lg"
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
            <h4 className="text-accent mb-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              Education Path
            </h4>
            <div className="border-border/50 border-l pl-4">
              <Timeline items={timelineItems} />
            </div>
          </motion.div>

          {/* Technical Grid */}
          <div className="grid grid-cols-1 gap-10 pt-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h4 className="text-muted/60 mb-4 text-[11px] font-bold tracking-[0.2em] uppercase">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.slice(0, 6).map((lang) => (
                  <TechBadge key={lang} techString={lang} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h4 className="text-muted/60 mb-4 text-[11px] font-bold tracking-[0.2em] uppercase">
                Environment
              </h4>
              <div className="flex flex-wrap gap-2">
                {toolsFrameworks.slice(0, 6).map((tool) => (
                  <TechBadge key={tool} techString={tool} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE VISUAL STORY (Photos) */}
      <section className="border-border/30 mt-32 border-t pt-16">
        <h4 className="text-muted/40 mb-12 text-center text-[11px] font-bold tracking-[0.2em] uppercase">
          Global Perspectives
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group bg-surface border-border relative overflow-hidden rounded-2xl border"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="from-background/90 absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-content font-mono text-xs">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

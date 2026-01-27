import React, { useEffect, useRef } from "react";
import { Timeline, TechBadge } from "../components";
import {
  drexelJpeg,
  hhsPng,
  upfPng,
  aboutPic1Jpg,
  aboutPic2Jpg,
  aboutPic3Jpg,
} from "../assets";
import { motion, useInView } from "framer-motion";

const paragraphs = [
  "I am an undergraduate Honors student studying Computer Science at Drexel University, with concentrations in both AI/ML and Computer Systems, along with a minor in Business Analytics. I love math and I love programming (as you could probably tell with this website lol), so I want to study as much of it as possible. Another cool thing is that I did a study abroad program at Universitat Pompeu Fabra in Barcelona, and I was actually able to take CS courses while I was there. It was really interesting to see how CS concepts were explained in the European education system. To be honest it was surprisingly similar to how things work here in the States. Also Barcelona is probably the coolest European city I've ever seen.",
  "Some of my project experiences include DragonLearn, which uses LangChain to basically convert any syllabus into detailed course modules with recommended videos and animations (it's actually insane what you can do with LLMs nowadays) and Project Janata, a social app built with React Native and Expo to connect youth members of my religious organization, Chinmaya Mission. I love how you can just come up with an idea, and, with enough dedication, you can just make it happen.",
  "One of the reasons I go to Drexel is their Co-op program, so I was able to gain a lot of experience throughout my years here. My first internship was at EV Buddy, a startup aiming to develop a Vehicle to Vehicle charging solution, which would be the first of it's kind. That made me very interested in embedded systems, so my next job was a Software Development Engineering Co-op at Epiq Solutions, a company that specializes in developing software defined radios (SDR) systems. What was interesting was that I started this internship in the middle of an acquisition. I have probably learned the most from my summer there.",
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
  "Object-Oriented Programming",
  "Data Structures & Algorithms",
  "Machine Learning",
  "Full Stack Development",
  "Test Driven Development",
  "Embedded Systems",
  "Version Control",
  "Agile",
  "Kanban",
];

const funFacts = [
  "Even though I lived in the New Jersey for most of my life, I was actually born in India and moved here when I was 4 months old.",
  "I love to travel. Like a lot. I have probably been to over 20 countries so far.",
  "I also enjoy staying physically active, whether it be exercising at the gym, playing basketball, or going on a hike.",
  "I am an avid NFL and College Football watcher. My teams are the Eagles and Rutgers. Yes, I enjoy only pain and suffering.",
  "Since like 5 years ago, I have become interested in comics, especially those from DC in recent years.",
  "Sichuan food is goated.",
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

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const photoStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // adjust for smoother stagger
    },
  },
};

const photoFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  useEffect(() => {
    document.title = "Abhi Ramachandran | About";
    window.scrollTo(0, 0);
  }, []);

  // Create refs for each animated section
  const headerRef = useRef(null);
  const paragraphsRef = useRef(null);
  const timelineRef = useRef(null);
  const languagesRef = useRef(null);
  const toolsRef = useRef(null);
  const skillsRef = useRef(null);
  const funFactsRef = useRef(null);
  const photosRef = useRef(null);

  // Use useInView for each section
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const paragraphsInView = useInView(paragraphsRef, {
    once: true,
    margin: "-100px",
  });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  const languagesInView = useInView(languagesRef, {
    once: true,
    margin: "-100px",
  });
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const funFactsInView = useInView(funFactsRef, {
    once: true,
    margin: "-100px",
  });
  const photosInView = useInView(photosRef, { once: true, margin: "-100px" });

  const funFactsAnimationTime = funFacts.length * 0.1;

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-outfit text-content mb-8 text-2xl font-bold md:text-3xl">
          About Me
        </h1>

        <motion.div
          ref={paragraphsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={paragraphsInView ? "visible" : "hidden"}
        >
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-geist-mono text-content mb-6 text-base md:text-xl"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          ref={timelineRef}
          variants={staggerContainer}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="mt-8"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-base font-bold uppercase md:text-xl"
          >
            Education
          </motion.p>
          <div className="pl-6 md:pl-14">
            <Timeline
              items={timelineItems}
              visibleCount={timelineItems.length}
            />
          </div>
        </motion.div>

        <motion.div
          ref={languagesRef}
          variants={staggerContainer}
          initial="hidden"
          animate={languagesInView ? "visible" : "hidden"}
          className="mt-8 mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-xl font-bold uppercase"
          >
            Programming Languages
          </motion.p>
          <motion.div
            className="mt-8 ml-8 flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {programmingLanguages.map((lang, i) => (
              <motion.div
                key={lang}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TechBadge techString={lang} textSize="md" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          ref={toolsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          className="mt-8 mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-xl font-bold uppercase"
          >
            Tools & Frameworks
          </motion.p>
          <motion.div
            className="mt-8 ml-8 flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {toolsFrameworks.map((lang, i) => (
              <motion.div
                key={lang}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TechBadge techString={lang} textSize="md" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={skillsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className="mt-8 mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-xl font-bold uppercase"
          >
            Skills
          </motion.p>
          <motion.div
            className="mt-8 ml-8 flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="font-geist-mono bg-primary text-md inline-flex items-center rounded-full px-3 py-1 font-normal text-gray-200 uppercase shadow-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={funFactsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={funFactsInView ? "visible" : "hidden"}
          className="mt-8"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-xl font-bold uppercase"
          >
            Fun Facts
          </motion.p>
          <motion.ul
            variants={staggerContainer}
            className="font-geist-mono text-muted big-bullets mb-8 list-disc pl-8 text-lg md:text-xl"
          >
            {funFacts.map((fact, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-2"
              >
                <span>{fact}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={photosRef}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: funFactsAnimationTime,
                staggerChildren: 0.18,
              },
            },
          }}
          initial="hidden"
          animate={photosInView ? "visible" : "hidden"}
          className="mt-8"
        >
          <motion.p
            variants={photoFade}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-geist-mono text-primary mb-4 text-xl font-bold uppercase"
          >
            Photos
          </motion.p>
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                variants={photoFade}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="mb-2 rounded-lg object-cover shadow-md md:h-100 md:w-100"
                />
                <p className="font-geist-mono text-muted text-left text-sm">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

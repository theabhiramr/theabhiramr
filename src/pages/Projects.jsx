import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Timeline } from "../components";
import { projects } from "../constants/data";
import { fadeUp, inViewOptions } from "../utils/animations";

const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, inViewOptions);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Abhi Ramachandran | Projects";
  }, []);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          ref={headingRef}
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="mb-6 text-3xl font-bold"
        >
          Projects
        </motion.h1>
        <Timeline items={projects} />
      </div>
    </div>
  );
};

export default Projects;

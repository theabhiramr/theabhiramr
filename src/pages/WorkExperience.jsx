import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Timeline } from "../components";
import { workExperience } from "../constants/data";
import { fadeUp, inViewOptions } from "../utils/animations";

const WorkExperience = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, inViewOptions);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Abhi Ramachandran | Work Experience";
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl">
        <motion.h1
          ref={headingRef}
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="mb-6 text-3xl font-bold"
        >
          Work Experience
        </motion.h1>
        <Timeline items={workExperience} />
      </div>
    </div>
  );
};

export default WorkExperience;

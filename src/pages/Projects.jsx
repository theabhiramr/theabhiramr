import React, { useEffect } from "react";
import { Timeline } from "../components";
import { motion } from "framer-motion";
import { projects } from "../constants/data";

const Projects = () => {
  useEffect(() => {
    document.title = "Abhi Ramachandran | Projects";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-6 py-6 lg:px-32">
      <h1 className="font-outfit mb-8 text-3xl font-bold">Projects</h1>
      <div className="py-4 pl-6 md:pl-8">
        <Timeline items={projects} />
      </div>
    </div>
  );
};

export default Projects;

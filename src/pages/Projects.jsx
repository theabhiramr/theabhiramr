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
    <div className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-outfit mb-10 text-3xl font-bold">Projects</h1>
        <div className="py-4">
          <Timeline items={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

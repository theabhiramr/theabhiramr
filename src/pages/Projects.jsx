import React, { useEffect } from "react";
import { Timeline } from "../components";
import { motion } from "framer-motion";
import { projects } from "../constants/data";

const Projects = () => {
  useEffect(() => {
    document.title = "Abhi Ramachandran | Projects";
  }, []);
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-outfit mb-6 text-3xl font-bold">Projects</h1>
        <Timeline items={projects} />
      </div>
    </div>
  );
};

export default Projects;

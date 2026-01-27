import React, { useEffect } from "react";
import { Timeline } from "../components";
import { epiqsolutionsJpeg, evbuddyJpeg } from "../assets";
import { workExperience } from "../constants/data";

const WorkExperience = () => {
  useEffect(() => {
    document.title = "Abhi Ramachandran | Work Experience";
  }, []);
  return (
    <div className="py-12">
      <div className="max-w-7xl">
        <h1 className="font-outfit mb-6 text-3xl font-bold">Work Experience</h1>
        <Timeline items={workExperience} />
      </div>
    </div>
  );
};

export default WorkExperience;

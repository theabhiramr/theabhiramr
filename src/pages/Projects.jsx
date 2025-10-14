import React, { useEffect } from "react";
import { Timeline } from "../components";
import { motion } from "framer-motion";

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="p-4">
            <h1 className="font-outfit text-2xl font-bold mb-4">Projects</h1>
            <Timeline 
                items={[
                    {
                        title: "NFL Prediction Model",
                        subtitle: "Drexel AI",
                        dates: "Oct 2025 - Present",
                        additional: "I just started this project so stay tuned! (Hopefully it will predict that my birds get the two-peat🦅🦅🦅)",
                    },
                    {
                        title: "Project Janata", 
                        subtitle: "Chinmaya Mission West",
                        dates: "Aug 2024 - Present", 
                        content: [
                            "Spearhead development of a location based social media platform for Chinmaya Yuva Kendra (CHYK), the youth wing of Chinmaya Mission with 1000+ members, using React Native and Tamagui to allow users to discover, connect with, and serve their community.",
                            "Develop a persistent and secure frontend application utilizing Expo, which can integrate with an ExpressJS backend, contributing to 45% of the Minimum Viable Product (MVP)",
                            "Integrate features such as community forum, location services, and event management to enhance user engagement and foster a sense of community among members",
                            "Implement Agile methodologies to follow an industry standard development practices on a 2 week sprint timelines and execute on 25+ user stories to ensure fast and flexible development"
                        ], 
                        
                        link: "https://github.com/theabhiramr/ai-chatbot"
                    },
                    {
                        title: "Portfolio Website", 
                        dates: "Apr 2024 - Present",
                        content: [
                            "Develop and maintain an interactive and user-friendly portfolio website using React and Tailwind CSS to become a more experienced developer.",
                            "Create a responsive design, dark mode, and smooth animations using React hooks and external libraries to showcase the extent of what can be created with modern web development tools.",
                            "Deploy using Firebase and Cloudflare for safety and security and to adhere to industry standard development practices, providing insight into the app development lifecycle."
                        ],
                        technologies: [
                            "JavaScript",
                            "React",
                            "Tailwind CSS", 
                            "Vite",
                            "Firebase", 
                            "Cloudflare"
                        ],
                        githubLink: "https://github.com/theabhiramr/theabhiramr",
                        link: void(0)
                    },
                ]} 
            />
        </div>
    );
}

export default Projects;
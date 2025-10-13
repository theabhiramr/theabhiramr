import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="p-4">
            <h1 className="font-outfit text-2xl font-bold mb-4">Projects</h1>
            <Timeline 
                items={[
                    {title: "Portfolio Website", 
                    dates: "2023 - Present",
                    content: [
                            "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
                            "Features a responsive design, dark mode, and smooth animations.",
                            "Deployed using Vercel for fast and reliable hosting."
                        ],
                        technologies: [
                                    "JavaScript",
                                    "React",
                                    "Tailwind CSS", 
                                    "Vite",
                                    "Firebase"
                                ],
                                githubLink: "https://github.com/theabhiramr/theabhiramr"
                    , 
                    link: "https://theabhiramr.com"},
                    {title: "AI Chatbot", dates: "2022 - 2023", content: [
                            "Developed an AI-powered chatbot using Python and TensorFlow to assist users with common inquiries."
                        ], 
                        link: "https://github.com/theabhiramr/ai-chatbot"}
                ]} 
            />
        </div>
    );
}

export default Projects;
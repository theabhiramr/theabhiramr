import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

const Projects = () => {
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
                    {
                        title: "AI Chatbot", 
                        dates: "2022 - 2023", 
                        content: [
                            "Developed an AI-powered chatbot using Python and TensorFlow to assist users with common inquiries."
                        ], 
                        link: "https://github.com/theabhiramr/ai-chatbot"
                    }
                ]} 
            />
        </div>
    );
}

export default Projects;
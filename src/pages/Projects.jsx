import React, { useEffect } from "react";
import { Timeline } from "../components";
import { motion } from "framer-motion";

const Projects = () => {
    useEffect(() => {
        document.title = "Abhi Ramachandran | Projects";
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="px-6 lg:px-32 py-6">
            <h1 className="font-outfit text-3xl font-bold mb-8">Projects</h1>
            <div className="md:pl-8 pl-6 py-4">
            <Timeline 
                items={[
                    {
                        title: "NFL Prediction Model",
                        subtitle: "Drexel AI",
                        dates: "Oct 2025 - Present",
                        content: [
                            "Utilize BeautifulSoup and Pandas to scrape and process approximate value data for over 10,000 NFL players from Pro Football Reference, creating a comprehensive dataset for model training",
                            "Engineer machine learning models in Jupyter using Scikit-learn and XGBoost to predict player performance and approximate value for the upcoming NFL season, achieving a prediction accuracy of over 75%",
                            "Develop serverless React application using NextJS and Tailwind CSS to provide users with an interactive platform to explore player and team predictions and statistics"
                        ],
                        technologies: [
                            'Jupyter',
                            'Python',
                            'Pandas',
                            'PyTorch',
                            'Scikit-learn',
                            'NextJS',
                            'Tailwind CSS',
                            'BeautifulSoup',
                            'XGBoost',
                        ],
                        additional: "<a href='https://youtu.be/4ujS__0MQMo?si=xgxWBxWfjvmJGPjO'>Go Birds 🦅🦅🦅</a>",
                        githubLink: "https://github.com/drexelai/nfl-prediction-team-1"
                    },
                    {
                        title: "Project Janata", 
                        subtitle: "Chinmaya Mission West",
                        dates: "Aug 2025 - Present", 
                        content: [
                            "Architect and lead development of cross-platform social media app to foster better community for Chinmaya Mission's 1000+ member youth wing, Chinmaya Yuva Kendra (CHYK)",
                            "Develop front-end components utilizing React Native and Nativewind to implement geolocation and social media feed services, contributing to 45% of Minimum Viable Product (MVP)",
                            "Integrate features such as community forum, location services, and event management to enhance user engagement and foster a sense of community among members",
                            "Implement Agile methodologies to follow an industry standard development practices on a 2 week sprint timelines and execute on 25+ user stories to ensure fast and flexible development"
                        ], 
                         technologies: [
                            "JavaScript",
                            "React",
                            "ExpressJS",
                            "Expo",
                            "NodeJS",
                            "Vercel",
                            "Nativewind",
                        ],
                        additional: "This app is still in development and the backend needs to be hosted, so stay tuned for release this winter!",
                        link: "https://chinmayajanata.org",
                        githubLink: "https://github.com/Project-Janatha/Project-Janatha"
                    },
                    {
                        title: "Portfolio Website", 
                        dates: "Apr 2025 - Present",
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
                        link: "https://theabhiramr.com/"
                    },
                    {
                        title: "Dragon Learn",
                        subtitle: "Drexel AI",
                        dates: "Apr 2025 - Present",
                        content: [
                            "Develop AI-powered learning platform that can convert Drexel syllabi into structured modules with curated content, via LangChain, to assist students with studying",
                            "Program with NextJS (React) and TypeScript to provide application programming interface (API) support for content generation",
                            "Implement Manim library functionality to provide interactive animations and generate videos to explain mathematical concepts"
                        ],
                        technologies: [
                            "TypeScript",
                            "React",
                            "NextJS",
                            "Tailwind CSS",
                            "Vercel",
                            "OpenAI API",
                            "LangChain",
                            "Manim",
                        ],
                        githubLink: "https://github.com/drexelai/dragon-learn",
                        link: "https://theabhiramr.com/"
                    },
                    {
                        title: "CrashMath",
                        subtitle: "College of Computing & Informatics, Drexel University",
                        dates: "Jan 2023 - Jun 2023",
                        content: [
                            "Led the creation of a gamified calculus learning platform powered by generative AI trained on 200+ exam questions to provide feedback and track performance",
                            "Wrote over 1000 lines of code in HTML, CSS and JavaScript to provide a smooth and approachable user interface to enable stronger learning, contributing to 40% of the MVP",
                            "Coordinated efforts with a multifunctional team to execute on over 25 user stories across a 5-sprint timeline to deliver on 500+ action items for the MVP"
                        ],
                        technologies: [
                            "JavaScript",
                            "CSS",
                            "HTML",
                            "Firebase",
                            "OpenAI API"
                        ],
                        additional: "Due to Firebase restrictions, the backend is unfortunately no longer working, however the frontend is functional.",
                        link: "https://crashmath-16dc6.web.app/"
                    },
                ]} 
            />
            </div>
        </div>
    );
}

export default Projects;
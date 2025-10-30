import React, {useEffect} from 'react';
import { Timeline } from '../components';
import { epiqsolutionsJpeg, evbuddyJpeg } from '../assets';

const WorkExperience = () => {
    useEffect(() => {
            document.title = "Abhi Ramachandran | Work Experience";
            window.scrollTo(0, 0);
          }, []);
        return (
            <div className="px-6 lg:px-32 py-6">
                <h1 className="font-outfit text-3xl font-bold mb-8">Work Experience</h1>
                <div className="md:pl-8 pl-6 py-4">
                    <Timeline 
                        items={[
                                    {
                                        title: "Software Development Engineering Co-op",
                                        subtitle: "Epiq Solutions",
                                        dates: "Apr 2024 - Sep 2024",
                                        location: "Mount Airy, MD",
                                        image: epiqsolutionsJpeg,
                                        content: [
                                            "Programmed JSON interfaces for software defined radios (SDRs) in Python, adhering to development and operations (DevOps) practices to improve code performance by 15%",
                                            "Built unified VITA49 packet parser libraries for 32-bit SDR architectures using Test Driven Development (TDD), improving production testing efficiency by 20%",
                                            "Designed Linux user interfaces (UIs) in Python for test stations using PyQt and Matplotlib modules to streamline production testing procedures",
                                            "Tested 200+ digital, tuner and reference modules in SDRs for appropriate phase noise and power distribution, hitting quality assurance (QA) targets"
                                        ],
                                        link: "https://epiqsolutions.com",
                                    },
                                    {
                                        title: "Software Development Intern",
                                        image: evbuddyJpeg,
                                        subtitle: "EV Buddy, Inc.",
                                        location: "Edison, NJ",
                                        dates: "Jun 2023 - Sep 2023",
                                        content: [
                                            "Researched EV charging protocols (CCS, CHAdeMO) and developed technical specifications for vehicle-to-vehicle charging solution, informing prototype architecture",
                                            "Programmed sniffer data parsing software in C++ and Python to analyze EV charging protocols, improving success of prototype by 45%",
                                            "Used OpenEVSE Arduino embedded system to build a prototype architecture that interfaced with RS485 and CAN protocols used in EVs",
                                            "Developed user experience (UX) flow for a social app over 50+ Figma design iterations to electric vehicle (EV) owners"

                                        ],
                                        link: "https://evbuddy.net",
                                    }
                            ]}
                    />
                </div>
            </div>
    );
}

export default WorkExperience;
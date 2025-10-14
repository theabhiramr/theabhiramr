import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode, SiHandshake, SiPerl, SiReact, SiTailwindcss} from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="font-geist-mono w-full py-2 bg-surface text-muted">
            <div className="w-full px-6 py-4">
                {/* Social Icons - Left-aligned on all screen sizes */}
                <div className="flex justify-left space-x-6 mb-6">
                    <a href="https://linkedin.com/in/theabhiramr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary active:text-secondary transition-colors duration-300">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    
                    <a href="https://github.com/theabhiramr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary active:text-secondary transition-colors duration-300">
                        <FaGithub className="w-6 h-6" />
                    </a>

                    <a href="https://leetcode.com/theabhiramr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary active:text-secondary transition-colors duration-300">
                        <SiLeetcode className="w-6 h-6" />
                    </a>
                    
                    <a href="https://app.joinhandshake.com/profiles/theabhiramr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted hover:text-primary active:text-secondary transition-colors duration-300">
                        <SiHandshake className="w-6 h-6" />
                    </a>
                    <a href="mailto:ramachandran.abhiram@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary active:text-secondary transition-colors duration-300">
                        <MdEmail className="w-6 h-6" />
                    </a>
                </div>
                
                {/* Text Content - Stacked and left-aligned on mobile, side-by-side on desktop */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-left space-y-2 md:space-y-0">
                    <p>© 2025 Abhiram Ramachandran. All rights reserved.</p>
                    <p>Built with
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary active:text-secondary transition-colors duration-300 mx-2">
                            <SiReact className="inline w-4 h-4" />
                        </a>+
                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary active:text-secondary transition-colors duration-300 mx-2">
                            <SiTailwindcss className="inline w-4 h-4" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
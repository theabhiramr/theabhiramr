import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiLeetcode,
  SiHandshake,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background w-full border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-8 py-12">
        {/* Top Row: Navigation & Identity */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Social Icons - Clean Monochromatic Look */}
          <div className="flex items-center space-x-5">
            <SocialIcon
              href="https://linkedin.com/in/theabhiramr/"
              icon={<FaLinkedin size={18} />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://github.com/theabhiramr"
              icon={<FaGithub size={18} />}
              label="GitHub"
            />
            <SocialIcon
              href="https://leetcode.com/theabhiramr"
              icon={<SiLeetcode size={18} />}
              label="LeetCode"
            />
            <SocialIcon
              href="https://app.joinhandshake.com/profiles/theabhiramr"
              icon={<SiHandshake size={18} />}
              label="Handshake"
            />
            <SocialIcon
              href="mailto:ramachandran.abhiram@gmail.com"
              icon={<MdEmail size={20} />}
              label="Email"
            />
          </div>

          {/* Terminal-style Path Link */}
          <div className="group">
            <a
              href="/cs164"
              className="text-muted group-hover:text-content flex items-center gap-2 font-mono text-[13px] transition-colors duration-300"
            >
              <span className="text-accent/50 group-hover:text-accent">~</span>
              <span className="opacity-70 transition-opacity group-hover:opacity-100">
                cd /cs164
              </span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Bottom Row: Legal & Tech Stack */}
        <div className="text-muted/60 flex flex-col gap-4 text-xs tracking-tight md:flex-row md:items-center md:justify-between">
          <p className="font-inter">
            © {currentYear} Abhiram Ramachandran.
            <span className="ml-2 hidden opacity-50 sm:inline">
              All rights reserved.
            </span>
          </p>

          <div className="font-inter flex items-center gap-3">
            <span className="text-[10px] tracking-[0.1em] uppercase opacity-50">
              Built with
            </span>
            <div className="text-muted/80 flex items-center gap-4">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#61DAFB]"
                aria-label="React"
              >
                <SiReact size={16} />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#38BDF8]"
                aria-label="Tailwind CSS"
              >
                <SiTailwindcss size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for cleaner social links
const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted/60 hover:text-content transform transition-all duration-300 hover:-translate-y-0.5"
  >
    {icon}
  </a>
);

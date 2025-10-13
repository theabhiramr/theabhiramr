import {
  SiGithub, SiReact, SiTailwindcss, SiJavascript, SiExpress, SiVercel,
  SiTypescript, SiOpenai, SiLangchain, SiNextdotjs, SiExpo
} from 'react-icons/si';
import { IoArrowForwardCircle, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaNodeJs, FaRegFileCode, FaHtml5 } from 'react-icons/fa6';
import { TbBrandVite } from 'react-icons/tb';
import { RiFirebaseFill } from 'react-icons/ri';
import { MdCss } from 'react-icons/md';

const techLinks = {
  'React': { url: 'https://reactjs.org/', icon: <SiReact size={12} className="mr-2" />, label: 'React' },
  'Tailwind CSS': { url: 'https://tailwindcss.com/', icon: <SiTailwindcss size={12} className="mr-2" />, label: 'Tailwind CSS' },
  'JavaScript': { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiJavascript size={12} className="mr-2" />, label: 'JavaScript' },
  'Vite': { url: 'https://vitejs.dev/', icon: <TbBrandVite size={12} className="mr-2" />, label: 'Vite' },
  'Firebase': { url: 'https://firebase.google.com/', icon: <RiFirebaseFill size={12} className="mr-2" />, label: 'Firebase' },
  'ExpressJS': { url: 'https://expressjs.com/', icon: <SiExpress size={12} className="mr-2" />, label: 'ExpressJS' },
  'NodeJS': { url: 'https://nodejs.org/', icon: <FaNodeJs size={12} className="mr-2" />, label: 'NodeJS' },
  'Vercel': { url: 'https://vercel.com/', icon: <SiVercel size={12} className="mr-2" />, label: 'Vercel' },
  'Tamagui': { url: 'https://tamagui.dev/', icon: <FaRegFileCode size={12} className="mr-2" />, label: 'Tamagui' },
  'TypeScript': { url: 'https://www.typescriptlang.org/', icon: <SiTypescript size={12} className="mr-2" />, label: 'TypeScript' },
  'OpenAI API': { url: 'https://openai.com/api/', icon: <SiOpenai size={12} className="mr-2" />, label: 'OpenAI API' },
  'LangChain': { url: 'https://python.langchain.com/en/latest/', icon: <SiLangchain size={12} className="mr-2" />, label: 'LangChain' },
  'Manim': { url: 'https://www.manim.community/', icon: <FaRegFileCode size={12} className="mr-2" />, label: 'Manim' },
  'NextJS': { url: 'https://nextjs.org/', icon: <SiNextdotjs size={12} className="mr-2" />, label: 'NextJS' },
  'CSS': { url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <MdCss size={12} className="mr-2" />, label: 'CSS' },
  'HTML': { url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <FaHtml5 size={12} className="mr-2" />, label: 'HTML' },
  'Expo': { url: 'https://expo.dev/', icon: <SiExpo size={12} className="mr-2" />, label: 'Expo' },
};

const baseClass = "px-3 py-1 bg-primary hover:bg-secondary transition-colors duration-300 text-gray-200 rounded-full text-[10px] uppercase shadow-sm inline-flex items-center font-normal";

export const renderTechItem = (techString) => {
  const tech = techLinks[techString];
  if (tech) {
    return (
      <a
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {tech.icon} {tech.label}
      </a>
    );
  }
  // Fallback for unknown tech
  return (
    <span className={baseClass}>
      <FaRegFileCode size={12} className="mr-1" /> {techString}
    </span>
  );
};
import {
  SiGithub, SiReact, SiTailwindcss, SiJavascript, SiExpress, SiVercel,
  SiTypescript, SiOpenai, SiLangchain, SiNextdotjs, SiExpo,
  SiCloudflare,
  SiPython,
  SiC,
  SiCplusplus,
  SiAssemblyscript,
  SiIntellijidea,
  SiPycharm,
  SiGit,
  SiPytorch,
  SiJupyter, 
} from 'react-icons/si';
import { IoArrowForwardCircle, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaNodeJs, FaRegFileCode, FaHtml5 } from 'react-icons/fa6';
import { TbBrandCSharp, TbBrandVite } from 'react-icons/tb';
import { RiFirebaseFill } from 'react-icons/ri';
import { MdCss } from 'react-icons/md';
import { FaJava, FaRProject } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';



export const renderTechItem = (techString, textSize = "xs", iconSize = 12) => {
  const techLinks = {
    'React': { url: 'https://reactjs.org/', icon: <SiReact size={iconSize} className="mr-2" />, label: 'React' },
    'Tailwind CSS': { url: 'https://tailwindcss.com/', icon: <SiTailwindcss size={iconSize} className="mr-2" />, label: 'Tailwind CSS' },
    'JavaScript': { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <SiJavascript size={iconSize} className="mr-2" />, label: 'JavaScript' },
    'Vite': { url: 'https://vitejs.dev/', icon: <TbBrandVite size={iconSize} className="mr-2" />, label: 'Vite' },
    'Firebase': { url: 'https://firebase.google.com/', icon: <RiFirebaseFill size={iconSize} className="mr-2" />, label: 'Firebase' },
    'ExpressJS': { url: 'https://expressjs.com/', icon: <SiExpress size={iconSize} className="mr-2" />, label: 'ExpressJS' },
    'NodeJS': { url: 'https://nodejs.org/', icon: <FaNodeJs size={iconSize} className="mr-2" />, label: 'NodeJS' },
    'Vercel': { url: 'https://vercel.com/', icon: <SiVercel size={iconSize} className="mr-2" />, label: 'Vercel' },
    'Tamagui': { url: 'https://tamagui.dev/', icon: '', label: 'Tamagui' },
    'TypeScript': { url: 'https://www.typescriptlang.org/', icon: <SiTypescript size={iconSize} className="mr-2" />, label: 'TypeScript' },
    'OpenAI API': { url: 'https://openai.com/api/', icon: <SiOpenai size={iconSize} className="mr-2" />, label: 'OpenAI API' },
    'LangChain': { url: 'https://python.langchain.com/en/latest/', icon: <SiLangchain size={iconSize} className="mr-2" />, label: 'LangChain' },
    'Manim': { url: 'https://www.manim.community/', icon: '', label: 'Manim' },
    'NextJS': { url: 'https://nextjs.org/', icon: <SiNextdotjs size={iconSize} className="mr-2" />, label: 'NextJS' },
    'CSS': { url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: <MdCss size={iconSize} className="mr-2" />, label: 'CSS' },
    'HTML': { url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: <FaHtml5 size={iconSize} className="mr-2" />, label: 'HTML' },
    'Expo': { url: 'https://expo.dev/', icon: <SiExpo size={iconSize} className="mr-2" />, label: 'Expo' },
    'Cloudflare': { url: 'https://www.cloudflare.com/', icon: <SiCloudflare size={iconSize} className="mr-2" />, label: 'Cloudflare' },
    'Python': { url: 'https://www.python.org/', icon: <SiPython size={iconSize} className="mr-2" />, label: 'Python' },
    'C': { url: 'https://c-language.org/', icon: <SiC size={iconSize} className="mr-2" />, label: 'C' },
    'C++': { url: 'https://isocpp.org/', icon: <SiCplusplus size={iconSize} className="mr-2" />, label: 'C++' },
    'Java': { url: 'https://www.java.com/', icon: <FaJava size={iconSize} className="mr-2" />, label: 'Java' },
    'C#': { url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', icon: <TbBrandCSharp size={iconSize} className="mr-2" />, label: 'C#' },
    'Makefile': { url: 'https://www.gnu.org/software/make/', icon: '', label: 'Makefile' },
    'Assembly': { url: 'https://en.wikipedia.org/wiki/Assembly_language', icon: <SiAssemblyscript size={iconSize} className="mr-2" />, label: 'Assembly' },
    'R': { url: 'https://www.r-project.org/', icon: <FaRProject size={iconSize} className="mr-2" />, label: 'R' },
    'VS Code': { url: 'https://code.visualstudio.com/', icon: <VscVscode size={iconSize} className="mr-2" />, label: 'VS Code' },
    'IntelliJ': { url: 'https://www.jetbrains.com/idea/', icon: <SiIntellijidea size={iconSize} className="mr-2" />, label: 'IntelliJ' },
    'PyCharm': { url: 'https://www.jetbrains.com/pycharm/', icon: <SiPycharm size={iconSize} className="mr-2" />, label: 'PyCharm' },
    'Git': { url: 'https://git-scm.com/', icon: <SiGit size={iconSize} className="mr-2" />, label: 'Git' },
    'PyTorch': { url: 'https://pytorch.org/', icon: <SiPytorch size={iconSize} className="mr-2" />, label: 'PyTorch' },
    'Jupyter': { url: 'https://jupyter.org/', icon: <SiJupyter size={iconSize} className="mr-2" />, label: 'Jupyter' },
  };

  const baseClass = `font-geist-mono px-3 py-1 bg-primary hover:bg-secondary transition-colors duration-300 text-gray-200 rounded-full text-${textSize} uppercase shadow-sm inline-flex items-center font-normal`;

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
      {techString}
    </span>
  );
};
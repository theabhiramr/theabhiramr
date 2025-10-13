import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SiGithub, SiReact, SiTailwindcss, SiJavascript, SiExpress, SiVercel, SiTypescript, SiOpenai, SiLangchain, SiNextdotjs, SiExpo } from 'react-icons/si';  // Add technology icons
import { IoArrowForwardCircle, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaNodeJs, FaRegFileCode, FaHtml5 } from 'react-icons/fa6';
import {TbBrandVite} from 'react-icons/tb';
import { RiFirebaseFill } from 'react-icons/ri';
import { MdCss } from 'react-icons/md';

export default function Carousel({ items, startAutoplay = false }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            loopAdditionalSlides: 2,
            duration: 40,  // Added duration for smoother transitions
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 1 }
            }
        },
        [Autoplay({ delay: 7000, stopOnInteraction: false, playOnInit: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);  // Track autoplay state
    
    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    // Start autoplay when startAutoplay is true
    useEffect(() => {
        if (startAutoplay && emblaApi) {
            emblaApi.plugins().autoplay.play();
            setIsPlaying(true);
        }
    }, [startAutoplay, emblaApi]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                scrollNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                scrollPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [scrollPrev, scrollNext]);

    // Pagination dots: one per unique slide
    const dots = Array.from({ length: items.length }, (_, i) => i);

    // Function to render technology icons with names
    const renderTechIcon = (techString) => {
        const baseClass = "px-3 py-1 bg-primary hover:bg-secondary transition-colors duration-300 text-gray-200 rounded-full text-[10px] uppercase shadow-sm inline-flex items-center font-normal";
        switch (techString) {
            case "React":
                return <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiReact size={12} className="mr-2" /> React</a>;
            case "Tailwind CSS":
                return <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiTailwindcss size={12} className="mr-2" /> Tailwind CSS</a>;
            case "JavaScript":
                return <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer' className={baseClass}><SiJavascript size={12} className="mr-2" /> JavaScript</a>;
            case "Vite":
                return <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer' className={baseClass}><TbBrandVite size={12} className="mr-2" /> Vite</a>;
            case "Firebase":
                return <a href='https://firebase.google.com/' target='_blank' rel='noopener noreferrer' className={baseClass}><RiFirebaseFill size={12} className="mr-2" /> Firebase</a>;
            case "ExpressJS":
                return <a href='https://expressjs.com/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiExpress size={12} className="mr-2" /> ExpressJS</a>;
            case "NodeJS":
                return <a href='https://nodejs.org/' target='_blank' rel='noopener noreferrer' className={baseClass}><FaNodeJs size={12} className="mr-2" /> NodeJS</a>;
            case "Vercel":
                return <a href='https://vercel.com/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiVercel size={12} className="mr-2" /> Vercel</a>;
            case "Tamagui":
                return <a href='https://tamagui.dev/' target='_blank' rel='noopener noreferrer' className={baseClass}><FaRegFileCode size={12} className="mr-2" /> Tamagui</a>;
            case "TypeScript":
                return <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiTypescript size={12} className="mr-2" /> TypeScript</a>;
            case "OpenAI API":
                return <a href='https://openai.com/api/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiOpenai size={12} className="mr-2" /> OpenAI API</a>;
            case "LangChain":
                return <a href='https://python.langchain.com/en/latest/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiLangchain size={12} className="mr-2" /> LangChain</a>;
            case "Manim":
                return <a href='https://www.manim.community/' target='_blank' rel='noopener noreferrer' className={baseClass}><FaRegFileCode size={12} className="mr-2" /> Manim</a>;
            case "NextJS":
                return <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiNextdotjs size={12} className="mr-2" /> NextJS</a>;
            case "CSS":
                return <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noopener noreferrer' className={baseClass}><MdCss size={12} className="mr-2" /> CSS</a>;
            case "HTML":
                return <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noopener noreferrer' className={baseClass}><FaHtml5 size={12} className="mr-2" /> HTML</a>;
            case "Expo":
                return <a href='https://expo.dev/' target='_blank' rel='noopener noreferrer' className={baseClass}><SiExpo size={12} className="mr-2" /> Expo</a>;
                default:
                return <span className={baseClass}><FaRegFileCode size={12} className="mr-1" /> {techString}</span>;  // Fallback to text
        }
    };

    return (
        <section className="w-full py-8">
            <div className="px-6 lg:px-32">
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex">
                            {items.map((item, index) => {  // Only use manual image
                                return (
                                    <div 
                                        key={index}
                                        className="flex-[0_0_100%] md:flex-[0_0_80%] min-w-0 mr-8"
                                    >
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="font-geist-mono flex flex-col bg-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                                        >
                                            {item.imageSrc && (
                                                <img 
                                                    src={item.imageSrc} 
                                                    alt={item.title}
                                                    className="w-32 h-32 object-contain object-left mb-2 rounded-lg"  // Changed rounded to rounded-lg for more rounding
                                                />
                                            )}
                                            <h3 className="text-lg font-semibold mb-1 text-primary">{item.title}</h3>
                                            {item.company && <p className="text-md text-secondary mb-2">{item.company}</p>}
                                            <p className="text-xs uppercase text-secondary mb-4 font-normal">{item.dates}</p>
                                            {item.description && <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>}
                                            {item.technologies && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {item.technologies.map((tech, techIndex) => (
                                                        renderTechIcon(tech)
                                                    ))}
                                                </div>
                                            )}
                                            {item.githubLink && (
                                                <div className="mt-auto text-muted text-sm ">
                                                    See it on 
                                                    <a 
                                                        href={item.githubLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-muted hover:text-primary transition-colors duration-300 ml-1 p-1 inline-block"
                                                    >
                                                        <SiGithub className="inline" size={16} />
                                                    </a>
                                                </div>
                                            )}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation and Pagination at Bottom */}
                    <div className="flex items-center justify-end mt-8 gap-4">
                        {/* Pagination Dots */}
                        <div className="flex items-center">
                            {dots.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full mx-1 transition-all hover:w-4 ${
                                        index === selectedIndex ? 'bg-primary w-6' : 'bg-muted'
                                    }`}
                                    onClick={(e) => { e.stopPropagation(); scrollTo(index); }}
                                />
                            ))}
                        </div>
                        
                        {/* Navigation Arrows and Play/Pause */}
                        <div className="flex gap-1">
                            {/* Play/Pause Button */}
                            <button
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    if (isPlaying) {
                                        emblaApi.plugins().autoplay.stop();
                                        setIsPlaying(false);
                                    } else {
                                        emblaApi.plugins().autoplay.play();
                                        setIsPlaying(true);
                                    }
                                }}
                                className="w-6 h-6 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
                            >
                                {isPlaying ? (
                                    <svg width="14" height="14" viewBox="0 0 18 18" className="fill-[var(--color-muted)] hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5" y="3" width="2" height="12"/>
                                        <rect x="11" y="3" width="2" height="12"/>
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 18 18" className="fill-[var(--color-muted)] hover:fill-primary" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="5,3 15,9 5,15"/>
                                    </svg>
                                )}
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
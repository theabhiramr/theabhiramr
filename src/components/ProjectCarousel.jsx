import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { SiGithub, SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si';  // Add technology icons
import { IoArrowForwardCircle, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaRegFileCode } from 'react-icons/fa6';
import {TbBrandVite} from 'react-icons/tb';
import { RiFirebaseFill } from 'react-icons/ri';

export default function ProjectCarousel({ items, startAutoplay = false }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            loopAdditionalSlides: 2,
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 1 }
            }
        },
        [Autoplay({ delay: 7000, stopOnInteraction: false, playOnInit: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);  // Track autoplay state
    const [arrowHovered, setArrowHovered] = useState(false);


    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
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

    // Pagination dots: one per unique slide
    const dots = Array.from({ length: items.length }, (_, i) => i);

    // Function to render technology icons with names
    const renderTechIcon = (techString) => {
        switch (techString) {
            case "React":
                return <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' className="text-gray-200 inline"><SiReact size={12} className="inline mr-1" /> React</a>;
            case "Tailwind CSS":
                return <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className="text-gray-200 inline"><SiTailwindcss size={12} className="inline mr-1" /> Tailwind CSS</a>;
            case "JavaScript":
                return <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer' className="text-gray-200 inline"><SiJavascript size={12} className="inline mr-1" /> JavaScript</a>;
            case "Vite":
                return <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer' className='text-gray-200 inline'><TbBrandVite size={12} className="inline mr-1" /> Vite</a>;
            case "Firebase":
                return <a href='https://firebase.google.com/' target='_blank' rel='noopener noreferrer' className='text-gray-200 inline'><RiFirebaseFill size={12} className="inline mr-1" /> Firebase</a>;
            default:
                return <span className='inline'><FaRegFileCode size={12} className="inline mr-1" /> {techString}</span>;  // Fallback to text
        }
    };

    return (
        <section className="w-full py-16">
            <div className="px-6 lg:px-32">
                <h3 className="text-3xl font-outfit font-bold mb-8 text-left">
                    My Projects
                    <Link 
                        to="/projects" 
                        className="text-primary hover:text-secondary transition-colors duration-300"
                        aria-label="Learn more about my projects"
                        onMouseEnter={() => setArrowHovered(true)}
                        onMouseLeave={() => setArrowHovered(false)}
                    >
                        {arrowHovered ?
                            <IoArrowForwardCircle className="inline ml-2 transform transition-transform duration-300 hover:scale-110" size={24} />
                        :
                            <IoArrowForwardCircleOutline className="inline ml-2 transform transition-transform duration-300" size={24} />
                        }
                    </Link>
                </h3>
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex">  {/* Remove gap-8 */}
                            {items.map((item, index) => (
                                <div 
                                    key={index}
                                    className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 mr-8"  // Add back mr-8
                                >
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="font-geist-mono block bg-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                                    >
                                        {item.image && (
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
                                            />
                                        )}
                                        <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                                        <p className="text-xs uppercase text-secondary mb-4 font-normal">{item.dates}</p>
                                        {item.description && <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>}
                                        {item.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-primary hover:bg-secondary transition-colors duration-300 text-gray-200 rounded-full text-[10px] uppercase shadow-sm flex items-center justify-center font-normal"
                                                    >
                                                        {renderTechIcon(tech)}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {item.githubLink && (
                                            <div className="mt-4 text-muted text-sm">
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
                            ))}
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
                                    onClick={() => scrollTo(index)}
                                />
                            ))}
                        </div>
                        
                        {/* Navigation Arrows and Play/Pause */}
                        <div className="flex gap-1">
                            {/* Play/Pause Button */}
                            <button
                                onClick={() => {
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
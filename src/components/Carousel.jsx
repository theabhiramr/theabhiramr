import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { renderTechItem } from '../utils';
import { SiGithub } from 'react-icons/si';

// Slide component (can be moved to a separate file if needed)
function CarouselSlide({ item }) {
  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_80%] min-w-0 mr-8">
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
            className="w-32 h-32 object-contain object-left mb-2 rounded-lg"
          />
        )}
        <h3 className="text-lg font-semibold mb-1 text-primary">{item.title}</h3>
        {item.company && <p className="text-md text-secondary mb-2">{item.company}</p>}
        <p className="text-xs uppercase text-secondary mb-4 font-normal">{item.dates}</p>
        {item.description && <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>}
        {item.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map((tech, techIndex) => renderTechItem(tech))}
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
}

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

    return (  
        <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-visible" ref={emblaRef}>
                <div className="flex justify-start">
                    {items.map((item, index) => (
                        <CarouselSlide key={index} item={item} />
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
        
    );
}
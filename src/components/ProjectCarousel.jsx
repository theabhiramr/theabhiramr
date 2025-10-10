import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function ProjectCarousel({ items, startAutoplay = false }) {  // Add startAutoplay prop
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
        [Autoplay({ delay: 7000, stopOnInteraction: false, playOnInit: false })]  // Set playOnInit: false
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

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
        }
    }, [startAutoplay, emblaApi]);

    // Pagination dots: one per unique slide
    const dots = Array.from({ length: items.length }, (_, i) => i);

    return (
        <section className="w-full py-16">
            <div className="px-6 lg:px-32">
                <h3 className="text-3xl font-outfit font-bold mb-8 text-left">My Projects</h3>
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex">
                            {items.map((item, index) => (
                                <div 
                                    key={index}
                                    className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 mr-16"
                                >
                                    <a 
                                        href={item.link || item.githubLink || item.liveLink} 
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
                                        <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                                        
                                        {item.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <span 
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-primary text-background rounded-full text-xs font-medium shadow-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
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
                                    className={`w-1 h-1 rounded-full mx-1 transition-all ${
                                        index === selectedIndex ? 'bg-primary w-6' : 'bg-muted'
                                    }`}
                                    onClick={() => scrollTo(index)}
                                />
                            ))}
                        </div>
                        
                        {/* Navigation Arrows (smaller, muted to primary on hover) */}
                        <div className="flex gap-1">
                            <button
                                onClick={scrollPrev}
                                className="w-6 h-6 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                                aria-label="Previous slide"
                            >
                                <svg width="14" height="14" viewBox="0 0 18 18" className="fill-[var(--color-muted)] hover:fill-primary active:fill-[var(--color-secondary)]" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="12,3 12,15 4,9"/>
                                </svg>
                            </button>
                            <button
                                onClick={scrollNext}
                                className="w-6 h-6 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                                aria-label="Next slide"
                            >
                                <svg width="14" height="14" viewBox="0 0 18 18" className="fill-[var(--color-muted)] hover:fill-primary active:fill-[var(--color-secondary)]" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="6,3 6,15 14,9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
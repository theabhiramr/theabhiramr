import React, { use, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TechBadge from "./TechBadge";
import { SiGithub } from "react-icons/si";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Slide component (can be moved to a separate file if needed)
function CarouselSlide({ item }) {
  return (
    <div className="mr-8 min-w-0 flex-[0_0_100%] md:flex-[0_0_80%]">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-geist-mono bg-surface flex h-full transform cursor-pointer flex-col rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        {item.imageSrc && (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="mb-2 h-32 w-32 rounded-lg object-contain object-left"
          />
        )}
        <h3 className="text-primary mb-1 text-lg font-semibold">
          {item.title}
        </h3>
        {item.company && (
          <p className="text-md text-secondary mb-2">{item.company}</p>
        )}
        <p className="text-secondary mb-4 text-xs font-normal uppercase">
          {item.dates}
        </p>
        {item.description && (
          <p className="text-muted mb-4 text-sm leading-relaxed">
            {item.description}
          </p>
        )}
        {item.technologies && (
          <div className="mb-4 flex flex-wrap gap-2">
            {item.technologies.map((tech, techIndex) => (
              <TechBadge key={techIndex} techString={tech} textSize="xs" />
            ))}
          </div>
        )}
        {item.githubLink && (
          <div className="text-muted mt-auto text-sm">
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary inline-flex items-center text-sm transition-colors duration-300"
            >
              See it on{" "}
              <SiGithub className="ml-2 inline align-middle" size={16} />
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
      align: "start",
      slidesToScroll: 1,
      loopAdditionalSlides: 2,
      duration: 40, // Added duration for smoother transitions
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 7000, stopOnInteraction: false, playOnInit: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false); // Track autoplay state

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

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
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
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
    if (!emblaApi) return;

    const handlePointerUp = () => {
      setIsPlaying(true);
    };

    emblaApi.on("pointerUp", handlePointerUp);

    return () => {
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  // Add this useEffect after your existing useEffects
  useEffect(() => {
    if (!emblaApi) return;

    const emblaNode = emblaApi.rootNode();
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return; // Prevent multiple scrolls

      const threshold = 50; // Minimum scroll amount to trigger

      // Only handle horizontal scrolling
      if (
        Math.abs(e.deltaX) > Math.abs(e.deltaY) &&
        Math.abs(e.deltaX) > threshold
      ) {
        e.preventDefault();
        isScrolling = true;

        if (e.deltaX > 0) {
          scrollNext();
        } else {
          scrollPrev();
        }

        setTimeout(() => {
          isScrolling = false;
        }, 100); // Increased timeout
      } else if (Math.abs(e.deltaY) > threshold) {
        // Convert vertical scroll to horizontal
        e.preventDefault();
        isScrolling = true;

        if (e.deltaY > 0) {
          scrollNext();
        } else {
          scrollPrev();
        }

        // setTimeout(() => { isScrolling = false; }, 100); // Increased timeout
      }
    };

    emblaNode.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      emblaNode.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi, scrollNext, scrollPrev]);

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
      {(items.length >= 3 || selectedIndex !== 0) && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollPrev();
          }}
          className="bg-surface/80 hover:bg-surface absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 md:left-0 md:h-12 md:w-12 lg:-left-16"
          aria-label="Previous slide"
        >
          <IoChevronBack className="text-primary" size={20} />
        </button>
      )}
      {(items.length >= 3 || selectedIndex !== dots.length - 1) && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollNext();
          }}
          className="bg-surface/80 hover:bg-surface absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 md:right-0 md:h-12 md:w-12 lg:-right-16"
          aria-label="Next slide"
        >
          <IoChevronForward className="text-primary" size={20} />
        </button>
      )}
      {/* Navigation and Pagination at Bottom */}
      <div className="mt-8 flex items-center justify-end gap-4">
        {/* Pagination Dots */}
        <div className="flex items-center">
          {dots.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-1.5 w-1.5 rounded-full transition-all hover:w-4 ${
                index === selectedIndex ? "bg-primary w-6" : "bg-muted"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                scrollTo(index);
              }}
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
            className="flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isPlaying ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                className="hover:fill-primary fill-[var(--color-muted)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="3" width="2" height="12" />
                <rect x="11" y="3" width="2" height="12" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                className="hover:fill-primary fill-[var(--color-muted)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="5,3 15,9 5,15" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

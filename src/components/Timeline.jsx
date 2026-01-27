import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import TechBadge from "./TechBadge";
import { SiGithub } from "react-icons/si";
import { HiMapPin } from "react-icons/hi2";

function TimelineItem({ item, isLast, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 15 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.21, 1.02, 0.47, 0.98],
        },
      };

  const content = (
    <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          {item.image && (
            <img
              src={item.image}
              alt={item.title || ""}
              className="ring-border bg-surface h-16 w-16 flex-shrink-0 rounded-lg object-cover ring-1 sm:h-16 sm:w-16"
            />
          )}
          <div className="min-w-0">
            <h3 className="text-content text-sm leading-snug font-semibold tracking-tight sm:text-base">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-muted mt-0.5 text-xs sm:text-sm">
                {item.subtitle}
              </p>
            )}
            {item.location && (
              <div className="text-muted/60 mt-1 flex items-center gap-1 text-[11px] sm:text-xs">
                <HiMapPin size={12} className="text-content/50" />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        </div>

        {item.dates && (
          /* Date Pill with Transparent Accent Background */
          <div className="font-geist-mono text-accent bg-accent/10 border-accent/20 w-fit self-start rounded-full border px-3 py-1 text-[10px] whitespace-nowrap uppercase sm:text-[11px]">
            {item.dates}
          </div>
        )}
      </div>

      {/* Technologies */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <TechBadge key={tech} techString={tech} textSize="xs" />
          ))}
        </div>
      )}

      {/* Content Bullets / Description */}
      {Array.isArray(item.content) ? (
        <ul className="text-muted list-none space-y-2.5 pl-0 text-[13px] leading-relaxed sm:text-sm">
          {item.content.map((contentItem, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-content/30 shrink-0">—</span>
              <span>{contentItem}</span>
            </li>
          ))}
        </ul>
      ) : (
        item.content && (
          <div className="text-muted text-[13px] leading-relaxed sm:text-sm">
            {item.content}
          </div>
        )
      )}

      {/* Restored Portfolio-Specific Fields (Education/Honors) */}
      {(item.minor || item.honorsAwards || item.activities) && (
        <div className="border-border/30 space-y-1.5 border-l-2 py-1 pl-4">
          {item.minor && (
            <div className="text-muted text-xs">
              <span className="text-content font-medium">Minor:</span>{" "}
              {item.minor}
            </div>
          )}
          {item.honorsAwards && (
            <div className="text-muted text-xs">
              <span className="text-content font-medium">Honors:</span>{" "}
              {item.honorsAwards}
            </div>
          )}
          {item.activities && (
            <div className="text-muted text-xs">
              <span className="text-content font-medium">Activities:</span>{" "}
              {item.activities}
            </div>
          )}
        </div>
      )}

      {/* GitHub Link */}
      {item.githubLink && (
        <a
          href={item.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent group inline-flex w-fit items-center gap-1.5 text-xs transition-colors duration-200"
        >
          <SiGithub
            size={14}
            className="transition-transform group-hover:scale-110"
          />
          <span>GitHub</span>
        </a>
      )}

      {/* Additional Info */}
      {item.additional && (
        <div className="text-muted text-[11px] sm:text-xs">
          <span dangerouslySetInnerHTML={{ __html: item.additional }} />
        </div>
      )}
    </div>
  );

  return (
    <div ref={ref} className="group relative pb-12 pl-10 last:pb-4 sm:pl-16">
      {/* Perfect Alignment for Line and Dot */}
      {!isLast && (
        <div
          className="from-border via-border/50 absolute top-[24px] bottom-0 left-[15px] w-[1px] bg-gradient-to-b to-transparent sm:top-[30px] sm:left-[31px]"
          aria-hidden="true"
        />
      )}

      {/* Centered Dot Container */}
      <div className="absolute top-0 left-0 z-10 flex h-10 w-8 items-center justify-center sm:h-12 sm:w-16">
        <div className="bg-content ring-background h-2 w-2 rounded-full ring-4 transition-transform group-hover:scale-125" />
      </div>

      <motion.div {...animationProps}>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:border-border/40 hover:bg-surface/40 -m-3 block rounded-2xl border border-transparent p-3 transition-all duration-300 sm:-m-4 sm:p-4"
          >
            {content}
          </a>
        ) : (
          <div className="py-2">{content}</div>
        )}
      </motion.div>
    </div>
  );
}

export default function Timeline({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="w-full">
      <div
        role="list"
        aria-label="Portfolio Timeline"
        className="flex flex-col"
      >
        {items.map((item, i) => (
          <TimelineItem
            key={i}
            index={i}
            item={item}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import TechBadge from "./TechBadge";
import { SiGithub } from "react-icons/si";
import { HiMapPin, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { fadeUp, stagger, inViewOptions } from "../utils/animations";

function TimelineItem({ item, isLast }) {
  const orgLink = item.links?.find((l) => l.label === "Organization");
  const footerLinks = item.links?.filter((l) => l.label !== "Organization") ?? [];

  return (
    <motion.div
      variants={fadeUp}
      className="group relative pb-12 pl-10 last:pb-4 sm:pl-16"
    >
      {!isLast && (
        <div
          className="from-border via-border/50 absolute top-[24px] bottom-0 left-[15px] w-[1px] bg-gradient-to-b to-transparent sm:top-[30px] sm:left-[31px]"
          aria-hidden="true"
        />
      )}

      <div className="absolute top-0 left-0 z-10 flex h-10 w-8 items-center justify-center sm:h-12 sm:w-16">
        <div className="bg-content ring-background h-2 w-2 rounded-full ring-4 transition-transform group-hover:scale-125" />
      </div>

      <div className="hover:border-border/40 hover:bg-surface/40 -m-3 rounded-2xl border border-transparent p-3 transition-all duration-300 sm:-m-4 sm:p-4">
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.org || item.title}
                  className="ring-border bg-surface h-16 w-16 flex-shrink-0 rounded-lg object-cover ring-1"
                />
              )}
              <div className="min-w-0">
                <h3 className="text-content text-sm leading-snug font-semibold tracking-tight sm:text-base">
                  {item.title}
                </h3>
                {item.org && (
                  <p className="text-muted mt-0.5 text-xs sm:text-sm">
                    {orgLink ? (
                      <a
                        href={orgLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-content inline-flex items-center gap-1 transition-colors"
                      >
                        {item.org}
                        <HiArrowTopRightOnSquare size={11} />
                      </a>
                    ) : (
                      item.org
                    )}
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
              <div className="font-geist-mono text-accent bg-accent/10 border-accent/20 w-fit self-start rounded-full border px-3 py-1 text-[10px] whitespace-nowrap uppercase sm:text-[11px]">
                {item.dates}
              </div>
            )}
          </div>

          {/* Technologies */}
          {item.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <TechBadge key={tech} techString={tech} textSize="xs" />
              ))}
            </div>
          )}

          {/* Content */}
          {Array.isArray(item.content) ? (
            <ul className="text-muted list-none space-y-2.5 pl-0 text-[13px] leading-relaxed sm:text-sm">
              {item.content.map((line, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-content/30 shrink-0">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : (
            item.content && (
              <p className="text-muted text-[13px] leading-relaxed sm:text-sm">
                {item.content}
              </p>
            )
          )}

          {/* Meta fields (e.g. Minor, Honors, Activities) */}
          {item.meta?.length > 0 && (
            <div className="border-border/30 space-y-1.5 border-l-2 py-1 pl-4">
              {item.meta.map(({ label, value }) => (
                <p key={label} className="text-muted text-xs">
                  <span className="text-content font-medium">{label}:</span>{" "}
                  {value}
                </p>
              ))}
            </div>
          )}

          {/* Additional note */}
          {item.additional && (
            <p className="text-muted text-[11px] sm:text-xs">{item.additional}</p>
          )}

          {/* Footer links */}
          {footerLinks.length > 0 && (
            <div className="flex gap-4">
              {footerLinks.map(({ label, href }) => {
                const isGitHub = label === "GitHub" || href.includes("github.com");
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent group/link inline-flex items-center gap-1.5 text-xs transition-colors duration-200"
                  >
                    {isGitHub ? (
                      <SiGithub size={14} className="transition-transform group-hover/link:scale-110" />
                    ) : (
                      <HiArrowTopRightOnSquare size={14} className="transition-transform group-hover/link:scale-110" />
                    )}
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline({ items = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, inViewOptions);
  const shouldReduceMotion = useReducedMotion();

  if (!items.length) return null;

  return (
    <motion.div
      ref={ref}
      role="list"
      aria-label="Timeline"
      className="flex w-full flex-col"
      variants={shouldReduceMotion ? {} : stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {items.map((item) => (
        <TimelineItem
          key={item.title}
          item={item}
          isLast={items[items.length - 1].title === item.title}
        />
      ))}
    </motion.div>
  );
}

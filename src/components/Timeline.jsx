import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TechBadge from "./TechBadge";
import { SiGithub } from "react-icons/si";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Slower stagger for timeline items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const bulletListVariants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      staggerChildren: 0.18,
      delayChildren: custom * 0.5, // Delay based on timeline item index
    },
  }),
};

const bulletItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const itemGroupVariants = {
  hidden: {},
  visible: (custom = 0) => ({
    transition: {
      staggerChildren: 0.15,
      delayChildren: custom * 0.2, // delay for the whole item group
    },
  }),
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function TimelineItem({ item, isLast, isFirst, custom }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  const content = (
    <motion.div
      variants={itemGroupVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      className="flex flex-col gap-1"
    >
      {item.image && (
        <motion.img
          src={item.image}
          alt={item.title || ""}
          className="mb-2 h-16 w-16 flex-shrink-0 rounded-lg object-cover"
          variants={fadeUpVariant}
        />
      )}
      {item.title && (
        <motion.h4
          className="font-geist-mono text-primary text-xl leading-5 font-bold"
          variants={fadeUpVariant}
        >
          {item.title}
        </motion.h4>
      )}
      {item.subtitle && (
        <motion.h5
          className="font-geist-mono text-muted mt-1 text-lg"
          variants={fadeUpVariant}
        >
          {item.subtitle}
        </motion.h5>
      )}
      {item.location && (
        <motion.div
          className="font-geist-mono text-secondary mt-1 text-sm"
          variants={fadeUpVariant}
        >
          {item.location}
        </motion.div>
      )}
      {item.dates && (
        <motion.div
          className="font-geist-mono text-secondary mt-1 text-xs uppercase"
          variants={fadeUpVariant}
        >
          {item.dates}
        </motion.div>
      )}
      {item.technologies && (
        <div className="mt-4 mb-4 flex flex-wrap gap-2">
          {item.technologies.map((tech, techIndex) => (
            <motion.div
              key={tech}
              variants={fadeUpVariant}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TechBadge techString={tech} textSize="xs" />
            </motion.div>
          ))}
        </div>
      )}
      {item.minor && (
        <motion.div
          className="font-geist-mono text-md text-muted mt-2"
          variants={fadeUpVariant}
        >
          <span className="font-bold">Minor:</span> {item.minor}
        </motion.div>
      )}
      {item.honorsAwards && (
        <motion.div
          className="font-geist-mono text-md text-muted mt-1"
          variants={fadeUpVariant}
        >
          <span className="font-bold">Honors & Awards:</span>{" "}
          {item.honorsAwards}
        </motion.div>
      )}
      {item.activities && (
        <motion.div
          className="font-geist-mono text-md text-muted mt-1"
          variants={fadeUpVariant}
        >
          <span className="font-bold">Activities:</span> {item.activities}
        </motion.div>
      )}
      {Array.isArray(item.content) ? (
        <motion.ul
          className="font-geist-mono text-content big-bullets mt-2 list-disc pl-5"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: (custom + 1) * 0.2, // Wait for previous info and tech icons
                staggerChildren: 0.18,
              },
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={custom}
        >
          {item.content.map((contentItem, idx) => (
            <motion.li key={idx} variants={fadeUpVariant}>
              {contentItem}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        item.content && (
          <motion.div className="text-muted mt-2" variants={fadeUpVariant}>
            {item.content}
          </motion.div>
        )
      )}
      {item.additional && (
        <motion.p
          variants={fadeUpVariant}
          className="text-secondary font-geist-mono mt-2 text-sm"
        >
          <span dangerouslySetInnerHTML={{ __html: item.additional }} />
        </motion.p>
      )}
      {item.githubLink && (
        <motion.div
          variants={fadeUpVariant}
          className="font-geist-mono text-muted mt-4 text-sm"
        >
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
        </motion.div>
      )}
    </motion.div>
  );

  const timelineItem = (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      className="relative flex gap-6 pb-12"
      style={{ paddingTop: isFirst ? 0 : "8px" }}
    >
      <div
        className="relative"
        style={{ width: "20px", paddingTop: item.image ? "14px" : "0" }}
      >
        <div className="bg-primary border-background z-10 h-5 w-5 flex-shrink-0 rounded-full border-4" />
        {!isLast && (
          <motion.div
            className="bg-secondary absolute left-1/2 w-0.5 -translate-x-1/2"
            style={{ top: item.image ? "50px" : "28px" }}
            initial={{ height: "0px" }}
            animate={{
              height: item.image
                ? "calc(100% + 48px - 50px)"
                : "calc(100% + 48px - 28px)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </div>
      <div className="flex-1">{content}</div>
    </motion.div>
  );

  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-surface -m-2 block rounded-lg p-2 transition"
    >
      {timelineItem}
    </a>
  ) : (
    timelineItem
  );
}

export default function Timeline({ items = [] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          item={item}
          isFirst={i === 0}
          isLast={i === items.length - 1}
          custom={i}
        />
      ))}
    </motion.div>
  );
}

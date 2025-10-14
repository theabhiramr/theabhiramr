import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { renderTechItem } from '../utils';
import { SiGithub } from 'react-icons/si';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5 // Slower stagger for timeline items
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const bulletListVariants = {
  hidden: {},
  visible: (custom) => ({
    transition: {
      staggerChildren: 0.18,
      delayChildren: custom * 0.5 // Delay based on timeline item index
    }
  })
};

const bulletItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

const itemGroupVariants = {
  hidden: {},
  visible: (custom = 0) => ({
    transition: {
      staggerChildren: 0.18,
      delayChildren: custom * 0.5 // Each item's children are delayed by its index
    }
  })
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

function TimelineItem({ item, isLast, isFirst, custom }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          alt={item.title || ''}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0 mb-2"
          variants={fadeUpVariant}
        />
      )}
      {item.title && (
        <motion.h4
          className="font-geist-mono text-xl font-bold text-primary leading-5"
          variants={fadeUpVariant}
        >
          {item.title}
        </motion.h4>
      )}
      {item.subtitle && (
        <motion.h5
          className="font-geist-mono text-lg mt-1 text-muted"
          variants={fadeUpVariant}
        >
          {item.subtitle}
        </motion.h5>
      )}
      {item.location && (
        <motion.div
          className="font-geist-mono text-sm text-secondary mt-1"
          variants={fadeUpVariant}
        >
          {item.location}
        </motion.div>
      )}
      {item.dates && (
        <motion.div
          className="font-geist-mono uppercase text-xs text-secondary mt-1"
          variants={fadeUpVariant}
        >
          {item.dates}
        </motion.div>
      )}
      {item.technologies && (
        <motion.div
          className="flex flex-wrap gap-2 mb-4 mt-4"
          variants={fadeUpVariant}
        >
          {item.technologies.map((tech, techIndex) => renderTechItem(tech))}
        </motion.div>
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
          <span className="font-bold">Honors & Awards:</span> {item.honorsAwards}
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
          className="mt-2 font-geist-mono text-content list-disc big-bullets pl-5"
          variants={itemGroupVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={custom}
        >
          {item.content.map((contentItem, idx) => (
            <motion.li
              key={idx}
              variants={fadeUpVariant}
            >
              {contentItem}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        item.content && (
          <motion.div className="mt-2 text-muted" variants={fadeUpVariant}>
            {item.content}
          </motion.div>
        )
      )}
      {item.additional && (
        <motion.p 
          variants={fadeUpVariant}
          className="mt-2 text-secondary font-geist-mono text-sm"
        >
          {item.additional}
        </motion.p>
      )}
      {item.githubLink && (
        <motion.div
          variants={fadeUpVariant} 
          className="mt-4 font-geist-mono text-muted text-sm "
        >
          See it on
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-primary transition-colors duration-300 ml-1 p-1 inline-block"
          >
            <SiGithub className="inline" size={16} />
          </a>
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
      style={{ paddingTop: isFirst ? 0 : '8px' }}
    >
      <div className="relative" style={{ width: '20px', paddingTop: item.image ? '14px' : '0' }}>
        <div className="w-5 h-5 rounded-full bg-primary z-10 border-4 border-background flex-shrink-0" />
        {!isLast && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-secondary"
            style={{ top: item.image ? '50px' : '28px' }}
            initial={{ height: '0px' }}
            animate={{ height: item.image ? 'calc(100% + 48px - 50px)' : 'calc(100% + 48px - 28px)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </div>
      <div className="flex-1">
        {content}
      </div>
    </motion.div>
  );

  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-surface transition rounded-lg p-2 -m-2"
    >
      {timelineItem}
    </a>
  ) : timelineItem;
}

export default function Timeline({ items = [] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative md:pl-14 pl-6"
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
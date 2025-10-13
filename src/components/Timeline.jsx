import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

function TimelineItem({ item, isLast, isFirst }) {
  const content = (
    <div className="flex items-start gap-3">
      {item.image && (
        <img src={item.image} alt={item.title || ''} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
      )}
      <div className="flex-1">
        {item.title && <h4 className="font-geist-mono text-xl font-bold text-primary leading-5">{item.title}</h4>}
        {item.subtitle && <h5 className="font-geist-mono text-lg mt-1 text-muted">{item.subtitle}</h5>}
        {item.location && <div className="font-geist-mono text-sm text-secondary mt-1">{item.location}</div>}
        {item.dates && <div className="font-geist-mono uppercase text-xs text-secondary mt-1">{item.dates}</div>}
        {item.minor && <div className="font-geist-mono text-md text-muted mt-2"><span className="font-bold">Minor:</span> {item.minor}</div>}
        {item.honorsAwards && <div className="font-geist-mono text-md text-muted mt-1"><span className="font-bold">Honors & Awards:</span> {item.honorsAwards}</div>}
        {item.activities && <div className="font-geist-mono text-md text-muted mt-1"><span className="font-bold">Activities:</span> {item.activities}</div>}
        {Array.isArray(item.content) ? (
          <ul className="mt-2 text-muted">
            {item.content.map((contentItem, index) => (
              <li key={index}>{contentItem}</li>
            ))}
          </ul>
        ) : (
          item.content && <div className="mt-2 text-muted">{item.content}</div>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={itemVariants}
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
      {/* Wrap content in a link if item.link exists */}
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 hover:bg-surface transition rounded-lg p-2 -m-2"
        >
          {content}
        </a>
      ) : (
        <div className="flex-1">{content}</div>
      )}
    </motion.div>
  );
}

export default function Timeline({ items = [] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative md:pl-14 pl-6"
    >
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          item={item}
          isFirst={i === 0}
          isLast={i === items.length - 1}
        />
      ))}
    </motion.div>
  );
}
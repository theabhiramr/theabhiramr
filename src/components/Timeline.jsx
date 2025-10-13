import React from 'react';
import { motion } from 'framer-motion';

function TimelineItem({ item, isLast, isFirst, show, showLine }) {
  return (
    <motion.div
      className="relative flex gap-6 pb-12"
      style={{ paddingTop: isFirst ? 0 : '8px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative" style={{ width: '20px', paddingTop: item.image ? '14px' : '0' }}>
        <div className="w-5 h-5 rounded-full bg-primary z-10 border-4 border-background flex-shrink-0" />
        {!isLast && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-secondary"
            style={{ top: item.image ? '50px' : '28px' }}
            initial={{ height: '0px' }}
            animate={showLine ? { height: item.image ? 'calc(100% + 48px - 50px)' : 'calc(100% + 48px - 28px)' } : { height: '0px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </div>
      <div className="flex-1">
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
            {item.content && <div className="mt-2 text-muted">{item.content}</div>}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline({ items = [], visibleCount = 0 }) {
  return (
    <div className="relative md:pl-14 pl-6">
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          item={item}
          isFirst={i === 0}
          isLast={i === items.length - 1}
          show={visibleCount > i}
          showLine={visibleCount > i + 1}
        />
      ))}
    </div>
  );
}
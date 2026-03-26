import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionTitle = ({ label, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span
        className="text-xs font-semibold tracking-widest uppercase mb-4 block"
        style={{ color: '#6c63ff' }}
      >
        {label}
      </span>
      <h2
        className="text-4xl md:text-5xl font-black mb-4"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base max-w-xl mx-auto" style={{ color: '#64748b' }}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-12 rounded" style={{ background: 'linear-gradient(90deg, transparent, #6c63ff)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#a855f7' }} />
        <div className="h-px w-12 rounded" style={{ background: 'linear-gradient(90deg, #a855f7, transparent)' }} />
      </div>
    </motion.div>
  );
};

export default SectionTitle;

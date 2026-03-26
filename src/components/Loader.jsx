import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: '#050816' }}>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#6c63ff', borderRightColor: '#a855f7' }}
          />
          <div className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#22d3ee', borderLeftColor: '#a855f7' }}
          />
          <motion.div
            className="absolute inset-6 rounded-full"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #a855f7)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-sm tracking-widest font-medium"
          style={{ color: '#a855f7' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING PORTFOLIO...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;

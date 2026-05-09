import React from 'react';
import { motion as Motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-1000 flex items-center justify-center bg-[#0f172a]"
    >
      <div className="relative flex flex-col items-center">
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-px bg-indigo-500 mb-4"
        />
        <Motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400"
        >
          Avinash Goru
        </Motion.span>
      </div>
    </Motion.div>
  );
};

export default Loader;

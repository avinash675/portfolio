import React from 'react';
import { motion as Motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a] pt-24 md:pt-32 pb-16"
    >
      {/* Subtle Background Glows (Breathing) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      <Motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center"
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Badge */}
        <Motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-block py-2 px-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase">
            Goru Avinash — Developer
          </span>
        </Motion.div>

        {/* Heading */}
        <Motion.h1
          variants={fadeInUp}
          className="max-w-4xl text-6xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tighter mb-10"
        >
          Building fast, <br />
          <span className="bg-linear-to-r from-indigo-300 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            scalable digital
          </span><br /> experiences.
        </Motion.h1>

        {/* Role & Description */}
        <Motion.div variants={fadeInUp} className="max-w-2xl space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-slate-200 font-bold tracking-tight">
            Frontend Specialist | React Architect | UI Designer
          </p>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            I craft high-performance web applications that bridge the gap between design and technology.
          </p>
        </Motion.div>

        {/* Buttons */}
        <Motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          {/* Primary Action → solid button */}
          <MagneticButton className="w-full sm:w-auto">
            <Motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-10 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] transition-all"
            >
              View Work
            </Motion.a>
          </MagneticButton>

          {/* Secondary Action → outline/ghost button */}
          <MagneticButton className="w-full sm:w-auto">
            <Motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-10 py-4 rounded-full border border-slate-700 text-white font-bold text-lg transition-all md:hover:bg-white/5 md:hover:border-white/20"
            >
              Resume
            </Motion.a>
          </MagneticButton>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
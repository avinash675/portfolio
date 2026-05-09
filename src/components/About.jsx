import React from 'react';
import { motion as Motion } from 'framer-motion';
import Section from './Section';
import { fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations';

const About = () => {
  return (
    <Section id="about" className="relative bg-[#0f172a] overflow-hidden" containerClassName="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* LEFT → IMAGE */}
      <Motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="lg:col-span-5 flex justify-center lg:justify-start"
      >
        <div className="relative w-full max-w-[340px] aspect-4/5 rounded-[2.5rem] overflow-hidden group shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] bg-slate-900 p-3">
          {/* Double Border Luxury Effect */}
          <div className="absolute inset-2 border border-white/10 rounded-4xl z-20 pointer-events-none" />
          <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] z-20 pointer-events-none" />
          
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

          {/* Image Wrapper */}
          <div className="w-full h-full overflow-hidden rounded-4xl">
            <img
              src="https://res.cloudinary.com/dolgu7gah/image/upload/v1776703274/WhatsApp_Image_2026-04-19_at_10.17.19_AM_w65es9.jpg"
              alt="Goru Avinash"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] md:group-hover:scale-110"
            />
          </div>

          {/* Bottom Shadow Fade */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-transparent to-transparent pointer-events-none z-10" />
        </div>
      </Motion.div>

      {/* RIGHT → CONTENT */}
      <Motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="lg:col-span-7 max-w-2xl space-y-8"
      >
        {/* Section Identifier */}
        <Motion.div variants={fadeInRight} className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
            About Me
          </span>
          <span className="h-px w-12 bg-indigo-500/30"></span>
        </Motion.div>

        {/* Header */}
        <Motion.div variants={fadeInRight} className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Goru Avinash
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
            B.Tech 2nd Year — NxtWave (NIAT), Hyderabad
          </p>
        </Motion.div>

        {/* Body Content */}
        <Motion.div
          variants={fadeInRight}
          className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed"
        >
          <p>
            I'm a second-year B.Tech student focused on building clean,
            intuitive, and user-friendly web applications.
          </p>

          <p>
            I started my journey with{' '}
            <span className="text-white font-semibold transition-colors duration-300 md:hover:text-indigo-300 cursor-default">Python</span>,
            developing strong problem-solving skills, and I'm currently working
            with modern frontend technologies like{' '}
            <span className="text-white font-semibold transition-colors duration-300 md:hover:text-indigo-300 cursor-default">React</span>.
          </p>

          <p>
            I'm actively learning and building projects to grow as a{' '}
            <span className="text-white font-semibold transition-colors duration-300 md:hover:text-indigo-300 cursor-default">
              full-stack developer
            </span>, focusing on performance, usability, and a premium design aesthetic.
          </p>
        </Motion.div>
      </Motion.div>
    </Section>
  );
};

export default About;
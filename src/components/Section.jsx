import { motion as Motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../utils/animations';

const Section = ({ id, title, subtitle, children, className = "", containerClassName = "" }) => {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 scroll-mt-24 ${className}`}
    >
      <Motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className={`max-w-7xl mx-auto px-6 lg:px-8 ${containerClassName}`}
      >
        {title && (
          <div className="max-w-2xl mb-12 lg:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {title}
              <span className="text-indigo-500">.</span>
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Motion.div>
    </section>
  );
};

export default Section;
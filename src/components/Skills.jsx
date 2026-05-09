import { motion as Motion } from 'framer-motion';
import Section from './Section';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiFramer,
  SiWebflow,
  SiFigma
} from 'react-icons/si';
import { fadeInUp, scaleUp, staggerContainer, tapScale, cardHover, viewportConfig } from '../utils/animations';

const SkillCard = ({ name, icon: IconComponent }) => {
  return (
    <Motion.div
      variants={scaleUp}
      whileHover={cardHover}
      whileTap={tapScale}
      className="group relative bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 ease-out"
    >
      {/* Subtle Hover Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <div className="p-4 rounded-xl bg-slate-800/50 text-slate-400 md:group-hover:text-indigo-400 md:group-hover:bg-indigo-500/10 transition-colors duration-500 md:group-hover:scale-110">
          <IconComponent size={28} />
        </div>
        <h4 className="text-slate-200 font-semibold tracking-wide text-sm md:text-base">{name}</h4>
      </div>
    </Motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="space-y-6">
    <Motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="flex items-center gap-4"
    >
      <h3 className="text-xs md:text-sm font-bold text-indigo-400 uppercase tracking-[0.2em]">
        {title}
      </h3>
      <span className="h-px w-12 bg-indigo-500/30"></span>
    </Motion.div>

    <Motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </Motion.div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Mastery',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'TypeScript', icon: SiTypescript },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', icon: SiFigma },
        { name: 'Framer', icon: SiFramer },
        { name: 'Webflow', icon: SiWebflow },
      ],
    },
  ];

  return (
    <Section 
      id="skills" 
      title="Technical Arsenal" 
      subtitle="I leverage modern frameworks and tools to build robust, scalable, and beautifully designed digital experiences."
      className="bg-[#0f172a]"
    >
      {/* Categories */}
      <div className="space-y-16">
        {categories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
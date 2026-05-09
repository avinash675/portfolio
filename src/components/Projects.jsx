import { motion as Motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './Section';
import { fadeInUp, staggerContainer, buttonHover, tapScale, cardHover, viewportConfig } from '../utils/animations';

// Premium Image Component with Fallback
const ProjectImage = ({ src, title }) => {
  return (
    <div className="relative aspect-video overflow-hidden bg-slate-900 group">
      {/* Subtle Overlay for consistency */}
      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
      
      {src ? (
        <img 
          src={src} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] md:group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full bg-linear-to-br from-indigo-600/20 to-violet-600/20 flex items-center justify-center">
          <span className="text-white/10 font-bold tracking-widest text-4xl uppercase opacity-20 select-none">
            {title.split(' ')[0]}
          </span>
        </div>
      )}
      
      {/* Edge highlight */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none z-20" />
    </div>
  );
};

const ProjectCard = ({ title, description, tags, image, liveLink, githubLink }) => {
  return (
    <Motion.div 
      variants={fadeInUp}
      whileHover={cardHover}
      className="group relative flex flex-col bg-white/2 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
    >
      <ProjectImage src={image} title={title} />

      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="flex-1 space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-bold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded-full border border-indigo-500/10 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Action Buttons - Refined Hierarchy */}
        <div className="pt-4 flex gap-3">
          <Motion.a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={tapScale}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all"
          >
            <FaExternalLinkAlt className="text-[10px]" />
            Live Demo
          </Motion.a>
          
          <Motion.a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={tapScale}
            className="px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs hover:bg-white/10 transition-all"
            title="View Code"
          >
            <FaGithub className="text-base" />
          </Motion.a>
        </div>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Nexus',
      description: 'High-performance commerce engine featuring complex state management, real-time inventory synchronization, and a secure transaction layer.',
      tags: ['Next.js 14', 'Stripe', 'Tailwind v4'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop',
      liveLink: 'https://ecommerce-nexus-demo.vercel.app',
      githubLink: 'https://github.com/avinash675/ecommerce-nexus',
    },
    {
      title: 'Insight Analytics',
      description: 'Real-time data orchestration platform transforming complex streams into actionable, interactive intelligence dashboards.',
      tags: ['React', 'D3.js', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a80?q=80&w=2070&auto=format&fit=crop',
      liveLink: 'https://analytics-dashboard-pro.vercel.app',
      githubLink: 'https://github.com/avinash675/analytics-dashboard',
    },
    {
      title: 'Social Connect',
      description: 'Distributed networking architecture optimized for low-latency bidirectional communication and high availability.',
      tags: ['Node.js', 'Socket.io', 'PostgreSQL'],
      image: '', // Demonstrating Fallback
      liveLink: 'https://social-connect-app.vercel.app',
      githubLink: 'https://github.com/avinash675/social-connect',
    },
  ];

  return (
    <Section 
      id="projects" 
      title="Engineering Excellence" 
      subtitle="A collection of high-performance applications focused on scalability, exceptional UI design, and solving complex problems."
      className="bg-[#0b0f1a]"
    >
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      {/* Balanced Projects Grid */}
      <Motion.div 
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Motion.div>
    </Section>
  );
};

export default Projects;
import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  const socials = [
    { name: 'Github', icon: FaGithub, href: 'https://github.com/avinash675' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/avinash-goru' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
    { name: 'Email', icon: IoMail, href: 'mailto:avinashgoru26@gmail.com' },
  ];

  return (
    <footer className="relative bg-[#0b0f1a] py-24 overflow-hidden">
      {/* Editorial Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-50" />
      
      {/* Deep Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 lg:gap-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white tracking-tighter">
                Avinash<span className="text-indigo-500">.</span>
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-sm font-medium">
                Designing the digital future <br /> with focus, intent, and precision.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">Open for collaborations</span>
            </div>
          </div>

          {/* Navigation links with refined hover */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-[0.3em]">Directory</h4>
            <nav className="flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 w-fit font-bold text-lg"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-indigo-500 transition-all duration-300" />
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Presence with glass buttons */}
          <div className="space-y-8">
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-[0.3em]">Presence</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-5 rounded-2xl bg-white/3 border border-white/5 text-slate-500 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-500"
                    title={social.name}
                  >
                    <Icon size={22} />
                  </Motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* The Signature */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.4em]">
              Designed & Developed by
            </p>
            <p className="text-white font-bold tracking-tight text-lg">
              Goru Avinash <span className="text-slate-600">— 2026</span>
            </p>
          </div>
          
          <div className="px-6 py-2 rounded-full bg-white/5 border border-white/5">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">
              Stay Focused. Build Great Things.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { fadeInDown, staggerContainer, tapScale, transitions } from '../utils/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Motion.nav
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'py-4 bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <Motion.a
          href="#home"
          variants={fadeInDown}
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-lg md:text-xl font-semibold text-white tracking-wide transition active:opacity-80 md:hover:opacity-80"
        >
          Avinash<span className="text-indigo-400">.</span>
        </Motion.a>

        {/* Desktop Nav */}
        <Motion.div 
          variants={staggerContainer(0.1, 0.1)}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Motion.a
              key={link.name}
              href={`#${link.id}`}
              variants={fadeInDown}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`group relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-slate-400 md:hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300 ${
                  activeSection === link.id
                    ? 'w-full'
                    : 'w-0 md:group-hover:w-full'
                }`}
              />
            </Motion.a>
          ))}
        </Motion.div>

        {/* Mobile Menu Button */}
        <Motion.button
          variants={fadeInDown}
          onClick={toggleMobileMenu}
          whileTap={tapScale}
          className="md:hidden p-2 text-slate-400 transition"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </Motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitions}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-lg border-b border-slate-800"
          >
            <div className="px-6 py-10 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Motion.a
                  key={link.name}
                  href={`#${link.id}`}
                  whileTap={tapScale}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-lg font-medium transition ${
                    activeSection === link.id
                      ? 'text-indigo-400'
                      : 'text-slate-300 active:text-white'
                  }`}
                >
                  {link.name}
                </Motion.a>
              ))}
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
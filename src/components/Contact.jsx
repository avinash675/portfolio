import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const myEmail = "avinashgoru26@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[#0b0f1a] py-20 lg:py-28 overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Messaging */}
          <Motion.div 
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12"
          >
            <div className="space-y-8">
              <Motion.div variants={fadeInUp}>
                <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  Available for new projects
                </span>
              </Motion.div>
              <Motion.h2 
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[0.95]"
              >
                Let's start <br />
                <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent italic">something</span> great.
              </Motion.h2>
              <Motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-400 max-w-lg leading-relaxed font-medium"
              >
                I'm currently open to new opportunities and creative collaborations. I'd love to hear from you.
              </Motion.p>
            </div>

            <Motion.div variants={fadeInUp} className="pt-8 border-t border-white/5">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect Directly</span>
                <button 
                  onClick={copyToClipboard}
                  className="group flex items-center gap-5 text-2xl md:text-3xl font-bold text-white hover:text-indigo-400 transition-all duration-300 w-fit"
                >
                  {myEmail}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                    {copied ? <FaCheck className="text-emerald-400 text-lg" /> : <FaCopy className="text-slate-500 text-lg group-hover:text-indigo-400" />}
                  </div>
                </button>
              </div>
            </Motion.div>
          </Motion.div>

          {/* Right Side: Refined Form */}
          <Motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />
            
            <form onSubmit={handleSubmit} className="bg-white/2 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg font-medium focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg font-medium focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="What's on your mind?"
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg font-medium focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-700 resize-none"
                />
              </div>

              <Motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: status === 'loading' ? 0 : -2 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`group flex items-center justify-center gap-4 w-full py-5 rounded-xl font-extrabold text-lg transition-all shadow-[0_20px_50px_-10px_rgba(79,70,229,0.4)] ${
                  status === 'success' ? 'bg-emerald-600' : 
                  status === 'error' ? 'bg-rose-600' : 
                  'bg-indigo-600 hover:bg-indigo-500'
                } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? 'Sending...' : 
                 status === 'success' ? 'Message Sent!' : 
                 status === 'error' ? 'Error! Try Again' : 
                 'Send Message'}
                <FaPaperPlane className={`text-sm ${status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
              </Motion.button>

              {status === 'success' && (
                <p className="text-emerald-400 text-center text-sm font-medium animate-fade-in">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-400 text-center text-sm font-medium animate-fade-in">
                  Something went wrong. Please check your connection and try again.
                </p>
              )}
            </form>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
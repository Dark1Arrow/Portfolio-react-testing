import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Project', path: '/Project' },
  { name: 'About', path: '/About' },
  { name: 'Contact', path: '/Contact' },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : 'unset'; }, [isOpen]);

  const menuVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <nav className={`absolute top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-[#111111]/80 backdrop-blur-xl border-b border-white/5 py-1' : 'bg-transparent py-4'
    }`}>
      <div className='max-w-screen-2xl mx-auto h-[70px] flex justify-between px-6 lg:px-20 items-center text-white'>
        
        {/* Logo with Soft Mint Glow */}
        <Link to="/" className="z-[110] flex items-center group">
          <div className="relative">
            <img className='w-[55px] lg:w-[65px] relative z-10 brightness-200' src="homePage/logo1.svg" alt="Logo" />
            <div className="absolute inset-0 bg-[#4ADE80] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex gap-10 uppercase text-[12px] font-bold tracking-[0.25em]'>
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <NavLink 
                to={link.path}
                className={({ isActive }) => `
                  transition-all duration-500 py-2
                  ${isActive ? "text-[#4ADE80]" : "text-zinc-400 hover:text-white"}
                `}
              >
                {link.name}
                {/* Underline Glow Effect */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#4ADE80]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  style={{ boxShadow: '0 0 12px rgba(74, 222, 128, 0.5)' }}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className='lg:hidden z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-90 transition-transform' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col gap-1.5 w-5">
            <motion.span animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="h-[2px] w-full bg-[#4ADE80]" />
            <motion.span animate={isOpen ? { opacity: isOpen ? 0 : 1 } : { opacity: 1 }} className="h-[2px] w-full bg-[#4ADE80]" />
            <motion.span animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="h-[2px] w-full bg-[#4ADE80]" />
          </div>
        </button>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className='fixed inset-0 z-[105] bg-[#111111] flex flex-col justify-center items-center'
            >
              {/* Natural Green Background Mists */}
              <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#166534]/15 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#4ADE80]/5 blur-[120px] rounded-full" />

              <ul className='flex flex-col gap-10 text-center z-10'>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-6xl font-bold uppercase tracking-tighter text-white hover:text-[#4ADE80] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Decoration */}
              <div className='absolute bottom-10 text-zinc-600 font-mono text-sm tracking-widest'>
                © 2026 GOUTAM KHANNA
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
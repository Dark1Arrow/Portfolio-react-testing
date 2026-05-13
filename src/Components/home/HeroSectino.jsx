import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const HeroSection = () => {

  const [isOpen, setIsOpen] = useState()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/Project' },
    { name: 'About', path: '/About' },
    { name: 'Contact', path: '/Contact' },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
  };
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
    // Background set to Graphite / Eerie Black
    <div className='hero-section w-full min-h-screen p-4 md:p-8 bg-[#111111] text-[#F8FAF6] overflow-hidden relative'>

      {/* Natural Green Glows (Emerald & Forest) */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#166534] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#064E3B] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      <motion.div
        className='relative overflow-hidden p-6 md:p-16 inner-hero-section bg-[#111111]/90 backdrop-blur-md w-full min-h-[90vh] border border-white/5 rounded-[40px] flex flex-col  gap-4 justify-between shadow-2xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Navigation */}
        <nav className='w-full flex justify-between items-center z-50'>
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
            <img className='w-16 md:w-20 brightness-200' src="./homePage/logo1.svg" alt="Logo" />
          </motion.div>

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

          <ul className='hidden lg:flex gap-1 bg-white/5 backdrop-blur-2xl border border-white/10 p-2 rounded-full'>
            {['Home', 'Project', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item}`}
                  className='px-8 py-2 text-zinc-400 hover:text-[#4ADE80] hover:bg-white/5 rounded-full transition-all duration-300 font-medium'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* <div className='lg:hidden cursor-pointer'>
            <img className='w-8 invert opacity-70' src="./homePage/menu.svg" alt="Menu" />
          </div> */}
        </nav>

        {/* Hero Content */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 z-10'>
          <motion.div
            className='max-w-2xl'
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <h1 className='text-4xl md:text-7xl font-bold leading-tight tracking-tighter'>
              <span className='text-zinc-400'>Hello! I'm</span> <br />
              <span className='text-[#F8FAF6]'>Goutam Khanna</span> <br />
              {/* Natural Mint Green Accent */}
              <span className='text-[#4ADE80] drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]'>
                Creative Developer
              </span>
            </h1>
            <p className='mt-6 text-zinc-400 text-lg md:text-xl max-w-md leading-relaxed'>
              Blending aesthetic UI design with robust full-stack code to create high-impact digital experiences.
            </p>
          </motion.div>

          {/* Profile Image Container */}
          <motion.div
            className='relative'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className='w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#4ADE80]/20 p-4 relative'>
              {/* Subtle Spinning Glow Ring */}
              <div className='absolute inset-0 rounded-full border-t-2 border-[#4ADE80] animate-spin-slow opacity-40' />

              <div className='w-full h-full rounded-full bg-[#111111] overflow-hidden border border-white/10 shadow-inner'>
                <img
                  src="./homePage/profile1.png"
                  className='w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-700'
                  alt="Goutam"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-wrap gap-4 z-10'>
          <Link to="/Project">
            <button className='bg-[#4ADE80] text-[#111111] px-10 py-4 rounded-full font-bold hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] hover:scale-105 transition-all duration-300'>
              View My Work
            </button>
          </Link>
          <Link to="/Contact">
            <button className='border border-white/10 text-[#F8FAF6] bg-white/5 backdrop-blur-sm hover:bg-[#F8FAF6] hover:text-[#111111] px-10 py-4 rounded-full font-bold transition-all duration-300'>
              Let's Talk
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
  return (
    <section className='py-32 px-6 max-w-7xl mx-auto bg-[#111111] text-[#F8FAF6]'>
      <div className='mb-16 relative'>
        {/* Subtle Section Glow */}
        <div className='absolute -top-10 -left-10 w-40 h-40 bg-[#166534] rounded-full blur-[100px] opacity-10 pointer-events-none' />
        
        <span className='text-[#4ADE80] font-mono text-sm tracking-[0.2em] opacity-80'>(03)</span>
        <h2 className='text-5xl md:text-6xl font-bold mt-4 tracking-tight'>Expertise</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        {/* Programming Card - Sleek List */}
        <motion.div 
          whileHover={{ borderColor: 'rgba(74, 222, 128, 0.2)' }}
          className='md:col-span-1 bg-[#161616] p-10 rounded-[32px] border border-white/5 transition-colors duration-500'
        >
          <h4 className='text-zinc-500 mb-8 uppercase tracking-[0.15em] text-xs font-bold'>Programming</h4>
          <ul className='text-2xl space-y-5 font-medium'>
            {['JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'C++'].map((skill) => (
              <li key={skill} className='flex items-center gap-3 group cursor-default'>
                <span className='w-1.5 h-1.5 rounded-full bg-[#4ADE80] opacity-0 group-hover:opacity-100 transition-opacity' />
                <span className='text-zinc-400 group-hover:text-[#4ADE80] transition-colors duration-300'>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bento Column */}
        <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          
          {/* Core Tools Card - High Contrast Bento */}
          <div className='group relative bg-[#4ADE80] p-10 rounded-[32px] text-[#111111] overflow-hidden'>
            {/* Inner Shadow / Texture for depth */}
            <div className='absolute inset-0 bg-black/5 pointer-events-none' />
            
            <h4 className='uppercase tracking-widest mb-6 font-bold opacity-60 text-xs'>Core Tools</h4>
            <div className='flex gap-8 mt-4'>
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="./homePage/vsCode.svg" 
                className='w-14 h-14 drop-shadow-lg' 
                alt="VS Code" 
              />
              <motion.img 
                whileHover={{ scale: 1.1, rotate: -5 }}
                src="./homePage/figma.svg" 
                className='w-14 h-14 drop-shadow-lg' 
                alt="Figma" 
              />
            </div>
            
            {/* Decorative Element */}
            <div className='absolute -bottom-6 -right-6 text-[#111111] opacity-10 font-bold text-8xl italic select-none'>
              UI
            </div>
          </div>

          {/* Specialized Card - Graphite Minimal */}
          <div className='bg-[#1A1A1A] p-10 rounded-[32px] border border-white/5 flex flex-col justify-between group hover:bg-[#1f1f1f] transition-all duration-500'>
            <p className='text-xl md:text-2xl text-zinc-300 leading-snug font-medium'>
              Specialized in building <span className='text-white'>high-performance</span>, responsive web applications.
            </p>
            
            <Link to="/about" className='group/link flex items-center gap-2 text-[#4ADE80] font-bold tracking-wide mt-8'>
              <span className='border-b border-[#4ADE80]/30 group-hover/link:border-[#4ADE80] transition-all pb-1'>
                Read Journey
              </span>
              <span className='group-hover/link:translate-x-1 transition-transform'>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
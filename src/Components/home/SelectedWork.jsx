import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SelectedWorks = () => {
  // Assuming these arrays exist in your component logic
 const project = ["prooject1", "prooject2", "prooject3", "prooject4"];
    const link = ["...", "...", "...", "..."]; // Links remain same
    const text = ["Cofee web-site", "Movie web-site", "UI Design", "UI Design"];

  return (
    <section className='bg-[#111111] py-32 rounded-[60px] relative overflow-hidden'>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#166534] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <div className='text-center mb-24 relative z-10'>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-[#4ADE80] font-mono tracking-widest uppercase text-sm'
        >
          (02) Selected Works
        </motion.span>
        <h2 className='text-5xl md:text-7xl font-bold mt-4 tracking-tighter text-[#F8FAF6]'>
          Crafted with <span className='text-zinc-500'>Precision.</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10 max-w-7xl mx-auto relative z-10'>
        {project.map((val, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='group relative'
          >
            {/* The "Crazy" Border Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#4ADE80]/0 via-[#4ADE80]/40 to-[#4ADE80]/0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className='relative bg-[#161616]/80 backdrop-blur-xl border border-white/5 rounded-[32px] overflow-hidden'>
              {/* Header Info */}
              <div className='p-8 flex justify-between items-end'>
                <div>
                  <p className='text-[#4ADE80] font-mono text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    View Project _
                  </p>
                  <h3 className='text-2xl font-bold tracking-tight text-[#F8FAF6]'>{text[index]}</h3>
                </div>
                <span className='text-zinc-500 font-mono text-sm'>2026</span>
              </div>

              {/* Image Container with Hover Zoom */}
              <div className='h-[450px] overflow-hidden px-6 pb-6'>
                <Link to={link[index]}>
                  <div className='w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 relative'>
                    {/* Dark Overlay that fades on hover */}
                    <div className='absolute inset-0 bg-[#111111]/20 group-hover:bg-transparent transition-colors duration-500 z-10' />
                    
                    <motion.div 
                      className='w-full h-full'
                      style={{ 
                        backgroundImage: `url('./homePage/${val}.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top'
                      }}
                      whileHover={{ scale: 1.1, rotate: 1 }}
                      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    />
                  </div>
                </Link>
              </div>

              {/* Interactive Bottom Bar */}
              <div className='absolute bottom-0 left-0 h-1 bg-[#4ADE80] w-0 group-hover:w-full transition-all duration-700 ease-in-out' />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
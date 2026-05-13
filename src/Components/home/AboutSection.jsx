import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className='py-32 px-6 md:px-10 max-w-7xl mx-auto bg-[#111111] text-[#F8FAF6]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20'>
        
        {/* Left Side: Heading */}
        <div className='relative'>
          {/* Subtle glow behind the section number */}
          <div className='absolute -top-10 -left-10 w-32 h-32 bg-[#166534] rounded-full blur-[80px] opacity-20 pointer-events-none' />
          
          <span className='text-[#4ADE80] font-mono text-lg drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]'>
            (01)
          </span>
          <h2 className='text-5xl md:text-6xl font-bold mt-4 tracking-tight'>
            About Me
          </h2>
        </div>

        {/* Right Side: Content */}
        <div className='space-y-8'>
          <p className='text-2xl md:text-3xl text-zinc-300 leading-snug'>
            I’m a dedicated <span className='text-[#4ADE80] italic'>UI designer</span> and <span className='text-white italic'>Full-stack developer</span> based in the digital realm.
          </p>
          
          <p className='text-zinc-400 text-lg md:text-xl leading-relaxed'>
            I believe that well-designed websites are built on the intersection of usability and impact. Every interaction should feel smooth, intentional, and human.
          </p>

          <Link to="/About" className="inline-block">
            <button className='mt-8 group flex items-center gap-3 text-[#4ADE80] uppercase tracking-widest text-sm font-bold transition-all duration-300'>
              <span className='border-b-2 border-transparent group-hover:border-[#4ADE80] pb-1 transition-all'>
                Learn More
              </span>
              <span className='group-hover:translate-x-2 transition-transform duration-300 text-xl'>
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
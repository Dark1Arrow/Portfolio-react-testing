import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
    // Social Links configuration
    const socials = ["LinkedIn", "Twitter", "Instagram"];
    const socialLinks = [
        "https://www.linkedin.com/in/gouatmkhanna/", 
        "https://x.com/goutamkhanna7?t=n2LvXtBdMm8Uf5281-868g&s=09", 
        "https://www.instagram.com/goutam_9893?igsh=enI2aHZ3d3hwem1y"
    ];

    return (
        <div className='bg-[#111111] min-h-screen text-white overflow-x-hidden pt-[70px] selection:bg-[#4ADE80] selection:text-[#111111]'>

            <main className='relative w-full min-h-[92vh] flex flex-col items-center justify-between py-20 px-6'>
                
                {/* Emerald Ambient Background Glow */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-[#166534] rounded-[100%] blur-[120px] opacity-20" />
                </div>

                {/* Top Section: Heading */}
                <section className='relative z-10 flex flex-col items-center text-center'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter'
                        style={{ fontFamily: "Montagu Slab, serif" }}
                    >
                        Have a project <span className='text-[#4ADE80]'>in mind?</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='mt-8 text-zinc-400 text-lg md:text-xl max-w-[500px] font-light leading-relaxed'
                    >
                        Let's bring your vision to life through strategic design and code.
                    </motion.p>
                </section>

                {/* Middle Section: CTA - Emerald Themed */}
                <section className='relative z-10 my-16'>
                    <motion.a
                        href="mailto:work.goutam910@gmail.com"
                        whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "#4ADE80", 
                            color: "#111111",
                            boxShadow: "0px 0px 25px rgba(74, 222, 128, 0.4)" 
                        }}
                        whileTap={{ scale: 0.98 }}
                        className='inline-block uppercase tracking-[0.2em] py-6 px-14 md:px-24 rounded-full border border-[#4ADE80] text-[#4ADE80] font-bold text-xs transition-all duration-300'
                    >
                        start a project
                    </motion.a>
                </section>

                {/* Bottom Section: Links & Branding */}
                <section className='relative z-10 w-full max-w-5xl flex flex-col gap-16 border-t border-zinc-800 pt-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        
                        {/* Email Column */}
                        <div className='flex flex-col items-center md:items-start'>
                            <span className='text-[11px] uppercase tracking-[0.4em] text-[#4ADE80] mb-4 font-bold'>01. Contact</span>
                            <a href="mailto:work.goutam910@gmail.com" className='text-2xl md:text-4xl font-light text-white hover:text-[#4ADE80] transition-colors duration-300'>
                                work.goutam910@gmail.com
                            </a>
                        </div>

                        {/* Social Column */}
                        <div className='flex flex-col items-center md:items-end'>
                            <span className='text-[11px] uppercase tracking-[0.4em] text-[#4ADE80] mb-4 font-bold'>02. Socials</span>
                            <div className='flex gap-6 md:gap-8'>
                                {socials.map((social, index) => (
                                    <a 
                                        key={social} 
                                        href={socialLinks[index]} 
                                        className='text-xs md:text-sm text-zinc-500 hover:text-[#4ADE80] transition-all uppercase tracking-widest border-b border-transparent hover:border-[#4ADE80]'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
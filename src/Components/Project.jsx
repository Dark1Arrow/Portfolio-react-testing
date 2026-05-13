import React, { useState } from 'react';
import { motion, useScroll, useTransform, easeInOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Components (Assuming these exist)
import Navbar from './Navbar';

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const [isActive, setIsActive] = useState(false);

    const uiProjects = ["ui1.png", "ui2.png", "ui3.png", "ui4.png"];

    const sliderSettingsUI = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        speed: 800,
        autoplay: true,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
    };

    return (
        <div className="bg-[#111111] text-white overflow-x-hidden selection:bg-[#4ADE80] selection:text-black">

            {/* --- HERO SECTION: THE ENGINE ROOM --- */}
            <section className='relative w-full h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5'>

                {/* Background Grid & Glow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#166534] opacity-20 blur-[120px] rounded-full"></div>

                <div className='relative z-10 flex flex-col items-center'>
                    {/* Animated Mechanical Pistons */}
                    <div className='flex gap-20 mb-12'>
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ y: isActive ? [0, -20, 0] : 0 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1 h-32 bg-gradient-to-b from-[#4ADE80] to-transparent opacity-50"
                            />
                        ))}
                    </div>

                    <div className='text-center space-y-4 px-6'>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='text-[#4ADE80] font-mono tracking-[0.3em] text-sm uppercase'
                        >
                            System.Initialize // 2024-2025
                        </motion.span>
                        <h1 className='text-6xl md:text-8xl font-black tracking-tighter uppercase italic'
                            style={{ fontFamily: 'Inter, sans-serif' }}>
                            Creative <span className="text-transparent border-t border-b border-white/20 px-4">Lab</span>
                        </h1>
                        <p className='text-zinc-400 max-w-md mx-auto text-lg font-light leading-relaxed'>
                            An intersection of high-performance engineering and visual storytelling.
                        </p>
                    </div>

                    {/* Industrial Toggle */}
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={`mt-16 px-8 py-3 border transition-all duration-500 flex items-center gap-4 group
                        ${isActive ? 'border-[#4ADE80] text-[#4ADE80] shadow-[0_0_20px_rgba(74,222,128,0.3)]' : 'border-zinc-700 text-zinc-400'}`}
                    >
                        <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
                            <img src="projectPage/gear.svg" className={`w-5 ${isActive ? 'invert-0' : 'opacity-30'}`} alt="" />
                        </motion.div>
                        <span className="font-mono text-xs tracking-widest uppercase">
                            {isActive ? "Engine Online" : "Start Sequence"}
                        </span>
                    </button>
                </div>
            </section>

            {/* --- PROJECT GRID: THE BLUEPRINT --- */}
            {/* --- PROJECT GRID: THE BLUEPRINT --- */}
            <section className='container mx-auto py-32 px-6'>
                {/* Stable Header with accent bar */}
                <div className='flex items-end justify-between mb-16 border-l-[1px] border-[#4ADE80]/30 pl-8'>
                    <div className="space-y-2">
                        <h2 className='text-5xl font-black uppercase tracking-tighter'>
                            Active <span className="text-[#4ADE80]">Inventory</span>
                        </h2>
                        <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-500 uppercase">
                            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                            Status: Operational // Total_Load: 04
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className='group relative bg-[#161616] border border-white/5 p-1 hover:border-[#4ADE80]/40 transition-all duration-500'
                    >
                        {/* The Internal Content Wrapper */}
                        <div className="bg-[#111111] p-8 border border-white/5">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className='text-2xl font-bold tracking-tight group-hover:text-[#4ADE80] transition-colors'>MovieFlix</h3>
                                <span className="font-mono text-[10px] text-zinc-600">MOD_001</span>
                            </div>

                            <p className='text-zinc-400 text-sm mb-8 leading-relaxed h-12'>
                                MERN stack recommendation engine powered by neural filtering.
                            </p>

                            <Link to="/figma-link" className="block relative overflow-hidden bg-zinc-900 aspect-video border border-white/5">
                                <motion.img
                                    style={{ scale }}
                                    src="projectPage/grid2.png"
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                                {/* Corner accents for blueprint look */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#4ADE80]/50"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#4ADE80]/50"></div>
                            </Link>

                            <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                                {['React', 'Tailwind'].map(tag => (
                                    <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-zinc-900 text-zinc-500 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    {/* Repeat for other items */}
                </div>
            </section>

            {/* --- SLIDER SECTION: THE GALLERY --- */}
            <section className='pb-40 relative'>
                {/* Stable Background - No Skew */}
                <div className="absolute inset-0 bg-[#4ADE80]/[0.02] border-t border-b border-white/5"></div>

                <div className='max-w-[1400px] mx-auto px-6'>
                    {/* Section Divider */}
                    <div className="flex items-center gap-4 mb-16">
                        <span className="font-mono text-[#4ADE80] text-xs tracking-[0.5em] uppercase">Visual_Archive</span>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-[#4ADE80]/20 to-transparent"></div>
                    </div>

                    <div className='relative'>
                        <Slider {...sliderSettingsUI}>
                            {uiProjects.map((img, idx) => (
                                <div key={idx} className='px-4 outline-none'>
                                    <div className='relative group h-[550px] overflow-hidden bg-[#161616] border border-white/5'>
                                        {/* Stabilized Image Layer */}
                                        <div
                                            className='absolute inset-0 bg-cover bg-top transition-transform duration-[1.5s] ease-out group-hover:scale-110'
                                            style={{ backgroundImage: `url("./projectPage/${img}")` }}
                                        />

                                        {/* Constant Vignette for Stability */}
                                        <div className=',, bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/30 opacity-80' />

                                        {/* Fixed Bottom Label */}
                                        <div className='absolute bottom-0 left-0 w-full p-10 flex justify-between items-end'>
                                            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <p className='text-[#4ADE80] font-mono text-[10px] mb-2 uppercase tracking-widest'>Case_Study_0{idx + 1}</p>
                                                <h4 className="text-2xl font-bold uppercase tracking-tighter">System Interface</h4>
                                            </div>
                                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-[#4ADE80]/50 transition-colors">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#4ADE80" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Project;
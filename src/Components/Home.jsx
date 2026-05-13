import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Animation.css';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './home/HeroSectino';
import AboutSection from './home/AboutSection';
import SelectedWork from "./home/SelectedWork"
import ExpertiseSection from './home/ExpertiseSection';

const Home = () => {
    // const project = ["prooject1", "prooject2", "prooject3", "prooject4"];
    // const link = ["...", "...", "...", "..."]; // Links remain same
    // const text = ["Cofee web-site", "Movie web-site", "UI Design", "UI Design"];
    const [activeBar, setActiveBar] = useState(false);
    const isMobile = window.innerWidth <= 1250;

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } }
    };

    return (
        <div className="bg-[#111111] text-[#E0E0E0] selection:bg-[#C1FF72] selection:text-black">
            
            {/* HERO SECTION */}
            {/* <div className='hero-section w-full min-h-screen p-4 md:p-8'>
                <motion.div 
                    className='relative overflow-hidden p-6 md:p-20 inner-hero-section bg-[#111111] w-full min-h-[90vh] border border-white/10 rounded-[40px] flex flex-col justify-between'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    
                    <nav className='w-full flex justify-between items-center z-50'>
                        <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
                            <img className='w-16 md:w-20 brightness-150' src="./homePage/logo1.svg" alt="Logo" />
                        </motion.div>

                        <ul className='hidden lg:flex gap-1 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-full'>
                            {['Home', 'Project', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item}`} 
                                          className='px-8 py-2 hover:bg-[#C1FF72] hover:text-black rounded-full transition-all duration-300 font-medium'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className='lg:hidden cursor-pointer' onClick={() => setActiveBar(true)}>
                            <img className='w-8' src="./homePage/menu.svg" alt="Menu" />
                        </div>
                    </nav>

                    
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                        <motion.div 
                            className='max-w-2xl'
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className='text-4xl md:text-7xl font-bold leading-tight tracking-tighter'>
                                <span className='text-zinc-500'>Hello! I'm</span> <br />
                                <span className='text-white'>Goutam Khanna</span> <br />
                                <span className='text-[#C1FF72]'>Creative Developer</span>
                            </h1>
                            <p className='mt-6 text-zinc-400 text-lg md:text-xl max-w-md'>
                                Blending aesthetic UI design with robust full-stack code to create high-impact digital experiences.
                            </p>
                        </motion.div>

                      
                        <motion.div 
                            className='relative'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <div className='w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#C1FF72]/20 p-4'>
                                <div className='w-full h-full rounded-full bg-[#1A1A1A] overflow-hidden border border-white/10'>
                                    <img src="./homePage/profile1.png" className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700' alt="Goutam" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    
                    <div className='flex gap-4'>
                        <Link to="/Project">
                            <button className='bg-[#C1FF72] text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform'>
                                View My Work
                            </button>
                        </Link>
                        <Link to="/Contact">
                            <button className='border border-white/20 hover:bg-white hover:text-black px-10 py-4 rounded-full font-bold transition-all'>
                                Let's Talk
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div> */}
            <HeroSection/>

            {/* ABOUT SECTION */}
            {/* <section className='py-32 px-10 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <span className='text-[#C1FF72] font-mono'>(01)</span>
                        <h2 className='text-5xl font-bold mt-4'>About Me</h2>
                    </div>
                    <div className='space-y-8'>
                        <p className='text-3xl text-zinc-300 leading-snug'>
                            I’m a dedicated <span className='text-white italic'>UI designer</span> and <span className='text-white italic'>Full-stack developer</span> based in the digital realm.
                        </p>
                        <p className='text-zinc-500 text-xl'>
                            I believe that well-designed websites are built on the intersection of usability and impact. Every interaction should feel smooth, intentional, and human.
                        </p>
                        <Link to="/About">
                            <button className='mt-8 group flex items-center gap-2 text-[#C1FF72] uppercase tracking-widest font-bold'>
                                Learn More <span className='group-hover:translate-x-2 transition-transform'>→</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section> */}
            <AboutSection/>

            {/* PROJECTS SECTION */}
            {/* <section className='bg-[#0F0F0F] py-32 rounded-[60px]'>
                <div className='text-center mb-20'>
                    <span className='text-[#C1FF72] font-mono'>(02)</span>
                    <h2 className='text-5xl font-bold mt-4'>Selected Works</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-7xl mx-auto'>
                    {project.map((val, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10 }}
                            className='group relative bg-[#161616] border border-white/5 rounded-3xl overflow-hidden'
                        >
                            <div className='p-8 flex justify-between items-center'>
                                <h3 className='text-xl font-medium tracking-wide uppercase'>{text[index]}</h3>
                                <span className='text-zinc-600'>2024</span>
                            </div>
                            <div className='h-[400px] overflow-hidden px-8 pb-8'>
                                <Link to={link[index]}>
                                    <motion.div 
                                        className='w-full h-full rounded-2xl bg-zinc-900 border border-white/10'
                                        style={{ 
                                            backgroundImage: `url('./homePage/${val}.png')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
             */}
             <SelectedWork/>

            {/* SKILLS SECTION */}
            {/* <section className='py-32 px-6 max-w-7xl mx-auto'>
                <div className='mb-16'>
                    <span className='text-[#C1FF72] font-mono'>(03)</span>
                    <h2 className='text-5xl font-bold mt-4'>Expertise</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='md:col-span-1 bg-[#111] p-10 rounded-3xl border border-white/5'>
                        <h4 className='text-zinc-500 mb-6 uppercase tracking-widest'>Programming</h4>
                        <ul className='text-2xl space-y-4 font-light text-zinc-200'>
                            <li className='hover:text-[#C1FF72] transition-colors'>JavaScript (ES6+)</li>
                            <li className='hover:text-[#C1FF72] transition-colors'>React.js</li>
                            <li className='hover:text-[#C1FF72] transition-colors'>Tailwind CSS</li>
                            <li className='hover:text-[#C1FF72] transition-colors'>C++</li>
                        </ul>
                    </div>

                    <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='bg-[#C1FF72] p-10 rounded-3xl text-black'>
                            <h4 className='uppercase tracking-widest mb-4 font-bold opacity-60'>Core Tools</h4>
                            <div className='flex gap-6 mt-4'>
                                <img src="./homePage/vsCode.svg" className='w-12 h-12' alt="VS Code" />
                                <img src="./homePage/figma.svg" className='w-12 h-12' alt="Figma" />
                            </div>
                        </div>
                        <div className='bg-[#1A1A1A] p-10 rounded-3xl border border-white/5 flex flex-col justify-between'>
                            <p className='text-xl'>Specialized in building high-performance, responsive web applications.</p>
                            <Link to="/about" className='text-[#C1FF72] underline underline-offset-8 mt-4'>Read Journey</Link>
                        </div>
                    </div>
                </div>
            </section> */}
            <ExpertiseSection/>

            {/* <Footer /> */}
        </div>
    );
};

export default Home;






// properties of nature, a fitting name would be "Obsidian Drift" or "Deep Ether."It captures that feeling of something solid yet fluid, like looking through dark water or into a midnight sky.Theme Details: Obsidian DriftElementHex CodePurposePrimary Background#05070ADeepest base color (Midnight Void)Secondary Background#080A0ESection separation and card backgroundsBioluminescent Accent#22D3EEHigh-impact highlights (buttons, links, glow)Ocean Mist#0C4A6EBlurred background glow (Deep Sea Blue)Midnight Cloud#1E1B4BBlurred background glow (Indigo/Violet)Primary Text#F8FAFCHigh-readability white for headingsSecondary Text#94A3B8Subheadings and body text (Slate Gray)Glass Borderrgba(255,255,255,0.05)
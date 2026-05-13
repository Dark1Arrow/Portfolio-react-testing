import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const links = [
        { name: 'Resume', path: 'https://drive.google.com/file/d/11fkkN6DKHBpg917mzNvm3Dt7kJYorVSC/view?usp=drivesdk', external: true },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gouatmkhanna', external: true },
        { name: 'GitHub', url: 'https://github.com/Dark1Arrow', external: true },
    ];

    return (
        <footer className='bg-[#111111] text-white py-12 px-6 md:px-12 border-t border-[#166534]/30'>
            <div className='max-w-7xl mx-auto'>
                
                {/* Top Section: CTA & Nav */}
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16'>
                    <div>
                        <h2 className='text-2xl font-light mb-2'>Ready to collaborate?</h2>
                        <Link 
                            to="/Contact" 
                            className='text-[#4ADE80] hover:text-white transition-all duration-300 underline underline-offset-8 decoration-[#166534]'
                        >
                            Get in touch
                        </Link>
                    </div>

                    <nav className='flex gap-6 sm:gap-10'>
                        {links.map((link) => (
                            link.external ? (
                                <a 
                                    key={link.name} 
                                    href={link.url || link.path} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='text-[10px] uppercase tracking-widest text-zinc-400 hover:text-[#4ADE80] transition-colors'
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link 
                                    key={link.name} 
                                    to={link.path}
                                    className='text-[10px] uppercase tracking-widest text-zinc-400 hover:text-[#4ADE80] transition-colors'
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </nav>
                </div>

                {/* Bottom Section: Credits & Live Glow */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-[9px] tracking-[0.3em] uppercase'>
                    <p>© {currentYear} GOUTAM KHANNA</p>
                    
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            {/* Small Glow Indicator */}
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#166534]"></span>
                            </span>
                            <span>Indore, IN</span>
                        </div>
                        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
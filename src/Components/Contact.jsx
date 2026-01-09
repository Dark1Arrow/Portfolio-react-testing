import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
    // Social Links configuration
    const socials = ["LinkedIn", "Twitter", "Instagram"];
    const socialLinks = ["https://www.linkedin.com/in/gouatmkhanna/", "https://x.com/goutamkhanna7?t=n2LvXtBdMm8Uf5281-868g&s=09", "https://www.instagram.com/goutam_9893?igsh=enI2aHZ3d3hwem1y"];

    return (
        <div className='bg-[#000000] min-h-screen text-[#FFFFFF] overflow-x-hidden pt-[70px]'>
            <Navbar />

            <main className='relative w-full min-h-[92vh] flex flex-col items-center justify-between py-20 px-6'>
                
                {/* Refined Ambient Background using #495057 */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-[#495057] rounded-[100%] blur-[150px] opacity-20" />
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
                        Have a project <span className='text-[#ADB5BD]'>in mind?</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='mt-8 text-[#DEE2E6] text-lg md:text-xl max-w-[500px] font-light leading-relaxed'
                    >
                        Let's bring your vision to life through strategic design and code.
                    </motion.p>
                </section>

                {/* Middle Section: CTA - High Contrast White/Black */}
                <section className='relative z-10 my-16'>
                    <motion.a
                        href="mailto:work.goutam910@gmail.com"
                        whileHover={{ scale: 1.02, backgroundColor: "#DEE2E6" }}
                        whileTap={{ scale: 0.98 }}
                        className='inline-block uppercase tracking-[0.2em] py-6 px-14 md:px-24 rounded-full bg-[#FFFFFF] text-[#000000] font-bold text-xs transition-all duration-300'
                    >
                        start a project
                    </motion.a>
                </section>

                {/* Bottom Section: Links & Branding */}
                <section className='relative z-10 w-full max-w-5xl flex flex-col gap-16 border-t border-[#495057] pt-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        
                        {/* Email Column */}
                        <div className='flex flex-col items-center md:items-start'>
                            <span className='text-[11px] uppercase tracking-[0.4em] text-[#495057] mb-4 font-bold'>01. Contact</span>
                            <a href="mailto:work.goutam910@gmail.com" className='text-2xl md:text-4xl font-light text-[#FFFFFF] hover:text-[#ADB5BD] transition-colors duration-300'>
                                work.goutam910@gmail.com
                            </a>
                        </div>

                        {/* Social Column */}
                        <div className='flex flex-col items-center md:items-end'>
                            <span className='text-[11px] uppercase tracking-[0.4em] text-[#495057] mb-4 font-bold'>02. Socials</span>
                            <div className='flex gap-6 md:gap-8'>
                                {socials.map((social,index) => (
                                    <a 
                                        key={social} 
                                        href={socialLinks[index]} 
                                        className='text-xs md:text-sm text-[#ADB5BD] hover:text-[#FFFFFF] transition-all uppercase tracking-widest'
                                        target='_blank'
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

// import React from 'react'
// import Navbar from './Navbar'

// const Contact = () => {
//     return (
//         <div>
//             <Navbar target={"contact"}/>

//             <div className='w-full h-[92vh] '>
//                 <div className=' absolute z-0 w-full h-[92vh] overflow-hidden flex justify-center '>
//                     <div className='mt-[165vw] sm:mt-[79vw] border border-[#202020] scale-[1.8] md:scale-[1.6] rounded-full mx-auto w-[200vw] h-[200vw] bg-[#151515]'></div>
//                 </div>

//                 <div className=' absolute z-10 w-full h-[92vh] flex justify-between items-center flex-col py-28 md:py-20' >
//                     <div className='flex flex-col items-center justify-center w-full text-3xl md:text-4xl' style={{ fontFamily: "montagu" }}>
//                         <div className=''>Have a project in mind?</div>
//                         <div className='mt-2 text-center text-[#8A8A8A] w-[250px] md:w-[400px]'>Let's bring it to life together!</div>
//                     </div>

//                     <div><button className='sm:hover:font-semibold sm:hover:bg-[#747474] transition-all ease-in-out duration-500 uppercase py-3 px-10 md:px-16 rounded-full bg-[#2E2E2E] text-lg'>start a project</button></div>

//                     <div className='flex flex-col gap-6'>
//                         <div >
//                             <div className='text-2xl font-extralight text-center'>1. Write me an email</div>
//                             <div className='text-lg md:text-xl font-normal text-[#8A8A8A] text-center'>micro@gmail.com</div>
//                         </div>

//                         <div >
//                             <div className='text-2xl font-extralight text-center'>2. Let’s be social</div>
//                         </div>

//                         <div className='mx-auto'><img src="homePage/logo1.svg" alt="" /></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact

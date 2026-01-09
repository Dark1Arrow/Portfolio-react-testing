// #FFFFFF
// #DEE2E6
// #ADB5BD
// #495057
// #000000


import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

// Updated Animation Variants with new timing
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const SkillTag = ({ name }) => (
    <motion.div 
        whileHover={{ scale: 1.05, backgroundColor: "#495057", color: "#FFFFFF" }}
        className="border border-[#495057] bg-transparent rounded-full py-2 px-6 text-sm md:text-base text-[#ADB5BD] transition-all duration-300"
    >
        {name}
    </motion.div>
);

const About = () => {
    const languagesSkill = ["HTML & CSS", "JavaScript", "React.js", "Next.js", "Express.js", "MongoDB","SQL", "C++", "Tailwind CSS","Python"];
    const softwareSkill = ["Figma", "Framer", "Postman", "VS Code", "Webflow", "Git","Excel","Power BI"];
    const softSkills = ["Problem Solving", "Strategic Thinking","Self-Discipline", "Teamwork", "Independent Learning" , "Communication", "Adaptability"];

    return (
        <div className="bg-[#000000] text-[#FFFFFF] min-h-screen overflow-x-hidden pt-[70px]">
            <Navbar target="about" />

            {/* --- Hero Section --- */}
            <section className="relative flex flex-col xl:flex-row items-center justify-between px-6 lg:px-20 py-20 min-h-[90vh] gap-12">
                
                {/* Visual Image Composition */}
                <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                    {/* Animated Background Box - Using #495057 for the frame */}
                    <motion.div 
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 bg-[#000000] border border-[#495057] -z-10"
                    />
                    
                    {/* Profile Image Wrapper */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[85%] h-[85%] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
                    >
                        <div 
                            className="w-full h-full"
                            style={{
                                backgroundImage: "url('./homePage/profile.png')",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                    </motion.div>

                    {/* Decorative Geometric Elements - Using #ADB5BD */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#ADB5BD] rounded-full opacity-50"
                    />
                </div>

                {/* About Text */}
                <div className="xl:w-1/2 space-y-6">
                    <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-[#ADB5BD] tracking-[0.4em] uppercase text-xs font-medium"
                    >
                        Introduction
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-7xl font-bold text-[#FFFFFF]"
                    >
                        About <span className="text-[#ADB5BD]">Me</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-[#DEE2E6] leading-relaxed max-w-2xl font-light"
                    >
                        Full-Stack Developer with experience in backend systems and data analytics, focused on building scalable web applications and data-driven solutions.
                    </motion.p>
                </div>
            </section>

            {/* --- Education & Hobbies --- */}
            <section className="px-6 lg:px-20 py-24 bg-[#000000]">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div {...fadeInUp} className="space-y-4 p-8 border-l border-[#495057]">
                        <h3 className="text-2xl font-semibold text-[#FFFFFF]">Education</h3>
                        <p className="text-[#ADB5BD] font-mono">BE – Information Technology | IET DAVV, Indore (2022–2026)</p>
                        <p className="text-[#DEE2E6] leading-relaxed">
                            Focused on web development, backend systems, data structures, and user-centric design principles, with hands-on experience in modern development tools and technologies..
                        </p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="space-y-4 p-8 border-l border-[#495057]">
                        <h3 className="text-2xl font-semibold text-[#FFFFFF]">Hobbies & Interests</h3>
                        <p className="text-[#ADB5BD] font-mono">Beyond Coding</p>
                        <p className="text-[#DEE2E6] leading-relaxed">
                            Football, reading books, and music — activities that help me stay disciplined, reflective, and creatively balanced.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Skills Section --- */}
            <section className="px-6 lg:px-20 py-32 space-y-32">
                
                {/* Languages */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-[#FFFFFF]">
                        Programming <span className="text-[#ADB5BD]">Languages</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {languagesSkill.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Software & Tools */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-[#FFFFFF]">
                        Software & <span className="text-[#ADB5BD]">Tools</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {softwareSkill.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-[#FFFFFF]">
                        Soft <span className="text-[#ADB5BD]">Skills</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {softSkills.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;


// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import { animate, easeIn, easeInOut, motion } from 'framer-motion'

// const About = () => {
//     const languagesSkill = ["HTML & CSS", "JavaScript", "React.js", "Next.js", "Express.js", "MongoDB", "Css", "Java"]

//     const softwareSkill = ["Figma", "Framer", "Postman", "VS Code", "VS Code", "Webflow"]

//     const scale = {
//         initial: {
//             scale: 0,
//             opacity: 0
//         },
//         animate: {
//             scale: 1,
//             opacity: 1
//         },
//         transition: {
//             duration: 1.5,
//             ease: easeInOut
//         }
//     }
//     return (
//         <div>
//             <Navbar target={"about"}/>

//             <div className='lg:p-20 intro-section w-full min-h-[90vh]'>
//                 <div className='flex justify-between md:px-10 pb-20 xl:p-20 items-center flex-col xl:flex-row w-full h-full'>
//                     <div className=' lg:scale-75 md:scale-[.60] scale-[.50] min-w-[450px] h-[450px] md:h-[550px] xl:h-[600px]'>
//                         <div className='absolute z-0 flex min-w-[450px] h-[580px] justify-start items-end'>
//                             <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1.5 , delay: 1.5}} className='w-[260px] h-[260px] bg-[#181818]'></motion.div>
//                         </div>

//                         <div className='absolute z-10 min-w-[450px] h-[600px] p-10'>
//                             <div className='w-16 h-[500px]'>
//                                 <div className='flex w-full justify-between'>
//                                     <motion.div initial={{ height: 2 }} animate={{ height: 330 }}
//                                         transition={{ duration: 1.5, ease: easeIn }} className='w-[2px] h-[330px] bg-[#8A8A8A]'>
//                                         <motion.div initial={{ ...scale.initial, x: -7, y: -15 }} animate={{ ...scale.animate, y: 0 }} transition={{ ...scale.transition }} className='w-[15px] h-[15px] rounded-full bg-white -translate-x-[7px]'></motion.div>
//                                     </motion.div>
//                                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} className='w-[2px] h-[330px] bg-[#8A8A8A]'>
//                                         <motion.div initial={{ ...scale.initial, x: -7, y: -15 }} animate={{ ...scale.animate, y: 0 }} transition={{ ...scale.transition }} className='w-[15px] h-[15px] rounded-full bg-white -translate-x-[7px]'></motion.div>
//                                     </motion.div>
//                                 </div>

//                                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} className=' h-[40px] border-[3px] border-t-0 border-l-0 border-r-0 border-[#8A8A8A]'>
//                                     <div className='w-[15px] h-[15px] rounded-full bg-white translate-y-[30px] -translate-x-[7px]'></div>
//                                 </motion.div>

//                                 <div className='h-[90px] w-[350px] flex justify-between'>
//                                     <motion.div initial={{ width: 2, opacity: 0 }} animate={{ width: 90, opacity: 1 }}
//                                         transition={{ duration: 1.5, ease: easeIn }} className='h-full w-[150px] mt-10 border-[2px] border-t-0 border-r-0 border-[#8A8A8A]'>
//                                         <motion.div initial={{ height: 2 }} animate={{ height: 70 }}
//                                     transition={{ duration: 1.5, ease: easeIn }} className='h-[70px] w-[62px] border-r-[2px] border-[#8A8A8A]'>
//                                             <motion.div initial={{ ...scale.initial, x: 54 , y: -20 }} animate={{ ...scale.animate, y:0}} transition={{ ...scale.transition }} className='w-[15px] h-[15px]  bg-white translate-x-[54px]'></motion.div>
//                                         </motion.div>
//                                     </motion.div>
//                                     <motion.div initial={{width: 2 }} animate={{width:160 }}
//                                     transition={{ duration: 1.5, ease: easeIn }} className='h-full w-[160px] mt-10 border-b-[2px] border-[#8A8A8A]'>
//                                         <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1.5, delay: 1.5 }} className='w-[15px] h-[15px] rounded-full bg-white translate-y-[80px] translate-x-[150px]'></motion.div>
//                                     </motion.div>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className='absolute z-20 min-w-[450px] h-[600px] flex p-10'>
//                             <div className=' w-16 h-[500px]'>
//                                 <motion.div initial={{ height: 2 }} animate={{ height: "97%" }}
//                                     transition={{ duration: 1.5, ease: easeIn}} className='ml-auto mr-4 w-[25px] h-[480px] bg-[#393939]'>
//                                     <motion.div initial={{ ...scale.initial, x: -7, y: -45 }} animate={{ ...scale.animate, y: -35 }} transition={{ ...scale.transition }} className='w-[40px] h-[40px] rounded-full bg-white -translate-x-[7px] -translate-y-[35px]'></motion.div>
//                                 </motion.div>
//                             </div>
//                             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay:0.5}} className='ml-[20px] w-[300px] h-[480px]'
//                                 style={{
//                                     backgroundImage: "url('./homePage/profile.png')",
//                                     backgroundPosition: "center",
//                                     backgroundSize: "cover",
//                                 }}></motion.div>
//                             <div className=' h-[500px]'>
//                                 <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay:0.5}} className='ml-auto mr-4 w-[25px] h-[480px] bg-[#393939]'>
//                                     <motion.div initial={{ ...scale.initial, x: -12, y: 450 }} animate={{ ...scale.animate, }} transition={{ ...scale.transition }} className='w-[40px] h-[40px] rounded-full bg-white -translate-x-[12px] translate-y-[450px]'></motion.div>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className=' xl:w-[50vw] w-[100vw] md:w-[90vw] lg:h-[450px] xl:h-[500px] flex justify-center items-center'>
//                         <div className=' absolute  xl:w-[50vw] w-[100vw] md:w-[90vw] lg:h-[400px] hidden lg:flex'>
//                             <div className='flex justify-between'>
//                                 <div className=' mx-auto bg-[#242424] w-[20px] h-[150px]'></div>
//                                 <div className=' mx-auto bg-[#242424] h-[20px] w-[150px]'></div>
//                             </div>
//                             <div className='flex flex-row-reverse items-end justify-between mt-auto ml-auto'>
//                                 <div className=' bg-[#242424] w-[20px] h-[150px]'></div>
//                                 <div className=' bg-[#242424] h-[20px] w-[150px]'></div>
//                             </div>
//                         </div>

//                         <div className=' h-[60%] w-[90%] lg:w-[80%] flex flex-col justify-center gap-10'>
//                             <div className='text-2xl capitalize'>About me</div>
//                             <div className='text-lg capitalize lg:pr-20'>Passionate web developer and UI designer, blending creativity with modern tech to build responsive and user-friendly websites. Always learning, always improving.</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='education-section w-full  xl:p-20 my-20 flex-col gap-20 lg:flex-row flex justify-center items-center lg:justify-between '>
//                 <div className='w-[90%] lg:w-[45%] justify-center'>
//                     <div className='px-5 md:px-20 md:py-5 capitalize text-3xl flex justify-center items-center'>Education</div>
//                     <div className=' text-[#D2D0D0] py-10 px-5 md:px-20 text:lg flex justify-center items-center text-center '>
//                         <div>Pursuing a BE in Information Technology at IET DAVV (2022-2026), focusing on web development, UI/UX design, and modern technologies.</div>
//                     </div>
//                 </div>
//                 <div className='w-[90%] lg:w-[45%] justify-center'>
//                     <div className='px-5 md:px-20 md:py-5 capitalize text-3xl flex justify-center items-center'>Hobbies &  <span className='text-[#8A8A8A] px-2'> Interests</span></div>
//                     <div className=' text-[#D2D0D0] py-10 px-5 md:px-20 text-lg flex justify-center items-center  text-center'>
//                         <div>I enjoy playing sports like basketball, volleyball, and football, along with a strong passion for design and exploring new creative ideas in web development.</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="skill-section my-32 sm:my-40">
//                 <div className='mb-[200px] sm:mb-[350px] xl:mb-[400px]'>
//                     <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize text-3xl'>Programming <span className='text-[#8A8A8A]'>Languages</span></div>
//                     <div className='mx-auto py-10 w-[300px] sm:w-[600px] lg:w-[900px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
//                         {languagesSkill.map((data, index) => (
//                             <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg text-[#D2D0D0]'>{data}</div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className='mb-[200px] sm:mb-[350px] xl:mb-[400px]'>
//                     <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize text-3xl'>Programs & <span className='text-[#8A8A8A]'>Softwares</span></div>
//                     <div className='mx-auto py-10 w-[300px] sm:w-[600px] lg:w-[700px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
//                         {softwareSkill.map((data, index) => (
//                             <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg text-[#D2D0D0]'>{data}</div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className='mb-[300px]'>
//                     <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize  text-3xl'>Programs & <span className='text-[#8A8A8A]'>Softwares</span></div>

//                     <div className='w-[95vw] mx-auto flex justify-center flex-wrap items-center'>
//                         <div className='mt-36'>
//                             <div className='m-auto w-[300px] sm:w-[400px] text-center py-5 capitalize  text-3xl '>Soft</div>
//                             <div className='mx-auto py-5 md:py-10 w-[300px] sm:w-[600px] lg:w-[700px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
//                                 {softwareSkill.map((data, index) => (
//                                     <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg  text-[#D2D0D0]'>{data}</div>
//                                 ))}
//                             </div>
//                         </div >
//                         <div className='mt-36'>
//                             <div className='m-auto w-[300px] sm:w-[400px] text-center py-5 capitalize  text-3xl '>Hard</div>
//                             <div className='mx-auto py-5 md:py-10 w-[300px] sm:w-[600px] lg:w-[800px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
//                                 {softwareSkill.map((data, index) => (
//                                     <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg text-[#D2D0D0]'>{data}</div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     )
// }

// export default About

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

// Updated Animation Variants
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const SkillTag = ({ name }) => (
    <motion.div 
        whileHover={{ scale: 1.05, backgroundColor: "#4ADE80", color: "#111111", borderColor: "#4ADE80" }}
        className="border border-zinc-700 bg-[#111111] rounded-full py-2 px-6 text-sm md:text-base text-zinc-400 transition-all duration-300 cursor-default"
    >
        {name}
    </motion.div>
);

const About = () => {
    const languagesSkill = ["HTML & CSS", "JavaScript", "React.js", "Next.js", "Express.js", "MongoDB","SQL", "C++", "Tailwind CSS","Python"];
    const softwareSkill = ["Figma", "Framer", "Postman", "VS Code", "Webflow", "Git","Excel","Power BI"];
    const softSkills = ["Problem Solving", "Strategic Thinking","Self-Discipline", "Teamwork", "Independent Learning" , "Communication", "Adaptability"];

    return (
        <div className="bg-[#111111] text-white min-h-screen overflow-x-hidden pt-[70px] selection:bg-[#4ADE80] selection:text-[#111111]">

            {/* --- Hero Section --- */}
            <section className="relative flex flex-col xl:flex-row items-center justify-between px-6 lg:px-20 py-20 min-h-[90vh] gap-12">
                
                {/* Visual Image Composition */}
                <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                    {/* Animated Background Box - Emerald Glow Effect */}
                    <motion.div 
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute inset-0 bg-[#111111] border border-[#4ADE80]/30 shadow-[0_0_50px_-12px_rgba(74,222,128,0.2)] -z-10"
                    />
                    
                    {/* Profile Image Wrapper */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-[85%] h-[85%] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-zinc-800"
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

                    {/* Decorative Elements - Emerald Accents */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#4ADE80] rounded-full opacity-40"
                    />
                </div>

                {/* About Text */}
                <div className="xl:w-1/2 space-y-6">
                    <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-[#4ADE80] tracking-[0.4em] uppercase text-xs font-semibold"
                    >
                        Introduction
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-7xl font-bold text-white"
                    >
                        About <span className="text-[#4ADE80]">Me</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light"
                    >
                        Full-Stack Developer with experience in backend systems and data analytics, focused on building <span className="text-white font-medium">scalable web applications</span> and data-driven solutions.
                    </motion.p>
                </div>
            </section>

            {/* --- Education & Hobbies --- */}
            <section className="px-6 lg:px-20 py-24 bg-[#111111]">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div {...fadeInUp} className="space-y-4 p-8 border-l-2 border-[#166534]">
                        <h3 className="text-2xl font-semibold text-white">Education</h3>
                        <p className="text-[#4ADE80] font-mono text-sm">BE – Information Technology | IET DAVV, Indore (2022–2026)</p>
                        <p className="text-zinc-400 leading-relaxed">
                            Focused on web development, backend systems, data structures, and user-centric design principles.
                        </p>
                    </motion.div>

                    <motion.div {...fadeInUp} className="space-y-4 p-8 border-l-2 border-[#166534]">
                        <h3 className="text-2xl font-semibold text-white">Hobbies & Interests</h3>
                        <p className="text-[#4ADE80] font-mono text-sm">Beyond Coding</p>
                        <p className="text-zinc-400 leading-relaxed">
                            Football, reading books, and music — activities that help me stay disciplined, reflective, and creatively balanced.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Skills Section --- */}
            <section className="px-6 lg:px-20 py-32 space-y-32">
                
                {/* Languages */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-white">
                        Programming <span className="text-[#4ADE80]">Languages</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {languagesSkill.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Software & Tools */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-white">
                        Software & <span className="text-[#4ADE80]">Tools</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {softwareSkill.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="text-center">
                    <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-12 text-white">
                        Soft <span className="text-[#4ADE80]">Skills</span>
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {softSkills.map((skill, i) => (
                            <SkillTag key={i} name={skill} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;


//  {/* --- Bento Grid: Education & Interests --- */}
//         <section className="grid md:grid-cols-2 gap-6">
//           <motion.div {...fadeInUp} className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl group hover:border-[#4ADE80]/30 transition-colors">
//             <h3 className="text-2xl font-bold mb-4">Education</h3>
//             <p className="text-[#4ADE80] font-mono text-sm mb-4">2022 — 2026</p>
//             <h4 className="text-xl text-[#F8FAF6] mb-2">BE in Information Technology</h4>
//             <p className="text-zinc-400 leading-relaxed">
//               Currently pursuing my degree at IET DAVV, Indore. Focused on data structures, algorithmic efficiency, and modern cloud architecture.
//             </p>
//           </motion.div>

//           <motion.div {...fadeInUp} className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl group hover:border-[#4ADE80]/30 transition-colors">
//             <h3 className="text-2xl font-bold mb-4">Beyond the Code</h3>
//             <p className="text-[#4ADE80] font-mono text-sm mb-4">Lifestyle // Hobbies</p>
//             <p className="text-zinc-400 leading-relaxed">
//               When I'm not pushing pixels, you can find me on the football field, exploring strategic non-fiction, or experimenting with new music genres. I believe discipline in sport translates to discipline in code.
//             </p>
//           </motion.div>
//         </section>

//         {/* --- Skills Matrix Section --- */}
//         <section className="py-20 space-y-16">
//           <div className="text-center">
//             <h2 className="text-3xl md:text-5xl font-bold">The Technical <span className="text-[#4ADE80]">Arsenal</span></h2>
//             <div className="h-1 w-20 bg-[#4ADE80] mx-auto mt-4 rounded-full" />
//           </div>

//           <div className="space-y-12">
//             {[
//               { title: "Languages & Frameworks", skills: languagesSkill },
//               { title: "Software & Tools", skills: softwareSkill },
//               { title: "Soft Skills", skills: softSkills }
//             ].map((category, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="space-y-6"
//               >
//                 <h4 className="text-zinc-500 font-mono text-sm uppercase tracking-widest text-center">{category.title}</h4>
//                 <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//                   {category.skills.map((skill, i) => (
//                     <SkillTag key={i} name={skill} />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { animate, easeIn, easeInOut, motion } from 'framer-motion'

const About = () => {
    const languagesSkill = ["HTML & CSS", "JavaScript", "React.js", "Next.js", "Express.js", "MongoDB", "Css", "Java"]

    const softwareSkill = ["Figma", "Framer", "Postman", "VS Code", "VS Code", "Webflow"]

    const scale = {
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            duration: 1.5,
            ease: easeInOut
        }
    }
    return (
        <div>
            <Navbar target={"about"}/>

            <div className='lg:p-20 intro-section w-full min-h-[90vh]'>
                <div className='flex justify-between md:px-10 pb-20 xl:p-20 items-center flex-col xl:flex-row w-full h-full'>
                    <div className='xl:scale-100 lg:scale-75 md:scale-[.60] scale-[.50] min-w-[450px] h-[450px] md:h-[550px] xl:h-[600px]'>
                        <div className='absolute z-0 flex min-w-[450px] h-[580px] justify-start items-end'>
                            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1.5 , delay: 1.5}} className='w-[260px] h-[260px] bg-[#181818]'></motion.div>
                        </div>

                        <div className='absolute z-10 min-w-[450px] h-[600px] p-10'>
                            <div className='w-16 h-[500px]'>
                                <div className='flex w-full justify-between'>
                                    <motion.div initial={{ height: 2 }} animate={{ height: 330 }}
                                        transition={{ duration: 1.5, ease: easeIn }} className='w-[2px] h-[330px] bg-[#8A8A8A]'>
                                        <motion.div initial={{ ...scale.initial, x: -7, y: -15 }} animate={{ ...scale.animate, y: 0 }} transition={{ ...scale.transition }} className='w-[15px] h-[15px] rounded-full bg-white -translate-x-[7px]'></motion.div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} className='w-[2px] h-[330px] bg-[#8A8A8A]'>
                                        <motion.div initial={{ ...scale.initial, x: -7, y: -15 }} animate={{ ...scale.animate, y: 0 }} transition={{ ...scale.transition }} className='w-[15px] h-[15px] rounded-full bg-white -translate-x-[7px]'></motion.div>
                                    </motion.div>
                                </div>

                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} className=' h-[40px] border-[3px] border-t-0 border-l-0 border-[#8A8A8A]'>
                                    <div className='w-[15px] h-[15px] rounded-full bg-white translate-y-[30px] -translate-x-[7px]'></div>
                                </motion.div>

                                <div className='h-[90px] w-[350px] flex justify-between'>
                                    <motion.div initial={{ width: 2, opacity: 0 }} animate={{ width: 90, opacity: 1 }}
                                        transition={{ duration: 1.5, ease: easeIn }} className='h-full w-[150px] mt-10 border-[2px] border-t-0 border-r-0 border-[#8A8A8A]'>
                                        <motion.div initial={{ height: 2 }} animate={{ height: 70 }}
                                    transition={{ duration: 1.5, ease: easeIn }} className='h-[70px] w-[62px] border-r-[2px] border-[#8A8A8A]'>
                                            <motion.div initial={{ ...scale.initial, x: 54 , y: -20 }} animate={{ ...scale.animate, y:0}} transition={{ ...scale.transition }} className='w-[15px] h-[15px]  bg-white translate-x-[54px]'></motion.div>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div initial={{width: 2 }} animate={{width:160 }}
                                    transition={{ duration: 1.5, ease: easeIn }} className='h-full w-[160px] mt-10 border-b-[2px] border-[#8A8A8A]'>
                                        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1.5, delay: 1.5 }} className='w-[15px] h-[15px] rounded-full bg-white translate-y-[80px] translate-x-[150px]'></motion.div>
                                    </motion.div>
                                </div>

                            </div>
                        </div>

                        <div className='absolute z-20 min-w-[450px] h-[600px] flex p-10'>
                            <div className=' w-16 h-[500px]'>
                                <motion.div initial={{ height: 2 }} animate={{ height: "97%" }}
                                    transition={{ duration: 1.5, ease: easeIn }} className='ml-auto mr-4 w-[25px] h-[480px] bg-[#393939]'>
                                    <motion.div initial={{ ...scale.initial, x: -7, y: -45 }} animate={{ ...scale.animate, y: -35 }} transition={{ ...scale.transition }} className='w-[40px] h-[40px] rounded-full bg-white -translate-x-[7px] -translate-y-[35px]'></motion.div>
                                </motion.div>
                            </div>
                            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay:0.5}} className='ml-[20px] w-[300px] h-[480px]'
                                style={{
                                    backgroundImage: "url('/homePage/profile.png')",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}></motion.div>
                            <div className=' h-[500px]'>
                                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2, delay:0.5}} className='ml-auto mr-4 w-[25px] h-[480px] bg-[#393939]'>
                                    <motion.div initial={{ ...scale.initial, x: -12, y: 450 }} animate={{ ...scale.animate, }} transition={{ ...scale.transition }} className='w-[40px] h-[40px] rounded-full bg-white -translate-x-[12px] translate-y-[450px]'></motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className=' xl:w-[50vw] w-[100vw] md:w-[90vw] lg:h-[450px] xl:h-[500px] flex justify-center items-center'>
                        <div className=' absolute  xl:w-[50vw] w-[100vw] md:w-[90vw] lg:h-[450px] xl:h-[500px] hidden lg:flex'>
                            <div className='flex justify-between'>
                                <div className=' mx-auto bg-[#242424] w-[25px] h-[200px]'></div>
                                <div className=' mx-auto bg-[#242424] h-[25px] w-[200px]'></div>
                            </div>
                            <div className='flex flex-row-reverse items-end justify-between mt-auto ml-auto'>
                                <div className=' bg-[#242424] w-[25px] h-[200px]'></div>
                                <div className=' bg-[#242424] h-[25px] w-[200px]'></div>
                            </div>
                        </div>

                        <div className=' h-[60%] w-[90%] lg:w-[80%] flex flex-col justify-center gap-10'>
                            <div className='text-3xl capitalize'>About me</div>
                            <div className='text-xl capitalize lg:pr-20'>Passionate web developer and UI designer, blending creativity with modern tech to build responsive and user-friendly websites. Always learning, always improving.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='education-section w-full  xl:p-20 my-20 flex-col gap-20 lg:flex-row flex justify-center items-center lg:justify-between '>
                <div className='w-[90%] lg:w-[45%] justify-center'>
                    <div className='px-5 md:px-20 md:py-5 capitalize text-3xl md:text-4xl flex justify-center items-center'>Education</div>
                    <div className=' text-[#D2D0D0] py-10 px-5 md:px-20 text:lg md:text-xl flex justify-center items-center text-center '>
                        <div>Pursuing a BE in Information Technology at IET DAVV (2022-2026), focusing on web development, UI/UX design, and modern technologies.</div>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[45%] justify-center'>
                    <div className='px-5 md:px-20 md:py-5 capitalize text-3xl md:text-4xl flex justify-center items-center'>Hobbies &  <span className='text-[#8A8A8A] px-2'> Interests</span></div>
                    <div className=' text-[#D2D0D0] py-10 px-5 md:px-20 text-lg md:text-xl flex justify-center items-center  text-center'>
                        <div>I enjoy playing sports like basketball, volleyball, and football, along with a strong passion for design and exploring new creative ideas in web development.</div>
                    </div>
                </div>
            </div>

            <div className="skill-section my-32 sm:my-40">
                <div className='mb-[200px] sm:mb-[350px] xl:mb-[400px]'>
                    <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize text-3xl md:text-4xl'>Programming <span className='text-[#8A8A8A]'>Languages</span></div>
                    <div className='mx-auto py-10 w-[300px] sm:w-[600px] lg:w-[900px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
                        {languagesSkill.map((data, index) => (
                            <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg md:text-xl text-[#D2D0D0]'>{data}</div>
                        ))}
                    </div>
                </div>

                <div className='mb-[200px] sm:mb-[350px] xl:mb-[400px]'>
                    <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize text-3xl md:text-4xl'>Programs & <span className='text-[#8A8A8A]'>Softwares</span></div>
                    <div className='mx-auto py-10 w-[300px] sm:w-[600px] lg:w-[700px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
                        {softwareSkill.map((data, index) => (
                            <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg md:text-xl text-[#D2D0D0]'>{data}</div>
                        ))}
                    </div>
                </div>

                <div className='mb-[300px]'>
                    <div className='m-auto w-[300px] sm:w-[400px] text-center md:py-5 capitalize  text-3xl md:text-4xl'>Programs & <span className='text-[#8A8A8A]'>Softwares</span></div>

                    <div className='w-[95vw] mx-auto flex justify-center flex-wrap items-center'>
                        <div className='mt-36'>
                            <div className='m-auto w-[300px] sm:w-[400px] text-center py-5 capitalize  text-3xl md:text-4xl'>Soft</div>
                            <div className='mx-auto py-5 md:py-10 w-[300px] sm:w-[600px] lg:w-[700px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
                                {softwareSkill.map((data, index) => (
                                    <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg md:text-xl text-[#D2D0D0]'>{data}</div>
                                ))}
                            </div>
                        </div >
                        <div className='mt-36'>
                            <div className='m-auto w-[300px] sm:w-[400px] text-center py-5 capitalize  text-3xl md:text-4xl'>Hard</div>
                            <div className='mx-auto py-5 md:py-10 w-[300px] sm:w-[600px] lg:w-[800px] gap-5 lg:gap-10 flex flex-wrap justify-center'>
                                {softwareSkill.map((data, index) => (
                                    <div key={index} className='border-2 rounded-full border-[#555555] py-2 px-8 text-lg md:text-xl text-[#D2D0D0]'>{data}</div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About

import React, { useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Animation.css'
import { delay, easeInOut, motion, useScroll, useTransform } from 'framer-motion'


const Home = () => {
    const project = ["prooject1", "prooject2", "prooject3", "prooject4"]
    const link = ["https://www.figma.com/design/ukLalFk4uZdHdjbuDxbzyJ/Untitled?node-id=358-64&node-type=canvas&t=IdaJVFYcKoll0eec-0", "https://www.figma.com/design/BfEDbeQCK6Km2sN0VTRSlN/Movie-Recommendation?t=aUzEfpH8WdPYe0v6-0", "https://www.figma.com/design/rZ5Lx1armeBsGule01OSkz/Untitled?t=aUzEfpH8WdPYe0v6-0", "https://www.figma.com/design/0eVXYCIQHGxyEgtn5tx8V9/Untitled-(Copy)-(Copy)?node-id=0-1&node-type=canvas&t=aUzEfpH8WdPYe0v6-0"]
    const text = ["Cofee web-site", "Movie web-site", "ui design", "ui design"]
    const [activeBar, setActiveBar] = useState(false)
    const isMobile = window.innerWidth <= 1250;

    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

    const paretsVarient = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delay: 0.5, duration: 1 }
        }
    }

    const childVarient = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { ease: easeInOut, duration: 1 }
        }
    }


    return (
        <div>
            <div className='hero-section w-full h-screen md:p-5'>
                <motion.div className='p-5 md:py-10 md:px-20 inner-hero-section bg-white w-full max-h-auto min-h-full border-2 border-[#414638] md:rounded-[30px] flex flex-col justify-between '
                    style={{
                        backgroundImage: "url('/homePage/hero-bg.png')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    initial={{ backgroundSize: isMobile ? "500%" : "150%" }}
                    animate={{ backgroundSize: isMobile ? "350%" : "100%" }}
                    transition={{ duration: 1, delay: 0.5, ease: easeInOut }}>

                    <nav className=' w-full flex justify-between overflow-hidden '>
                        <div className={`${activeBar ? '-translate-y-[0vh]' : "-translate-y-[100vh]"} lg:hidden flex flex-col absolute z-30 top-0 right-0 w-[100vw] h-[100vh] bg-[#181818] justify-center items-center`}
                            style={{
                                transition: "transform 0.75s ease-in-out"
                            }}>
                            <div className={`absolute top-10 right-10`}><img onClick={() => setActiveBar(false)} src="homePage/cross.svg" alt="" /></div>
                            <ul className='uppercase flex flex-col gap-10 text-5xl text-center' >
                                <div className=' sm:hover:text-[#8B8B8B] transition-all ease-in-out duration-500  textAnimation'><Link to="/">Home</Link></div>
                                <div className=' sm:hover:text-[#8B8B8B] transition-all ease-in-out duration-500  textAnimation'><Link to="/Project">project</Link></div>
                                <div className=' sm:hover:text-[#8B8B8B] transition-all ease-in-out duration-500  textAnimation'><Link to="/About">About</Link></div>
                                <div className=' sm:hover:text-[#8B8B8B] transition-all ease-in-out duration-500  textAnimation'><Link to="/Contact">Contact</Link></div>
                            </ul>
                        </div>

                        <motion.div className='my-auto'
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1, ease: easeInOut }}
                        ><img src="/homePage/logo.svg" alt="" /></motion.div>


                        <motion.div className=' my-auto lg:flex hidden px-10 py-5 rounded-full bg-[#00000035] backdrop-blur-[5px]  border border-[#555216] '
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1, ease: easeInOut }}>
                            <ul className='flex font-semibold text-xl text-white'>
                                <div className='font-bold text-[#000000] border-r-2 border-white px-10'><Link to="/">Home</Link></div>
                                <div className=' sm:hover:text-[#1E2024] transition-all ease-in-out duration-500  border-r-2 border-white px-10'>                <div><Link to="/Project">project</Link></div>
                                </div>
                                <div className=' sm:hover:text-[#1E2024] transition-all ease-in-out duration-500  border-r-2 border-white px-10'><Link to="/About">About</Link></div>
                                <div className=' sm:hover:text-[#1E2024] transition-all ease-in-out duration-500   px-10'><Link to="/Contact">Contact</Link></div>
                            </ul>
                        </motion.div>

                        <div className='lg:hidden my-auto cursor-pointer'><img onClick={() => setActiveBar(true)} src="/homePage/menu.svg" alt="" /></div>
                    </nav>

                    <div className='hero-mid w-full gap-10 lg:gap-0 flex justify-between flex-col-reverse lg:flex-row'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: easeInOut, delay: 0.2 }}
                            className='my-auto'>
                            <motion.div className='hero-mid-left bg-[#00000035] w-full lg:w-[40vw] font-medium lg:text-4xl sm:text-3xl text-2xl lg:p-14 p-5 sm:p-10 backdrop-blur-[5px] rounded-[30px] border border-[#555216] text-center ' style={{
                                letterSpacing: 4,
                                wordSpacing: 15,
                            }}
                                variants={paretsVarient}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.span variants={childVarient} className=' text-[#8A8A8A]'>Hello! I'm </motion.span>
                                <motion.span variants={childVarient} className='text-white'>Goutam Khanna </motion.span><motion.span variants={childVarient} className='text-[#8A8A8A]'>a </motion.span>
                                <motion.span variants={childVarient} className='text-white'>Creative Devloper </motion.span><motion.span variants={childVarient} className='text-[#8A8A8A]'>Who loves Bleanding </motion.span>
                                <motion.span variants={childVarient} className='text-white'>Desgin </motion.span><motion.span variants={childVarient} className='text-[#8A8A8A]'>With Code.</motion.span>
                            </motion.div>
                        </motion.div>

                        <div className='m-auto flex justify-center'>
                            < motion.div className='w-[250px] sm:w-[300px] lg:w-[450px] h-[250px] sm:h-[300px] lg:h-[450px] border rounded-full flex justify-around border-[#555216] bg-[#00000035] backdrop-blur-[5px]'
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeInOut", }}>
                                <motion.div className=' w-[200px] sm:w-[250px] lg:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] border rounded-full m-auto border-[#555216] drop-shadow-2xlxl' style={{
                                    backgroundImage: "url('/homePage/profile1.png')",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                    initial={{ scale: 1.3, opacity: 1 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.5, ease: "easeInOut", }}
                                ></motion.div>
                            </ motion.div>
                        </div>
                    </div>

                    <div className="overflow-hidden hero-buttons xl:pb-20 mt-5  xl:w-[40vw] ">
                        <div className=' overflow-hidden flex justify-between gap-5'>
                            <Link to="/Project"><motion.button className='transition-all ease-in-out duration-500 sm:hover:bg-black bg-[#00000090] scale-0 backdrop-blur-[5px] w-fit m-auto text-white font-normal text-xl xl:text-2xl px-14 py-5  rounded-full' style={{
                                letterSpacing: 4,
                                wordSpacing: 10,
                            }}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1, ease: easeInOut }}
                            >View My Work</motion.button></Link>

                            <Link to="/Contact"> <motion.button className=' transition-all ease-in-out duration-500 sm:hover:bg-[#1e1f1e]  lg:flex hidden w-fit m-auto  text-white font-normal text-xl xl:text-2xl px-20 py-5 border border-[#555216] bg-[#ffffff15] backdrop-blur-[5px] rounded-full' style={{
                                letterSpacing: 4,
                                wordSpacing: 10,
                            }}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1, ease: easeInOut }}
                            >Contact me</motion.button></Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='my-[100px] about-section p-10 sm:p-20'>
                <div className=' w-[70vw] m-auto text-white grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-2 '>
                    <div className='flex flex-col gap-5 sm:order-1 row-span-1'>
                        <div className='text-[#8A8A8A] text-xl'>(01)</div>
                        <div className='text-3xl'>About Us</div>
                    </div>
                    <div className='sm:order-2 row-span-6 flex md:justify-start justify-end items-center md:items-start'>
                        <div className='xl:w-[90%] w-full text-[#8A8A8A] text-3xl sm:text-4xl'>I’m a dedicated <span className='text-white'>UI designer</span> , <span className='text-white'>web designer</span> and <span className='text-white'>Full-stack developer</span> with a strong foundation in both <span className='text-white'>frontend</span> and <span className='text-white'>backend</span> technologies. </div>
                    </div>
                    <div className='sm:order-3 row-span-6 sm:mt-auto'>
                        <div className='xl:w-[70%] w-full text-[#8A8A8A] '>I believe that a well-designed website is not just about aesthetics but also about usability and impact. My focus is on crafting visually stunning websites that are both engaging and intuitive, ensuring that every user interaction feels smooth and natural.</div>
                    </div>
                    <div className='flex sm:order-4 pt-5 md:pt-0 row-span-1 justify-center md:justify-start'>
                        <Link to="/About"><button className='duration-500 sm:hover:bg-white sm:hover:text-black sm:hover:scale-110 transition-all ease-in-out border-2 rounded-full w-48 h-10 my-auto text-xl'>Learn more</button></Link>
                    </div>
                </div>
            </div>

            <div className='project-section w-full bg-[#151515] p-10 sm:p-20'>
                <div className='flex flex-col gap-5 w-40 m-auto text-center'>
                    <div className='text-[#8A8A8A] text-xl'>(02)</div>
                    <div className='text-3xl'>Projects</div>
                </div>

                <div className=' pt-20 lg:pt-40 flex justify-around flex-wrap gap-20 mx-auto w-[80vw]'>
                    {project.map((val, index) => (
                        <motion.div key={index} className='mb-5 lg:mb-20 h-[40vh] lg:h-[50vh] w-[600px] bg-[#1D1D1D] rounded-[15px]'>
                            <div className=' capitalize px-10 text-2xl font-normal flex justify-start items-center h-[20%] md:h-[18%] w-full bg-[#242424] rounded-t-[15px]'>
                                {text[index]}
                            </div>
                            <div className='mx-auto overflow-hidden w-[100%]  h-[80%] md:h-[82%] p-4 md:p-5'>
                                <Link to={link[index]}><div className='overflow-hidden mx-auto w-[100%] h-[95%]  mb-auto'>
                                    <div className=''></div>
                                    <motion.div className='cursor-pointer projectOuter mx-auto w-[95%] h-[100%]  mb-auto bg-black'
                                        style={{
                                            backgroundImage: `url('/homePage/${val}.png')`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            scale: scale,
                                        }}>
                                        <motion.div className=' hidden projectInner w-full h-full bg-[#00000082] backdrop-blur-[2px] dm:flex justify-start items-end pb-14'>
                                            <motion.div className='hover-project w-[80%] sm:w-[60%] h-14 items-center px-5 md:px-10 rounded-full bg-[#111111] flex justify-end gap-5'>
                                                <div className='capitalize'>see the project</div>
                                                <img src="homePage/arrow.svg" alt="" />
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div></Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className='m-auto mt-20 w-[200px] h-[50px]'>
                    <Link to="/Project"><button className='duration-500 sm:hover:bg-white sm:hover:text-black sm:hover:scale-110 transition-all ease-in-out bg-[#1E1E1E] w-[200px] h-[50px] text-xl rounded-full border border-[#252525]' >Learn more</button></Link>
                </div>
            </div>

            <div className='skill-section'>
                <div className='py-20 flex flex-col gap-5 w-[75vw] m-auto'>
                    <div className='text-[#8A8A8A] text-xl'>(03)</div>
                    <div className='text-3xl'>Skills</div>
                </div>

                <div className=' w-[90vw] sm:w-[80vw] h-[60vh] sm:h-[75vh] mx-auto grid gap-2 grid-cols-2 lg:grid-cols-4 grid-rows-3 overflow-hidden capitalize'>
                    <div className=' border border-black order-1 hidden lg:flex justify-center items-center text-2xl text-center capitalize p-5 bg-[#1E2024]'>
                        <div className='w-full h-full flex justify-start gap-10 items-center pl-10'>
                            <div className='w-[100px] h-[100px] bg-[#676767] rounded-full text-5xl flex justify-center items-center text-center'>ui</div>
                            <div className='w-[50px]'>designer
                                web designer</div>
                        </div>
                    </div>
                    <div className=' border border-black bg-[#1E2024] order-2 hidden lg:flex justify-center items-center text-2xl text-center flex-col gap-5 capitalize p-5'>
                        <div className='w-[180px] tracking-[5px] mx-auto flex text-center '>frontend web
                            devlopment</div>
                        <div className='w-[120px] border'></div></div>
                    <div className=' border border-black bg-[#1E2024] row-span-2 order-3 flex justify-center flex-col items-start gap-5 p-5 lg:p-20'>
                        <div className='text-xl sm:text-3xl pr-14'>Programming Language</div>
                        <div className='text-lg sm:text-2xl tracking-[5px] font-light'>c++ <br />
                            HTML <br />
                            CSS <br />
                            JAVA SCRIPT <br /> REACT JS <br /> TAILWIND</div>
                    </div>
                    <div className='  border border-black bg-[#1E2024] order-4 flex justify-center items-center flex-col gap-5'>
                        <div className='text-2xl'>tools i know</div>
                        <div className='flex gap-5'><img className='w-[35px] lg:w-[45px]' src="homePage/vsCode.svg" alt="" /><img className='w-[35px] lg:w-[45px]' src="homePage/figma.svg" alt="" /></div>
                    </div>
                    <motion.div className='overflow-hidden border border-black bg-[#1E2024] order-5 hidden lg:flex col-span-2 row-span-2 justify-center items-center'
                    >
                        <div className=' overflow-hidden w-full h-full shadow-2xl'>
                            <motion.div className='w-full h-full' style={{
                                backgroundImage: "url('/homePage/skill.png')",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                scale: scale1,
                            }}></motion.div>
                        </div>
                    </motion.div>
                    <div className=' border border-black bg-[#1E2024] flex  order-6 text-xl sm:text-3xl  capitalize'>
                        <div className='gap-5 w-[80%] flex justify-center items-start bg-center text-stone-50 flex-col px-5 lg:px-10'>
                            <div className='w-[80%] border'></div>
                            <div className='w-[80%] '>responsive designs devlopment</div>
                            <div className='w-[80%] border'></div>
                        </div>
                        <div className='w-[20%] h-full bg-[#181F2E] drop-shadow-xl'></div>
                    </div>
                    <div className=' border border-black bg-gradient-to-t from-[#151C2B] to-[#232F48] order-7 col-span-2 flex justify-center gap-4 items-center flex-col p-5'>
                        <div className='text-lg sm:text-2xl font-light text-center capitalize sm:px-10'>
                            Learn more about me and my journey in web development and design.
                        </div>
                        <Link to="/about"><button className=' sm:hover:bg-white sm:hover:text-black sm:hover:scale-110 transition-all ease-in-out duration-500 bg-[#1E1E1E] w-[200px] min-h-[50px] text-xl rounded-full border border-[#252525]' >Learn more</button></Link>
                    </div>
                </div>

            </div>

            <div className='contact-section'>
                <div className='py-20 flex flex-col gap-5 w-[75vw] m-auto'>
                    <div className='text-[#8A8A8A] text-xl'>(03)</div>
                    <div className='text-3xl'>Contact</div>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home

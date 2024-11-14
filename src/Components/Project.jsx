import React, { useState } from 'react'
import Navbar from './Navbar'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Footer from './Footer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import './Animation.css';
import { delay, easeInOut, motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const Project = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

    const project = ["project1.png", "project1.png",]

    const uiProjects = ["ui1.png", "ui2.png", "ui3.png", "ui4.png",]

    const settings1 = {
        className: "center",
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1, // Show three cards at a time
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
    };
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3, // Show three cards at a time
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,  // Adjust to one card on smaller screens
                },
            },
        ],
    };

    const [leftGear, setLeftGear] = useState(false);

    return (
        <div>
            <Navbar target={"project"} />

            <div className='project-hero w-full h-[90vh]  '>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='h-full w-full flex justify-between'>
                        <motion.div className=' absolute md:relative right-0 h-full md:flex flex-col justify-start'
                            initial={{ y: "19vh" }}
                            animate={{ y: leftGear ? "19vh" : "0vh" }}
                            transition={{ duration: 1, ease: easeInOut }}
                        >
                            <div className='w-[200px] md:w-[250px] h-[40px] md:h-[60px] bg-[#1E2024] '></div>
                            <div className='h-[40%] md:h-[60%] w-full flex justify-center items-center'>
                                <div className='h-full border-l-4 border-dashed border-[#757575]'></div>
                            </div>
                            <div className='hidden md:flex w-[250px] h-[60px] bg-[#1E2024] '></div>
                        </motion.div>

                        <div className='h-full hidden md:flex justify-between flex-col py-10'>
                            <motion.div initial={{ rotate: 90 }} animate={{ rotate: leftGear ? 90 : 0 }} transition={{ duration: 1, ease: easeInOut }} onClick={() => setLeftGear(true)}><img className='cursor-pointer w-[90px] lg:w-[100px]' src="projectPage/key.svg" alt="" /></motion.div>
                            <motion.div initial={{ rotate: -90 }} animate={{ rotate: leftGear ? -90 : 0 }} transition={{ duration: 1, ease: easeInOut }} onClick={() => setLeftGear(false)}><img className='cursor-pointer w-[90px] lg:w-[100px]' src="projectPage/key.svg" alt="" /></motion.div>
                        </div>

                        <motion.div className='h-full flex flex-col justify-end'
                            initial={{ y: "-19vh" }}
                            animate={{ y: leftGear ? "-19vh" : "0vh" }}
                            transition={{ duration: 1, ease: easeInOut }}>
                            <div className='hidden md:flex w-[250px] h-[60px] bg-[#1E2024] '></div>
                            <div className='h-[40%] md:h-[60%] w-full flex justify-center items-center'>
                                <div className='h-full border-l-4 border-dashed border-[#757575]'></div>
                            </div>
                            <div className='w-[200px] md:w-[250px] h-[40px] md:h-[60px] bg-[#1E2024] '></div>
                        </motion.div>
                    </div>

                    <div className='absolute z-50 w-full h-[250px] bg-[#151617] p-10 lg:px-20 flex justify-between items-center'>
                        <div className='md:relative absolute left:10 sm:left-20 md:-translate-y-0 -translate-y-[250px]'>
                            <div className='md:translate-x-0 translate-x-14'>
                                <motion.img initial={{ rotate: 90 }} animate={{ rotate: leftGear ? 90 : 0 }} transition={{ duration: 1, ease: easeInOut }} className='cursor-pointer w-[70px] sm:w-[90px]' src="projectPage/gear.svg" alt="" />
                            </div>
                            <div className=' -translate-y-3 md:translate-x-14 rotate-12'>
                                <motion.img initial={{ rotate: 90 }} animate={{ rotate: leftGear ? 90 : 0 }} transition={{ duration: 1, ease: easeInOut }} className='cursor-pointer w-[70px] sm:w-[90px] origin-center ' src="projectPage/gear.svg" alt="" />
                            </div>
                        </div>

                        <div className='capitalize flex flex-col mx-auto gap-5 justify-center items-center'>
                            <div className='text-4xl md:text-4xl w-[150px] md:w-[400px] flex text-center' style={{ fontFamily: "montagu slab" }}>my Creative journey</div>
                            <div className='text-xl md:text-xl text-[#8A8A8A]'>2024 -2025</div>
                        </div>

                        <div className='absolute md:relative right-10 sm:right-20 md:translate-y-0 translate-y-[250px]'>
                            <div className=''><motion.img initial={{ rotate: 90 }} animate={{ rotate: leftGear ? 90 : 0 }} transition={{ duration: 1, ease: easeInOut }} className='w-[70px] sm:w-[90px]' src="projectPage/gear.svg" alt="" /></div>
                            <div className='-translate-y-3 -translate-x-14 rotate-12'><motion.img initial={{ rotate: 90 }} animate={{ rotate: leftGear ? 90 : 0 }} transition={{ duration: 1, ease: easeInOut }} className='w-[70px] sm:w-[90px] origin-center ' src="projectPage/gear.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' ui-section w-full h-[60vh] sm:h-[80vh] md:h-[80vh] lg:h-[95vh] my-[20vh] md:my-[50vh] flex justify-between flex-col'>
                {/* <div className='text-3xl md:text-4xl py-5 md:py-10 px-5 md:px-44 capitalize'>ui <span className='text-[#8A8A8A]'>design</span></div> */}

                <div className=' md:mx-auto mx-5 md:w-[80vw] lg:min-w-[70vw] min-h-[30vh] sm:min-h-[50vh] lg:min-h-full grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 capitalize'>
                    <div className='border border-[#252525] order-1 hidden md:flex justify-center items-center bg-[#151617]'>
                        <Link to={"https://www.figma.com/design/BfEDbeQCK6Km2sN0VTRSlN/Movie-Recommendation?t=aUzEfpH8WdPYe0v6-0"}><motion.img style={{ scale: scale }} src="projectPage/grid 1.svg" alt="" /></Link>
                    </div>
                    <div className='border border-[#252525] bg-[#151617] md:order-2 order-1 flex justify-between flex-col'>
                        <div className='w-full text:lg md:text-xl font-semibold p-5 sm:p-10'>movie <br /> recomdation</div>
                        <div className='w-[100%] overflow-hidden'> <Link to={"https://www.figma.com/design/BfEDbeQCK6Km2sN0VTRSlN/Movie-Recommendation?t=aUzEfpH8WdPYe0v6-0"}><motion.img style={{ scale: scale }} src="projectPage/grid2.png" alt="" /></Link></div>
                    </div>
                    <div className='border border-[#252525] bg-[#151617] md:order-3 order-2 flex-col justify-between'>
                        <div className='text-lg md:text-xl font-semibold sm:p-10 flex mx-auto h-[50%] w-[90%] justify-center'>
                            <div className=' gap-5 items-center md:flex hidden space-between'>
                                <div className="border-l-2  h-[70px] "></div>
                                <div className="border-l-2  h-[110px]"></div>
                                <div className="border-l-2  h-[150px]"></div>
                            </div>
                            <div className='flex text-center justify-center items-center sm:px-5 w-[80%]'>Our Picks,<br /> Your Best <br /> Watch</div>
                            <div className=' gap-5 items-center md:flex hidden space-between'>
                                <div className="border-l-2 h-[150px]"></div>
                                <div className="border-l-2 h-[110px]"></div>
                                <div className="border-l-2 h-[70px] "></div>
                            </div>
                        </div>
                        <div className='w-full sm:pb-20 overflow-hidden'> <motion.img className='w-[50%] md:w-[220px] h-[30%]' src="projectPage/grid3.svg" alt="" /></div>
                    </div>
                    <div className='border border-[#252525] bg-[#ADB5BD] md:order-4 order-3 p-2 md:p-20 flex justify-center items-center'>
                        <div className='w-[90%] md:p-10 p-5 bg-[#1A1A18] flex flex-col justify-between item-center'>
                            <div className='flex text-center text-lg md:text-xl mx-auto'>Turning <br /> designs <br /> into <br /> reality.</div>
                            <div className='border w-[50px] mx-auto m-2 md:my-5'></div>
                        </div>
                    </div>
                    <div className='flex-col gap-4 hidden md:flex order-4  '>
                        <div className='border border-[#252525] bg-[#1E2024] flex flex-col  w-full h-[50%] justify-between items-center'>
                            <div className='w-full justify-center flex h-[50%]'><img className='w-[40px] h-full' src="projectPage/grid5.svg" alt="" /></div>
                            <div className='flex justify-center items-center w-[40%] '> <button className=' sm:hover:font-semibold sm:hover:bg-[#42588b] transition-all ease-in-out duration-500 w-full bg-[#333A49] my-5 py-3 px-8 text-lg font-normal rounded-[5px]'><Link to={"https://www.figma.com/design/BfEDbeQCK6Km2sN0VTRSlN/Movie-Recommendation?t=aUzEfpH8WdPYe0v6-0"}>live Preview</Link></button></div>
                        </div>
                        <div className='border border-[#252525] bg-[#1E2024] w-full h-[50%] justify-center items-center flex '>
                            <div className=' w-[50%]' > <button className= ' sm:hover:font-semibold sm:hover:bg-[#42588b] transition-all ease-in-out duration-500 w-full bg-[#333A49] py-3 px-8 text-lg font-normal rounded-[5px]'><Link to={"https://www.figma.com/design/ukLalFk4uZdHdjbuDxbzyJ/Untitled?node-id=358-64&node-type=canvas&t=IdaJVFYcKoll0eec-0"}>live Preview</Link></button></div>
                            <div className='w-[30%] justify-center p-4 md:pr-8 flex'><img className='rotate-90 w-[50%]' src="projectPage/grid5.svg" alt="" /></div>
                        </div>
                    </div>
                    <div className='border border-[#252525] bg-[#ADB5BD] md:order-6 order-4 flex justify-center items-center overflow-hidden'>
                        <Link to={"https://www.figma.com/design/ukLalFk4uZdHdjbuDxbzyJ/Untitled?node-id=358-64&node-type=canvas&t=IdaJVFYcKoll0eec-0"}><motion.img style={{scale: scale}} src="projectPage/grid6.png" alt="" /></Link>
                    </div>
                </div>

            </div>

            <div className=' designs-section w-full h-[50vh] md:h-[90vh] flex justify-between flex-col py-10 sm:py-20'>
                {/* <div className='text-3xl md:text-4xl mx-auto md:ml-44 capitalize'>Designs</div> */}

                <div className='w-[85%] sm:w-[90%] mx-auto h-[100%] lg:h-[90%] '>
                    <Slider {...settings}>
                        {uiProjects.map((data, index) => (
                            <div key={index} className='card py-20 px-6 sm:px-20 md:px-5 lg:px-5 h-[350px] sm:h-[400px] lg:h-[450px]'>
                                <motion.div className='  border-[3px] border-[#252525] flex justify-center items-center text-5xl h-full w-full'
                                    style={{
                                        backgroundImage: `url("./projectPage/${data}")`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                ></motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className=' project-section w-full h-[100vh] md:h-[80vh] lg:h-[80vh] my-40 md:my-32 flex justify-between flex-col '>
                {/* <div className='text-3xl md:text-4xl mx-auto md:ml-44 capitalize'>projects</div> */}

                <div className='w-[90vw] sm:w-[90%] xl:w-[85%] mx-auto h-[150vh] lg:h-[90%] xl:[80%] '>
                    <Slider {...settings1}>
                        {project.map((data, index) => (
                            <div key={index} className='w-[100vw] h-[90vh] lg:h-[80vh] p-5 sm:p-10'>
                                <div className='w-full h-full  flex flex-col-reverse lg:flex-row  justify-between p-5 sm:p-10 xl:p-20 items-center'>
                                    <div className='w-[100%] md:w-[90%] my-auto lg:w-[30%] h-[40%] lg:h-[90%] flex flex-col justify-center gap-5'>
                                        <div className='text-2xl md:text-2xl'>MovieFlix - Your Ultimate Movie Guide</div>
                                        <div className='text-sm text-[#BFBFBF]'>MovieFlix is a MERN app for personalized movie recommendations, top 10 lists, and movie searches using OMDB and TMDB APIs.</div>
                                        <div className='xl:flex-row flex-col flex  gap-5'>
                                            <button className=' sm:hover:font-semibold sm:hover:bg-[#2164ff] transition-all ease-in-out duration-500 bcapitalize py-3 px-10 bg-[#7729ff] rounded-[10px] text-lg'>view website</button>
                                            <div className='flex justify-center gap-5'>
                                                <button className='p-3 border border-[#1e1e1e]'><img src="homePage/figma.svg" alt="" /></button>
                                                <button className='p-3 border border-[#1e1e1e]'><img src="homePage/git.svg" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[100%] md:w-[90%] lg:w-[60%] h-[40%] lg:h-[120%] border border-[#2D2D2D]'
                                        style={{
                                            backgroundImage: `url("./projectPage/${data}")`,
                                            backgroundPosition: "start",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Project

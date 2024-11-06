import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animate, motion, transform } from 'framer-motion'
import { style } from 'framer-motion/client'
import './Animation.css'


const Navbar = ({target}) => {

  const [activeBar, setActiveBar] = useState(false)
  const [hover, setHover] = useState(target)

  return (
    <div>
      <div className='w-[full] h-[80px] bg-[#1a1a1a] flex justify-between px-10 lg:px-20 items-center'>
        <motion.div className={`${activeBar ? '-translate-y-[0vh]' : "-translate-y-[100vh]"} lg:hidden flex flex-col fixed z-[100] top-0 right-0 w-[100vw] h-[100vh] bg-[#181818] justify-center items-center`}
          style={{
            transition: "transform 0.75s ease-in-out",
          }}>
          <div className={`absolute top-10 right-10`}><img onClick={() => setActiveBar(false)} src="homePage/cross.svg" alt="" /></div>
          <motion.ul className={` uppercase flex flex-col gap-10 text-5xl text-center`}
            intial={{ y: "-100vh" }}
            animate={{ y: activeBar ? 0 : '-100vh' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <motion.div className='textAnimation' ><Link to="/">Home</Link></motion.div>
            <motion.div className='textAnimation' ><Link to="/Project">project</Link></motion.div>
            <motion.div className='textAnimation' ><Link to="/About">About</Link></motion.div>
            <motion.div className='textAnimation' ><Link to="/Contact">Contact</Link></motion.div>
          </motion.ul>
        </motion.div>
        <div className="logo uppercase"><img src="homePage/logo1.svg" alt="" /></div>
        <div className='lg:hidden flex'><img className='cursor-pointer' onClick={() => setActiveBar(true)} src="homePage/menu1.svg" alt="" /></div>
        <div className='hidden lg:flex'>
          <ul className='uppercase flex gap-10 text-lg font-semibold'>
            <div className={`${hover === "home" ?"text-[#2eb9ff] text-bold text-xl" :  "sm:hover:text-[#8B8B8B]"}  transition-all ease-in-out duration-500 `}><Link to="/">Home</Link></div>
            <div className={` ${hover === "project" ?"text-[#2eb9ff] text-bold text-xl" :  "sm:hover:text-[#8B8B8B]"} transition-all ease-in-out duration-500 `}><Link to="/Project">project</Link></div>
            <div className={` ${hover === "about" ?"text-[#2eb9ff] text-bold text-xl" :  "sm:hover:text-[#8B8B8B]"} transition-all ease-in-out duration-500 `}><Link to="/About">About</Link></div>
            <div className={` ${hover === "contact" ?"text-[#2eb9ff] text-bold text-xl" :  "sm:hover:text-[#8B8B8B]"} transition-all ease-in-out duration-500 `}><Link to="/Contact">Contact</Link></div>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Navbar






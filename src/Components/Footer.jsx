import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#171717] p-5 sm:p-10 flex justify-center flex-col'>
                <div className='text-center text-3xl sm:text-4xl lg:text-6xl font-light w-350px] sm:w-[500px] lg:w-[820px] uppercase mx-auto my-10 leading-[55px] lg:leading-[80px]' style={{ fontFamily: "Montagu Slab" }}>
                    Have <span className='text-[#555555]'>an</span> idea<span className='text-[#555555]'>?</span> Let’s <span className='text-[#555555]'>turn</span> it <span className='text-[#555555]'>into</span> reality—<span className='text-[#555555]'>get</span> in <span className='text-[#555555]'>touch</span>!
                </div>

                <button className='uppercase h-12 w-48 rounded-full mx-auto my-4 bg-white text-black font-semibold text-lg sm:text-xl transition-all ease-in-out duration-500 sm:hover:scale-105 '><Link to={"/Contact"}>contact me</Link></button>

                <div className='w-full flex justify-between my-14 gap-10 sm:flex-row flex-col px-20'>
                    <div className='mx-auto sm:mx-0'><img src="homePage/logo1.svg" alt="" /></div>
                    <div className='uppercase font-semibold text-center cursor-pointer'>
                        <div className='sm:text-right sm:hover:font-bold transition-all ease-in-out duration-500 sm:hover:scale-105 '>resume</div>
                        <div className='sm:text-right sm:hover:font-bold transition-all ease-in-out duration-500 sm:hover:scale-105 '>pdf folio</div>
                    </div>
                </div>

                <div className='uppercase text-[#555555] font-semibold m-auto'>@goutam khanna 2024</div>
            </div>
        </div>
    )
}

export default Footer

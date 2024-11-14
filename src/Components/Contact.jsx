import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar target={"contact"}/>

            <div className='w-full h-[92vh] '>
                <div className=' absolute z-0 w-full h-[92vh] overflow-hidden flex justify-center '>
                    <div className='mt-[165vw] sm:mt-[79vw] border border-[#202020] scale-[1.8] md:scale-[1.6] rounded-full mx-auto w-[200vw] h-[200vw] bg-[#151515]'></div>
                </div>

                <div className=' absolute z-10 w-full h-[92vh] flex justify-between items-center flex-col py-28 md:py-20' >
                    <div className='flex flex-col items-center justify-center w-full text-3xl md:text-4xl' style={{ fontFamily: "montagu" }}>
                        <div className=''>Have a project in mind?</div>
                        <div className='mt-2 text-center text-[#8A8A8A] w-[250px] md:w-[400px]'>Let's bring it to life together!</div>
                    </div>

                    <div><button className='sm:hover:font-semibold sm:hover:bg-[#747474] transition-all ease-in-out duration-500 uppercase py-3 px-10 md:px-16 rounded-full bg-[#2E2E2E] text-lg'>start a project</button></div>

                    <div className='flex flex-col gap-6'>
                        <div >
                            <div className='text-2xl font-extralight text-center'>1. Write me an email</div>
                            <div className='text-lg md:text-xl font-normal text-[#8A8A8A] text-center'>micro@gmail.com</div>
                        </div>

                        <div >
                            <div className='text-2xl font-extralight text-center'>2. Let’s be social</div>
                        </div>

                        <div className='mx-auto'><img src="homePage/logo1.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

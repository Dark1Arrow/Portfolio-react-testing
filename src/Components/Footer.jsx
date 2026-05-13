// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();
    
//     const links = [
//         { name: 'Resume', path: 'https://drive.google.com/file/d/11fkkN6DKHBpg917mzNvm3Dt7kJYorVSC/view?usp=drivesdk' },
//         // { name: 'Folio', path: '/folio' },
//         { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gouatmkhanna?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', external: true },
//         { name: 'GitHub', url: 'https://github.com/Dark1Arrow', external: true },
//     ];

//     return (
//         <footer className='bg-[#0a0a0a] text-white py-12 px-6 md:px-12 border-t border-[#1a1a1a]'>
//             <div className='max-w-7xl mx-auto'>
                
//                 {/* Top Section: Simple CTA & Nav */}
//                 <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16'>
//                     <div>
//                         <h2 className='text-2xl font-light mb-2'>Ready to collaborate?</h2>
//                         <Link 
//                             to="/Contact" 
//                             className='text-[#888] hover:text-white transition-colors underline underline-offset-8'
//                         >
//                             Get in touch
//                         </Link>
//                     </div>

//                     <nav className='flex gap-6 sm:gap-10'>
//                         {links.map((link) => (
//                             link.external ? (
//                                 <a 
//                                     key={link.name} 
//                                     href={link.url} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className='text-[10px] uppercase tracking-widest text-[#495057] hover:text-white transition-colors'
//                                 >
//                                     {link.name}
//                                 </a>
//                             ) : (
//                                 <Link 
//                                     key={link.name} 
//                                     to={link.path}
//                                     className='text-[10px] uppercase tracking-widest text-[#495057] hover:text-white transition-colors'
//                                 >
//                                     {link.name}
//                                 </Link>
//                             )
//                         ))}
//                     </nav>
//                 </div>

//                 {/* Bottom Section: Minimal Credits */}
//                 <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-[#495057] text-[9px] tracking-[0.3em] uppercase'>
//                     <p>© {currentYear} GOUTAM KHANNA</p>
//                     <div className='flex gap-4'>
//                         <span>Indore, IN</span>
//                         <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</span>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // const Footer = () => {
// //     return (
// //         <div>
// //             <div className='bg-[#171717] p-5 sm:p-10 flex justify-center flex-col'>
// //                 <div className='text-center text-3xl sm:text-4xl lg:text-5xl font-light w-350px] sm:w-[500px] lg:w-[820px] uppercase mx-auto my-10 leading-[55px] lg:leading-[80px]' style={{ fontFamily: "Montagu Slab" }}>
// //                     Have <span className='text-[#555555]'>an</span> idea<span className='text-[#555555]'>?</span> Let’s <span className='text-[#555555]'>turn</span> it <span className='text-[#555555]'>into</span> reality—<span className='text-[#555555]'>get</span> in <span className='text-[#555555]'>touch</span>!
// //                 </div>

// //                 <button className='uppercase h-12 w-48 rounded-full mx-auto my-4 bg-white text-black font-semibold text-lg sm:text-xl transition-all ease-in-out duration-500 sm:hover:scale-105 '><Link to={"/Contact"}>contact me</Link></button>

// //                 <div className='w-full flex justify-between my-14 gap-10 sm:flex-row flex-col px-20'>
// //                     <div className='mx-auto sm:mx-0'><img src="homePage/logo1.svg" alt="" /></div>
// //                     <div className='uppercase font-semibold text-center cursor-pointer'>
// //                         <div className='sm:text-right sm:hover:font-bold transition-all ease-in-out duration-500 sm:hover:scale-105 '>resume</div>
// //                         <div className='sm:text-right sm:hover:font-bold transition-all ease-in-out duration-500 sm:hover:scale-105 '>pdf folio</div>
// //                     </div>
// //                 </div>

// //                 <div className='uppercase text-[#555555] font-semibold m-auto'>@goutam khanna 2024</div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Footer
import React from 'react'

const Footer = () => {
  return (
    <div>
      
    </div>
  )
}

export default Footer

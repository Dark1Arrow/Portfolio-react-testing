// import React, { useState, useEffect } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'Project', path: '/Project' },
//   { name: 'About', path: '/About' },
//   { name: 'Contact', path: '/Contact' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // Close menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   // Lock scroll when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//   }, [isOpen]);

//   // Framer Motion Variants
//   const menuVariants = {
//     initial: { y: "-100%" },
//     animate: { 
//       y: 0, 
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
//     },
//     exit: { 
//       y: "-100%", 
//       transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
//     }
//   };

//   const linkVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }
//     }),
//     exit: { opacity: 0, transition: { duration: 0.2 } }
//   };

//   return (
//     <nav className='fixed top-0 left-0 w-full z-[100] bg-[#1a1a1a] border-b border-white/5'>
//       <div className='max-w-screen-2xl mx-auto h-[70px] flex justify-between px-6 lg:px-20 items-center text-white'>
        
//         {/* Logo */}
//         <Link to="/" className="z-[130] flex items-center transition-opacity hover:opacity-80">
//           <img className='w-[70px] lg:w-[80px]' src="homePage/logo1.svg" alt="Logo" />
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className='hidden lg:flex gap-10 uppercase text-[14px] font-semibold tracking-widest'>
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink 
//                 to={link.path}
//                 className={({ isActive }) => 
//                   `transition-colors duration-300 hover:text-white/60 ${isActive ? "text-[#2eb9ff]" : "text-white"}`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <button 
//           className='lg:hidden flex z-[130] p-2' 
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {/* Animated Hamburger to Cross */}
//           <div className="flex flex-col gap-1.5 w-7">
//             <motion.span 
//               animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//               className="h-[2px] w-full bg-white"
//             />
//             <motion.span 
//               animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//               className="h-[2px] w-full bg-white"
//             />
//             <motion.span 
//               animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//               className="h-[2px] w-full bg-white"
//             />
//           </div>
//         </button>

//         {/* Mobile Fullscreen Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div 
//               variants={menuVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className='fixed inset-0 z-[120] bg-[#111111] flex flex-col justify-center items-center'
//             >
//               <ul className='flex flex-col gap-10 text-center'>
//                 {navLinks.map((link, i) => (
//                   <motion.li
//                     key={link.name}
//                     custom={i}
//                     variants={linkVariants}
//                   >
//                     <Link 
//                       to={link.path} 
//                       className="text-4xl font-bold uppercase tracking-tighter hover:text-[#2eb9ff] transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// // import React, { useState } from 'react';
// // import { NavLink, Link } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import './Animation.css';

// // const navLinks = [
// //   { name: 'Home', path: '/' },
// //   { name: 'Project', path: '/Project' },
// //   { name: 'About', path: '/About' },
// //   { name: 'Contact', path: '/Contact' },
// // ];

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Framer Motion Variants
// //   const menuVariants = {
// //     closed: { y: "-100vh", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
// //     opened: { y: "0vh", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }
// //   };

// //   const linkVariants = {
// //     closed: { opacity: 0, y: 20 },
// //     opened: (i) => ({
// //       opacity: 1,
// //       y: 0,
// //       transition: { delay: 0.3 + i * 0.1, duration: 0.5 }
// //     })
// //   };

// //   return (
// //     <nav className='relative'>
// //       <div className='w-full h-[70px] bg-[#1a1a1a] flex justify-between px-6 lg:px-20 items-center text-white'>
        
// //         {/* Logo */}
// //         <Link to="/" className="logo uppercase">
// //           <img className='w-[80px]' src="homePage/logo1.svg" alt="Logo" />
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <ul className='hidden lg:flex gap-10 uppercase text-[15px] font-medium'>
// //           {navLinks.map((link) => (
// //             <li key={link.name}>
// //               <NavLink 
// //                 to={link.path}
// //                 className={({ isActive }) => 
// //                   `transition-all duration-300 hover:text-[#8B8B8B] ${isActive ? "text-[#2eb9ff]" : "text-white"}`
// //                 }
// //               >
// //                 {link.name}
// //               </NavLink>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Mobile Menu Toggle */}
// //         <button 
// //           className='lg:hidden flex z-[110]' 
// //           onClick={() => setIsOpen(true)}
// //           aria-label="Open Menu"
// //         >
// //           <img className='cursor-pointer w-[30px]' src="homePage/menu1.svg" alt="" />
// //         </button>

// //         {/* Mobile Fullscreen Menu */}
// //         <AnimatePresence>
// //           {isOpen && (
// //             <motion.div 
// //               variants={menuVariants}
// //               initial="closed"
// //               animate="opened"
// //               exit="closed"
// //               className='fixed inset-0 z-[120] bg-[#181818] flex flex-col justify-center items-center'
// //             >
// //               {/* Close Button */}
// //               <button 
// //                 className='absolute top-10 right-10' 
// //                 onClick={() => setIsOpen(false)}
// //                 aria-label="Close Menu"
// //               >
// //                 <img src="homePage/cross.svg" alt="Close" className='w-8' />
// //               </button>

// //               <ul className='uppercase flex flex-col gap-8 text-5xl text-center'>
// //                 {navLinks.map((link, i) => (
// //                   <motion.li
// //                     key={link.name}
// //                     custom={i}
// //                     variants={linkVariants}
// //                   >
// //                     <Link 
// //                       to={link.path} 
// //                       onClick={() => setIsOpen(false)}
// //                       className="hover:text-[#2eb9ff] transition-colors"
// //                     >
// //                       {link.name}
// //                     </Link>
// //                   </motion.li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;rFC
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar

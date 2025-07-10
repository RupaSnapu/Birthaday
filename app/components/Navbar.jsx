// // import Image from 'next/image';
// // import Link from 'next/link';

// // export default function Navbar() {
// //   return (
// //     <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
// //       {/* Logo */}
// //       <div className="flex items-center space-x-2 text-2xl font-bold text-pink-600">
// //          <Link href="/" className="flex items-center space-x-2 text-lg font-semibold text-gray-900 transition-transform hover:scale-105">
// //             <Image src="/logo.png" alt="SnapU Logo" width={60} height={50} className="rounded-sm" />
// //            <span className="bg-gradient-to-r from-[#0066ff] to-[#8b0000] bg-clip-text text-transparent inline-block">
// //             Snap U Photography
// //           </span>
// //           </Link>

// //       </div>

// //       {/* Nav Links */}
// //       <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
// //         <li>
// //           <Link href="#featured-moments" className="hover:text-pink-500">
// //             Featured Moments
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="#packages" className="hover:text-pink-500">
// //             Packages
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="#services" className="hover:text-pink-500">
// //             Services
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="#gallery" className="hover:text-pink-500">
// //             Gallery
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="#coverage" className="hover:text-pink-500">
// //             Coverage Areas
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="#contact" className="hover:text-pink-500">
// //             Book Now
// //           </Link>
// //         </li>
// //       </ul>

// //       {/* Mobile Menu Placeholder */}
// //       <div className="md:hidden">
// //         {/* Add a hamburger icon here if needed */}
// //       </div>
// //     </nav>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
//       {/* Logo */}
//       <Link
//         href="/"
//         className="flex items-center space-x-2 text-lg font-semibold text-gray-900 transition-transform hover:scale-105"
//       >
//         <Image
//           src="/logo.png"
//           alt="SnapU Logo"
//           width={60}
//           height={50}
//           className="rounded-sm"
//         />
//         <span className="bg-gradient-to-r from-[#0066ff] to-[#8b0000] bg-clip-text text-transparent inline-block">
//           Snap U Photography
//         </span>
//       </Link>

//       {/* Desktop Nav */}
//       <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
//         <li>
//           <Link href="#featured-moments" className="hover:text-pink-500">
//             Featured Moments
//           </Link>
//         </li>
//         <li>
//           <Link href="#packages" className="hover:text-pink-500">
//             Packages
//           </Link>
//         </li>
//         <li>
//           <Link href="#services" className="hover:text-pink-500">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link href="#gallery" className="hover:text-pink-500">
//             Gallery
//           </Link>
//         </li>
//         <li>
//           <Link href="#coverage" className="hover:text-pink-500">
//             Coverage Areas
//           </Link>
//         </li>
//         <li>
//           <Link href="#contact" className="hover:text-pink-500">
//             Book Now
//           </Link>
//         </li>
//       </ul>

//       {/* Mobile Hamburger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden focus:outline-none"
//         aria-label="Toggle menu"
//       >
//         <svg
//           className="w-6 h-6 text-gray-800"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           )}
//         </svg>
//       </button>

//       {/* Mobile Nav Links */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
//           <ul className="flex flex-col space-y-4 p-6 font-medium text-gray-700">
//             <li>
//               <Link
//                 href="#featured-moments"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Featured Moments
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#packages"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Packages
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#services"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#gallery"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#coverage"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Coverage Areas
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#contact"
//                 className="hover:text-pink-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Book Now
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 
  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu on link click
  const handleLinkClick = () => setIsMenuOpen(false);

  const links = [
    { href: '/', text: 'Home' },
    { href: '/#Services', text: 'Services' },
    { href: '/#Gallery', text: 'Gallery' },
    { href: '#Packages', text: 'Packages' },
    { href: '/#About', text: 'About' },
    { href: '/#Contact', text: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 backdrop-blur-md bg-white/70 shadow-sm ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-5 md:px-20 xl:px-[20px] animate-fadeIn relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg font-semibold text-gray-900 transition-transform hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="SnapU Logo"
              width={60}
              height={50}
              className="rounded-sm"
            />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#8b0000] bg-clip-text text-transparent inline-block">
              Snap U Photography
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center text-gray-800 font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group transition-all duration-300"
              >
                {link.text}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-2.5'
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-full bg-gray-800 transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 bottom-2.5' : 'bottom-1'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full w-full bg-white shadow-lg overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-800 font-medium transition-all duration-300 transform hover:text-green-600 hover:translate-x-2"
              style={{
                transitionDelay: isMenuOpen ? `${index * 60}ms` : '0ms',
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Global fade animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

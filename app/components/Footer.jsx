// // "use client";
// // import React from 'react';

// // const Footer = () => {
// //   return (
// //     <footer className="footer">
// //       <div className="footer-content">
// //         <h3>Where We Shoot</h3>
// //         <p>We provide birthday photography services at home, event halls, and outdoor locations to capture your special moments perfectly.</p>
// //         <p>Contact us at: <a href="mailto:info@birthdayevents.com">info@birthdayevents.com</a></p>
// //         <p>&copy; {new Date().getFullYear()} Birthday Events. All rights reserved.</p>
// //       </div>
// //       <style jsx>{`
// //         .footer {
// //           background: #f5f5f5;
// //           padding: 40px 20px;
// //           text-align: center;
// //           color: #333;
// //         }
// //         .footer-content h3 {
// //           margin-bottom: 10px;
// //           font-size: 1.5rem;
// //         }
// //         .footer-content p {
// //           margin: 5px 0;
// //         }
// //         .footer-content a {
// //           color: #0070f3;
// //           text-decoration: none;
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // };

// // export default Footer;


// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-fuchsia-500 to-amber-400 text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {/* Brand Info */}
//           <div>
//             <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#8b0000] font-serif">
//               Birthday Photography by SnapU
//             </h3>
//             <p className="text-sm md:text-base leading-relaxed">
//               Making your birthdays unforgettable with creative and memorable photography across the UK.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
//               Quick Links
//             </h3>
//             <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
//               <li>
//                 <Link href="/" className="text-sm hover:text-[#8b0000] transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#services" className="text-sm hover:text-[#8b0000] transition">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#gallery" className="text-sm hover:text-[#8b0000] transition">
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#packages" className="text-sm hover:text-[#8b0000] transition">
//                   Packages
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
//               Services
//             </h3>
//             <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
//               <li>
//                 <Link href="/#kids-birthday-photography" className="text-sm hover:text-[#8b0000] transition">
//                   Kids Birthday Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#adult-birthday-photography" className="text-sm hover:text-[#8b0000] transition">
//                   Adult Birthday Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#cake-smash-photography" className="text-sm hover:text-[#8b0000] transition">
//                   Cake Smash Photography
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#event-photography" className="text-sm hover:text-[#8b0000] transition">
//                   Event Photography
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#8b0000] font-serif">
//               Contact
//             </h3>
//             <address className="not-italic grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-sm md:text-base">
//               <p>Birthday Photography by SnapU</p>
//               <p>London, UK</p>
//               <p>Phone: +44 123 456 7890</p>
//               <p>Email: info@snapuphotography.com</p>
//             </address>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-[#ccc] mt-6 pt-4 text-center">
//           <p className="text-xs md:text-sm">
//             &copy; {new Date().getFullYear()} Birthday Photography by SnapU. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-yellow-500 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-yellow-200 font-serif">
              Birthday Photography by SnapU
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-100">
              Making your birthdays unforgettable with creative and memorable photography across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-yellow-200 font-serif">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-yellow-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#Services" className="text-sm hover:text-yellow-300 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#Gallery" className="text-sm hover:text-yellow-300 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#Packages" className="text-sm hover:text-yellow-300 transition">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-yellow-200 font-serif">
              Services
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <Link href="/#kids-birthday-photography" className="text-sm hover:text-yellow-300 transition">
                  Kids Birthday Photography
                </Link>
              </li>
              <li>
                <Link href="/#adult-birthday-photography" className="text-sm hover:text-yellow-300 transition">
                  Adult Birthday Photography
                </Link>
              </li>
              <li>
                <Link href="/#cake-smash-photography" className="text-sm hover:text-yellow-300 transition">
                  Cake Smash Photography
                </Link>
              </li>
              <li>
                <Link href="/#event-photography" className="text-sm hover:text-yellow-300 transition">
                  Event Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-yellow-200 font-serif">
              Contact
            </h3>
            <address className="not-italic grid grid-cols-2 md:grid-cols-1 gap-y-1 gap-x-4 text-sm md:text-base text-gray-100">
              <p>Birthday Photography by SnapU</p>
              <p>London, UK</p>
              <p>Phone: +44 123 456 7890</p>
              <p>Email: info@snapuphotography.com</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-200 mt-6 pt-4 text-center">
          <p className="text-xs md:text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Birthday Photography by SnapU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

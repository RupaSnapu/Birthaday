// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import PrimaryButton from "./Button/PrimaryButton";
// // // import ReviewCard from "./ReviewCard";
// // // import Image from "next/image";

// // // // === Pastel colors for confetti ===
// // // const pastelColors = [
// // //   "#fcd5ce", "#f8edeb", "#d8e2dc", "#ffe5d9",
// // //   "#f9dcc4", "#fec5bb", "#e2ece9", "#bee1e6"
// // // ];

// // // export default function HeroSection() {
// // //   const textVariants = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // //   };

// // //   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
// // //   const [current, setCurrent] = useState(0);
// // //   const [next, setNext] = useState(1);
// // //   const [angle, setAngle] = useState(0);

// // //   // === Slower radial wipe ===
// // //   useEffect(() => {
// // //     let start = performance.now();
// // //     const duration = 10000; // 10s for gentle wipe

// // //     const animate = (now) => {
// // //       const elapsed = now - start;
// // //       let newAngle = (elapsed / duration) * 360;

// // //       if (newAngle >= 360) {
// // //         setCurrent((prev) => (prev + 1) % images.length);
// // //         setNext((prev) => (prev + 1) % images.length);
// // //         start = now;
// // //         newAngle = 0;
// // //       }

// // //       setAngle(newAngle);
// // //       requestAnimationFrame(animate);
// // //     };

// // //     requestAnimationFrame(animate);
// // //     return () => {};
// // //   }, [images.length]);

// // //   // === Reviews carousel ===
// // //   const reviews = [
// // //     {
// // //       quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
// // //       author: "Sarah K., London",
// // //       rating: 5,
// // //     },
// // //     {
// // //       quote: "Worth every penny. The photos tell the whole story of our celebration.",
// // //       author: "Michael T., Manchester",
// // //       rating: 5,
// // //     },
// // //     {
// // //       quote: "Professional, friendly, and amazing results. Highly recommend!",
// // //       author: "Emma L., Birmingham",
// // //       rating: 5,
// // //     },
// // //   ];

// // //   const [currentReview, setCurrentReview] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentReview((prev) => (prev + 1) % reviews.length);
// // //     }, 5000);
// // //     return () => clearInterval(interval);
// // //   }, [reviews.length]);

// // //   return (
// // //     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
// // //       {/* === Confetti Background === */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         {[...Array(30)].map((_, i) => (<div
// // //             key={i}
// // //             className="confetti"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 5}s`,
// // //               backgroundColor: pastelColors[i % pastelColors.length],
// // //             }}
// // //           />
// // //         ))}
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
// // //           {/* === Text & CTA === */}
// // //           <div className="flex-1 text-center md:text-left">
// // //             <motion.h1
// // //               className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={textVariants}
// // //             >
// // //               Capture Your{" "}
// // //               <span className="text-violet-600">Special Day</span>
// // //             </motion.h1>
// // //             <motion.p
// // //               className="text-lg md:text-2xl mb-8 max-w-xl"
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={textVariants}
// // //               transition={{ delay: 0.2 }}
// // //             >
// // //               Professional birthday photography across the UK that turns
// // //               moments into lifelong memories.
// // //             </motion.p>
// // //             <motion.div
// // //               initial="hidden"
// // //               animate="visible"
// // //               variants={textVariants}
// // //               transition={{ delay: 0.4 }}
// // //             >
// // //               <PrimaryButton
// // //                 text="Book Your Session"
// // //                 className="hover:bg-violet-600 transition duration-300"
// // //               />
// // //             </motion.div>
// // //           </div>

// // //           {/* === Circle Image Deck with radial wipe === */}
// // //           <div className="flex-1 flex justify-center md:justify-end">
// // //             <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
// // //               {/* Outer border */}
// // //               <div className="absolute inset-0 rounded-full border-[6px] border-white opacity-80 z-10"></div>

// // //               {/* Inner rotating wipe image */}
// // //               <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
// // //                 {/* Base image */}
// // //                 <Image
// // //                   src={images[current]}
// // //                   alt="Current"
// // //                   fill
// // //                   className="object-cover"
// // //                 />

// // //                 {/* SVG radial wipe */}
// // //                 <svg
// // //                   className="absolute inset-0 w-full h-full"
// // //                   viewBox="0 0 100 100"
// // //                   preserveAspectRatio="none"
// // //                 >
// // //                   <defs>
// // //                     <mask id="revealMask">
// // //                       <rect x="0" y="0" width="100" height="100" fill="black" />
// // //                       <path
// // //                         d={sectorPath(50, 50, 50, 0, angle)}
// // //                         fill="white"
// // //                       />
// // //                     </mask>
// // //                   </defs>
// // //                   <image
// // //                     href={images[next]}
// // //                     x="0"
// // //                     y="0"
// // //                     width="100"
// // //                     height="100"
// // //                     preserveAspectRatio="xMidYMid slice"
// // //                     mask="url(#revealMask)"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* === Reviews === */}
// // //         <div className="mt-20">
// // //           {/* Mobile: single card with transform */}
// // //           <div className="block md:hidden relative h-[250px] overflow-hidden">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentReview}
// // //                 initial={{ opacity: 0, x: 50 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 exit={{ opacity: 0, x: -50 }}
// // //                 transition={{ duration: 0.6 }}
// // //                 className="absolute inset-0"
// // //               >
// // //                 <ReviewCard {...reviews[currentReview]} index={currentReview} />
// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>

// // //           {/* Desktop: 3-column grid */}
// // //           <div className="hidden md:grid md:grid-cols-3 gap-8">
// // //             {reviews.map((review, index) => (
// // //               <ReviewCard key={index} {...review} index={index} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // === Helper functions ===
// // // function sectorPath(cx, cy, r, startAngle, endAngle) {
// // //   const start = polarToCartesian(cx, cy, r, endAngle);
// // //   const end = polarToCartesian(cx, cy, r, startAngle);
// // //   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
// // //   return [
// // //     `M ${cx} ${cy}`,
// // //     `L ${start.x} ${start.y}`,
// // //     `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
// // //     "Z",
// // //   ].join(" ");
// // // }

// // // function polarToCartesian(cx, cy, r, angleDeg) {
// // //   const rad = ((angleDeg - 90) * Math.PI) / 180;
// // //   return {
// // //     x: cx + r * Math.cos(rad),
// // //     y: cy + r * Math.sin(rad),
// // //   };
// // // }
// // 'use client';
// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import PrimaryButton from "./Button/PrimaryButton";
// // import ReviewCard from "./ReviewCard";
// // import Image from "next/image";

// // // === Pastel colors for confetti ===
// // const pastelColors = [
// //   "#fcd5ce", "#f8edeb", "#d8e2dc", "#ffe5d9",
// //   "#f9dcc4", "#fec5bb", "#e2ece9", "#bee1e6"
// // ];

// // export default function HeroSection() {
// //   const textVariants = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// //   };

// //   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
// //   const [current, setCurrent] = useState(0);
// //   const [next, setNext] = useState(1);
// //   const [angle, setAngle] = useState(0);

// //   // === Slower radial wipe with easing ===
// //   useEffect(() => {
// //     let start = performance.now();
// //     let frameId;
// //     const duration = 10000; // 10 seconds

// //     const animate = (now) => {
// //       const elapsed = now - start;
// //       let t = elapsed / duration;
// //       if (t > 1) t = 1;

// //       // Optional easing
// //       const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
// //       let newAngle = eased * 360;

// //       if (t >= 1) {
// //         setCurrent((prev) => (prev + 1) % images.length);
// //         setNext((prev) => (prev + 1) % images.length);
// //         start = now;
// //         newAngle = 0;
// //       }

// //       setAngle(newAngle);
// //       frameId = requestAnimationFrame(animate);
// //     };

// //     frameId = requestAnimationFrame(animate);
// //     return () => cancelAnimationFrame(frameId);
// //   }, [images.length]);

// //   // === Reviews carousel ===
// //   const reviews = [
// //     {
// //       quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
// //       author: "Sarah K., London",
// //       rating: 5,
// //     },
// //     {
// //       quote: "Worth every penny. The photos tell the whole story of our celebration.",
// //       author: "Michael T., Manchester",
// //       rating: 5,
// //     },
// //     {
// //       quote: "Professional, friendly, and amazing results. Highly recommend!",
// //       author: "Emma L., Birmingham",
// //       rating: 5,
// //     },
// //   ];

// //   const [currentReview, setCurrentReview] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentReview((prev) => (prev + 1) % reviews.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [reviews.length]);

// //   // === Confetti Background ===
// //   const confettiElements = [...Array(30)].map((_, i) => (
// //     <div key={i}
// //          className="confetti"
// //          style={{
// //            left: `${Math.random() * 100}%`,
// //            animationDelay: `${Math.random() * 5}s`,
// //            backgroundColor: pastelColors[i % pastelColors.length],
// //          }} />
// //   ));

// //   return (
// //     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {confettiElements}
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
// //           {/* === Text & CTA === */}
// //           <div className="flex-1 text-center md:text-left">
// //             <motion.h1
// //               className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
// //               initial="hidden"
// //               animate="visible"
// //               variants={textVariants}
// //             >
// //               Capture Your{" "}
// //               <span className="text-violet-600">Special Day</span>
// //             </motion.h1>
// //             <motion.p
// //               className="text-lg md:text-2xl mb-8 max-w-xl"
// //               initial="hidden"
// //               animate="visible"
// //               variants={textVariants}
// //               transition={{ delay: 0.2 }}
// //             >
// //               Professional birthday photography across the UK that turns
// //               moments into lifelong memories.
// //             </motion.p>
// //             <motion.div
// //               initial="hidden"
// //               animate="visible"
// //               variants={textVariants}
// //               transition={{ delay: 0.4 }}
// //             >
// //               <PrimaryButton
// //                 text="Book Your Session"
// //                 className="hover:bg-violet-600 transition duration-300"
// //               />
// //             </motion.div>
// //           </div>

// //           {/* === Circle Image Deck with radial wipe === */}
// //           <div className="flex-1 flex justify-center md:justify-end">
// //             <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
// //               <div className="absolute inset-0 rounded-full border-[6px] border-white opacity-80 z-10"></div>

// //               <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
// //                 <Image
// //                   src={images[current]}
// //                   alt={`Photo ${current + 1}`}
// //                   fill
// //                   className="object-cover"
// //                 />

// //                 <svg
// //                   className="absolute inset-0 w-full h-full"
// //                   viewBox="0 0 100 100"
// //                   preserveAspectRatio="none"
// //                 >
// //                   <defs>
// //                     <mask id="revealMask">
// //                       <rect x="0" y="0" width="100%" height="100%" fill="black" />
// //                       <path
// //                         d={sectorPath(50, 50, 50, 0, angle)}
// //                         fill="white"
// //                       />
// //                     </mask>
// //                   </defs>
// //                   <image
// //                     href={images[next]}
// //                     x="0"
// //                     y="0"
// //                     width="100"
// //                     height="100"
// //                     preserveAspectRatio="xMidYMid slice"
// //                     mask="url(#revealMask)"
// //                   />
// //                 </svg>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* === Reviews === */}
// //         <div className="mt-20">
// //           <div className="block md:hidden relative h-[250px] overflow-hidden">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentReview}
// //                 initial={{ opacity: 0, x: 50 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -50 }}
// //                 transition={{ duration: 0.6 }}
// //                 className="absolute inset-0"
// //               >
// //                 <ReviewCard {...reviews[currentReview]} index={currentReview} />
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>

// //           <div className="hidden md:grid md:grid-cols-3 gap-8">
// //             {reviews.map((review, index) => (
// //               <ReviewCard key={index} {...review} index={index} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // === Helper functions ===
// // function sectorPath(cx, cy, r, startAngle, endAngle) {
// //   const start = polarToCartesian(cx, cy, r, endAngle);
// //   const end = polarToCartesian(cx, cy, r, startAngle);
// //   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
// //   return [
// //     `M ${cx} ${cy}`,
// //     `L ${start.x} ${start.y}`,
// //     `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
// //     "Z",
// //   ].join(" ");
// // }

// // function polarToCartesian(cx, cy, r, angleDeg) {
// //   const rad = ((angleDeg - 90) * Math.PI) / 180;
// //   return {
// //     x: cx + r * Math.cos(rad),
// //     y: cy + r * Math.sin(rad),
// //   };
// // }




// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";
// import ReviewCard from "./ReviewCard";
// import Image from "next/image";

// const pastelColors = [
//   "#fcd5ce", "#f8edeb", "#d8e2dc", "#ffe5d9",
//   "#f9dcc4", "#fec5bb", "#e2ece9", "#bee1e6"
// ];

// export default function HeroSection() {
//   // State for radial-wipe carousel
//   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
//   const [current, setCurrent] = useState(0);
//   const [next, setNext] = useState(1);
//   const [angle, setAngle] = useState(0);

//   // State for reviews carousel
//   const reviews = [
//     { quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.", author: "Sarah K., London", rating: 5 },
//     { quote: "Worth every penny. The photos tell the whole story of our celebration.", author: "Michael T., Manchester", rating: 5 },
//     { quote: "Professional, friendly, and amazing results. Highly recommend!", author: "Emma L., Birmingham", rating: 5 },
//   ];
//   const [currentReview, setCurrentReview] = useState(0);

//   // Only generate confetti client-side
//   const [mounted, setMounted] = useState(false);
//   const [confetti, setConfetti] = useState([]);
//   useEffect(() => {
//     setMounted(true);
//     // generate 30 random confetti pieces
//     const pieces = Array.from({ length: 30 }).map((_, i) => ({
//       key: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       color: pastelColors[i % pastelColors.length]
//     }));
//     setConfetti(pieces);
//   }, []);

//   // radial-wipe animation
//   useEffect(() => {
//     let start = performance.now();
//     let frame;
//     const duration = 10000;
//     const animate = now => {
//       const elapsed = now - start;
//       let t = elapsed / duration;
//       if (t >= 1) {
//         setCurrent(c => (c + 1) % images.length);
//         setNext(n => (n + 1) % images.length);
//         start = now;
//         t = 0;
//       }
//       // ease in/out
//       const eased = t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
//       setAngle(eased * 360);
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [images.length]);

//   // reviews auto-rotate
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrentReview(r => (r + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(id);
//   }, [reviews.length]);

//   const textVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
//       {/* Confetti only after mount */}
//       {mounted && (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {confetti.map(c => (
//             <div
//               key={c.key}
//               className="confetti"
//               style={{
//                 left: `${c.left}%`,
//                 animationDelay: `${c.delay}s`,
//                 backgroundColor: c.color,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Text & CTA */}
//           <div className="flex-1 text-center md:text-left">
//             <motion.h1
//               className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//             >
//               Capture Your{" "}
//               <span className="text-violet-600">Special Day</span>
//             </motion.h1>
//             <motion.p
//               className="text-lg md:text-2xl mb-8 max-w-xl"
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               transition={{ delay: 0.2 }}
//             >
//               Professional birthday photography across the UK that turns
//               moments into lifelong memories.
//             </motion.p>
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               transition={{ delay: 0.4 }}
//             >
//               <PrimaryButton
//                 text="Book Your Session"
//                 className="hover:bg-violet-600 transition duration-300"
//               />
//             </motion.div>
//           </div>

//           {/* Circle Image Deck with radial wipe */}
//           <div className="flex-1 flex justify-center md:justify-end">
//             <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
//               <div className="absolute inset-0 rounded-full border-[6px] border-white opacity-80 z-10" />

//               <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
//                 <Image
//                   src={images[current]}
//                   alt={`Photo ${current + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 36rem"
//                   className="object-cover"
//                 />

//                 <svg
//                   className="absolute inset-0 w-full h-full"
//                   viewBox="0 0 100 100"
//                   preserveAspectRatio="none"
//                 >
//                   <defs>
//                     <mask id="revealMask">
//                       <rect x="0" y="0" width="100%" height="100%" fill="black" />
//                       <path d={sectorPath(50, 50, 50, 0, angle)} fill="white" />
//                     </mask>
//                   </defs>
//                   <image
//                     href={images[next]}
//                     x="0"
//                     y="0"
//                     width="100"
//                     height="100"
//                     preserveAspectRatio="xMidYMid slice"
//                     mask="url(#revealMask)"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-20">
//           {/* Mobile */}
//           <div className="block md:hidden relative h-[250px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentReview}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.6 }}
//                 className="absolute inset-0"
//               >
//                 {/* <ReviewCard {...reviews[currentReview]} index={currentReview} /> */}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//           {/* Desktop */}
//           {/* <div className="hidden md:grid md:grid-cols-3 gap-8">
//             {reviews.map((rev, idx) => (
//               <ReviewCard key={idx} {...rev} index={idx} />
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// function sectorPath(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
//   return [
//     `M ${cx} ${cy}`,
//     `L ${start.x} ${start.y}`,
//     `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
//     "Z",
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }








"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "./Button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

// 🎉 Confetti colors
const pastelColors = [
  "#fcd5ce",
  "#f8edeb",
  "#d8e2dc",
  "#ffe5d9",
  "#f9dcc4",
  "#fec5bb",
  "#e2ece9",
  "#bee1e6",
];

// ✅ Sector path helper
function sectorPath(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function HeroSection() {
  // Images
  const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [angle, setAngle] = useState(0);

  // Reviews
  const reviews = [
    {
      quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
      author: "Sarah K., London",
      rating: 5,
    },
    {
      quote: "Worth every penny. The photos tell the whole story of our celebration.",
      author: "Michael T., Manchester",
      rating: 5,
    },
    {
      quote: "Professional, friendly, and amazing results. Highly recommend!",
      author: "Emma L., Birmingham",
      rating: 5,
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);

  // Confetti
  const [confetti, setConfetti] = useState([]);
  useEffect(() => {
    const pieces = Array.from({ length: 30 }).map((_, i) => ({
      key: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: pastelColors[i % pastelColors.length],
    }));
    setConfetti(pieces);
  }, []);

  // ✅ Radial wipe with custom easing
  useEffect(() => {
    const duration = 10000;
    let start = performance.now();
    let raf;

    const tick = (now) => {
      let t = (now - start) / duration;
      if (t >= 1) {
        setCurrent((c) => (c + 1) % images.length);
        setNext((n) => (n + 1) % images.length);
        start = now;
        t = 0;
      }
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setAngle(eased * 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [images.length]);

  // ✅ Reviews rotate every 5 sec
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentReview((r) => (r + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  return (
    <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confetti.map((c) => (
          <div
            key={c.key}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${c.left}%`,
              top: "-10px",
              backgroundColor: c.color,
              animation: `fall 5s linear ${c.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(-10%); opacity: 1; }
          100% { transform: translateY(110%); opacity: 0; }
        }
      `}</style>

      <div className="max-w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text */}
        <div className="flex-1 text-center md:text-left ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-xl xl:text-4xl 2xl:text-6xl md:text-xl font-extrabold mb-4 sm:mb-6 leading-tight"
          >
            Capture Your Bright {" "}<br/>
            <span className="text-violet-600 md:ml-58 xl:ml-36 2xl:ml-64">Special Day</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg xl:text-lg 2xl:text-2xl md:text-lg mb-6 sm:mb-8  mx-auto md:mx-0"
          >
            Capture unforgettable birthday moments with SnapU Photography, your go-to expert for birthday photography in the UK. From candid smiles to joyful celebrations, we preserve every special detail with creativity and care. Perfect for all ages and events, SnapU delivers high-quality images you'll cherish forever. Book trusted UK birthday photographers at SnapU Photography today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href='#Contact'>
            <PrimaryButton
              text="Book Your Session"
              className="hover:bg-violet-600 transition duration-300"
            /></Link>
          </motion.div>
        </div>

        {/* ✅ Radial wipe carousel */}
        <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
          <div className="relative w-64 h-64  2xl:w-[750px] 2xl:h-[750px] sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">

            {/* ✅ Dashed spinning ring */}
            <motion.svg
              className="absolute inset-0 z-10"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="1 1"
                strokeOpacity="0.5"
              />
            </motion.svg>

            <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full border-[10px] sm:border-[12px] md:border-[16px] border-white shadow-2xl overflow-hidden z-20">
              <Image
                src={images[current]}
                alt={`Photo ${current + 1}`}
                fill
                className="object-cover"
                priority
              />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <mask id="radialMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="black" />
                    <path d={sectorPath(50, 50, 50, 0, angle)} fill="white" />
                  </mask>
                </defs>
                <image
                  href={images[next]}
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#radialMask)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    {/* ✅ Reviews carousel — FIXED & RESPONSIVE */}
<div className="relative md:ml-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-12 sm:mt-16">
  <div className="relative w-64 h-24 sm:h-52 md:h-40 overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentReview}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-white/10 bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl shadow-lg text-black flex flex-col justify-center"
      >
        <p className="italic mb-3 sm:mb-4 sm:text-base text-[12px] ">
          "{reviews[currentReview].quote}"
        </p>
        <p className="font-semibold sm:text-base text-[12px]">
          - {reviews[currentReview].author}
        </p>
        <div className="flex mt-2">
          {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

    </section>
  );
}








// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";
// import Image from "next/image";

// // 🎉 Confetti colors
// const pastelColors = [
//   "#fcd5ce",
//   "#f8edeb",
//   "#d8e2dc",
//   "#ffe5d9",
//   "#f9dcc4",
//   "#fec5bb",
//   "#e2ece9",
//   "#bee1e6",
// ];

// // ✅ Sector path helper
// function sectorPath(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
//   return [
//     `M ${cx} ${cy}`,
//     `L ${start.x} ${start.y}`,
//     `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
//     "Z",
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }

// export default function HeroSection() {
//   // Images
//   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
//   const [current, setCurrent] = useState(0);
//   const [next, setNext] = useState(1);
//   const [angle, setAngle] = useState(0);

//   // Reviews
//   const reviews = [
//     {
//       quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
//       author: "Sarah K., London",
//       rating: 5,
//     },
//     {
//       quote: "Worth every penny. The photos tell the whole story of our celebration.",
//       author: "Michael T., Manchester",
//       rating: 5,
//     },
//     {
//       quote: "Professional, friendly, and amazing results. Highly recommend!",
//       author: "Emma L., Birmingham",
//       rating: 5,
//     },
//   ];
//   const [currentReview, setCurrentReview] = useState(0);

//   // Confetti
//   const [confetti, setConfetti] = useState([]);
//   useEffect(() => {
//     const pieces = Array.from({ length: 30 }).map((_, i) => ({
//       key: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       color: pastelColors[i % pastelColors.length],
//     }));
//     setConfetti(pieces);
//   }, []);

//   // ✅ Radial wipe with custom easing
//   useEffect(() => {
//     const duration = 10000;
//     let start = performance.now();
//     let raf;

//     const tick = (now) => {
//       let t = (now - start) / duration;
//       if (t >= 1) {
//         setCurrent((c) => (c + 1) % images.length);
//         setNext((n) => (n + 1) % images.length);
//         start = now;
//         t = 0;
//       }
//       // ease in/out
//       const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//       setAngle(eased * 360);
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [images.length]);

//   // ✅ Reviews rotate every 5 sec
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrentReview((r) => (r + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(id);
//   }, [reviews.length]);

//   return (
//     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">

//       {/* Confetti */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {confetti.map((c) => (
//           <div
//             key={c.key}
//             className="absolute w-2 h-2 rounded-full"
//             style={{
//               left: `${c.left}%`,
//               top: "-10px",
//               backgroundColor: c.color,
//               animation: `fall 5s linear ${c.delay}s infinite`,
//             }}
//           />
//         ))}
//       </div>
//       <style jsx global>{`
//         @keyframes fall {
//           0% { transform: translateY(-10%); opacity: 1; }
//           100% { transform: translateY(110%); opacity: 0; }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

//         {/* Text */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
//           >
//             Capture Your{" "}
//             <span className="text-violet-600">Special Day</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-2xl mb-8 max-w-xl mx-auto md:mx-0"
//           >
//             Professional birthday photography across the UK that turns
//             moments into lifelong memories.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <PrimaryButton
//               text="Book Your Session"
//               className="hover:bg-violet-600 transition duration-300"
//             />
//           </motion.div>
//         </div>

//         {/* ✅ Radial wipe carousel with dashed spinning ring */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">

//             {/* ✅ Dashed spinning SVG ring */}
//             <motion.svg
//               className="absolute inset-0 z-10"
//               viewBox="0 0 100 100"
//               animate={{ rotate: 360 }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 100,
//                 ease: "linear",
//               }}
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="48"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="0.5"
//                 strokeDasharray="1 1"
//                 strokeOpacity="0.5"
//               />
//             </motion.svg>

//             <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
//               <Image
//                 src={images[current]}
//                 alt={`Photo ${current + 1}`}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//                 <defs>
//                   <mask id="radialMask">
//                     <rect x="0" y="0" width="100%" height="100%" fill="black" />
//                     <path d={sectorPath(50, 50, 50, 0, angle)} fill="white" />
//                   </mask>
//                 </defs>
//                 <image
//                   href={images[next]}
//                   x="0"
//                   y="0"
//                   width="100"
//                   height="100"
//                   preserveAspectRatio="xMidYMid slice"
//                   mask="url(#radialMask)"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Reviews carousel */}
//       <div className="mt-[-40px] ml-5 w-[300px] h-[250px] mx-auto overflow-hidden relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentReview}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl shadow-lg text-black flex flex-col justify-center"
//           >
//             <p className="italic mb-4">"{reviews[currentReview].quote}"</p>
//             <p className="font-semibold">- {reviews[currentReview].author}</p>
//             <div className="flex mt-2">
//               {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-5 h-5 text-amber-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";
// import Image from "next/image";

// // 🎉 Confetti colors
// const pastelColors = [
//   "#fcd5ce",
//   "#f8edeb",
//   "#d8e2dc",
//   "#ffe5d9",
//   "#f9dcc4",
//   "#fec5bb",
//   "#e2ece9",
//   "#bee1e6",
// ];

// // ✅ Sector path helper
// function sectorPath(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
//   return [
//     `M ${cx} ${cy}`,
//     `L ${start.x} ${start.y}`,
//     `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
//     "Z",
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }

// export default function HeroSection() {
//   // Images
//   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
//   const [current, setCurrent] = useState(0);
//   const [next, setNext] = useState(1);
//   const [angle, setAngle] = useState(0);

//   // Reviews
//   const reviews = [
//     {
//       quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
//       author: "Sarah K., London",
//       rating: 5,
//     },
//     {
//       quote: "Worth every penny. The photos tell the whole story of our celebration.",
//       author: "Michael T., Manchester",
//       rating: 5,
//     },
//     {
//       quote: "Professional, friendly, and amazing results. Highly recommend!",
//       author: "Emma L., Birmingham",
//       rating: 5,
//     },
//   ];
//   const [currentReview, setCurrentReview] = useState(0);

//   // Confetti
//   const [confetti, setConfetti] = useState([]);
//   useEffect(() => {
//     const pieces = Array.from({ length: 30 }).map((_, i) => ({
//       key: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       color: pastelColors[i % pastelColors.length],
//     }));
//     setConfetti(pieces);
//   }, []);

//   // ✅ Radial wipe with custom easing
//   useEffect(() => {
//     const duration = 10000;
//     let start = performance.now();
//     let raf;

//     const tick = (now) => {
//       let t = (now - start) / duration;
//       if (t >= 1) {
//         setCurrent((c) => (c + 1) % images.length);
//         setNext((n) => (n + 1) % images.length);
//         start = now;
//         t = 0;
//       }
//       // ease in/out
//       const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//       setAngle(eased * 360);
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [images.length]);

//   // ✅ Reviews rotate every 5 sec
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrentReview((r) => (r + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(id);
//   }, [reviews.length]);

//   return (
//     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">

//       {/* Confetti */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {confetti.map((c) => (
//           <div
//             key={c.key}
//             className="absolute w-2 h-2 rounded-full"
//             style={{
//               left: `${c.left}%`,
//               top: "-10px",
//               backgroundColor: c.color,
//               animation: `fall 5s linear ${c.delay}s infinite`,
//             }}
//           />
//         ))}
//       </div>
//       <style jsx global>{`
//         @keyframes fall {
//           0% { transform: translateY(-10%); opacity: 1; }
//           100% { transform: translateY(110%); opacity: 0; }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

//         {/* Text */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
//           >
//             Capture Your{" "}
//             <span className="text-violet-600">Special Day</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg md:text-2xl mb-8 max-w-xl mx-auto md:mx-0"
//           >
//             Professional birthday photography across the UK that turns
//             moments into lifelong memories.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <PrimaryButton
//               text="Book Your Session"
//               className="hover:bg-violet-600 transition duration-300"
//             />
//           </motion.div>
//         </div>

//         {/* ✅ Radial wipe carousel */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
//             <div className="absolute inset-0 rounded-full border-[6px] border-white opacity-80 z-10" />
//             <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
//               <Image
//                 src={images[current]}
//                 alt={`Photo ${current + 1}`}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//                 <defs>
//                   <mask id="radialMask">
//                     <rect x="0" y="0" width="100%" height="100%" fill="black" />
//                     <path d={sectorPath(50, 50, 50, 0, angle)} fill="white" />
//                   </mask>
//                 </defs>
//                 <image
//                   href={images[next]}
//                   x="0"
//                   y="0"
//                   width="100"
//                   height="100"
//                   preserveAspectRatio="xMidYMid slice"
//                   mask="url(#radialMask)"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Reviews carousel */}
//       <div className="mt-[-40px] ml-5 w-[300px] h-[250px] mx-auto overflow-hidden relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentReview}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl shadow-lg text-black flex flex-col justify-center"
//           >
//             <p className="italic mb-4">"{reviews[currentReview].quote}"</p>
//             <p className="font-semibold">- {reviews[currentReview].author}</p>
//             <div className="flex mt-2">
//               {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-5 h-5 text-amber-400"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }


















// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { motion, useAnimation } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";
// import Image from "next/image";
// import Link from "next/link";


// // ⭐ Confetti component
// function ConfettiOverlay({ colors, count = 30 }) {
//   const pieces = useMemo(
//     () =>
//       Array.from({ length: count }).map((_, i) => ({
//         key: i,
//         left: Math.random() * 100,
//         delay: Math.random() * 5,
//         color: colors[i % colors.length],
//       })),
//     [colors, count]
//   );

//   return (
//     <>
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         {pieces.map((c) => (
//               <div
//                     key={c.key}
//                     className="absolute w-2 h-2"
//                     style={{
//                       left: `${c.left}%`,
//                       backgroundColor: c.color,
//                       animation: `fall 5s linear ${c.delay}s infinite`,
//                       top: "-10px",
//                     }}
//                   />
//                 ))}
//               </div>
//             <style jsx global>{`
//               @keyframes fall {
//                 0% {
//                   transform: translateY(-10%);
//                   opacity: 1;
//                 }
//                 100% {
//                   transform: translateY(110%);
//                   opacity: 0;
//                 }
//               }
//             `}</style>
//     </>
//   );
// }

// // ⭐ Review Card inline
// function ReviewCard({ quote, author, rating }) {
//   return (
//     <div className="bg-white bg-opacity-20 backdrop-blur p-6  rounded-xl shadow-lg text-base max-w-sm mx-auto">
//       <div className="flex mb-2">
//         {Array.from({ length: rating }).map((_, i) => (
//           <svg
//             key={i}
//             className="w-5 h-5 text-amber-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//       <p className="text-black italic mb-4">"{quote}"</p>
//       <p className="text-black font-semibold">- {author}</p>
//     </div>
//   );
// }

// export default function HeroSection() {
//   const images = ["/pic1.png", "/pic2.png", "/pic3.png"];
//   const [current, setCurrent] = useState(0);
//   const [next, setNext] = useState(1);
//   const [angle, setAngle] = useState(0);
//   const pastelColors = [
//     "#fcd5ce",
//     "#f8edeb",
//     "#d8e2dc",
//     "#ffe5d9",
//     "#f9dcc4",
//     "#fec5bb",
//     "#e2ece9",
//     "#bee1e6",
//   ];

//   // Reviews
//   const reviews = [
//     {
//       quote: "Absolutely stunning photos! Captured my daughter's birthday perfectly.",
//       author: "Sarah K., London",
//       rating: 5,
//     },
//     {
//       quote: "Worth every penny. The photos tell the whole story of our celebration.",
//       author: "Michael T., Manchester",
//       rating: 5,
//     },
//     {
//       quote: "Professional, friendly, and amazing results. Highly recommend!",
//       author: "Emma L., Birmingham",
//       rating: 5,
//     },
//   ];
//   const [currentReview, setCurrentReview] = useState(0);

//   // ⭐ Animate radial wipe using spring motion instead of manual RAF
//   const controls = useAnimation();
//   useEffect(() => {
//     controls.start({
//       angle: 360,
//       transition: { duration: 10, ease: "easeInOut" },
//     });
//     const loop = setInterval(() => {
//       setCurrent((c) => (c + 1) % images.length);
//       setNext((n) => (n + 1) % images.length);
//       controls.set({ angle: 0 });
//       controls.start({
//         angle: 360,
//         transition: { duration: 10, ease: "easeInOut" },
//       });
//     }, 10000);
//     return () => clearInterval(loop);
//   }, [controls, images.length]);

//   // ⭐ Animate reviews
//   useEffect(() => {
//     const id = setInterval(
//       () => setCurrentReview((r) => (r + 1) % reviews.length),
//       5000
//     );
//     return () => clearInterval(id);
//   }, [reviews.length]);

//   // Memoize mask path for performance
//   const maskPath = useMemo(
//     () => sectorPath(50, 50, 50, 0, angle),
//     [angle]
//   );

//   return (
//     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
//       <ConfettiOverlay colors={pastelColors} />

//       <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Text */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
//           >
//             Capture Your <span className="text-violet-600">Special Day</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xm md:text-xl mb-8 max-w-xl mx-auto md:mx-0"
//           >
//             Professional birthday photography across the UK that turns moments
//             into lifelong memories.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <Link href="#Contact">
//             <PrimaryButton
//               text="Book Your Session"
//               className="hover:bg-violet-600 transition duration-300"
//             /></Link>
//           </motion.div>
//         </div>

//           <div className="flex-1 flex justify-center md:justify-end">
//             <div className="relative w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem]">
//               <div className="absolute inset-0 rounded-full border-[6px] border-white opacity-80 z-10" />

//               <div className="absolute inset-4 md:inset-6 rounded-full border-[16px] border-white shadow-2xl overflow-hidden z-20">
//                 <Image
//                   src={images[current]}
//                   alt={`Photo ${current + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 36rem"
//                   className="object-cover"
//                 />

//                 <svg
//                   className="absolute inset-0 w-full h-full"
//                   viewBox="0 0 100 100"
//                   preserveAspectRatio="none"
//                 >
//                   <defs>
//                     <mask id="revealMask">
//                       <rect x="0" y="0" width="100%" height="100%" fill="black" />
//                       <path d={sectorPath(50, 50, 50, 0, angle)} fill="white" />
//                     </mask>
//                   </defs>
//                   <image
//                     href={images[next]}
//                     x="0"
//                     y="0"
//                     width="100"
//                     height="100"
//                     preserveAspectRatio="xMidYMid slice"
//                     mask="url(#revealMask)"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>


//           {/* ⭐ Reviews */}
//           <div className="mt-[-20px] w-[300px] h-[250px] ml-1 overflow-hidden mx-auto relative">
//             <motion.div
//               className="flex"
//               animate={{ x: -currentReview * 300 }}
//               transition={{ type: "spring", stiffness: 80, damping: 20 }}
//             >
//               {reviews.map((rev, idx) => (
//                 <div
//                   key={idx}
//                   className="flex-none w-[300px] h-[100px] px-2"
//                 >
//                   <ReviewCard {...rev} />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//       </div>
//     </section>
//   );
// }

// // ✅ Helpers for radial mask
// function sectorPath(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
//   return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
// }

// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }

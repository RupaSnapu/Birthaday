// "use client";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/simg1.png",
//       seoDescription:
//         "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations for unforgettable memories.",
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/simg2.png",
//       seoDescription:
//         "Specialized milestone birthday photography for 18th, 21st, 30th, 40th, and 50th+ celebrations, preserving each significant life moment.",
//     },
//     {
//       title: "Surprise Parties",
//       image: "/simg3.png",
//       seoDescription:
//         "Discrete surprise party coverage that captures the genuine shock and joy when your loved one walks into an unexpected celebration.",
//     },
//     {
//       title: "Themed Parties",
//       image: "/simg4.png",
//       seoDescription:
//         "Creative themed party photography tailored to your event’s style—princess castles, superhero adventures, or any custom theme.",
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Fun and messy 1st birthday cake smash photo sessions that document every sweet (and sticky) moment of your little one.",
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Behind-the-scenes birthday prep photography capturing the excitement of hair, makeup, and outfit choices before the big party.",
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-500">
//             Scrolls endlessly — hover to pause and read!
//           </p>
//         </div>

//         {/* Marquee wrapper */}
//         <div className="relative w-full overflow-x-hidden no-scrollbar">
//           <div className="flex w-max animate-marquee space-x-6">
//             {[...services, ...services].map((svc, idx) => (
//               <div
//                 key={idx}
//                 className={`
//                   flex items-stretch overflow-hidden rounded-lg shadow-md bg-white relative
//                   hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300
//                   flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[220px] group
//                 `}
//               >
//                 {/* Left bar */}
//                 <div
//                   className={`
//                     w-1/3 pl-4 py-4 bg-pink-200 text-gray-700 flex flex-col justify-center
//                     transition-colors duration-300 ease-in-out
//                     group-hover:bg-pink-300
//                   `}
//                 >
//                   <h3 className="text-base font-semibold">{svc.title}</h3>
//                   <p className="mt-2 text-xs">{svc.seoDescription}</p>
//                 </div>

//                 {/* Right image */}
//                 <div className="flex-1 relative">
//                   <img
//                     src={svc.image}
//                     alt={svc.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/10"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Marquee animation + hide scrollbar */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//         /* Hide scrollbar for all browsers */
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none; /* IE/Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import Image from 'next/image';
import {
  FaChild,
  FaBirthdayCake,
  FaGift,
  FaMask,
  FaCameraRetro,
  FaMagic,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Kids Birthday Parties",
      image: "/simg1.png",
      description:
        "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations.",
      icon: FaChild,
    },
    {
      title: "Milestone Birthdays",
      image: "/simg2.png",
      description:
        "Special milestone birthday photography for 18th, 21st, 30th, 40th and more — preserve every moment.",
      icon: FaBirthdayCake,
    },
    {
      title: "Surprise Parties",
      image: "/simg3.png",
      description:
        "Discrete surprise party shots — genuine shock and joy frozen forever in vibrant images.",
      icon: FaGift,
    },
    {
      title: "Themed Parties",
      image: "/simg4.png",
      description:
        "Creative themed party sessions — princesses, superheroes, or any custom vibe you dream up.",
      icon: FaMask,
    },
    {
      title: "Cake Smash Sessions",
      image: "/simg1.png",
      description:
        "Messy and cute first birthday cake smash photography — frosting, giggles, and memories.",
      icon: FaCameraRetro,
    },
    {
      title: "Birthday Prep Sessions",
      image: "/simg1.png",
      description:
        "Behind-the-scenes shots of hair, makeup, and laughter before the main celebration.",
      icon: FaMagic,
    },
  ];

  return (
    <section
      id="Services"
      className="py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-extrabold mb-4">
            Our Birthday Services
          </h2>
          <p className="text-xs xl:text-[15px] 2xl:text-2xl  text-gray-600">
            Hover or tap a card to explore — smooth on every screen size.
          </p>
        </div>

        {/* ✅ Marquee: strictly horizontal */}
        <div className="relative w-full overflow-x-hidden overflow-y-hidden no-scrollbar">
          <div className="flex w-max animate-marquee space-x-8">
            {[...services, ...services].map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className={`
                    flex flex-col overflow-hidden rounded-xl shadow-lg bg-white
                    hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300
                    flex-shrink-0
                    w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]
                    h-[350px] md:h-[400px]
                  `}
                >
                  {/* Top: Icon bar */}
                  <div className="flex items-center gap-4 bg-pink-100 px-4 py-3">
                    <Icon className="text-pink-500 text-2xl md:text-3xl" />
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                      {svc.title}
                    </h3>
                  </div>
                  {/* Image */}
                  <div className="flex-1 relative">
                    <Image src={svc.image}
                      alt={svc.title}
                      width={500}
                      height={300}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Bottom: Description */}
                  <div className="bg-white p-4 text-sm md:text-base text-gray-600">
                    {svc.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ✅ Marquee keyframes + no scrollbar */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}


// "use client";

// import {
//   FaChild,
//   FaBirthdayCake,
//   FaGift,
//   FaMask,
//   FaCameraRetro,
//   FaMagic,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/simg1.png",
//       description:
//         "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations.",
//       icon: FaChild,
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/simg2.png",
//       description:
//         "Special milestone birthday photography for 18th, 21st, 30th, 40th, and more — preserve every moment.",
//       icon: FaBirthdayCake,
//     },
//     {
//       title: "Surprise Parties",
//       image: "/simg3.png",
//       description:
//         "Discrete surprise party shots — genuine shock and joy frozen forever in vibrant images.",
//       icon: FaGift,
//     },
//     {
//       title: "Themed Parties",
//       image: "/simg4.png",
//       description:
//         "Creative themed party sessions — princesses, superheroes, or any custom vibe you dream up.",
//       icon: FaMask,
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/simg1.png",
//       description:
//         "Messy and cute first birthday cake smash photography — frosting, giggles, and memories.",
//       icon: FaCameraRetro,
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/simg1.png",
//       description:
//         "Behind-the-scenes shots of hair, makeup, and laughter before the main celebration.",
//       icon: FaMagic,
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Hover or tap a card to explore — smooth on every screen size.
//           </p>
//         </div>

//         {/* Marquee wrapper */}
//         <div className="relative w-full overflow-x-hidden no-scrollbar">
//           <div className="flex w-max animate-marquee space-x-8">
//             {[...services, ...services].map((svc, idx) => {
//               const Icon = svc.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300  w-full h-full"
//                 >
//                   {/* Top: Icon bar */}
//                   <div className="flex items-center gap-4 bg-pink-100 px-4 py-3">
//                     <Icon className="text-pink-500 text-2xl md:text-3xl" />
//                     <h3 className="text-lg md:text-xl font-semibold text-gray-700">
//                       {svc.title}
//                     </h3>
//                   </div>
//                   {/* Image */}
//                   <div className="flex-1 relative overflow-hidden">
//                     <img
//                       src={svc.image}
//                       alt={svc.title}
//                       className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0" />
//                   </div>
//                   {/* Bottom: Description */}
//                   <div className="bg-white p-4 text-sm md:text-base text-gray-600">
//                     {svc.description}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Marquee + no scrollbar */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 50s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }




// export default function ServicesSection() {
//     const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/simg1.png",
//       seoDescription:
//         "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations for unforgettable memories.",
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/simg2.png",
//       seoDescription:
//         "Specialized milestone birthday photography for 18th, 21st, 30th, 40th, and 50th+ celebrations, preserving each significant life moment.",
//     },
//     {
//       title: "Surprise Parties",
//       image: "/simg3.png",
//       seoDescription:
//         "Discrete surprise party coverage that captures the genuine shock and joy when your loved one walks into an unexpected celebration.",
//     },
//     {
//       title: "Themed Parties",
//       image: "/simg4.png",
//       seoDescription:
//         "Creative themed party photography tailored to your event’s style—princess castles, superhero adventures, or any custom theme.",
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Fun and messy 1st birthday cake smash photo sessions that document every sweet (and sticky) moment of your little one.",
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Behind-the-scenes birthday prep photography capturing the excitement of hair, makeup, and outfit choices before the big party.",
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-50 to-pink-50"
//     >
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Hover a bar to unveil the full celebration shot and details!
//           </p>
//         </div>

//         <ul className="space-y-6">
//           {services.map((svc, idx) => (
//             <li
//               key={idx}
//               className="group flex items-stretch overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 bg-white relative"
//             >
//               {/* Full-height Left bar */}
//               <div
//                 className="
//                   flex-shrink-0
//                   w-1/4
//                   pl-5 py-6
//                   bg-indigo-600
//                   text-white
//                   flex flex-col justify-center
//                   transition-colors duration-300 ease-in-out
//                   group-hover:bg-indigo-700
//                 "
//               >
//                 <h3 className="text-xl font-semibold">{svc.title}</h3>
//                 {/* Description under title */}
//                 <p className="mt-2 text-sm leading-tight">
//                   {svc.seoDescription}
//                 </p>
//               </div>

//               {/* Right area: image */}
//               <div
//                 className="
//                   flex-1
//                   max-w-0
//                   group-hover:max-w-full
//                   transition-[max-width] duration-500 ease-in-out
//                   overflow-hidden
//                   relative
//                 "
//               >
//                 <img
//                   src={svc.image}
//                   alt={svc.title}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }





// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/simg1.png",
//       seoDescription:
//         "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations for unforgettable memories.",
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/simg2.png",
//       seoDescription:
//         "Specialized milestone birthday photography for 18th, 21st, 30th, 40th, and 50th+ celebrations, preserving each significant life moment.",
//     },
//     {
//       title: "Surprise Parties",
//       image: "/simg3.png",
//       seoDescription:
//         "Discrete surprise party coverage that captures the genuine shock and joy when your loved one walks into an unexpected celebration.",
//     },
//     {
//       title: "Themed Parties",
//       image: "/simg4.png",
//       seoDescription:
//         "Creative themed party photography tailored to your event’s style—princess castles, superhero adventures, or any custom theme.",
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Fun and messy 1st birthday cake smash photo sessions that document every sweet (and sticky) moment of your little one.",
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Behind-the-scenes birthday prep photography capturing the excitement of hair, makeup, and outfit choices before the big party.",
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-50 to-pink-50"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Hover a bar to unveil the full celebration shot and details!
//           </p>
//         </div>

//         <ul className="space-y-6">
//           {services.map((svc, idx) => (
//             <li
//               key={idx}
//               className="
//                 group flex items-stretch 
//                 overflow-hidden rounded-lg shadow-md 
//                 hover:shadow-lg transform hover:scale-[1.02] 
//                 transition-all duration-300 bg-white 
//                 relative h-48
//               "
//             >
//               {/* Left side: title and hover description */}
//               <div
//                 className="
//                   flex-shrink-0
//                   w-1/4
//                   pl-5 py-4
//                   bg-indigo-600
//                   text-white
//                   flex flex-col justify-center
//                   transition-colors duration-300 ease-in-out
//                   group-hover:bg-indigo-700
//                 "
//               >
//                 <h3 className="text-lg font-semibold">{svc.title}</h3>
//                 <p
//                   className="
//                     mt-2 text-sm leading-tight 
//                     opacity-0 group-hover:opacity-100 
//                     transition-opacity duration-500
//                   "
//                 >
//                   {svc.seoDescription}
//                 </p>
//               </div>

//               {/* Right side: small preview -> expands to full */}
//               <div
//                 className="
//                   relative flex-1 overflow-hidden
//                 "
//               >
//                 <img
//                   src={svc.image}
//                   alt={svc.title}
//                   className="
//                     absolute top-0 left-0 
//                     h-24 w-32 
//                     group-hover:w-full group-hover:h-full
//                     object-cover
//                     transition-all duration-500 ease-in-out
//                   "
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }












// // // code box AI







// "use client";

// import { useState, useEffect } from "react";
// import { FaBirthdayCake, FaChild, FaMask, FaCameraRetro, FaGift, FaMagic } from "react-icons/fa";

// export default function ServicesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=400&fit=crop&crop=faces",
//       seoDescription:
//         "Candid kids party photography capturing smiles, fun, and colorful moments to remember forever.",
//       gradient: "from-pink-500 to-purple-600",
//       icon: <FaChild size={40} />,
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=400&fit=crop&crop=faces",
//       seoDescription:
//         "Photography for 18th, 21st, 30th, 40th and big birthdays — preserve every milestone beautifully.",
//       gradient: "from-blue-500 to-indigo-600",
//       icon: <FaBirthdayCake size={40} />,
//     },
//     {
//       title: "Surprise Parties",
//       image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=400&fit=crop&crop=center",
//       seoDescription:
//         "Discrete coverage for surprise parties — capturing genuine shock and joy reactions.",
//       gradient: "from-yellow-500 to-orange-600",
//       icon: <FaGift size={40} />,
//     },
//     {
//       title: "Themed Parties",
//       image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop&crop=center",
//       seoDescription:
//         "Creative themed party shoots — from princess castles to superheroes and custom themes.",
//       gradient: "from-green-500 to-teal-600",
//       icon: <FaMask size={40} />,
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=center",
//       seoDescription:
//         "Adorable, messy 1st birthday cake smash sessions — capture the fun and frosting.",
//       gradient: "from-red-500 to-pink-600",
//       icon: <FaCameraRetro size={40} />,
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800&h=400&fit=crop&crop=center",
//       seoDescription:
//         "Behind-the-scenes shots of hair, makeup, and excitement leading up to the party.",
//       gradient: "from-purple-500 to-indigo-600",
//       icon: <FaMagic size={40} />,
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-indigo-900 relative"
//     >
//       {/* Cursor follower */}
//       <div 
//         className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
//         style={{
//           left: mousePosition.x - 12,
//           top: mousePosition.y - 12,
//           transition: 'all 0.1s ease'
//         }}
//       >
//         <div className="w-full h-full bg-white rounded-full blur-sm"></div>
//       </div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-300 max-w-xl mx-auto">
//             Hover to explore each service and see the magic unfold!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((svc, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className={`group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 bg-black/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]`}
//             >
//               {/* Left bar */}
//               <div className={`flex flex-col justify-center items-center p-6 w-56 sm:w-64 bg-gradient-to-br ${svc.gradient} text-white`}>
//                 <div className="mb-4">{svc.icon}</div>
//                 <h3 className="text-2xl font-bold text-center">{svc.title}</h3>
//                 <p className="mt-2 text-sm text-center">{svc.seoDescription}</p>
//               </div>

//               {/* Right reveal area */}
//               <div className="flex-1 relative overflow-hidden max-w-0 group-hover:max-w-full transition-all duration-700 ease-in-out">
//                 <img
//                   src={svc.image}
//                   alt={svc.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import { useState, useEffect } from "react";
// import {
//   FaBirthdayCake,
//   FaChild,
//   FaMask,
//   FaCameraRetro,
//   FaGift,
//   FaMagic,
//   FaHandPointer,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image:
//         "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=400&fit=crop&crop=faces",
//       description:
//         "Candid kids party photography capturing smiles, fun, and colorful moments to remember forever.",
//       icon: <FaChild size={40} />,
//     },
//     {
//       title: "Milestone Birthdays",
//       image:
//         "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=400&fit=crop&crop=faces",
//       description:
//         "Photography for milestone birthdays — preserve every big moment beautifully.",
//       icon: <FaBirthdayCake size={40} />,
//     },
//     {
//       title: "Surprise Parties",
//       image:
//         "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=400&fit=crop&crop=center",
//       description:
//         "Discrete coverage for surprise parties — capturing genuine shock and joy reactions.",
//       icon: <FaGift size={40} />,
//     },
//     {
//       title: "Themed Parties",
//       image:
//         "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop&crop=center",
//       description:
//         "Creative themed party shoots — from princess castles to superheroes and custom themes.",
//       icon: <FaMask size={40} />,
//     },
//     {
//       title: "Cake Smash Sessions",
//       image:
//         "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=center",
//       description:
//         "Adorable, messy 1st birthday cake smash sessions — capture the fun and frosting.",
//       icon: <FaCameraRetro size={40} />,
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image:
//         "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800&h=400&fit=crop&crop=center",
//       description:
//         "Behind-the-scenes shots of hair, makeup, and excitement leading up to the party.",
//       icon: <FaMagic size={40} />,
//     },
//   ];

//   const handleClick = (idx) => {
//     if (isMobile) {
//       setActiveIndex(activeIndex === idx ? null : idx);
//     }
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-300 max-w-xl mx-auto">
//             Hover (desktop) or tap (mobile) to see more!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((svc, idx) => {
//             const showContent = isMobile
//               ? activeIndex === idx
//               : hoveredIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
//                 onMouseLeave={() => !isMobile && setHoveredIndex(null)}
//                 onClick={() => handleClick(idx)}
//                 className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer h-72 md:h-80 lg:h-96"
//                 style={{
//                   backgroundImage: showContent
//                     ? `url(${svc.image})`
//                     : "none",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay */}
//                 <div
//                   className={`absolute inset-0 transition-colors duration-500 ${
//                     showContent
//                       ? "bg-black/70 backdrop-blur-sm"
//                       : "bg-gradient-to-br from-purple-900/80 to-gray-800/90"
//                   }`}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col h-full justify-between p-6">
//                   {/* Icon & Title */}
//                   <div className="flex items-center gap-4 text-white">
//                     <div className="relative">
//                       {svc.icon}
//                       <span className="absolute -top-1 -right-1 block md:hidden w-3 h-3 rounded-full bg-pink-500 animate-custom-pulse"></span>
//                     </div>
//                     <h3 className="text-xl md:text-2xl font-bold">{svc.title}</h3>
//                   </div>

//                   {/* Description */}
//                   {showContent && (
//                     <p className="text-sm text-gray-100">{svc.description}</p>
//                   )}

//                   {/* Click Me Button for Mobile */}
//                   {isMobile && showContent && (
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white py-2 px-4 rounded-full flex items-center shadow-md">
//                       <FaHandPointer className="mr-2" />
//                       <span>Click Me</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Custom pulse animation */}
//       <style jsx global>{`
//         @keyframes custom-pulse {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.8);
//             opacity: 0.4;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-custom-pulse {
//           animation: custom-pulse 1.2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }















// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/simg1.png",
//       seoDescription:
//         "Expert kids birthday party photography capturing candid smiles, playful moments, and colorful decorations for unforgettable memories.",
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/simg2.png",
//       seoDescription:
//         "Specialized milestone birthday photography for 18th, 21st, 30th, 40th, and 50th+ celebrations, preserving each significant life moment.",
//     },
//     {
//       title: "Surprise Parties",
//       image: "/simg3.png",
//       seoDescription:
//         "Discrete surprise party coverage that captures the genuine shock and joy when your loved one walks into an unexpected celebration.",
//     },
//     {
//       title: "Themed Parties",
//       image: "/simg4.png",
//       seoDescription:
//         "Creative themed party photography tailored to your event’s style—princess castles, superhero adventures, or any custom theme.",
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Fun and messy 1st birthday cake smash photo sessions that document every sweet (and sticky) moment of your little one.",
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/simg1.png",
//       seoDescription:
//         "Behind-the-scenes birthday prep photography capturing the excitement of hair, makeup, and outfit choices before the big party.",
//     },
//   ];

//   return (
//     <section
//       id="Services"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
//     >
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             Hover a bar to unveil the full celebration shot and details!
//           </p>
//         </div>

//         <ul className="space-y-6">
//           {services.map((svc, idx) => (
//             <li
//               key={idx}
//               className="group flex items-stretch overflow-hidden rounded-lg shadow-lg relative"
//             >
//               {/* Left bar with 20px left padding */}
//               <div
//                 className="
//                   flex-shrink-0
//                   pl-5              /* 20px */
//                   py-6
//                   bg-white/20
//                   backdrop-blur-sm
//                   group-hover:bg-white/30
//                   transition-colors
//                   duration-300
//                 "
//               >
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {svc.title}
//                 </h3>
//               </div>

//               {/* Right reveal area (image + description) */}
//               <div
//                 className="
//                   flex-1
//                   max-w-0
//                   group-hover:max-w-full
//                   transition-all
//                   duration-500
//                   ease-in-out
//                   overflow-hidden
//                   relative
//                 "
//               >
//                 {/* Full-width image */}
//                 <img
//                   src={svc.image}
//                   alt={svc.title}
//                   className="h-full w-full object-cover"
//                 />

//                 {/* SEO description overlay */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     right-0
//                     bg-black/60
//                     p-6
//                     transform
//                     translate-y-full
//                     group-hover:translate-y-0
//                     transition-transform
//                     duration-400
//                     ease-out
//                   "
//                 >
//                   <p className="text-sm text-white leading-relaxed">
//                     {svc.seoDescription}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import {
//   FaBirthdayCake,
//   FaChild,
//   FaMask,
//   FaCameraRetro,
//   FaGift,
//   FaMagic,
//   FaHandPointer,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/img1.png",
//       description:
//         "Candid kids party photography capturing smiles, fun, and colorful moments to remember forever.",
//       icon: <FaChild size={40} />,
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/img2.png",
//       description:
//         "Photography for milestone birthdays — preserve every big moment beautifully.",
//       icon: <FaBirthdayCake size={40} />,
//     },
//     {
//       title: "Surprise Parties",
//       image: "/img3.png",
//       description:
//         "Discrete coverage for surprise parties — capturing genuine shock and joy reactions.",
//       icon: <FaGift size={40} />,
//     },
//     {
//       title: "Themed Parties",
//       image: "/img1.png",
//       description:
//         "Creative themed party shoots — from princess castles to superheroes and custom themes.",
//       icon: <FaMask size={40} />,
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/img2.png",
//       description:
//         "Adorable, messy 1st birthday cake smash sessions — capture the fun and frosting.",
//       icon: <FaCameraRetro size={40} />,
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/img3.png",
//       description:
//         "Behind-the-scenes shots of hair, makeup, and excitement leading up to the party.",
//       icon: <FaMagic size={40} />,
//     },
//     {
//       title: "Special Event",
//       image: "/img4.png",
//       description:
//         "Capture any special occasion with style and vibrant memories.",
//       icon: <FaMagic size={40} />,
//     },
//   ];

//   const handleClick = (idx) => {
//     if (isMobile) {
//       setActiveIndex(activeIndex === idx ? null : idx);
//     }
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-200">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-xl mx-auto">
//             Hover (desktop) or tap (mobile) to see more!
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((svc, idx) => {
//             const showContent = isMobile
//               ? activeIndex === idx
//               : hoveredIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
//                 onMouseLeave={() => !isMobile && setHoveredIndex(null)}
//                 onClick={() => handleClick(idx)}
//                 className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer h-72 md:h-80 lg:h-96"
//               >
//                 {/* Background image with hover zoom */}
//                 <div
//                   className={`absolute inset-0 bg-center bg-cover transition-transform duration-500 ${
//                     showContent || hoveredIndex === idx
//                       ? "scale-110"
//                       : "scale-100"
//                   }`}
//                   style={{
//                     backgroundImage: `url(${svc.image})`,
//                   }}
//                 ></div>

//                 {/* Bottom gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col h-full justify-between p-6 text-white">
//                   {/* Icon & Fancy Title */}
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       {svc.icon}
//                       <span className="absolute -top-1 -right-1 block md:hidden w-3 h-3 rounded-full bg-pink-500 animate-custom-pulse"></span>
//                     </div>
//                     {/* Gradient stroke + black text */}
//                     <div className="relative inline-block">
//                       {/* Bottom layer: gradient stroke */}
//                       <span
//                         className="absolute inset-0 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
//                         style={{ WebkitTextStroke: '2px transparent' }}
//                       >
//                         {svc.title}
//                       </span>
//                       {/* Top layer: black fill */}
//                       <span className="relative text-xl md:text-2xl font-bold text-black">
//                         {svc.title}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Description appears on hover/tap */}
//                   {showContent && (
//                     <p className="text-sm">{svc.description}</p>
//                   )}

//                   {/* Click Me Button for Mobile */}
//                   {isMobile && showContent && (
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white py-2 px-4 rounded-full flex items-center shadow-md">
//                       <FaHandPointer className="mr-2" />
//                       <span>Click Me</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Custom pulse animation */}
//       <style jsx global>{`
//         @keyframes custom-pulse {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.8);
//             opacity: 0.4;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-custom-pulse {
//           animation: custom-pulse 1.2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import {
//   FaBirthdayCake,
//   FaChild,
//   FaMask,
//   FaCameraRetro,
//   FaGift,
//   FaMagic,
// } from "react-icons/fa";

// export default function ServicesSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const services = [
//     {
//       title: "Kids Birthday Parties",
//       image: "/img1.png",
//       description:
//         "Candid kids party photography capturing smiles, fun, and colorful moments to remember forever.",
//       icon: <FaChild size={40} />,
//     },
//     {
//       title: "Milestone Birthdays",
//       image: "/img2.png",
//       description:
//         "Photography for milestone birthdays — preserve every big moment beautifully.",
//       icon: <FaBirthdayCake size={40} />,
//     },
//     {
//       title: "Surprise Parties",
//       image: "/img3.png",
//       description:
//         "Discrete coverage for surprise parties — capturing genuine shock and joy reactions.",
//       icon: <FaGift size={40} />,
//     },
//     {
//       title: "Themed Parties",
//       image: "/img1.png",
//       description:
//         "Creative themed party shoots — from princess castles to superheroes and custom themes.",
//       icon: <FaMask size={40} />,
//     },
//     {
//       title: "Cake Smash Sessions",
//       image: "/img2.png",
//       description:
//         "Adorable, messy 1st birthday cake smash sessions — capture the fun and frosting.",
//       icon: <FaCameraRetro size={40} className="text-black drop-shadow" />,
//     },
//     {
//       title: "Birthday Prep Sessions",
//       image: "/img3.png",
//       description:
//         "Behind-the-scenes shots of hair, makeup, and excitement leading up to the party.",
//       icon: <FaMagic size={40} />,
//     },
//     {
//       title: "Special Event",
//       image: "/img4.png",
//       description:
//         "Capture any special occasion with style and vibrant memories.",
//       icon: <FaMagic size={40} />,
//     },
//   ];

//   const handleClick = (idx) => {
//     if (isMobile) {
//       setActiveIndex(activeIndex === idx ? null : idx);
//     }
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pink-200">
//       <div className="max-w-full0 mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mb-4">
//             Our Birthday Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-xl mx-auto">
//             Hover (desktop) or tap (mobile) to see more!
//           </p>
//         </div>

//         {/* ✅ Updated grid: 2 columns on mobile */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((svc, idx) => {
//             const showContent = isMobile
//               ? activeIndex === idx
//               : hoveredIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
//                 onMouseLeave={() => !isMobile && setHoveredIndex(null)}
//                 onClick={() => handleClick(idx)}
//                 className="relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer h-72 md:h-80 lg:h-96"
//               >
//                 {/* Background image with hover zoom */}
//                 <div
//                   className={`absolute inset-0 bg-center bg-cover transition-transform duration-500 ${
//                     showContent || hoveredIndex === idx
//                       ? "scale-110"
//                       : "scale-100"
//                   }`}
//                   style={{
//                     backgroundImage: `url(${svc.image})`,
//                   }}
//                 ></div>

//                 {/* Bottom gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col h-full justify-between p-6 text-white">
//                   {/* Icon & Fancy Title */}
//                   <div className="flex items-center gap-4">
//                     <div className="relative">
//                       {svc.icon}
//                       <span className="absolute -top-1 -right-1 block md:hidden w-3 h-3 rounded-full bg-pink-500 animate-custom-pulse"></span>
//                     </div>
//                     {/* Gradient stroke + black text */}
//                     <div className="relative inline-block">
//                       {/* Bottom layer: gradient stroke */}
//                       <span
//                         className="absolute inset-0 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
//                         style={{ WebkitTextStroke: '2px transparent' }}
//                       >
//                         {svc.title}
//                       </span>
//                       {/* Top layer: black fill */}
//                       <span className="relative text-xl md:text-2xl font-bold text-black">
//                         {svc.title}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Description appears on hover/tap */}
//                   {showContent && (
//                     <p className="text-sm">{svc.description}</p>
//                   )}

//                   {/* ✅ "Click Me" BUTTON REMOVED */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Custom pulse animation */}
//       <style jsx global>{`
//         @keyframes custom-pulse {
//           0% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.8);
//             opacity: 0.4;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-custom-pulse {
//           animation: custom-pulse 1.2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

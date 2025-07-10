// // // // export default function TrustSection() {
// // // //   const trustPoints = [
// // // //     {
// // // //       title: "No Hidden Costs",
// // // //       description: "Our prices are transparent with no surprise fees.",
// // // //       icon: "💰",
// // // //     },
// // // //     {
// // // //       title: "Satisfaction Guarantee",
// // // //       description: "If you're not happy, we'll work until you are.",
// // // //       icon: "✅",
// // // //     },
// // // //     {
// // // //       title: "Professional Memberships",
// // // //       description: "Fully accredited by UK photography associations.",
// // // //       icon: "📜",
// // // //     },
// // // //     {
// // // //       title: "Secure Payments",
// // // //       description: "All transactions are encrypted and secure.",
// // // //       icon: "🔒",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <div className="text-center mb-12">
// // // //           <h2 className="text-3xl font-bold text-gray-900 mb-4">
// // // //             Why Trust Our Pricing?
// // // //           </h2>
// // // //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // //             We believe in fair, transparent pricing with no compromises on quality
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {trustPoints.map((point, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
// // // //             >
// // // //               <div className="text-4xl mb-4">{point.icon}</div>
// // // //               <h3 className="text-xl font-bold mb-2 text-gray-800">{point.title}</h3>
// // // //               <p className="text-gray-600">{point.description}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
// // // //           <div className="flex flex-col md:flex-row items-center">
// // // //             <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
// // // //               <div className="w-32 h-32 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 flex items-center justify-center text-white text-5xl font-bold">
// // // //                 100%
// // // //               </div>
// // // //             </div>
// // // //             <div className="md:w-2/3 md:pl-8 text-center md:text-left">
// // // //               <h3 className="text-2xl font-bold mb-3 text-gray-800">
// // // //                 Client Satisfaction Rate
// // // //               </h3>
// // // //               <p className="text-gray-600 mb-4">
// // // //                 Every single one of our clients has rated their experience 5 stars.
// // // //                 We're proud of our perfect track record and work hard to maintain it.
// // // //               </p>
// // // //               <div className="flex justify-center md:justify-start">
// // // //                 {[...Array(5)].map((_, i) => (
// // // //                   <svg
// // // //                     key={i}
// // // //                     className="w-8 h-8 text-amber-400"
// // // //                     fill="currentColor"
// // // //                     viewBox="0 0 20 20"
// // // //                   >
// // // //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// // // //                   </svg>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // "use client";

// // // import React from "react";
// // // import {
// // //   PartyPopper,
// // //   DollarSign,
// // //   TrendingUp,
// // //   Users,
// // //   Verified,
// // // } from "lucide-react";

// // // export default function TrustSection() {
// // //   const trustPoints = [
// // //     {
// // //       title: "Transparent Pricing",
// // //       description:
// // //         "Affordable birthday photography packages with clear rates and zero hidden fees — trusted by families across the UK.",
// // //       color: "emerald",
// // //     },
// // //     {
// // //       title: "Guaranteed Satisfaction",
// // //       description:
// // //         "We capture your child’s special moments perfectly, ensuring you love every photo — or we make it right.",
// // //       color: "blue",
// // //     },
// // //     {
// // //       title: "Certified Photographers",
// // //       description:
// // //         "Fully insured, trained, and verified professionals who make birthday parties stress-free and memorable.",
// // //       color: "purple",
// // //     },
// // //     {
// // //       title: "Safe & Secure",
// // //       description:
// // //         "All bookings and payments are protected with industry-standard security, giving you complete peace of mind.",
// // //       color: "rose",
// // //     },
// // //   ];

// // //   const colors = {
// // //     emerald: "text-emerald-500",
// // //     blue: "text-blue-500",
// // //     purple: "text-purple-500",
// // //     rose: "text-rose-500",
// // //   };

// // //   return (
// // //     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
// // //       <div className="max-w-7xl mx-auto text-center">
// // //         {/* Heading */}
// // //         <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
// // //           Why UK Families{" "}
// // //           <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
// // //             Trust Us
// // //           </span>
// // //         </h2>
// // //         <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-16">
// // //           Premium birthday photography with fair pricing, certified photographers, and complete peace of mind.
// // //         </p>

// // //         {/* Trust Cards */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {trustPoints.map((point, idx) => (
// // //             <div
// // //               key={idx}
// // //               className="group relative p-8 rounded-3xl border border-gray-200 shadow-md bg-white hover:shadow-xl transition duration-500 hover:scale-[1.03] flex flex-col items-start"
// // //             >
// // //               <PartyPopper
// // //                 className={`w-12 h-12 ${colors[point.color]} mb-6 transition-transform duration-500 group-hover:-rotate-12`}
// // //               />

// // //               {/* Dollar sign on hover */}
// // //               <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition duration-500">
// // //                 <DollarSign className="w-6 h-6 text-green-500 animate-bounce" />
// // //               </div>

// // //               <h3 className="text-xl font-bold text-slate-800 mb-3">
// // //                 {point.title}
// // //               </h3>
// // //               <p className="text-slate-600 text-base leading-relaxed">
// // //                 {point.description}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Satisfaction & Metrics */}
// // //         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {/* 100% Satisfaction */}
// // //           <div className="flex flex-col items-center justify-center px-6 py-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm">
// // //             <span className="text-5xl font-extrabold text-emerald-600">100%</span>
// // //             <p className="mt-2 text-slate-700 font-semibold">
// // //               Client Satisfaction
// // //             </p>
// // //           </div>

// // //           {/* Verified Reviews */}
// // //           <div className="flex items-center justify-center px-6 py-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm">
// // //             <Verified className="w-6 h-6 text-emerald-600 mr-2" />
// // //             <span className="font-semibold text-slate-700">Verified Reviews</span>
// // //           </div>

// // //           {/* Top Rated */}
// // //           <div className="flex items-center justify-center px-6 py-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
// // //             <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
// // //             <span className="font-semibold text-slate-700">Top Rated Pro</span>
// // //           </div>

// // //           {/* Happy Clients */}
// // //           <div className="flex items-center justify-center px-6 py-8 bg-purple-50 rounded-3xl border border-purple-100 shadow-sm">
// // //             <Users className="w-6 h-6 text-purple-600 mr-2" />
// // //             <span className="font-semibold text-slate-700">500+ Happy Clients</span>
// // //           </div>
// // //         </div>

// // //         {/* CTA */}
// // //         <div className="mt-14">
// // //           <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition">
// // //             Get Your Free Quote
// // //             <TrendingUp className="w-5 h-5" />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import React from "react";
// // import {
// //   PartyPopper,
// //   DollarSign,
// //   TrendingUp,
// //   Users,
// //   Verified,
// // } from "lucide-react";

// // export default function TrustSection() {
// //   const trustPoints = [
// //     {
// //       title: "Transparent Pricing",
// //       description:
// //         "Affordable birthday photography packages with clear rates and zero hidden fees — trusted by families across the UK.",
// //       color: "emerald",
// //     },
// //     {
// //       title: "Guaranteed Satisfaction",
// //       description:
// //         "We capture your child’s special moments perfectly, ensuring you love every photo — or we make it right.",
// //       color: "blue",
// //     },
// //     {
// //       title: "Certified Photographers",
// //       description:
// //         "Fully insured, trained, and verified professionals who make birthday parties stress-free and memorable.",
// //       color: "purple",
// //     },
// //     {
// //       title: "Safe & Secure",
// //       description:
// //         "All bookings and payments are protected with industry-standard security, giving you complete peace of mind.",
// //       color: "rose",
// //     },
// //   ];

// //   const colors = {
// //     emerald: "text-emerald-500",
// //     blue: "text-blue-500",
// //     purple: "text-purple-500",
// //     rose: "text-rose-500",
// //   };

// //   return (
// //     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
// //       <div className="max-w-7xl mx-auto text-center">
// //         {/* Heading */}
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
// //           Why UK Families{" "}
// //           <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
// //             Trust Us
// //           </span>
// //         </h2>
// //         <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-16">
// //           Premium birthday photography with fair pricing, certified photographers, and complete peace of mind.
// //         </p>

// //         {/* Trust Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {trustPoints.map((point, idx) => (
// //             <div
// //               key={idx}
// //               className="group relative p-8 rounded-3xl border border-gray-200 shadow-lg bg-white hover:shadow-xl transition duration-500 hover:scale-[1.03] flex flex-col items-start dark:bg-gray-700 dark:border-gray-600"
// //             >
// //               <PartyPopper
// //                 className={`w-12 h-12 ${colors[point.color]} mb-6 transition-transform duration-500 group-hover:-rotate-12`}
// //               />

// //               {/* Dollar sign on hover */}
// //               <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition duration-500">
// //                 <DollarSign className="w-6 h-6 text-green-500 animate-bounce" />
// //               </div>

// //               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
// //                 {point.title}
// //               </h3>
// //               <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
// //                 {point.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Satisfaction & Metrics */}
// //         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {/* 100% Satisfaction */}
// //           <div className="flex flex-col items-center justify-center px-6 py-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm dark:bg-emerald-900 dark:border-emerald-700">
// //             <span className="text-5xl font-extrabold text-emerald-600 dark:text-emerald-300">100%</span>
// //             <p className="mt-2 text-slate-700 dark:text-gray-300 font-semibold">
// //               Client Satisfaction
// //             </p>
// //           </div>

// //           {/* Verified Reviews */}
// //           <div className="flex items-center justify-center px-6 py-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm dark:bg-emerald-900 dark:border-emerald-700">
// //             <Verified className="w-6 h-6 text-emerald-600 mr-2 dark:text-emerald-300" />
// //             <span className="font-semibold text-slate-700 dark:text-gray-300">Verified Reviews</span>
// //           </div>

// //           {/* Top Rated */}
// //           <div className="flex items-center justify-center px-6 py-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm dark:bg-blue-900 dark:border-blue-700">
// //             <TrendingUp className="w-6 h-6 text-blue-600 mr-2 dark:text-blue-300" />
// //             <span className="font-semibold text-slate-700 dark:text-gray-300">Top Rated Pro</span>
// //           </div>

// //           {/* Happy Clients */}
// //           <div className="flex items-center justify-center px-6 py-8 bg-purple-50 rounded-3xl border border-purple-100 shadow-sm dark:bg-purple-900 dark:border-purple-700">
// //             <Users className="w-6 h-6 text-purple-600 mr-2 dark:text-purple-300" />
// //             <span className="font-semibold text-slate-700 dark:text-gray-300">500+ Happy Clients</span>
// //           </div>
// //         </div>

// //         {/* CTA */}
// //         <div className="mt-14">
// //           <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition">
// //             Get Your Free Quote
// //             <TrendingUp className="w-5 h-5" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React from "react";
// import {
//   PartyPopper,
//   DollarSign,
//   TrendingUp,
//   Users,
//   Verified,
//   Sparkles,
//   Camera,
//   Gift,
//   Smile
// } from "lucide-react";
// import Link from "next/link";

// export default function TrustSection() {
//   const trustPoints = [
//     {
//       title: "Transparent Pricing",
//       description: "Affordable birthday photography packages with clear rates and zero hidden fees — trusted by families across the UK.",
//       icon: <DollarSign className="w-6 h-6" />,
//       bgColor: "bg-gradient-to-br from-blue-50 to-pink-50",
//       borderColor: "border-blue-100",
//       iconColor: "text-blue-500",
//       hoverEffect: "group-hover:bg-blue-50"
//     },
//     {
//       title: "Guaranteed Satisfaction",
//       description: "We capture your child's special moments perfectly, ensuring you love every photo — or we make it right.",
//       icon: <Smile className="w-6 h-6" />,
//       bgColor: "bg-gradient-to-br from-pink-50 to-amber-50",
//       borderColor: "border-pink-100",
//       iconColor: "text-pink-500",
//       hoverEffect: "group-hover:bg-pink-50"
//     },
//     {
//       title: "Certified Photographers",
//       description: "Fully insured, trained, and verified professionals who make birthday parties stress-free and memorable.",
//       icon: <Camera className="w-6 h-6" />,
//       bgColor: "bg-gradient-to-br from-amber-50 to-blue-50",
//       borderColor: "border-amber-100",
//       iconColor: "text-amber-500",
//       hoverEffect: "group-hover:bg-amber-50"
//     },
//     {
//       title: "Safe & Secure",
//       description: "All bookings and payments are protected with industry-standard security, giving you complete peace of mind.",
//       icon: <Verified className="w-6 h-6" />,
//       bgColor: "bg-gradient-to-br from-blue-50 to-pink-50",
//       borderColor: "border-blue-100",
//       iconColor: "text-blue-500",
//       hoverEffect: "group-hover:bg-blue-50"
//     }
//   ];

//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-pink-50 to-amber-50">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Heading with sparkle effect */}
//         <div className="relative inline-block">
//           <h2 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-extrabold mb-4 relative z-10">
//             Why UK Families{' '}
//             <span className="bg-gradient-to-r from-pink-500 via-amber-500 to-blue-500 bg-clip-text text-transparent">
//               Trust Us
//             </span>
//           </h2>
//           <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-amber-400 animate-pulse" />
//         </div>
        
//         <p className="max-w-2xl mx-auto text-xs xl:text-[15px] 2xl:text-2xl  text-gray-700 mb-16">
//           Premium birthday photography with fair pricing, certified photographers, and complete peace of mind.
//         </p>

//         {/* Trust Cards with sophisticated gradients */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {trustPoints.map((point, idx) => (
//             <div
//               key={idx}
//               className={`group relative p-8 rounded-3xl border ${point.borderColor} ${point.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start ${point.hoverEffect}`}
//             >
//               <div className={`w-14 h-14 ${point.iconColor} bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
//                 {point.icon}
//               </div>

//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {point.title}
//               </h3>
//               <p className="text-gray-700 text-base leading-relaxed">
//                 {point.description}
//               </p>
              
//               {/* Floating sparkle on hover */}
//               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats with elegant color scheme */}
//         <div className="mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="flex flex-col items-center justify-center px-6 py-8 bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
//             <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">100%</span>
//             <p className="mt-2 text-gray-700 font-semibold">
//               Client Satisfaction
//             </p>
//           </div>

//           <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
//             <Verified className="w-6 h-6 text-pink-500 mr-2" />
//             <span className="font-semibold text-gray-700">Verified Reviews</span>
//           </div>

//           <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
//             <TrendingUp className="w-6 h-6 text-amber-500 mr-2" />
//             <span className="font-semibold text-gray-700">Top Rated Pro</span>
//           </div>

//           <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
//             <Users className="w-6 h-6 text-blue-500 mr-2" />
//             <span className="font-semibold text-gray-700">500+ Happy Clients</span>
//           </div>
//         </div>

//         {/* CTA with luxurious gradient */}
//         <div className="mt-14">
//           <Link href="#Contact">
//           <button className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-amber-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <span className="relative z-10">Get Your Free Quote</span>
//             <TrendingUp className="w-5 h-5 relative z-10" />
//             <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//           </button></Link>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React from "react";
import {
  DollarSign,
  Smile,
  Camera,
  Verified,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  const trustPoints = [
    {
      title: "Transparent Pricing",
      description:
        "Affordable birthday photography packages with clear rates and zero hidden fees — trusted by families across the UK.",
      icon: <DollarSign className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-pink-50",
      borderColor: "border-blue-100",
      iconColor: "text-blue-500",
      hoverEffect: "group-hover:bg-blue-100"
    },
    {
      title: "Guaranteed Satisfaction",
      description:
        "We capture your child's special moments perfectly, ensuring you love every photo — or we make it right.",
      icon: <Smile className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-pink-50 to-amber-50",
      borderColor: "border-pink-100",
      iconColor: "text-pink-500",
      hoverEffect: "group-hover:bg-pink-100"
    },
    {
      title: "Certified Photographers",
      description:
        "Fully insured, trained, and verified professionals who make birthday parties stress-free and memorable.",
      icon: <Camera className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-amber-50 to-blue-50",
      borderColor: "border-amber-100",
      iconColor: "text-amber-500",
      hoverEffect: "group-hover:bg-amber-100"
    },
    {
      title: "Safe & Secure",
      description:
        "All bookings and payments are protected with industry-standard security, giving you complete peace of mind.",
      icon: <Verified className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-pink-50",
      borderColor: "border-blue-100",
      iconColor: "text-blue-500",
      hoverEffect: "group-hover:bg-blue-100"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-pink-50 to-amber-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with sparkle */}
        <div className="relative inline-block mb-6">
          <h2 className="text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl font-extrabold relative z-10">
            Why UK Families{" "}
            <span className="bg-gradient-to-r from-pink-500 via-amber-500 to-blue-500 bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-amber-400 animate-pulse" />
        </div>

        <p className="max-w-2xl mx-auto text-xs xl:text-[15px] 2xl:text-2xl text-gray-700 mb-16">
          Premium birthday photography with fair pricing, certified photographers, and complete peace of mind.
        </p>

        {/* Trust cards */}
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-3xl border ${point.borderColor} ${point.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-start ${point.hoverEffect}`}
            >
              <div
                className={`w-14 h-14 ${point.iconColor} bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {point.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-700 text-xs leading-relaxed">{point.description}</p>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center px-6 py-8 bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              100%
            </span>
            <p className="mt-2 text-gray-700 font-semibold">Client Satisfaction</p>
          </div>
 
          <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow">
            <Verified className="w-8 h-8 text-pink-500 mr-2" />
            <span className="font-semibold text-gray-700">Verified Reviews</span>
          </div>

          <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="w-8 h-8 text-amber-500 mr-2" />
            <span className="font-semibold text-gray-700">Top Rated Pro</span>
          </div>

          <div className="flex items-center justify-center px-6 py-8 bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-8 h-8 text-blue-500 mr-2" />
            <span className="font-semibold text-gray-700">500+ Happy Clients</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link href="#Contact">
            <button className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-amber-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Get Your Free Quote</span>
              <TrendingUp className="w-5 h-5 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

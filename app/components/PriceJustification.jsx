// "use client";

// import Link from "next/link";
// import {
//   FaCameraRetro,
//   FaPaintBrush,
//   FaBirthdayCake,
//   FaLightbulb,
// } from "react-icons/fa";

// export default function PriceJustification() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-fuchsia-300 to-violet-300 py-24 px-6 sm:px-10 lg:px-20">
//       {/* Confetti blobs */}
//       <div className="absolute -top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl animate-bounce"></div>
//       <div className="absolute bottom-0 left-20 w-56 h-56 bg-pink-400 rounded-full opacity-20 blur-3xl animate-ping"></div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <header className="text-center mb-20">
//           <h1 className="text-fuchsia-900 text-sm xl:text-3xl 2xl:text-5xl font-extrabold drop-shadow-lg">
//             Celebrate Photography with Joy!
//           </h1>
//           <p className="mt-6 text-xs xl:text-[15px] 2xl:text-2xl  max-w-3xl mx-auto">
//             Your special day deserves colorful, timeless photos — here’s why we’re worth it.
//           </p>
//         </header>

//         {/* Bubbles */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 place-items-center">
//           {/* Camera bubble */}
//           <div className="group flex flex-col items-center text-center">
//             <div className="relative w-32 h-32 bg-pink-400 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
//               <FaCameraRetro className="text-white text-6xl mb-2 z-10" aria-label="Camera Icon" />
//               <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                 <FaCameraRetro className="text-white text-6xl mb-2 animate-pulse" aria-label="Flashing Camera Icon" />
//               </span>
//               <span className="text-white text-lg font-bold px-4 z-10">Pro Gear</span>
//             </div>
//             <p className="mt-6 xl:text-sm 2xl:text-2xl  text-fuchsia-900 max-w-xs">
//               High-end cameras and lighting ensure every candle blow and dance move looks stunning.
//             </p>
//             <p className="mt-2 text-yellow-600 2xl:text-2xl  font-bold">£5,000+ in equipment</p>
//           </div>

//           {/* Paint Brush bubble */}
//           <div className="group flex flex-col items-center text-center">
//             <div className="relative w-32 h-32 bg-yellow-300 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
//               <FaPaintBrush className="text-fuchsia-900 text-6xl mb-2 group-hover:rotate-12" aria-label="Paint Brush Icon" />
//               <span className="text-fuchsia-900 text-lg font-bold px-4 z-10">Creative Edit</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 2xl:text-2xl  xl:text-sm max-w-xs">
//               Each photo is polished with bright colors and artistic touches to match your party’s vibe.
//             </p>
//             <p className="mt-2 text-pink-700 2xl:text-2xl  font-bold">8–12 hrs retouching</p>
//           </div>

//           {/* Cake bubble */}
//           <div className="group flex flex-col items-center text-center">
//             <div className="relative w-32 h-32 bg-purple-400 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
//               <FaBirthdayCake className="text-white text-xl mb-2 z-10" aria-label="Birthday Cake Icon" />
//               <svg
//                 viewBox="0 0 24 24"
//                 className="absolute top-9 w-6 h-6 text-yellow-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 animate-ping"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//               >
//                 <path d="M12 2C12 2 8 7 8 11C8 14.866 10.686 18 12 18C13.314 18 16 14.866 16 11C16 7 12 2 12 2ZM12 16C10.895 16 10 15.105 10 14C10 12.491 11.761 10.324 12 8C12.239 10.324 14 12.491 14 14C14 15.105 13.105 16 12 16Z"/>
//               </svg>
//               <span className="text-white text-lg  font-bold px-4 z-10">Party Experts</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 2xl:text-2xl  xl:text-sm max-w-xs">
//               Over 10 years capturing cake cutting, happy tears, and laughs — so you can enjoy stress-free.
//             </p>
//             <p className="mt-2 text-yellow-600 2xl:text-2xl  font-bold">Priceless fun</p>
//           </div>

//           {/* Lightbulb bubble */}
//           <div className="group flex flex-col items-center text-center">
//             <div className="relative w-32 h-32 bg-orange-300 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
//               <FaLightbulb className="text-white text-6xl mb-2 animate-pulse" aria-label="Lightbulb Icon" />
//               <span className="text-white text-lg font-bold px-4 z-10">Bright Ideas</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 2xl:text-2xl  xl:text-sm max-w-xs">
//              The warm glow of gentle light adds a magical, unforgettable touch to every moment of your celebration
//             </p>
//             <p className="mt-2 text-yellow-600 2xl:text-2xl  font-bold">A warm ambiance</p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-24 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full p-10 max-w-2xl mx-auto text-center shadow-2xl">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-fuchsia-900 mb-6">
//             Make Your Celebration Shine
//           </h2>
//           <p className="text-lg md:text-sm 2xl:text-2xl  text-fuchsia-800 xl:text-sm mb-6">
//             Book us today and turn every moment into colorful memories you’ll cherish forever.
//           </p>
//           <Link href="#Contact">
//           <button className="inline-flex items-center 2xl:text-2xl  justify-center px-10 py-5 bg-pink-500 text-white text-sm font-bold rounded-full shadow-lg hover:bg-pink-600 transition">
//             Book Your Party Now 🎉
//           </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import Link from "next/link";
import {
  FaCameraRetro,
  FaPaintBrush,
  FaBirthdayCake,
  FaLightbulb,
} from "react-icons/fa";

export default function PriceJustification() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-fuchsia-300 to-violet-300 py-24 px-6 sm:px-10 lg:px-20">
      {/* Confetti blobs */}
      <div className="absolute -top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 left-20 w-56 h-56 bg-pink-400 rounded-full opacity-20 blur-3xl animate-ping"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-fuchsia-900 text-[8px] sm:text-sm xl:text-3xl 2xl:text-5xl font-extrabold drop-shadow-lg">
            Celebrate Photography with Joy!
          </h1>
          <p className="mt-6 text-[8px] sm:text-xs xl:text-[15px] 2xl:text-2xl max-w-3xl mx-auto">
            Your special day deserves colorful, timeless photos — here’s why we’re worth it.
          </p>
        </header>

        {/* Icon Bubbles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 place-items-center">
          {/* CAMERA */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-32 h-32 bg-pink-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
              <FaCameraRetro className="text-white text-5xl md:text-6xl z-10" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <FaCameraRetro className="text-white text-5xl md:text-6xl animate-pulse" />
              </span>
              <span className="absolute bottom-2 text-white text-[8px] sm:text-sm font-bold px-4 z-10">Pro Gear</span>
            </div>
            <p className="mt-6 text-fuchsia-900 text-[8px] sm:text-xs xl:text-sm 2xl:text-2xl max-w-xs">
              High-end cameras and lighting ensure every candle blow and dance move looks stunning.
            </p>
            <p className="mt-2 text-yellow-600 text-[8px] sm:text-xs 2xl:text-2xl font-bold">£5,000+ in equipment</p>
          </div>

          {/* PAINT */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
              <FaPaintBrush className="text-fuchsia-900 text-5xl md:text-6xl group-hover:rotate-12 z-10" />
              <span className="absolute bottom-2 text-fuchsia-900 text-[8px] sm:text-sm font-bold px-4 z-10">Creative Edit</span>
            </div>
            <p className="mt-6 text-fuchsia-900 text-[8px] sm:text-xs xl:text-sm 2xl:text-2xl max-w-xs">
              Each photo is polished with bright colors and artistic touches to match your party’s vibe.
            </p>
            <p className="mt-2 text-pink-700 text-[8px] sm:text-xs 2xl:text-2xl font-bold">8–12 hrs retouching</p>
          </div>

          {/* CAKE */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-32 h-32 bg-purple-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
              <FaBirthdayCake className="text-white text-5xl md:text-6xl z-10" />
              <svg
                viewBox="0 0 24 24"
                className="absolute top-9 w-6 h-6 text-yellow-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 animate-ping"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2C12 2 8 7 8 11C8 14.866 10.686 18 12 18C13.314 18 16 14.866 16 11C16 7 12 2 12 2ZM12 16C10.895 16 10 15.105 10 14C10 12.491 11.761 10.324 12 8C12.239 10.324 14 12.491 14 14C14 15.105 13.105 16 12 16Z" />
              </svg>
              <span className="absolute bottom-2 text-white text-[8px] sm:text-sm font-bold px-4 z-10">Party Experts</span>
            </div>
            <p className="mt-6 text-fuchsia-900 text-[8px] sm:text-xs xl:text-sm 2xl:text-2xl max-w-xs">
              Over 10 years capturing cake cutting, happy tears, and laughs — so you can enjoy stress-free.
            </p>
            <p className="mt-2 text-yellow-600 text-[8px] sm:text-xs 2xl:text-2xl font-bold">Priceless fun</p>
          </div>

          {/* LIGHTBULB */}
          <div className="group flex flex-col items-center text-center">
            <div className="relative w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:rotate-[360deg]">
              <FaLightbulb className="text-white text-5xl md:text-6xl animate-pulse z-10" />
              <span className="absolute bottom-2 text-white text-[8px] sm:text-sm font-bold px-4 z-10">Bright Ideas</span>
            </div>
            <p className="mt-6 text-fuchsia-900 text-[8px] sm:text-xs xl:text-sm 2xl:text-2xl max-w-xs">
              The warm glow of gentle light adds a magical, unforgettable touch to every moment of your celebration
            </p>
            <p className="mt-2 text-yellow-600 text-[8px] sm:text-xs 2xl:text-2xl font-bold">A warm ambiance</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full p-10 max-w-2xl mx-auto text-center shadow-2xl">
          <h2 className="text-fuchsia-900 text-[8px] sm:text-2xl md:text-4xl font-extrabold mb-6">
            Make Your Celebration Shine
          </h2>
          <p className="text-fuchsia-800 text-[8px] sm:text-sm 2xl:text-2xl mb-6">
            Book us today and turn every moment into colorful memories you’ll cherish forever.
          </p>
          <Link href="#Contact">
            <button className="inline-flex items-center justify-center px-10 py-5 bg-pink-500 text-white text-[8px] sm:text-sm 2xl:text-2xl font-bold rounded-full shadow-lg hover:bg-pink-600 transition">
              Book Your Party Now 🎉
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}




// "use client";

// export default function PriceJustification() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-fuchsia-300 to-violet-300 py-24 px-6 sm:px-10 lg:px-20">
//       {/* Confetti or decorative shapes */}
//       <div className="absolute -top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl animate-bounce"></div>
//       <div className="absolute bottom-0 left-20 w-56 h-56 bg-pink-400 rounded-full opacity-20 blur-3xl animate-ping"></div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Section Header */}
//         <header className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-fuchsia-900 drop-shadow-lg">
//             Celebrate Quality Photography 🎂
//           </h1>
//           <p className="mt-6 text-sm md:text-2xl text-fuchsia-800 max-w-3xl mx-auto">
//             Your special day deserves vibrant, timeless memories — here’s why our pricing reflects lasting value.
//           </p>
//         </header>

//         {/* Fun Floating Bubbles for Points */}
//         <div className="relative flex flex-col items-center gap-16 md:flex-row md:justify-between">
//           <div className="relative flex flex-col items-center text-center">
//             <div className="w-48 h-48 bg-pink-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 hover:scale-110 transition">
//               <span className="text-white text-2xl font-bold px-6">🎥 Premium Gear</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 max-w-xs">
//               We use top cameras and lighting — ensuring every cake cutting and candid smile is picture perfect.
//             </p>
//             <p className="mt-2 text-yellow-600 font-bold">£5,000+ in gear</p>
//           </div>

//           <div className="relative flex flex-col items-center text-center">
//             <div className="w-48 h-48 bg-yellow-300 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 hover:scale-110 transition">
//               <span className="text-fuchsia-900 text-2xl font-bold px-6">✨ Detailed Editing</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 max-w-xs">
//               Every photo gets a magical touch — bright colors, perfect tones, and sparkle to match the party vibe.
//             </p>
//             <p className="mt-2 text-pink-700 font-bold">8–12 hours editing</p>
//           </div>

//           <div className="relative flex flex-col items-center text-center">
//             <div className="w-48 h-48 bg-purple-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 hover:scale-110 transition">
//               <span className="text-white text-2xl font-bold px-6">🎉 Expert Touch</span>
//             </div>
//             <p className="mt-6 text-fuchsia-900 max-w-xs">
//               Over 10 years capturing birthdays — so we never miss a wish, a candle blow, or a happy tear.
//             </p>
//             <p className="mt-2 text-yellow-600 font-bold">Priceless moments</p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-24 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full p-10 max-w-2xl mx-auto text-center shadow-2xl">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-fuchsia-900 mb-6">Book a Celebration to Remember</h2>
//           <p className="text-lg md:text-xl text-fuchsia-800 mb-6">
//             With us, your party memories become colorful stories you’ll cherish forever.
//           </p>
//           <button className="inline-flex items-center justify-center px-10 py-5 bg-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-pink-600 transition">
//             Let's Make Memories 🎈
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

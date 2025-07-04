// "use client";
// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";

// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < breakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [breakpoint]);
//   return isMobile;
// }

// export default function RummySpreadPackages() {
//   const packages = [
//     {
//       name: "Basic",
//       price: "£199",
//       features: [
//         "2 hours coverage",
//         "50+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "1 photographer",
//       ],
//       popular: false,
//     },
//     {
//       name: "Standard",
//       price: "£349",
//       features: [
//         "4 hours coverage",
//         "100+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "10 printed photos (6x4)",
//         "1 photographer",
//       ],
//       popular: true,
//     },
//     {
//       name: "Premium",
//       price: "£599",
//       features: [
//         "Full day coverage (8 hours)",
//         "200+ high-res edited photos",
//         "Premium online gallery",
//         "Digital delivery + USB",
//         "20 printed photos (8x6)",
//         "Photo book (20 pages)",
//         "2 photographers",
//       ],
//       popular: false,
//     },
//   ];

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const isMobile = useIsMobile();

//   const cardWidth = 300;
//   const cardHeight = 450;
//   const gap = 16;
//   const maxSpread = (cardWidth + gap) * 1.2;

//   const cardStyle = {
//     width: `${cardWidth}px`,
//     height: `${cardHeight}px`,
//   };

//   const xTransforms = packages.map((_, i) =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [
//       0,
//       (i - 1) * (cardWidth + gap),
//       (i - 1) * maxSpread,
//     ])
//   );

//   const scaleTransforms = packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [0.9, 1, 0.9])
//   );

//   const opacityTransforms = packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1])
//   );

//   const scrollToContact = () => {
//     const contact = document.getElementById("Contact");
//     if (contact) {
//       contact.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .ribbon-wrapper {
//           position: absolute;
//           top: 0;
//           right: 0;
//           overflow: hidden;
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//         }

//         .ribbon {
//           font: bold 10px sans-serif;
//           color: white;
//           text-align: center;
//           transform: rotate(45deg);
//           position: absolute;
//           width: 140px;
//           top: 20px;
//           right: -40px;
//           background: #f59e0b;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.2);
//           padding: 5px 0;
//           pointer-events: auto;
//           transition: transform 0.3s ease-in-out;
//           z-index: 10;
//         }

//         .ribbon-wrapper:hover .ribbon {
//           transform: rotate(45deg) scale(1.05);
//         }
//       `}</style>

//       <section
//         id="Packages"
//         ref={ref}
//         className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8 xl:px-12 shadow-inner"
//       >
//         <div className="max-w-4xl mx-auto text-center mb-14">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
//             Our Birthday Packages
//           </h2>
//           <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
//             Choose the perfect plan for your special day.
//           </p>
//         </div>

//         {isMobile ? (
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-4xl mx-auto justify-center">
//             {packages.map((pkg, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 style={cardStyle}
//                 className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 border"
//               >
//                 {pkg.popular && (
//                   <div className="ribbon-wrapper">
//                     <div className="ribbon">Most Popular</div>
//                   </div>
//                 )}
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold mb-1">{pkg.name}</h3>
//                   <p className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">{pkg.price}</p>
//                   <ul className="text-gray-700 space-y-1 mb-4 text-sm">
//                     {pkg.features.map((f, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span>{f}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <PrimaryButton text="Book Now" className="w-full py-2" onClick={scrollToContact} />
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div
//             className="relative mx-auto"
//             style={{ height: "600px", maxWidth: `${cardWidth * 3 + gap * 2}px` }}
//           >
//             {packages.map((pkg, i) => (
//               <motion.div
//                 key={i}
//                 style={{
//                   ...cardStyle,
//                   x: xTransforms[i],
//                   scale: scaleTransforms[i],
//                   opacity: opacityTransforms[i],
//                 }}
//                 className="absolute top-[50px] left-1/2 -translate-x-1/2"
//               >
//                 <div className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 border h-full">
//                   {pkg.popular && (
//                     <div className="ribbon-wrapper">
//                       <div className="ribbon">Most Popular</div>
//                     </div>
//                   )}
//                   <div>
//                     <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1">{pkg.name}</h3>
//                     <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-pink-600 mb-4">{pkg.price}</p>
//                     <ul className="text-gray-700 space-y-1 mb-4 text-base xl:text-lg">
//                       {pkg.features.map((f, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                           </svg>
//                           <span>{f}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <PrimaryButton text="Book Now" className="w-full py-3 text-lg" onClick={scrollToContact} />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }



























"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PrimaryButton from "./Button/PrimaryButton";

// ✅ Mobile detection hook
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function RummySpreadPackages() {
  const packages = useMemo(() => [
    {
      name: "Basic",
      price: "£199",
      features: [
        "2 hours coverage",
        "50+ high-res edited photos",
        "Online gallery",
        "Digital delivery",
        "1 photographer",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "£349",
      features: [
        "4 hours coverage",
        "100+ high-res edited photos",
        "Online gallery",
        "Digital delivery",
        "10 printed photos (6x4)",
        "1 photographer",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "£599",
      features: [
        "Full day coverage (8 hours)",
        "200+ high-res edited photos",
        "Premium online gallery",
        "Digital delivery + USB",
        "20 printed photos (8x6)",
        "Photo book (20 pages)",
        "2 photographers",
      ],
      popular: false,
    },
  ], []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isMobile = useIsMobile();

  const cardWidth = 300;
  const gap = 16;
  const maxSpread = (cardWidth + gap) * 1.2;

  // ✅ Call useTransform outside loop
  const xTransform0 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -1 * (cardWidth + gap), -1 * maxSpread]);
  const xTransform1 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0, 0]);
  const xTransform2 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, cardWidth + gap, maxSpread]);

  const scaleTransform = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.9, 1, 0.9]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);

  const xTransforms = [xTransform0, xTransform1, xTransform2];
  const scaleTransforms = [scaleTransform, scaleTransform, scaleTransform];
  const opacityTransforms = [opacityTransform, opacityTransform, opacityTransform];

  const scrollToContact = () => {
    const contact = document.getElementById("Contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Ribbon styling */}
      <style>{`
        .ribbon-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          overflow: hidden;
          width: 100px;
          height: 100px;
          pointer-events: none;
        }

        .ribbon {
          font: bold 10px sans-serif;
          color: white;
          text-align: center;
          transform: rotate(45deg);
          position: absolute;
          width: 140px;
          top: 20px;
          right: -40px;
          background: #f59e0b;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          padding: 5px 0;
          pointer-events: auto;
          transition: transform 0.3s ease-in-out;
          z-index: 10;
        }

        .ribbon-wrapper:hover .ribbon {
          transform: rotate(45deg) scale(1.05);
        }
      `}</style>

      <section
        id="Packages"
        ref={ref}
        className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8 xl:px-12 shadow-inner"
      >
        <div className="max-w-4xl text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl mx-auto text-center mb-14">
          <h2 className="font-extrabold tracking-tight">Our Birthday Packages</h2>
          <p className="mt-4 text-xs xl:text-[15px] 2xl:text-2xl text-gray-600">
            Choose the perfect plan for your special day.
          </p>
        </div>

        {isMobile ? (
          // ✅ Mobile view: stacked cards
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mx-auto px-2">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 border w-full h-auto"
              >
                {pkg.popular && (
                  <div className="ribbon-wrapper">
                    <div className="ribbon">Most Popular</div>
                  </div>
                )}
                <div>
                  <h3 className="text-xs sm:text-lg font-semibold mb-1">{pkg.name}</h3>
                  <p className="text-xs sm:text-2xl font-bold text-pink-600 mb-4">{pkg.price}</p>
                  <ul className="text-gray-700 space-y-1 mb-4 text-sm">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex text-xs items-start">
                        <svg className="w-2 h-2 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PrimaryButton
                  text="Book Now"
                  className="py-[2px] text-[8px] sm:text-base"
                  onClick={scrollToContact}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          // ✅ Desktop view: animated spread cards
          <div
            className="relative mx-auto"
            style={{
              height: "700px",
              maxWidth: `${cardWidth * 3 + gap * 2}px`,
            }}
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                style={{
                  width: `${cardWidth}px`,
                  height: `450px`,
                  x: xTransforms[i],
                  scale: scaleTransforms[i],
                  opacity: opacityTransforms[i],
                }}
                className="absolute top-[10px] left-1/2 -translate-x-1/2"
              >
                <div className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 xl:p-8 2xl:p-10 xl:pb-2 border h-full w-[300px] sm:w-[320px] xl:w-[360px] 2xl:h-[510px] 2xl:w-[400px] min-[1920px]:w-[440px]">
                  {pkg.popular && (
                    <div className="ribbon-wrapper">
                      <div className="ribbon">Most Popular</div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1">{pkg.name}</h3>
                    <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-pink-600 mb-4">{pkg.price}</p>
                    <ul className="text-gray-700 space-y-1 mb-4 text-base xl:text-lg">
                      {pkg.features.map((f, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <PrimaryButton text="Book Now" className="w-full py-2 text-lg" onClick={scrollToContact} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}









// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";

// // Hook to detect mobile
// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < breakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [breakpoint]);
//   return isMobile;
// }

// export default function RummySpreadPackages() {
//   const packages  = useMemo(() => [
//     {
//       name: "Basic",
//       price: "£199",
//       features: [
//         "2 hours coverage",
//         "50+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "1 photographer",
//       ],
//       popular: false,
//     },
//     {
//       name: "Standard",
//       price: "£349",
//       features: [
//         "4 hours coverage",
//         "100+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "10 printed photos (6x4)",
//         "1 photographer",
//       ],
//       popular: true,
//     },
//     {
//       name: "Premium",
//       price: "£599",
//       features: [
//         "Full day coverage (8 hours)",
//         "200+ high-res edited photos",
//         "Premium online gallery",
//         "Digital delivery + USB",
//         "20 printed photos (8x6)",
//         "Photo book (20 pages)",
//         "2 photographers",
//       ],
//       popular: false,
//     },
//   ]);

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const isMobile = useIsMobile();

//   // Desktop transform setup
//   const cardWidth = 300;
//   const cardHeight = 450;
//   const gap = 16;
//   const maxSpread = (cardWidth + gap) * 1.2;

//   const cardStyle = {
//     width: `${cardWidth}px`,
//     height: `${cardHeight}px`,
//   };

//   const xTransforms = useMemo(() => 
//   packages.map((_, i) =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [
//       0,
//       (i - 1) * (cardWidth + gap),
//       (i - 1) * maxSpread,
//     ])
//   ),
//   [packages, scrollYProgress, cardWidth, gap, maxSpread]
// );

// const scaleTransforms = useMemo(() =>
//   packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [0.9, 1, 0.9])
//   ),
//   [packages, scrollYProgress]
// );

// const opacityTransforms = useMemo(() =>
//   packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1])
//   ),
//   [packages, scrollYProgress]
// );

//   const scrollToContact = () => {
//     const contact = document.getElementById("Contact");
//     if (contact) {
//       contact.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .ribbon-wrapper {
//           position: absolute;
//           top: 0;
//           right: 0;
//           overflow: hidden;
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//         }

//         .ribbon {
//           font: bold 10px sans-serif;
//           color: white;
//           text-align: center;
//           transform: rotate(45deg);
//           position: absolute;
//           width: 140px;
//           top: 20px;
//           right: -40px;
//           background: #f59e0b;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.2);
//           padding: 5px 0;
//           pointer-events: auto;
//           transition: transform 0.3s ease-in-out;
//           z-index: 10;
//         }

//         .ribbon-wrapper:hover .ribbon {
//           transform: rotate(45deg) scale(1.05);
//         }
//       `}</style>

//       <section
//         id="Packages"
//         ref={ref}
//         className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8 xl:px-12 shadow-inner"
//       >
//         <div className="max-w-4xl text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl mx-auto text-center mb-14">
//           <h2 className=" font-extrabold tracking-tight ">
//             Our Birthday Packages
//           </h2>
//           <p className="mt-4 text-xs xl:text-[15px] 2xl:text-2xl text-gray-600">
//             Choose the perfect plan for your special day.
//           </p>
//         </div>

//         {/* ✅ Mobile version: uses w-full grid */}
//         {isMobile ? (
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-6  mx-auto px-2">
//   {packages.map((pkg, i) => (
//     <motion.div
//       key={i}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//       transition={{ duration: 0.5, delay: i * 0.1 }}
//       className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 border w-full h-auto"
//     >
//       {pkg.popular && (
//         <div className="ribbon-wrapper">
//           <div className="ribbon">Most Popular</div>
//         </div>
//       )}
//       <div>
//         <h3 className="text-xs sm:text-lg font-semibold mb-1">
//           {pkg.name}
//         </h3>
//         <p className="text-xs sm:text-2xl font-bold text-pink-600 mb-4">
//           {pkg.price}
//         </p>
//         <ul className="text-gray-700 space-y-1 mb-4 text-sm">
//           {pkg.features.map((f, idx) => (
//             <li key={idx} className="flex text-xs items-start">
//               <svg
//                 className="w-2 h-2 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span>{f}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <PrimaryButton
//         text="Book Now"
//         className="py-[2px] text-[8px] sm:text-base"
//         onClick={scrollToContact}
//       />
//     </motion.div>
//   ))}
// </div>

//         ) : (
//           // ✅ Desktop spread cards
// <div
//   className="relative mx-auto"
//   style={{
//     height: "700px", // Increased height for large screens
//     maxWidth: `${cardWidth * 3 + gap * 2}px`,
//   }}
// >
//   {packages.map((pkg, i) => (
//     <motion.div
//       key={i}
//       style={{
//         ...cardStyle,
//         x: xTransforms[i],
//         scale: scaleTransforms[i],
//         opacity: opacityTransforms[i],
//       }}
//       className="absolute top-[10px] left-1/2 -translate-x-1/2 
//                  xl:h-[600px] 2xl:h-[680px] min-[1920px]:h-[720px]"
//     >
//       <div
//         className="relative flex flex-col justify-between 
//                    rounded-2xl bg-white shadow-lg 
//                    p-6 xl:p-8 2xl:p-10 xl:pb-2 
//                    border h-full 
//                    w-[300px] sm:w-[320px] xl:w-[360px]  2xl:h-[510px] 2xl:w-[400px] min-[1920px]:w-[440px]"
//       >
//         {pkg.popular && (
//           <div className="ribbon-wrapper">
//             <div className="ribbon">Most Popular</div>
//           </div>
//         )}
//         <div>
//           <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1">
//             {pkg.name}
//           </h3>
//           <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-pink-600 mb-4">
//             {pkg.price}
//           </p>
//           <ul className="text-gray-700 space-y-1 mb-4 text-base xl:text-lg">
//             {pkg.features.map((f, idx) => (
//               <li key={idx} className="flex items-start">
//                 <svg
//                   className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span>{f}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <PrimaryButton
//           text="Book Now"
//           className="w-full py-2  text-lg"
//           onClick={scrollToContact}
//         />
//       </div>
//     </motion.div>
//   ))}
// </div>

//         )}
//       </section>
//     </>
//   );
// }









































// "use client";

// import { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";

// // Hook to detect mobile
// function useIsMobile(breakpoint = 768) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < breakpoint);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, [breakpoint]);
//   return isMobile;
// }

// export default function RummySpreadPackages() {
//   const packages = [
//     {
//       name: "Basic",
//       price: "£199",
//       features: [
//         "2 hours coverage",
//         "50+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "1 photographer",
//       ],
//       popular: false,
//     },
//     {
//       name: "Standard",
//       price: "£349",
//       features: [
//         "4 hours coverage",
//         "100+ high-res edited photos",
//         "Online gallery",
//         "Digital delivery",
//         "10 printed photos (6x4)",
//         "1 photographer",
//       ],
//       popular: true,
//     },
//     {
//       name: "Premium",
//       price: "£599",
//       features: [
//         "Full day coverage (8 hours)",
//         "200+ high-res edited photos",
//         "Premium online gallery",
//         "Digital delivery + USB",
//         "20 printed photos (8x6)",
//         "Photo book (20 pages)",
//         "2 photographers",
//       ],
//       popular: false,
//     },
//   ];

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const isMobile = useIsMobile();

//   // Desktop transform setup
//   const cardWidth = 300;
//   const cardHeight = 450;
//   const gap = 16;
//   const maxSpread = (cardWidth + gap) * 1.2;

//   const cardStyle = {
//     width: `${cardWidth}px`,
//     height: `${cardHeight}px`,
//   };

//   const xTransforms = packages.map((_, i) =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [
//       0,
//       (i - 1) * (cardWidth + gap),
//       (i - 1) * maxSpread,
//     ])
//   );

//   const scaleTransforms = packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.25, 0.5], [0.9, 1, 0.9])
//   );

//   const opacityTransforms = packages.map(() =>
//     useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1])
//   );

//   const scrollToContact = () => {
//     const contact = document.getElementById("Contact");
//     if (contact) {
//       contact.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .ribbon-wrapper {
//           position: absolute;
//           top: 0;
//           right: 0;
//           overflow: hidden;
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//         }

//         .ribbon {
//           font: bold 10px sans-serif;
//           color: white;
//           text-align: center;
//           transform: rotate(45deg);
//           position: absolute;
//           width: 140px;
//           top: 20px;
//           right: -40px;
//           background: #f59e0b;
//           box-shadow: 0 2px 5px rgba(0,0,0,0.2);
//           padding: 5px 0;
//           pointer-events: auto;
//           transition: transform 0.3s ease-in-out;
//           z-index: 10;
//         }

//         .ribbon-wrapper:hover .ribbon {
//           transform: rotate(45deg) scale(1.05);
//         }
//       `}</style>

//       <section
//         id="Packages"
//         ref={ref}
//         className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8 xl:px-12 shadow-inner"
//       >
//         <div className="max-w-4xl text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl mx-auto text-center mb-14">
//           <h2 className=" font-extrabold tracking-tight ">
//             Our Birthday Packages
//           </h2>
//           <p className="mt-4 text-xs xl:text-[15px] 2xl:text-2xl text-gray-600">
//             Choose the perfect plan for your special day.
//           </p>
//         </div>

//         {/* ✅ Mobile version: uses w-full grid */}
//         {isMobile ? (
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {packages.map((pkg, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 border w-full h-auto"
//               >
//                 {pkg.popular && (
//                   <div className="ribbon-wrapper">
//                     <div className="ribbon">Most Popular</div>
//                   </div>
//                 )}
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold mb-1">
//                     {pkg.name}
//                   </h3>
//                   <p className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
//                     {pkg.price}
//                   </p>
//                   <ul className="text-gray-700 space-y-1 mb-4 text-sm">
//                     {pkg.features.map((f, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <svg
//                           className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                         <span>{f}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <PrimaryButton
//                   text="Book Now"
//                   className="w-full py-2"
//                   onClick={scrollToContact}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           // ✅ Desktop spread cards
// <div
//   className="relative mx-auto"
//   style={{
//     height: "700px", // Increased height for large screens
//     maxWidth: `${cardWidth * 3 + gap * 2}px`,
//   }}
// >
//   {packages.map((pkg, i) => (
//     <motion.div
//       key={i}
//       style={{
//         ...cardStyle,
//         x: xTransforms[i],
//         scale: scaleTransforms[i],
//         opacity: opacityTransforms[i],
//       }}
//       className="absolute top-[10px] left-1/2 -translate-x-1/2 
//                  xl:h-[600px] 2xl:h-[680px] min-[1920px]:h-[720px]"
//     >
//       <div
//         className="relative flex flex-col justify-between 
//                    rounded-2xl bg-white shadow-lg 
//                    p-6 xl:p-8 2xl:p-10 xl:pb-2 
//                    border h-full 
//                    w-[300px] sm:w-[320px] xl:w-[360px]  2xl:h-[510px] 2xl:w-[400px] min-[1920px]:w-[440px]"
//       >
//         {pkg.popular && (
//           <div className="ribbon-wrapper">
//             <div className="ribbon">Most Popular</div>
//           </div>
//         )}
//         <div>
//           <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-1">
//             {pkg.name}
//           </h3>
//           <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-pink-600 mb-4">
//             {pkg.price}
//           </p>
//           <ul className="text-gray-700 space-y-1 mb-4 text-base xl:text-lg">
//             {pkg.features.map((f, idx) => (
//               <li key={idx} className="flex items-start">
//                 <svg
//                   className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <span>{f}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <PrimaryButton
//           text="Book Now"
//           className="w-full py-2  text-lg"
//           onClick={scrollToContact}
//         />
//       </div>
//     </motion.div>
//   ))}
// </div>

//         )}
//       </section>
//     </>
//   );
// }


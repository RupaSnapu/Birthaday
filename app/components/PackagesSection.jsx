'use client';
import { useEffect, useState, useRef } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { dbB } from '../Admin/Firebase/configB';
import Link from 'next/link';

export default function BirthdayPackageGrid() {
  const [packages, setPackages] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0, width: 280 });
  const refs = useRef([]);

  // Fetch packages from Firestore
  useEffect(() => {
    (async () => {
      const q = query(collection(dbB, 'packages'), orderBy('priority', 'asc'));
      const snap = await getDocs(q);
      setPackages(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    })();
  }, []);

  useEffect(() => {
    // Reset refs on packages change
    refs.current = [];
  }, [packages]);

  useEffect(() => {
    document.body.style.overflow = expandedCard ? 'hidden' : 'auto';
  }, [expandedCard]);

  const openCard = (pkg, idx) => {
    if (typeof window !== 'undefined') {
      const el = refs.current[idx];
      if (el) {
        const r = el.getBoundingClientRect();
        setCardPos({ x: r.left, y: r.top, width: r.width });
      }
    }
    setExpandedCard(pkg.id);
  };

  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setExpandedCard(null);
    }
  };

  const curPlan = packages.find(p => p.id === expandedCard);

  return (
    <section id="Packages" className="py-14 bg-[#f9fafb]">
      {/* Section Heading */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-pink-500 to-yellow-400 mb-2">
          Birthday Photography Packages
        </h2>
        <p className="text-blue-800 text-sm max-w-xl mx-auto">
          Capture magical moments with our premium packages designed for elegance and memories.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            ref={el => (refs.current[i] = el)}
            whileHover={{ y: -8, scale: 1.04 }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            initial={{ opacity: 0, y: 60, rotate: (i % 3 - 1) * 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            onClick={() => openCard(pkg, i)}
            className="relative bg-white border border-yellow-400 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between"
          >
            {/* Badge */}
            {pkg.badge && (
              <div
                className="absolute top-1 right-3 px-3 py-1 text-xs font-bold rounded-full"
                style={{
                  backgroundColor: pkg.badgeBackgroundColor || '#FFD700',
                  border: `2px solid ${pkg.badgeBorderColor || '#FFA500'}`,
                  color: pkg.textFontColor || '#000000',
                }}
              >
                {pkg.badgeName}
              </div>
            )}

            <h3 className="text-center text-xl font-bold text-blue-800 mb-1">✨{pkg.title}✨</h3>
            <p className="text-sm text-center text-pink-500 mb-2">{pkg.tag}</p>
            {pkg.notes && (
              <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
                {pkg.notes}
              </p>
            )}
            <p className="text-2xl text-center font-extrabold text-blue-600 mb-4">
              {pkg.price?.startsWith('£') ? pkg.price : `£${pkg.price}`}
            </p>

            <ul className="text-sm space-y-1 text-gray-700">
              {pkg.features?.slice(0, 2).map((f, idx) => (
                <li key={`f-${idx}`}>{f}</li>
              ))}
              {pkg.gear?.slice(0, 2).map((g, idx) => (
                <li key={`g-${idx}`}>{g}</li>
              ))}
              {pkg.deliverables?.slice(0, 2).map((d, idx) => (
                <li key={`d-${idx}`}>{d}</li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-200">
              <span className="text-sm font-semibold text-pink-600">Read More</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  scrollToContact();
                }}
                className="text-xs px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded hover:opacity-90 transition"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {curPlan && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setExpandedCard(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              onClick={() => setExpandedCard(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={e => e.stopPropagation()}
                className="relative w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto p-6 bg-white border-2 border-yellow-400 rounded-2xl shadow-2xl"
                initial={{
                  x:
                    typeof window !== 'undefined'
                      ? cardPos.x - window.innerWidth / 2 + cardPos.width / 2
                      : 0,
                  y:
                    typeof window !== 'undefined'
                      ? cardPos.y - window.innerHeight / 2
                      : 0,
                  scale:
                    typeof window !== 'undefined'
                      ? cardPos.width / 280
                      : 1,
                  opacity: 0,
                }}
                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                exit={{
                  x:
                    typeof window !== 'undefined'
                      ? cardPos.x - window.innerWidth / 2 + cardPos.width / 2
                      : 0,
                  y:
                    typeof window !== 'undefined'
                      ? cardPos.y - window.innerHeight / 2
                      : 0,
                  scale:
                    typeof window !== 'undefined'
                      ? cardPos.width / 280
                      : 1,
                  opacity: 0,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, duration: 0.5 }}
              >
                <button
                  onClick={() => setExpandedCard(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-pink-600"
                >
                  &times;
                </button>

                {/* Badge inside modal */}
                {curPlan.badge && (
                  <div
                    className="absolute top-[1px] left-[5px] px-2 py-1 text-xs sm:text-sm font-bold rounded-full z-10"
                    style={{
                      backgroundColor: curPlan.badgeBackgroundColor || '#FFD700',
                      border: `2px solid ${curPlan.badgeBorderColor || '#FFA500'}`,
                      color: curPlan.textFontColor || '#000000',
                    }}
                  >
                    {curPlan.badgeName}
                  </div>
                )}

                <h3 className="text-xl font-bold text-center text-blue-800 mb-2">✨{curPlan.title}✨</h3>
                <p className="text-sm text-center text-pink-500 mb-2">{curPlan.tag}</p>

                {curPlan.notes && (
                  <p className="text-xs text-center bg-[#ecdada] text-[#5c1a1a] px-2 py-1 rounded mb-3">
                    {curPlan.notes}
                  </p>
                )}

                <p className="text-2xl font-bold text-center text-blue-600 mb-4">
                  {curPlan.price?.startsWith('£') ? curPlan.price : `£${curPlan.price}`}
                </p>

                {['features', 'gear', 'deliverables'].map(sec => (
                  <div key={sec} className="mb-4">
                    <p className="text-sm font-semibold uppercase text-blue-700 mb-2">{sec}</p>
                    <ul className="list-disc pl-5 text-sm text-gray-800">
                      {(curPlan[sec] || []).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="text-center mt-6">
                  <button
                    onClick={scrollToContact}
                    className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 rounded hover:opacity-90 transition"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}



// "use client";

// import { useRef, useEffect, useState, useMemo } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";

// // ✅ Mobile detection hook
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
//   const packages = useMemo(() => [
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
//   ], []);

//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const isMobile = useIsMobile();

//   const cardWidth = 300;
//   const gap = 16;
//   const maxSpread = (cardWidth + gap) * 1.2;

//   // ✅ Call useTransform outside loop
//   const xTransform0 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -1 * (cardWidth + gap), -1 * maxSpread]);
//   const xTransform1 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0, 0]);
//   const xTransform2 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, cardWidth + gap, maxSpread]);

//   const scaleTransform = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.9, 1, 0.9]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);

//   const xTransforms = [xTransform0, xTransform1, xTransform2];
//   const scaleTransforms = [scaleTransform, scaleTransform, scaleTransform];
//   const opacityTransforms = [opacityTransform, opacityTransform, opacityTransform];

//   const scrollToContact = () => {
//     const contact = document.getElementById("Contact");
//     if (contact) {
//       contact.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* Ribbon styling */}
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
//         <div className="max-w-4xl text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl mx-auto text-center mb-14">
//           <h2 className="font-extrabold tracking-tight">Our Birthday Packages</h2>
//           <p className="mt-4 text-xs xl:text-[15px] 2xl:text-2xl text-gray-600">
//             Choose the perfect plan for your special day.
//           </p>
//         </div>

//         {isMobile ? (
//           // ✅ Mobile view: stacked cards
//           <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mx-auto px-2">
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
//                   <h3 className="text-xs sm:text-lg font-semibold mb-1">{pkg.name}</h3>
//                   <p className="text-xs sm:text-2xl font-bold text-pink-600 mb-4">{pkg.price}</p>
//                   <ul className="text-gray-700 space-y-1 mb-4 text-sm">
//                     {pkg.features.map((f, idx) => (
//                       <li key={idx} className="flex text-xs items-start">
//                         <svg className="w-2 h-2 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                         <span>{f}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <PrimaryButton
//                   text="Book Now"
//                   className="py-[2px] text-[8px] sm:text-base"
//                   onClick={scrollToContact}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           // ✅ Desktop view: animated spread cards
//           <div
            // className="relative mx-auto"
            // style={{
            //   height: "700px",
            //   maxWidth: `${cardWidth * 3 + gap * 2}px`,
            // }}
//           >
//             {packages.map((pkg, i) => (
//               <motion.div
//                 key={i}
//                 style={{
//                   width: `${cardWidth}px`,
//                   height: `450px`,
//                   x: xTransforms[i],
//                   scale: scaleTransforms[i],
//                   opacity: opacityTransforms[i],
//                 }}
//                 className="absolute top-[10px] left-1/2 -translate-x-1/2"
//               >
//                 <div className="relative flex flex-col justify-between rounded-2xl bg-white shadow-lg p-6 xl:p-8 2xl:p-10 xl:pb-2 border h-full w-[300px] sm:w-[320px] xl:w-[360px] 2xl:h-[510px] 2xl:w-[400px] min-[1920px]:w-[440px]">
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
//                   <PrimaryButton text="Book Now" className="w-full py-2 text-lg" onClick={scrollToContact} />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }








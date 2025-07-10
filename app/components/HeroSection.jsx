// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import PrimaryButton from "./Button/PrimaryButton";
// // import Image from "next/image";
// // import Link from "next/link";
// // import AnimatedReviewCard from "./ReviewCard";

// // import { db } from "../Admin/Firebase/config";
// // import { collection, getDocs, query, orderBy } from "firebase/firestore";

// // const pastelColors = [
// //   "#fcd5ce",
// //   "#f8edeb",
// //   "#d8e2dc",
// //   "#ffe5d9",
// //   "#f9dcc4",
// //   "#fec5bb",
// //   "#e2ece9",
// //   "#bee1e6",
// // ];

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
// //   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// // }

// // export default function HeroSection() {
// //   const [images, setImages] = useState([]);
// //   const [current, setCurrent] = useState(0);
// //   const [next, setNext] = useState(1);
// //   const [angle, setAngle] = useState(0);
// //   const [confetti, setConfetti] = useState([]);

// //   useEffect(() => {
// //     const pieces = Array.from({ length: 30 }).map((_, i) => ({
// //       key: i,
// //       left: Math.random() * 100,
// //       delay: Math.random() * 5,
// //       color: pastelColors[i % pastelColors.length],
// //     }));
// //     setConfetti(pieces);
// //   }, []);

// //   useEffect(() => {
// //     const duration = 10000;
// //     let start = performance.now();
// //     let raf;

// //     const tick = (now) => {
// //       let t = (now - start) / duration;
// //       if (t >= 1 && images.length > 0) {
// //         setCurrent((c) => (c + 1) % images.length);
// //         setNext((n) => (n + 1) % images.length);
// //         start = now;
// //         t = 0;
// //       }
// //       const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
// //       setAngle(eased * 360);
// //       raf = requestAnimationFrame(tick);
// //     };

// //     raf = requestAnimationFrame(tick);
// //     return () => cancelAnimationFrame(raf);
// //   }, [images]);

// //   useEffect(() => {
// //     async function fetchImages() {
// //       try {
// //         const q = query(collection(db, "heroImages"), orderBy("priority"));
// //         const querySnapshot = await getDocs(q);
// //         const urls = querySnapshot.docs.map((doc) => doc.data().imageUrl);
// //         setImages(urls);
// //       } catch (error) {
// //         console.error("Error fetching hero images:", error);
// //       }
// //     }

// //     fetchImages();
// //   }, []);

// //   return (
// //     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
// //       {/* Confetti */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         {confetti.map((c) => (
// //           <div
// //             key={c.key}
// //             className="absolute w-2 h-2 rounded-full"
// //             style={{
// //               left: `${c.left}%`,
// //               top: "-10px",
// //               backgroundColor: c.color,
// //               animation: `fall 5s linear ${c.delay}s infinite`,
// //             }}
// //           />
// //         ))}
// //       </div>
// //       <style jsx global>{`
// //         @keyframes fall {
// //           0% {
// //             transform: translateY(-10%);
// //             opacity: 1;
// //           }
// //           100% {
// //             transform: translateY(110%);
// //             opacity: 0;
// //           }
// //         }
// //       `}</style>

// //       <div className="max-w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
// //         {/* Text */}
// //         <div className="flex-1 text-center md:text-left ">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-xl sm:text-xl xl:text-4xl 2xl:text-6xl md:text-xl font-extrabold mb-4 sm:mb-6 leading-tight"
// //           >
// //             Capture Your Bright <br />
// //             <span className="text-violet-600 md:ml-58 xl:ml-36 2xl:ml-64">
// //               Special Day
// //             </span>
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-base sm:text-lg xl:text-lg 2xl:text-2xl md:text-lg mb-6 sm:mb-8  mx-auto md:mx-0"
// //           >
// //             Capture unforgettable birthday moments with SnapU Photography, your
// //             go-to expert for birthday photography in the UK. From candid smiles
// //             to joyful celebrations, we preserve every special detail with
// //             creativity and care. Perfect for all ages and events, SnapU
// //             delivers high-quality images you&apos;ll cherish forever. Book trusted
// //             UK birthday photographers at SnapU Photography today!
// //           </motion.p>
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //           >
// //             <Link href="#Contact">
// //               <PrimaryButton
// //                 text="Book Your Session"
// //                 className="hover:bg-violet-600 transition duration-300"
// //               />
// //             </Link>
// //           </motion.div>
// //         </div>

// //         {/* Image carousel */}
// //         {images.length > 0 && (
// //           <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
// //             <div className="relative w-64 h-64 2xl:w-[750px] 2xl:h-[750px] sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
// //               {/* Dashed spinning ring */}
// //               <motion.svg
// //                 className="absolute inset-0 z-10"
// //                 viewBox="0 0 100 100"
// //                 animate={{ rotate: 360 }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 100,
// //                   ease: "linear",
// //                 }}
// //               >
// //                 <circle
// //                   cx="50"
// //                   cy="50"
// //                   r="48"
// //                   fill="none"
// //                   stroke="white"
// //                   strokeWidth="0.5"
// //                   strokeDasharray="1 1"
// //                   strokeOpacity="0.5"
// //                 />
// //               </motion.svg>

// //               <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full border-[10px] sm:border-[12px] md:border-[16px] border-white shadow-2xl overflow-hidden z-20">
// //                 <Image
// //                   src={images[current]}
// //                   alt={`Photo ${current + 1}`}
// //                   fill
// //                   className="object-cover"
// //                   priority
// //                 />
// //                 <svg
// //                   className="absolute inset-0 w-full h-full"
// //                   viewBox="0 0 100 100"
// //                 >
// //                   <defs>
// //                     <mask id="radialMask">
// //                       <rect
// //                         x="0"
// //                         y="0"
// //                         width="100%"
// //                         height="100%"
// //                         fill="black"
// //                       />
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
// //                     mask="url(#radialMask)"
// //                   />
// //                 </svg>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       <AnimatedReviewCard />
// //     </section>
// //   );
// // }






"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./Button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import AnimatedReviewCard from "./ReviewCard";
import { db } from "../Admin/Firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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

// Helper functions for SVG path
function sectorPath(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function HeroSection() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0); // 0 to 1, representing completion of transition
  const [confetti, setConfetti] = useState([]);
  const [isReadyForTransition, setIsReadyForTransition] = useState(false); // New state to control transition start

  const animationFrameRef = useRef(null);
  const transitionStartTimeRef = useRef(0);

  const transitionDuration = 10000; // 10 seconds for each full transition

  // Confetti setup (no change needed here)
  useEffect(() => {
    const pieces = Array.from({ length: 30 }).map((_, i) => ({
      key: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: pastelColors[i % pastelColors.length],
    }));
    setConfetti(pieces);
  }, []);

  // Image fetching from Firebase
  useEffect(() => {
    async function fetchImages() {
      try {
        const q = query(collection(db, "heroImages"), orderBy("priority"));
        const querySnapshot = await getDocs(q);
        const urls = querySnapshot.docs.map((doc) => doc.data().imageUrl).filter(Boolean);

        // Ensure we always have at least two images for smooth transitions.
        // If less than two, duplicate the single image to enable looping.
        if (urls.length === 1) {
          setImages([...urls, urls[0]]); // Duplicate the single image
        } else if (urls.length === 0) {
          setImages([]); // No images
        } else {
          setImages(urls);
        }
      } catch (error) {
        console.error("Error fetching hero images:", error);
        setImages([]); // Set to empty array on error
      }
    }
    fetchImages();
  }, []);

  // Preload logic and readiness check for transitions
  useEffect(() => {
    if (images.length < 2) {
      // If not enough images for a transition, ensure the first one is shown
      setIsReadyForTransition(images.length > 0);
      setTransitionProgress(1); // Keep the first image fully visible
      return;
    }

    const currentImageUrl = images[currentImageIndex];
    const nextImageUrl = images[(currentImageIndex + 1) % images.length];

    let loadedCount = 0;
    const totalToLoad = 2; // We need current and next image loaded

    const checkReadiness = () => {
      loadedCount++;
      if (loadedCount === totalToLoad) {
        setIsReadyForTransition(true);
        transitionStartTimeRef.current = performance.now(); // Initialize start time when ready
      }
    };

    // Preload current image
    const imgCurrent = new window.Image();
    imgCurrent.src = currentImageUrl;
    imgCurrent.onload = imgCurrent.onerror = checkReadiness;

    // Preload next image
    const imgNext = new window.Image();
    imgNext.src = nextImageUrl;
    imgNext.onload = imgNext.onerror = checkReadiness;

    // Cleanup function to reset readiness if images change
    return () => {
      setIsReadyForTransition(false);
      setTransitionProgress(0); // Reset progress
      // Clean up any pending loads if component unmounts or dependencies change
      imgCurrent.onload = imgCurrent.onerror = null;
      imgNext.onload = imgNext.onerror = null;
    };
  }, [images, currentImageIndex]); // Re-run when images or current index changes

  // Animation loop for image transitions
  useEffect(() => {
    if (!isReadyForTransition) {
      // Don't start animation until both current and next images are preloaded
      return;
    }

    const animateTransition = (timestamp) => {
      const elapsed = timestamp - transitionStartTimeRef.current;
      let progress = elapsed / transitionDuration;

      if (progress >= 1) {
        // Transition complete, move to the next image
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitionProgress(0); // Reset progress for the new transition
        // The transitionStartTimeRef will be reset by the `isReadyForTransition` useEffect
        return; // Exit this frame, new useEffect cycle will start for the next image
      }

      // Apply an easing function for smoother visual effect
      const easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      setTransitionProgress(easedProgress);

      animationFrameRef.current = requestAnimationFrame(animateTransition);
    };

    animationFrameRef.current = requestAnimationFrame(animateTransition);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isReadyForTransition, images.length, transitionProgress]); // Depend on readiness and progress

  // Calculate the angle for the radial wipe
  const angle = transitionProgress * 360;

  // Determine the next image index for the transition
  const nextImageIndex = (currentImageIndex + 1) % images.length;

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
          0% {
            transform: translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: translateY(110%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-xl xl:text-4xl 2xl:text-6xl md:text-xl font-extrabold mb-4 sm:mb-6 leading-tight"
          >
            Capture Your Bright <br />
            <span className="text-violet-600">Special Day</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg xl:text-lg 2xl:text-2xl md:text-lg mb-6 sm:mb-8 mx-auto md:mx-0"
          >
            Capture unforgettable birthday moments with SnapU Photography, your
            go-to expert for birthday photography in the UK. From candid smiles
            to joyful celebrations, we preserve every special detail with
            creativity and care. Perfect for all ages and events, SnapU
            delivers high-quality images you&apos;ll cherish forever. Book trusted
            UK birthday photographers at SnapU Photography today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#Contact">
              <PrimaryButton
                text="Book Your Session"
                className="hover:bg-violet-600 transition duration-300"
              />
            </Link>
          </motion.div>
        </div>

        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
            <div className="relative w-64 h-64 2xl:w-[750px] 2xl:h-[750px] sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
              {/* Dashed Ring */}
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
                {/* Current Image - Always rendered if available */}
                {images[currentImageIndex] && (
                  <Image
                    key={`current-${images[currentImageIndex]}`} // Unique key for current image
                    src={images[currentImageIndex]}
                    alt={`Photo ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={currentImageIndex === 0} // Prioritize first image
                  />
                )}

                {/* Next Image with radial mask - Only show if enough images and ready for transition */}
                {images.length > 1 && images[nextImageIndex] && (
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <mask id="radialMask">
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          fill="black"
                        />
                        <path
                          d={sectorPath(50, 50, 50, 0, angle)}
                          fill="white"
                        />
                      </mask>
                    </defs>
                    <image
                      key={`next-${images[nextImageIndex]}`} // Unique key for next image
                      href={images[nextImageIndex]}
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid slice"
                      mask="url(#radialMask)"
                      // The image is preloaded, so it should be ready
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <AnimatedReviewCard />
    </section>
  );
}



// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion } from "framer-motion";
// import PrimaryButton from "./Button/PrimaryButton";
// import Image from "next/image";
// import Link from "next/link";
// import AnimatedReviewCard from "./ReviewCard";
// import { db } from "../Admin/Firebase/config";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";

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

// // Helper functions for SVG path
// function sectorPath(cx, cy, r, startAngle, endAngle) {
//   const start = polarToCartesian(cx, cy, r, endAngle);
//   const end = polarToCartesian(cx, cy, r, startAngle);
//   const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
//   return [
//     `M ${cx} ${cy}`,
//     `L ${start.x} ${start.y}`,
//     `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
//     "Z",
//   ].join(" ");
// }

// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }

// export default function HeroSection() {
//   const [images, setImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [transitionProgress, setTransitionProgress] = useState(0); // 0 to 1, representing completion of transition
//   const [confetti, setConfetti] = useState([]);
//   const [nextImageLoaded, setNextImageLoaded] = useState(false); // New state to track if next image is loaded

//   const animationFrameRef = useRef(null);
//   const transitionStartTimeRef = useRef(0);

//   const transitionDuration = 10000; // 10 seconds for each full transition

//   // Confetti setup
//   useEffect(() => {
//     const pieces = Array.from({ length: 30 }).map((_, i) => ({
//       key: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 5,
//       color: pastelColors[i % pastelColors.length],
//     }));
//     setConfetti(pieces);
//   }, []);

//   // Image fetching from Firebase
//   useEffect(() => {
//     async function fetchImages() {
//       try {
//         const q = query(collection(db, "heroImages"), orderBy("priority"));
//         const querySnapshot = await getDocs(q);
//         const urls = querySnapshot.docs.map((doc) => doc.data().imageUrl).filter(Boolean);

//         if (urls.length === 1) {
//           setImages([...urls, ...urls]); // Duplicate if only one for loop
//         } else {
//           setImages(urls);
//         }
//       } catch (error) {
//         console.error("Error fetching hero images:", error);
//       }
//     }
//     fetchImages();
//   }, []);

//   // Preload the next image whenever currentImageIndex changes
//   useEffect(() => {
//     if (images.length < 2) return;

//     const nextIdx = (currentImageIndex + 1) % images.length;
//     const nextImageUrl = images[nextIdx];

//     if (nextImageUrl) {
//       setNextImageLoaded(false); // Reset loaded state for the new next image
//       const img = new window.Image();
//       img.src = nextImageUrl;
//       img.onload = () => {
//         setNextImageLoaded(true);
//       };
//       img.onerror = () => {
//         console.error("Failed to load next image:", nextImageUrl);
//         setNextImageLoaded(true); // Still set to true to prevent perpetual waiting
//       };
//     }
//   }, [currentImageIndex, images]); // Re-run when current image or image list changes

//   // Animation loop for image transitions
//   useEffect(() => {
//     if (images.length < 2 || !nextImageLoaded) {
//       // Pause or wait if images are not ready or next image is not loaded
//       // This prevents starting a transition to an image that isn't ready
//       return;
//     }

//     // Initialize start time only when a new transition cycle begins
//     if (transitionProgress === 0) {
//       transitionStartTimeRef.current = performance.now();
//     }

//     const animateTransition = (timestamp) => {
//       const elapsed = timestamp - transitionStartTimeRef.current;
//       let progress = elapsed / transitionDuration;

//       // Only advance if the next image is loaded
//       if (progress >= 1) {
//         // Transition complete, move to the next image
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         // Reset progress, and transitionStartTimeRef will be reset by the next render cycle of this useEffect
//         setTransitionProgress(0);
//         return; // Exit this frame, new useEffect cycle will start for the next image
//       }

//       // Apply an easing function for smoother visual effect
//       const easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
//       setTransitionProgress(easedProgress);

//       animationFrameRef.current = requestAnimationFrame(animateTransition);
//     };

//     animationFrameRef.current = requestAnimationFrame(animateTransition);

//     // Cleanup function
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [images, currentImageIndex, nextImageLoaded, transitionProgress]); // Depend on nextImageLoaded

//   // Calculate the angle for the radial wipe
//   const angle = transitionProgress * 360;

//   // Determine the next image index for the transition
//   const nextImageIndex = (currentImageIndex + 1) % images.length;

//   return (
//     <section className="relative bg-gradient-to-r from-fuchsia-500 to-amber-400 py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
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
//           0% {
//             transform: translateY(-10%);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(110%);
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <div className="max-w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Text */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-xl sm:text-xl xl:text-4xl 2xl:text-6xl md:text-xl font-extrabold mb-4 sm:mb-6 leading-tight"
//           >
//             Capture Your Bright <br />
//             <span className="text-violet-600">Special Day</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-base sm:text-lg xl:text-lg 2xl:text-2xl md:text-lg mb-6 sm:mb-8 mx-auto md:mx-0"
//           >
//             Capture unforgettable birthday moments with SnapU Photography, your
//             go-to expert for birthday photography in the UK. From candid smiles
//             to joyful celebrations, we preserve every special detail with
//             creativity and care. Perfect for all ages and events, SnapU
//             delivers high-quality images you&apos;ll cherish forever. Book trusted
//             UK birthday photographers at SnapU Photography today!
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <Link href="#Contact">
//               <PrimaryButton
//                 text="Book Your Session"
//                 className="hover:bg-violet-600 transition duration-300"
//               />
//             </Link>
//           </motion.div>
//         </div>

//         {/* Image Carousel */}
//         {images.length > 0 && (
//           <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
//             <div className="relative w-64 h-64 2xl:w-[750px] 2xl:h-[750px] sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
//               {/* Dashed Ring */}
//               <motion.svg
//                 className="absolute inset-0 z-10"
//                 viewBox="0 0 100 100"
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 500,
//                   ease: "linear",
//                 }}
//               >
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="48"
//                   fill="none"
//                   stroke="white"
//                   strokeWidth="0.5"
//                   strokeDasharray="1 1"
//                   strokeOpacity="0.5"
//                 />
//               </motion.svg>

//               <div className="absolute inset-4 sm:inset-5 md:inset-6 rounded-full border-[10px] sm:border-[12px] md:border-[16px] border-white shadow-2xl overflow-hidden z-20">
//                 {/* Current Image */}
//                 {images[currentImageIndex] && (
//                   <Image
//                     key={`current-${images[currentImageIndex]}`} // Unique key for current image
//                     src={images[currentImageIndex]}
//                     alt={`Photo ${currentImageIndex + 1}`}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="object-cover"
//                     priority={currentImageIndex === 0}
//                   />
//                 )}

//                 {/* Next Image with radial mask - Only show if enough images and the next image is loaded */}
//                 {images.length > 1 && images[nextImageIndex] && (
//                   <svg
//                     className="absolute inset-0 w-full h-full"
//                     viewBox="0 0 100 100"
//                   >
//                     <defs>
//                       <mask id="radialMask">
//                         <rect
//                           x="0"
//                           y="0"
//                           width="100%"
//                           height="100%"
//                           fill="black"
//                         />
//                         <path
//                           d={sectorPath(50, 50, 50, 0, angle)}
//                           fill="white"
//                         />
//                       </mask>
//                     </defs>
//                     {/* Use a simple <img> tag for the SVG image to avoid conflicts with Next/Image's optimization inside SVG */}
//                     {/* The `href` attribute must be set to the image URL */}
//                     <image
//                       key={`next-${images[nextImageIndex]}`} // Unique key for next image 
//                       href={images[nextImageIndex]}
//                       x="0"
//                       y="0"
//                       width="100"
//                       height="100"
//                       preserveAspectRatio="xMidYMid slice"
//                       mask="url(#radialMask)"
//                       // Optionally, add an onload for internal debugging
//                       // onload={() => console.log('SVG image loaded:', images[nextImageIndex])}
//                     />
//                   </svg>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <AnimatedReviewCard />
//     </section>
//   );
// }
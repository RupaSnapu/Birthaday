// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // ✅ 1) Updated balloons: each has an image!
// const BALLOONS = [
//   {
//     id: 1,
//     youtubeId: "5n_c4blq16A",
//     color: "#f8bbd0",
//     image: "/pic1.png",
//   },
//   {
//     id: 2,
//     youtubeId: "JSqM3VdA5Gg",
//     color: "#c5e1a5",
//     image: "/pic2.png",
//   },
//   {
//     id: 3,
//     youtubeId: "Wsuuub68w3k",
//     color: "#80deea",
//     image: "/pic3.png",
//   },
//   {
//     id: 4,
//     youtubeId: "OkeU5k-5T04",
//     color: "#ffcc80",
//     image: "/img4.png",
//   },
// ];

// export default function CelebrationBalloonVideos() {
//   const [balloons, setBalloons] = useState(
//     BALLOONS.slice(0, 4).map((b) => ({ ...b, popped: false }))
//   );
//   const [currentId, setCurrentId] = useState(null);
//   const [confetti, setConfetti] = useState([]);
//   const videoContainerRef = useRef(null);
//   const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);

//   const createConfetti = (x, y) => {
//     const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
//       id: i + Math.random(),
//       x,
//       y,
//       color: `hsl(${Math.random() * 360}, 100%, 50%)`,
//       size: Math.random() * 10 + 5,
//       vx: (Math.random() - 0.5) * 10,
//       vy: (Math.random() - 0.5) * 10 - 5,
//     }));
//     setConfetti(newConfetti);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !hasPlayedOnScroll) {
//           const rect = entry.target.getBoundingClientRect();
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2 + window.scrollY;
//           createConfetti(centerX, centerY);
//           setCurrentId(BALLOONS[0].youtubeId);
//           setHasPlayedOnScroll(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoContainerRef.current) {
//       observer.observe(videoContainerRef.current);
//     }

//     return () => {
//       if (videoContainerRef.current) {
//         observer.unobserve(videoContainerRef.current);
//       }
//     };
//   }, [hasPlayedOnScroll]);

//   const bob = {
//     y: [0, -20, 0],
//     transition: {
//       repeat: Infinity,
//       duration: 2 + Math.random() * 2,
//       ease: "easeInOut",
//     },
//   };

//   const popBalloon = (id, yt, x, y) => {
//     createConfetti(x, y);

//     setBalloons((bs) =>
//       bs.map((b) => (b.id === id ? { ...b, popped: true } : b))
//     );

//     setTimeout(() => setCurrentId(yt), 300);

//     setTimeout(() => {
//       const unpopped = balloons.filter((b) => !b.popped && b.id !== id);
//       const availableBalloons = BALLOONS.filter(
//         (b) => !balloons.some((ball) => ball.id === b.id && !ball.popped)
//       );

//       if (availableBalloons.length > 0) {
//         const newBalloon = {
//           ...availableBalloons[
//             Math.floor(Math.random() * availableBalloons.length)
//           ],
//           popped: false,
//         };
//         setBalloons((prev) => [...unpopped, newBalloon]);
//       }
//     }, 800);
//   };

//   const BalloonsColumn = ({ list, side }) => (
//     <div
//       className={`flex flex-col items-${
//         side === "left" ? "start" : "end"
//       } space-y-8`}
//     >
//       {list.map((b) => (
//         <AnimatePresence key={b.id}>
//           {!b.popped && (
//             <motion.div
//               className="cursor-pointer relative"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 y: [0, -20, 0],
//               }}
//               exit={{
//                 scale: [1, 1.4, 0],
//                 opacity: 0,
//                 rotate: 90,
//                 transition: { duration: 0.5 },
//               }}
//               transition={{
//                 duration: 0.5,
//                 y: {
//                   repeat: Infinity,
//                   duration: 3 + Math.random() * 2,
//                   ease: "easeInOut",
//                 },
//               }}
//               onClick={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 popBalloon(
//                   b.id,
//                   b.youtubeId,
//                   rect.left + rect.width / 2,
//                   rect.top + rect.height / 2
//                 );
//               }}
//             >
//               {/* The string */}
//               <motion.div
//                 className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400 origin-top"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: 80,
//                   opacity: 1,
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
//                 }}
//               />

//               {/* ✅ Balloon with shape & unique image inside */}
//               <motion.div
//                 className="w-16 h-20 shadow-lg relative overflow-hidden"
//                 style={{
//                   borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
//                   backgroundColor: b.color,
//                   backgroundImage: `url(${b.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//                 animate={bob}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {/* Optional shine */}
//                 <div className="absolute inset-2 w-4/5 h-4/5 bg-white/30 rounded-full pointer-events-none" />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       ))}
//     </div>
//   );

//   const midpoint = Math.ceil(balloons.length / 2);
//   const leftBalloons = balloons.slice(0, midpoint);
//   const rightBalloons = balloons.slice(midpoint);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
//       <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
//         🎈 Celebration 🎉
//       </h1>

//       <div className="flex items-center justify-center w-full max-w-6xl relative">
//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={leftBalloons} side="left" />
//         </div>

//         <div
//           className="w-3/5 flex justify-center relative"
//           ref={videoContainerRef}
//         >
//           {/* Confetti */}
//           <AnimatePresence>
//             {confetti.map((c) => (
//               <motion.div
//                 key={c.id}
//                 className="absolute rounded-full"
//                 style={{
//                   backgroundColor: c.color,
//                   width: c.size,
//                   height: c.size,
//                   left: c.x,
//                   top: c.y,
//                 }}
//                 initial={{ scale: 0 }}
//                 animate={{
//                   x: c.x + c.vx,
//                   y: c.y + c.vy,
//                   scale: [0, 1, 0.8, 0],
//                   rotate: Math.random() * 360,
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeOut",
//                 }}
//                 onAnimationComplete={() => {
//                   if (c.id === confetti[confetti.length - 1]?.id) {
//                     setConfetti([]);
//                   }
//                 }}
//               />
//             ))}
//           </AnimatePresence>

//           {/* Video Frame */}
//           {currentId && (
//             <motion.div
//               className="relative w-[800px] h-[440px]"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Clip mask */}
//               <div
//                 className="absolute z-10 overflow-hidden"
//                 style={{
//                   left: "66px",
//                   top: "53px",
//                   width: "565px",
//                   height: "335px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   style={{
//                     transform: "scale(1.2)",
//                     transformOrigin: "center center",
//                   }}
//                   src={`https://www.youtube.com/embed/${currentId}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
//                   frameBorder="0"
//                   allow="encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>

//               {/* Frame image behind */}
//               <img
//                 src="/frame.png"
//                 alt="Frame"
//                 className="absolute inset-0 w-full h-full z-0 pointer-events-none"
//               />
//             </motion.div>
//           )}
//         </div>

//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={rightBalloons} side="right" />
//         </div>
//       </div>
//     </div>
//   );
// }















"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegSmileBeam, FaHeart } from "react-icons/fa";

// ✅ Balloons with images & colors
const BALLOONS = [
  {
    id: 1,
    youtubeId: "5n_c4blq16A",
    color: "#f8bbd0",
    image: "/pic1.png",
  },
  {
    id: 2,
    youtubeId: "JSqM3VdA5Gg",
    color: "#c5e1a5",
    image: "/pic2.png",
  },
  {
    id: 3,
    youtubeId: "Wsuuub68w3k",
    color: "#80deea",
    image: "/pic3.png",
  },
  {
    id: 4,
    youtubeId: "OkeU5k-5T04",
    color: "#ffcc80",
    image: "/img4.png",
  },
];

export default function CelebrationBalloonVideos() {
  const [balloons, setBalloons] = useState(
    BALLOONS.slice(0, 4).map((b) => ({ ...b, popped: false }))
  );
  const [currentId, setCurrentId] = useState(null);
  const [confetti, setConfetti] = useState([]);
  const videoContainerRef = useRef(null);
  const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);

  const createConfetti = (x, y) => {
    const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
      id: i + Math.random(),
      x,
      y,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 10 + 5,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 5,
    }));
    setConfetti(newConfetti);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasPlayedOnScroll) {
          const rect = entry.target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2 + window.scrollY;
          createConfetti(centerX, centerY);
          setCurrentId(BALLOONS[0].youtubeId);
          setHasPlayedOnScroll(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [hasPlayedOnScroll]);

  const bob = {
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      duration: 2 + Math.random() * 2,
      ease: "easeInOut",
    },
  };

  const popBalloon = (id, yt, x, y) => {
    createConfetti(x, y);

    setBalloons((bs) =>
      bs.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );

    setTimeout(() => setCurrentId(yt), 300);

    setTimeout(() => {
      const unpopped = balloons.filter((b) => !b.popped && b.id !== id);
      const availableBalloons = BALLOONS.filter(
        (b) => !balloons.some((ball) => ball.id === b.id && !ball.popped)
      );

      if (availableBalloons.length > 0) {
        const newBalloon = {
          ...availableBalloons[
            Math.floor(Math.random() * availableBalloons.length)
          ],
          popped: false,
        };
        setBalloons((prev) => [...unpopped, newBalloon]);
      }
    }, 800);
  };

  const BalloonsColumn = ({ list, side }) => (
    <div
      className={`flex flex-col items-${
        side === "left" ? "start" : "end"
      } space-y-8`}
    >
      {list.map((b) => (
        <AnimatePresence key={b.id}>
          {!b.popped && (
            <motion.div
              className="cursor-pointer relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -20, 0],
              }}
              exit={{
                scale: [1, 1.4, 0],
                opacity: 0,
                rotate: 90,
                transition: { duration: 0.5 },
              }}
              transition={{
                duration: 0.5,
                y: {
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                  ease: "easeInOut",
                },
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                popBalloon(
                  b.id,
                  b.youtubeId,
                  rect.left + rect.width / 2,
                  rect.top + rect.height / 2
                );
              }}
            >
              {/* Balloon string */}
              <motion.div
                className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400 origin-top"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: 80,
                  opacity: 1,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
              />

              {/* Balloon with image */}
              <motion.div
                className="w-16 h-20 shadow-lg relative overflow-hidden"
                style={{
                  borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
                  backgroundColor: b.color,
                  backgroundImage: `url(${b.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                animate={bob}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-2 w-4/5 h-4/5 bg-white/30 rounded-full pointer-events-none" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );

  const midpoint = Math.ceil(balloons.length / 2);
  const leftBalloons = balloons.slice(0, midpoint);
  const rightBalloons = balloons.slice(midpoint);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
      <h1 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 flex items-center gap-4">
        <FaRegSmileBeam className="text-yellow-400" />
        <span>Celebration</span>
        <FaHeart className="text-pink-500" />
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1920px] 2xl:max-w-[3840px] gap-8 relative">
        <div className="flex justify-center w-full md:w-1/5">
          <BalloonsColumn list={leftBalloons} side="left" />
        </div>

        <div
          className="flex justify-center w-full md:w-3/5 relative aspect-video max-w-[90vw] md:max-w-[1000px] 2xl:max-w-[1920px]"
          ref={videoContainerRef}
        >
          <AnimatePresence>
            {confetti.map((c) => (
              <motion.div
                key={c.id}
                className="absolute rounded-full"
                style={{
                  backgroundColor: c.color,
                  width: c.size,
                  height: c.size,
                  left: c.x,
                  top: c.y,
                }}
                initial={{ scale: 0 }}
                animate={{
                  x: c.x + c.vx,
                  y: c.y + c.vy,
                  scale: [0, 1, 0.8, 0],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => {
                  if (c.id === confetti[confetti.length - 1]?.id) {
                    setConfetti([]);
                  }
                }}
              />
            ))}
          </AnimatePresence>

          {currentId && (
            <motion.div className="relative w-full h-full">
              <div
                className="absolute z-10 overflow-hidden"
                style={{
                  left: "8%",
                  top: "12%",
                  width: "84%",
                  height: "76%",
                  borderRadius: "10px",
                }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: "scale(1.1)",
                    transformOrigin: "center center",
                  }}
                  src={`https://www.youtube.com/embed/${currentId}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
                  frameBorder="0"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <img
                src="/frame.png"
                alt="Frame"
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              />
            </motion.div>
          )}
        </div>

        <div className="flex justify-center w-full md:w-1/5">
          <BalloonsColumn list={rightBalloons} side="right" />
        </div>
      </div>
    </div>
  );
}




// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const BALLOONS = [
//   { id: 1, youtubeId: "5n_c4blq16A", color: "#f8bbd0" },
//   { id: 2, youtubeId: "JSqM3VdA5Gg", color: "#c5e1a5" },
//   { id: 3, youtubeId: "Wsuuub68w3k", color: "#80deea" },
//   { id: 4, youtubeId: "OkeU5k-5T04", color: "#ffcc80" },
//   { id: 5, youtubeId: "dQw4w9WgXcQ", color: "#e1bee7" },
//   { id: 6, youtubeId: "oHg5SJYRHA0", color: "#90caf9" },
//   { id: 7, youtubeId: "jNQXAC9IVRw", color: "#ffab91" },
//   { id: 8, youtubeId: "9bZkp7q19f0", color: "#a5d6a7" },
// ];

// export default function CelebrationBalloonVideos() {
//   const [balloons, setBalloons] = useState(
//     BALLOONS.slice(0, 4).map((b) => ({ ...b, popped: false }))
//   );
//   const [currentId, setCurrentId] = useState(null);
//   const [confetti, setConfetti] = useState([]);

//   const videoContainerRef = useRef(null);
//   const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);

//   const createConfetti = (x, y) => {
//     const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
//       id: i + Math.random(),
//       x,
//       y,
//       color: `hsl(${Math.random() * 360}, 100%, 50%)`,
//       size: Math.random() * 10 + 5,
//       vx: (Math.random() - 0.5) * 10,
//       vy: (Math.random() - 0.5) * 10 - 5,
//     }));
//     setConfetti(newConfetti);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !hasPlayedOnScroll) {
//           const rect = entry.target.getBoundingClientRect();
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2 + window.scrollY;
//           createConfetti(centerX, centerY);
//           setCurrentId(BALLOONS[0].youtubeId);
//           setHasPlayedOnScroll(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoContainerRef.current) {
//       observer.observe(videoContainerRef.current);
//     }

//     return () => {
//       if (videoContainerRef.current) {
//         observer.unobserve(videoContainerRef.current);
//       }
//     };
//   }, [hasPlayedOnScroll]);

//   const bob = {
//     y: [0, -20, 0],
//     transition: {
//       repeat: Infinity,
//       duration: 2 + Math.random() * 2,
//       ease: "easeInOut",
//     },
//   };

//   const popBalloon = (id, yt, x, y) => {
//     createConfetti(x, y);

//     setBalloons((bs) =>
//       bs.map((b) => (b.id === id ? { ...b, popped: true } : b))
//     );

//     setTimeout(() => setCurrentId(yt), 300);

//     setTimeout(() => {
//       const unpopped = balloons.filter((b) => !b.popped && b.id !== id);
//       const availableBalloons = BALLOONS.filter(
//         (b) => !balloons.some((ball) => ball.id === b.id && !ball.popped)
//       );

//       if (availableBalloons.length > 0) {
//         const newBalloon = {
//           ...availableBalloons[
//             Math.floor(Math.random() * availableBalloons.length)
//           ],
//           popped: false,
//         };
//         setBalloons((prev) => [...unpopped, newBalloon]);
//       }
//     }, 800);
//   };

//   const BalloonsColumn = ({ list, side }) => (
//     <div
//       className={`flex flex-col items-${
//         side === "left" ? "start" : "end"
//       } space-y-8`}
//     >
//       {list.map((b) => (
//         <AnimatePresence key={b.id}>
//           {!b.popped && (
//             <motion.div
//               className="cursor-pointer relative"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 y: [0, -20, 0],
//               }}
//               exit={{
//                 scale: [1, 1.4, 0],
//                 opacity: 0,
//                 rotate: 90,
//                 transition: { duration: 0.5 },
//               }}
//               transition={{
//                 duration: 0.5,
//                 y: {
//                   repeat: Infinity,
//                   duration: 3 + Math.random() * 2,
//                   ease: "easeInOut",
//                 },
//               }}
//               onClick={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 popBalloon(
//                   b.id,
//                   b.youtubeId,
//                   rect.left + rect.width / 2,
//                   rect.top + rect.height / 2
//                 );
//               }}
//             >
//               <motion.div
//                 className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400 origin-top"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: 80,
//                   opacity: 1,
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
//                 }}
//               />

//               <motion.div
//                 className="w-16 h-20 rounded-[50%_50%_45%_45%/60%_60%_40%_40%] shadow-lg relative overflow-hidden"
//                 style={{ backgroundColor: b.color }}
//                 animate={bob}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <div className="absolute inset-2 w-4/5 h-4/5 bg-white/30 rounded-full" />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       ))}
//     </div>
//   );

//   const midpoint = Math.ceil(balloons.length / 2);
//   const leftBalloons = balloons.slice(0, midpoint);
//   const rightBalloons = balloons.slice(midpoint);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
//       <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
//         🎈 Celebration 🎉
//       </h1>

//       <div className="flex items-center justify-center w-full max-w-6xl relative">
//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={leftBalloons} side="left" />
//         </div>

//         <div
//           className="w-3/5 flex justify-center relative"
//           ref={videoContainerRef}
//         >
//           {/* Confetti */}
//           <AnimatePresence>
//             {confetti.map((c) => (
//               <motion.div
//                 key={c.id}
//                 className="absolute rounded-full"
//                 style={{
//                   backgroundColor: c.color,
//                   width: c.size,
//                   height: c.size,
//                   left: c.x,
//                   top: c.y,
//                 }}
//                 initial={{ scale: 0 }}
//                 animate={{
//                   x: c.x + c.vx,
//                   y: c.y + c.vy,
//                   scale: [0, 1, 0.8, 0],
//                   rotate: Math.random() * 360,
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeOut",
//                 }}
//                 onAnimationComplete={() => {
//                   if (c.id === confetti[confetti.length - 1]?.id) {
//                     setConfetti([]);
//                   }
//                 }}
//               />
//             ))}
//           </AnimatePresence>

//           {/* Frame and Zoomed Video */}
//           {currentId && (
//             <motion.div
//               className="relative w-[800px] h-[440px]"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* ✅ Wrapper with overflow to clip zoom */}
//               <div
//                 className="absolute z-10 overflow-hidden"
//                 style={{
//                   left: "66px",
//                   top: "53px",
//                   width: "565px",
//                   height: "335px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   style={{
//                     transform: "scale(1.2)",
//                     transformOrigin: "center center",
//                   }}
//                   src={`https://www.youtube.com/embed/${currentId}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
//                   frameBorder="0"
//                   allow="encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>

//               {/* ✅ Frame behind */}
//               <img
//                 src="/frame.png"
//                 alt="Frame"
//                 className="absolute inset-0 w-full h-full z-0 pointer-events-none"
//               />
//             </motion.div>
//           )}
//         </div>

//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={rightBalloons} side="right" />
//         </div>
//       </div>
//     </div>
//   );
// }












// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const BALLOONS = [
//   { id: 1, youtubeId: "5n_c4blq16A", color: "#f8bbd0" },
//   { id: 2, youtubeId: "JSqM3VdA5Gg", color: "#c5e1a5" },
//   { id: 3, youtubeId: "Wsuuub68w3k", color: "#80deea" },
//   { id: 4, youtubeId: "OkeU5k-5T04", color: "#ffcc80" },
//   { id: 5, youtubeId: "dQw4w9WgXcQ", color: "#e1bee7" },
//   { id: 6, youtubeId: "oHg5SJYRHA0", color: "#90caf9" },
//   { id: 7, youtubeId: "jNQXAC9IVRw", color: "#ffab91" },
//   { id: 8, youtubeId: "9bZkp7q19f0", color: "#a5d6a7" },
// ];

// export default function CelebrationBalloonVideos() {
//   const [balloons, setBalloons] = useState(
//     BALLOONS.slice(0, 4).map((b) => ({ ...b, popped: false }))
//   );
//   const [currentId, setCurrentId] = useState(null);
//   const [confetti, setConfetti] = useState([]);

//   const videoContainerRef = useRef(null);
//   const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);

//   const createConfetti = (x, y) => {
//     const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
//       id: i + Math.random(),
//       x,
//       y,
//       color: `hsl(${Math.random() * 360}, 100%, 50%)`,
//       size: Math.random() * 10 + 5,
//       vx: (Math.random() - 0.5) * 10,
//       vy: (Math.random() - 0.5) * 10 - 5,
//     }));
//     setConfetti(newConfetti);
//   };

//   // Observe video container on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting && !hasPlayedOnScroll) {
//           const rect = entry.target.getBoundingClientRect();
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2 + window.scrollY;
//           createConfetti(centerX, centerY);
//           setCurrentId(BALLOONS[0].youtubeId);
//           setHasPlayedOnScroll(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoContainerRef.current) {
//       observer.observe(videoContainerRef.current);
//     }

//     return () => {
//       if (videoContainerRef.current) {
//         observer.unobserve(videoContainerRef.current);
//       }
//     };
//   }, [hasPlayedOnScroll]);

//   const bob = {
//     y: [0, -20, 0],
//     transition: {
//       repeat: Infinity,
//       duration: 2 + Math.random() * 2,
//       ease: "easeInOut",
//     },
//   };

//   const popBalloon = (id, yt, x, y) => {
//     createConfetti(x, y);

//     setBalloons((bs) =>
//       bs.map((b) => (b.id === id ? { ...b, popped: true } : b))
//     );

//     setTimeout(() => setCurrentId(yt), 300);

//     setTimeout(() => {
//       const unpopped = balloons.filter((b) => !b.popped && b.id !== id);
//       const availableBalloons = BALLOONS.filter(
//         (b) => !balloons.some((ball) => ball.id === b.id && !ball.popped)
//       );

//       if (availableBalloons.length > 0) {
//         const newBalloon = {
//           ...availableBalloons[
//             Math.floor(Math.random() * availableBalloons.length)
//           ],
//           popped: false,
//         };
//         setBalloons((prev) => [...unpopped, newBalloon]);
//       }
//     }, 800);
//   };

//   const BalloonsColumn = ({ list, side }) => (
//     <div
//       className={`flex flex-col items-${
//         side === "left" ? "start" : "end"
//       } space-y-8`}
//     >
//       {list.map((b) => (
//         <AnimatePresence key={b.id}>
//           {!b.popped && (
//             <motion.div
//               className="cursor-pointer relative"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//                 y: [0, -20, 0],
//               }}
//               exit={{
//                 scale: [1, 1.4, 0],
//                 opacity: 0,
//                 rotate: 90,
//                 transition: { duration: 0.5 },
//               }}
//               transition={{
//                 duration: 0.5,
//                 y: {
//                   repeat: Infinity,
//                   duration: 3 + Math.random() * 2,
//                   ease: "easeInOut",
//                 },
//               }}
//               onClick={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 popBalloon(
//                   b.id,
//                   b.youtubeId,
//                   rect.left + rect.width / 2,
//                   rect.top + rect.height / 2
//                 );
//               }}
//             >
//               <motion.div
//                 className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400 origin-top"
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: 80,
//                   opacity: 1,
//                   rotate: [0, 5, -5, 0],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
//                 }}
//               />

//               <motion.div
//                 className="w-16 h-20 rounded-[50%_50%_45%_45%/60%_60%_40%_40%] shadow-lg relative overflow-hidden"
//                 style={{ backgroundColor: b.color }}
//                 animate={bob}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <div className="absolute inset-2 w-4/5 h-4/5 bg-white/30 rounded-full" />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       ))}
//     </div>
//   );

//   const midpoint = Math.ceil(balloons.length / 2);
//   const leftBalloons = balloons.slice(0, midpoint);
//   const rightBalloons = balloons.slice(midpoint);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
//       <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
//         🎈 Celebration 🎉
//       </h1>

//       <div className="flex items-center justify-center w-full max-w-6xl relative">
//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={leftBalloons} side="left" />
//         </div>

//         <div
//           className="w-3/5 flex justify-center relative"
//           ref={videoContainerRef}
//         >
//           {/* Confetti */}
//           <AnimatePresence>
//             {confetti.map((c) => (
//               <motion.div
//                 key={c.id}
//                 className="absolute rounded-full"
//                 style={{
//                   backgroundColor: c.color,
//                   width: c.size,
//                   height: c.size,
//                   left: c.x,
//                   top: c.y,
//                 }}
//                 initial={{ scale: 0 }}
//                 animate={{
//                   x: c.x + c.vx,
//                   y: c.y + c.vy,
//                   scale: [0, 1, 0.8, 0],
//                   rotate: Math.random() * 360,
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   ease: "easeOut",
//                 }}
//                 onAnimationComplete={() => {
//                   if (c.id === confetti[confetti.length - 1]?.id) {
//                     setConfetti([]);
//                   }
//                 }}
//               />
//             ))}
//           </AnimatePresence>

//           {/* Frame and Video */}
//           {currentId && (
//             <motion.div
//               className="relative w-[800px] h-[440px]"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* ✅ Video on top */}
//               <iframe
//                 className="absolute z-10"
//                 style={{
//                   left: "66px",
//                   top: "53px",
//                   width: "565px",
//                   height: "335px",
//                   borderRadius: "10px",
//                 }}
//                 src={`https://www.youtube.com/embed/${currentId}?autoplay=1&rel=0`}
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media; picture-in-picture"
//                 allowFullScreen
//               />

//               {/* ✅ Frame behind */}
//               <img
//                 src="/frame.png"
//                 alt="Frame"
//                 className="absolute inset-0 w-full h-full z-0 pointer-events-none"
//               />
//             </motion.div>
//           )}
//         </div>

//         <div className="w-1/5 flex justify-center">
//           <BalloonsColumn list={rightBalloons} side="right" />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Admin/Firebase/config';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaRegSmileBeam, FaHeart } from 'react-icons/fa';

export default function CelebrationBalloonVideos() {
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [centerVideoKey, setCenterVideoKey] = useState(0);
  const [currentId, setCurrentId] = useState(null);
  const videoContainerRef = useRef(null);
  const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);
  const router = useRouter();

  // Fetch and sort videos by priority
  useEffect(() => {
    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, 'youtubeVideos'));
      const data = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
          popped: false,
        }))
        .sort((a, b) => a.priority - b.priority); // Sort by priority ascending
      setBalloons(data);

      if (data.length > 0) {
        setCurrentId(data[0].videoId); // autoplay first based on priority
      }
    };
    fetchVideos();
  }, []);

  // Confetti burst
  const createConfetti = (x, y) => {
    const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 10 + 5,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10 - 5,
    }));
    setConfetti(newConfetti);
  };

  // Scroll-based animation trigger (optional — still used for confetti effect)
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasPlayedOnScroll && balloons.length > 0) {
        const rect = entry.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2 + window.scrollY;
        createConfetti(centerX, centerY);
        setHasPlayedOnScroll(true);
      }
    },
    { threshold: 0.5 }
  );

  const currentRef = videoContainerRef.current;
  if (currentRef) observer.observe(currentRef);

  return () => {
    if (currentRef) observer.unobserve(currentRef);
  };
}, [hasPlayedOnScroll, balloons]);

  // Handle click on balloon
  const handleBalloonClick = (b, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  createConfetti(x, y);

  // Pop balloon
  setBalloons((prev) =>
    prev.map((balloon) =>
      balloon.id === b.id ? { ...balloon, popped: true } : balloon
    )
  );

  // Zoom animation + video
  setCurrentId(b.videoId);
  setCenterVideoKey((prev) => prev + 1); // trigger zoom

  // Faster redirect (reduced to 300ms)
  setTimeout(() => {
    router.push(`/video/${b.metaTitle}`);
  }, 100);
};


  const midpoint = Math.ceil(balloons.length / 2);
  const left = balloons.slice(0, midpoint);
  const right = balloons.slice(midpoint);

  const bobAnimation = {
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      duration: 2 + Math.random() * 2,
      ease: 'easeInOut',
    },
  };

  const BalloonsColumn = ({ list, side }) => (
    <div className={`flex flex-col items-${side === 'left' ? 'start' : 'end'} space-y-8`}>
      {list.map((b) => (
        <AnimatePresence key={b.id}>
          {!b.popped && (
            <motion.div
              className="cursor-pointer relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
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
                  ease: 'easeInOut',
                },
              }}
              onClick={(e) => handleBalloonClick(b, e)}
            >
              {/* String */}
              <motion.div
                className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400"
                animate={{ height: 80, rotate: [0, 5, -5, 0] }}
                transition={{ rotate: { repeat: Infinity, duration: 4 } }}
              />

              {/* Balloon image */}
              <motion.div
                className="w-16 h-20 shadow-lg relative overflow-hidden rounded-full"
                animate={bobAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${b.videoId}/hqdefault.jpg`}
                  alt={b.title || 'Video'}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
      <h1 className="text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 flex items-center gap-4">
        <FaRegSmileBeam className="text-yellow-400" />
        <span>Celebration</span>
        <FaHeart className="text-pink-500" />
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1920px] gap-8 relative">
        <div className="flex justify-center w-full md:w-1/5">
          <BalloonsColumn list={left} side="left" />
        </div>

        {/* Center video + confetti */}
        <div
          className="flex justify-center w-full md:w-3/5 relative aspect-video max-w-[90vw] md:max-w-[1000px]"
          ref={videoContainerRef}
        >
          {/* Confetti */}
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
                transition={{ duration: 1.5, ease: 'easeOut' }}
                onAnimationComplete={() => {
                  if (c.id === confetti[confetti.length - 1]?.id) setConfetti([]);
                }}
              />
            ))}
          </AnimatePresence>

          {currentId && (
  <motion.div
    key={currentId} // triggers re-animation on video change
    className="relative w-full h-full"
    initial={{ scale: 0.95 }}
    animate={{ scale: [0.95, 1.05, 1] }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    {/* Video iframe container */}
    <div
      className="absolute z-10 overflow-hidden"
      style={{
        left: '8%',
        top: '12%',
        width: '84%',
        height: '76%',
        borderRadius: '10px',
      }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        style={{
          transform: 'scale(1.3)', // permanent zoom-in feel
          transformOrigin: 'center center',
        }}
        src={`https://www.youtube.com/embed/${currentId}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
        frameBorder="0"
        allow="encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>

    {/* Optional decorative frame */}
    <Image
      src="/frame.png"
      alt="Frame"
      width={500}
  height={300}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  </motion.div>
)}

        </div>

        <div className="flex justify-center w-full md:w-1/5">
          <BalloonsColumn list={right} side="right" />
        </div>
      </div>
    </div>
  );
}



// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../Admin/Firebase/config';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { FaRegSmileBeam, FaHeart } from 'react-icons/fa';

// export default function CelebrationBalloonVideos() {
//   const [balloons, setBalloons] = useState([]);
//   const [confetti, setConfetti] = useState([]);
//   const videoContainerRef = useRef(null);
//   const [hasPlayedOnScroll, setHasPlayedOnScroll] = useState(false);
//   const [currentId, setCurrentId] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const snapshot = await getDocs(collection(db, 'youtubeVideos'));
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         popped: false,
//       }));
//       setBalloons(data);
//     };
//     fetchVideos();
//   }, []);

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
//         if (entry.isIntersecting && !hasPlayedOnScroll && balloons.length > 0) {
//           const rect = entry.target.getBoundingClientRect();
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2 + window.scrollY;
//           createConfetti(centerX, centerY);
//           setCurrentId(balloons[0].videoId);
//           setHasPlayedOnScroll(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoContainerRef.current) observer.observe(videoContainerRef.current);
//     return () => {
//       if (videoContainerRef.current) observer.unobserve(videoContainerRef.current);
//     };
//   }, [hasPlayedOnScroll, balloons]);

//   const handleBalloonClick = (b, e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = rect.left + rect.width / 2;
//     const y = rect.top + rect.height / 2;
//     createConfetti(x, y);
//     setTimeout(() => {
//       router.push(`/video/${b.metaTitle}`);
//     }, 500);
//   };

//   const midpoint = Math.ceil(balloons.length / 2);
//   const left = balloons.slice(0, midpoint);
//   const right = balloons.slice(midpoint);

//   const bob = {
//     y: [0, -20, 0],
//     transition: {
//       repeat: Infinity,
//       duration: 2 + Math.random() * 2,
//       ease: 'easeInOut',
//     },
//   };

//   const BalloonsColumn = ({ list, side }) => (
//     <div className={`flex flex-col items-${side === 'left' ? 'start' : 'end'} space-y-8`}>
//       {list.map((b) => (
//         <AnimatePresence key={b.id}>
//           {!b.popped && (
//             <motion.div
//               className="cursor-pointer relative"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1, y: [0, -20, 0] }}
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
//                   ease: 'easeInOut',
//                 },
//               }}
//               onClick={(e) => handleBalloonClick(b, e)}
//             >
//               {/* String */}
//               <motion.div
//                 className="absolute left-1/2 -bottom-16 w-0.5 bg-gray-400"
//                 animate={{ height: 80, rotate: [0, 5, -5, 0] }}
//                 transition={{ rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' } }}
//               />

//               {/* Balloon thumbnail */}
//               <motion.div
//                 className="w-16 h-20 shadow-lg relative overflow-hidden rounded-full"
//                 animate={bob}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Image
//                   src={`https://img.youtube.com/vi/${b.videoId}/hqdefault.jpg`}
//                   alt={b.title || 'Birthday Video'}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       ))}
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4 overflow-hidden">
//       <h1 className="text-fuchsia-900 text-xl xl:text-3xl 2xl:text-5xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 flex items-center gap-4">
//         <FaRegSmileBeam className="text-yellow-400" />
//         <span>Celebration</span>
//         <FaHeart className="text-pink-500" />
//       </h1>

//       <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1920px] gap-8 relative">
//         <div className="flex justify-center w-full md:w-1/5">
//           <BalloonsColumn list={left} side="left" />
//         </div>

//         <div
//           className="flex justify-center w-full md:w-3/5 relative aspect-video max-w-[90vw] md:max-w-[1000px]"
//           ref={videoContainerRef}
//         >
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
//                 transition={{ duration: 1.5, ease: 'easeOut' }}
//                 onAnimationComplete={() => {
//                   if (c.id === confetti[confetti.length - 1]?.id) setConfetti([]);
//                 }}
//               />
//             ))}
//           </AnimatePresence>

//           {currentId && (
//             <motion.div className="relative w-full h-full">
//               <div
//                 className="absolute z-10 overflow-hidden"
//                 style={{
//                   left: '8%',
//                   top: '12%',
//                   width: '84%',
//                   height: '76%',
//                   borderRadius: '10px',
//                 }}
//               >
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   style={{
//                     transform: 'scale(1.1)',
//                     transformOrigin: 'center center',
//                   }}
//                   src={`https://www.youtube.com/embed/${currentId}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0`}
//                   frameBorder="0"
//                   allow="encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>

//               <img
//                 src="/frame.png"
//                 alt="Frame"
//                 className="absolute inset-0 w-full h-full z-0 pointer-events-none"
//               />
//             </motion.div>
//           )}
//         </div>

//         <div className="flex justify-center w-full md:w-1/5">
//           <BalloonsColumn list={right} side="right" />
//         </div>
//       </div>
//     </div>
//   );
// }

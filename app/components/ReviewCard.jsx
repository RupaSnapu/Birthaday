// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../Admin/Firebase/config"; // Adjust path as needed
// import { collection, getDocs } from "firebase/firestore";
// import { motion, AnimatePresence } from "framer-motion";

// function AnimatedReviewCard() {
//   const [reviews, setReviews] = useState([]);
//   const [currentReview, setCurrentReview] = useState(0);

//   // Fetch reviews on mount
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "reviews")); // use your actual collection name
//         const data = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         console.log("Fetched reviews:", data);
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // Auto-rotate reviews every 5 seconds
//   useEffect(() => {
//     if (reviews.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentReview((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [reviews]);

//   if (reviews.length === 0) {
//     return <div className="text-center mt-12 text-white">Loading reviews...</div>;
//   }

//   return (
//     <div className="relative md:ml-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-12 sm:mt-16">
//       <div className="relative w-64 h-24 sm:h-52 md:h-40 overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={reviews[currentReview].id}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="absolute inset-0 bg-white/10 bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl shadow-lg text-black flex flex-col justify-center"
//           >
//             <p className="italic mb-3 sm:mb-4 sm:text-base text-[12px]">
//               "{reviews[currentReview]?.quote || 'No quote available'}"
//             </p>
//             <p className="font-semibold sm:text-base text-[12px]">
//               - {reviews[currentReview]?.author || 'Anonymous'}
//             </p>

//             <div className="flex mt-2">
//               {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
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
//     </div>
//   );
// }

// export default AnimatedReviewCard;



"use client";

import { useEffect, useState } from "react";
import { db } from "../Admin/Firebase/config"; // Adjust path as needed
import { collection, getDocs } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedReviewCard() {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Fetch reviews from Firebase
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            quote: docData.review || "No review text",
            author: docData.name || "Anonymous",
            rating: docData.stars || 0,
          };
        });

        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Auto-rotate review every 2 seconds
  useEffect(() => {
    if (reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3000); // 2 seconds

    return () => clearInterval(interval);
  }, [reviews]);

  if (reviews.length === 0) {
    return <div className="text-center mt-12 text-white">Loading reviews...</div>;
  }

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="relative w-full max-w-md mx-auto mt-10 ml-3 h-52">
      <div className=" relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg text-white flex flex-col justify-center"
          >
            <p className="italic mb-3 text-sm sm:text-base">&quot;{currentReview.quote}&quot;</p>
            <p className="font-semibold text-sm sm:text-base">- {currentReview.author}</p>
            <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i < currentReview.rating ? "text-amber-400" : "text-white/50"
                  }`}
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
  );
}

export default AnimatedReviewCard;


// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../Admin/Firebase/config"; // Adjust path if needed
// import { collection, getDocs } from "firebase/firestore";
// import { motion, AnimatePresence } from "framer-motion";

// function AnimatedReviewCard() {
//   const [reviews, setReviews] = useState([]);
//   const [currentReview, setCurrentReview] = useState(0);

//   // Fetch reviews from Firebase
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "reviews"));
//         const data = querySnapshot.docs.map((doc) => {
//           const docData = doc.data();
//           return {
//             id: doc.id,
//             quote: docData.review || "No review text",
//             author: docData.name || "Anonymous",
//             rating: docData.stars || 0,
//           };
//         });

//         console.log("Mapped reviews:", data); // Debug log
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   // Auto-rotate every 5 seconds
//   useEffect(() => {
//     if (reviews.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentReview((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [reviews]);

//   if (reviews.length === 0) {
//     return <div className="text-center mt-12 text-white">Loading reviews...</div>;
//   }

//   return (
//     <div className="relative md:ml-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-12 sm:mt-16">
//       <div className="relative w-64 h-24 sm:h-52 md:h-40 overflow-hidden">
        // <AnimatePresence mode="wait">
        //   <motion.div
        //     key={reviews[currentReview].id}
        //     initial={{ opacity: 0, x: 50 }}
        //     animate={{ opacity: 1, x: 0 }}
        //     exit={{ opacity: 0, x: -50 }}
        //     transition={{ duration: 0.6 }}
        //     className="absolute inset-0 bg-white/10 bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl shadow-lg text-black flex flex-col justify-center"
        //   >
//             <p className="italic mb-3 sm:mb-4 sm:text-base text-[12px]">
//               "{reviews[currentReview]?.quote}"
//             </p>
//             <p className="font-semibold sm:text-base text-[12px]">
//               - {reviews[currentReview]?.author}
//             </p>
//             <div className="flex mt-2">
//               {Array.from({ length: reviews[currentReview]?.rating || 0 }).map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
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
//     </div>
//   );
// }

// export default AnimatedReviewCard;

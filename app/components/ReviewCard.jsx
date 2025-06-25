

// export default function ReviewCard({ quote, author, rating, index }) {
//   return (
//     <motion.div
//       className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-2xl"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.2 * index, duration: 0.6 }}
//     >
//       <div className="flex mb-2">
//         {[...Array(rating)].map((_, i) => (
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
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
function ReviewCard({ quote, author, rating }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-xl shadow-lg text-base max-w-sm mx-auto">
      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-black italic mb-4">"{quote}"</p>
      <p className="text-black font-semibold">- {author}</p>
    </div>
  );
}
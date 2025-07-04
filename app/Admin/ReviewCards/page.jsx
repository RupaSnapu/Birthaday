// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../Firebase/config'; // Adjust path as needed
// import CheckAuth from '../Firebase/CheckAuth';

// export default function ReviewCardsForm() {
//   const [name, setName] = useState('');
//   const [review, setReview] = useState('');
//   const [stars, setStars] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await addDoc(collection(db, 'reviews'), {
//         name,
//         review,
//         stars,
//         createdAt: new Date()
//       });
//       alert('Review submitted!');
//       router.push('/Admin'); // Optional: return to admin page
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       alert('Failed to submit review.');
//     }

//     setLoading(false);
//   };

//   return (
//     <CheckAuth>
//     <main className="p-8 max-w-xl mx-auto bg-white shadow rounded-2xl">
//       <h1 className="text-2xl font-bold mb-6 text-blue-700">Submit a Review</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full border p-2 rounded"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <textarea
//           className="w-full border p-2 rounded"
//           placeholder="Review description"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           required
//         />

//         <div className="flex items-center gap-2">
//           {[1, 2, 3, 4, 5].map((n) => (
//             <button
//               key={n}
//               type="button"
//               onClick={() => setStars(n)}
//               className={`text-2xl ${stars >= n ? 'text-yellow-400' : 'text-gray-300'}`}
//             >
//               ★
//             </button>
//           ))}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? 'Submitting...' : 'Submit Review'}
//         </button>
//       </form>
//     </main>
//     </CheckAuth>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../Firebase/config';
import CheckAuth from '../Firebase/CheckAuth';

export default function ReviewCardsPage() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);
  const [priority, setPriority] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [limit, setLimit] = useState(10);

  const fetchReviews = async () => {
    const q = query(collection(db, 'reviews'), orderBy('priorityRanking', 'asc'));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !review || stars === 0 || priority < 1) {
      alert('Please fill out all fields.');
      return;
    }

    setLoading(true);

    try {
      if (editingId) {
        const reviewRef = doc(db, 'reviews', editingId);
        await updateDoc(reviewRef, { name, review, stars, priorityRanking: priority });
        alert('✅ Review updated!');
      } else {
        await addDoc(collection(db, 'reviews'), {
          name,
          review,
          stars,
          priorityRanking: priority,
          createdAt: new Date(),
        });
        alert('✅ Review submitted!');
      }

      setName('');
      setReview('');
      setStars(0);
      setPriority(1);
      setEditingId(null);
      fetchReviews();
    } catch (error) {
      console.error('Error saving review:', error);
      alert('❌ Failed to submit review.');
    }

    setLoading(false);
  };

  return (
    <CheckAuth>
      <main className="w-full px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Snapu Review Panel</h1>

        {/* Layout: form + reviews */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* ==== Form (left) ==== */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/3 w-full p-4 border border-gray-300 rounded"
          >
            <h2 className="text-lg font-semibold mb-4">Write a Review</h2>

            {editingId && (
              <div className="mb-2 text-sm text-red-500">
                Editing...{' '}
                <button
                  type="button"
                  className="underline"
                  onClick={() => {
                    setEditingId(null);
                    setName('');
                    setReview('');
                    setStars(0);
                    setPriority(1);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 mb-2 rounded"
            />
            <textarea
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border px-3 py-2 mb-2 rounded"
              rows={3}
            />
            <input
              type="number"
              min={1}
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="w-full border px-3 py-2 mb-2 rounded"
              placeholder="Priority (1 = high)"
            />

            <div className="mb-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setStars(n)}
                  className={`text-xl mr-1 ${
                    stars >= n ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? 'Saving...' : editingId ? 'Update Review' : 'Submit Review'}
            </button>
          </form>

          {/* ==== Reviews (right) ==== */}
          <div className="w-full">
            {/* Review limit selector */}
            <div className="mb-4 flex items-center gap-2 text-sm">
              <span>Show:</span>
              {[10, 20, 50, 100].map((n) => (
                <button
                  key={n}
                  onClick={() => setLimit(n)}
                  className={`px-2 py-1 border rounded ${
                    limit === n ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {reviews.slice(0, limit).map((r) => (
                <div
                  key={r.id}
                  className="border rounded p-4 bg-white shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <strong>{r.name}</strong>
                      <span className="text-gray-500">
                        {r.createdAt?.seconds
                          ? new Date(r.createdAt.seconds * 1000).toLocaleDateString()
                          : '—'}
                      </span>
                    </div>
                    <p className="text-gray-800 mb-2">{r.review}</p>
                    <div className="text-yellow-400 text-lg">
                      {'★'.repeat(r.stars)}
                      {'☆'.repeat(5 - r.stars)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Priority: {r.priorityRanking}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setEditingId(r.id);
                      setName(r.name);
                      setReview(r.review);
                      setStars(r.stars);
                      setPriority(r.priorityRanking);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-3 text-sm text-blue-600 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </CheckAuth>
  );
}



// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   doc,
//   query,
//   orderBy,
// } from 'firebase/firestore';
// import { db } from '../Firebase/config';
// import CheckAuth from '../Firebase/CheckAuth';

// export default function ReviewCardsPage() {
//   const [name, setName] = useState('');
//   const [review, setReview] = useState('');
//   const [stars, setStars] = useState(0);
//   const [priority, setPriority] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const fetchReviews = async () => {
//     const q = query(collection(db, 'reviews'), orderBy('priorityRanking', 'asc'));
//     const snapshot = await getDocs(q);
//     const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setReviews(data);
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !review || stars === 0 || priority < 1) {
//       alert('Please fill out all fields properly.');
//       return;
//     }

//     setLoading(true);

//     try {
//       if (editingId) {
//         const reviewRef = doc(db, 'reviews', editingId);
//         await updateDoc(reviewRef, {
//           name,
//           review,
//           stars,
//           priorityRanking: priority,
//         });
//         alert('✅ Review updated!');
//       } else {
//         await addDoc(collection(db, 'reviews'), {
//           name,
//           review,
//           stars,
//           priorityRanking: priority,
//           createdAt: new Date(),
//         });
//         alert('✅ Review submitted!');
//       }

//       setName('');
//       setReview('');
//       setStars(0);
//       setPriority(1);
//       setEditingId(null);
//       fetchReviews();
//     } catch (error) {
//       console.error('Error saving review:', error);
//       alert('❌ Failed to submit review.');
//     }

//     setLoading(false);
//   };

//   return (
//     <CheckAuth>
//       <main className="max-w-4xl mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 mb-10">
//           Snapu Review Panel
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-2xl shadow-xl mb-10 space-y-4 border border-gray-200"
//         >
//           {editingId && (
//             <div className="text-sm text-pink-600 mb-2 font-medium">
//               Editing review...{' '}
//               <button
//                 onClick={() => {
//                   setEditingId(null);
//                   setName('');
//                   setReview('');
//                   setStars(0);
//                   setPriority(1);
//                 }}
//                 type="button"
//                 className="underline text-red-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           )}

//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//           <textarea
//             placeholder="Write your review..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Priority Ranking (1 = Highest)"
//             value={priority}
//             onChange={(e) => setPriority(Number(e.target.value))}
//             className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             min={1}
//             required
//           />

//           <div className="flex gap-2">
//             {[1, 2, 3, 4, 5].map((n) => (
//               <button
//                 type="button"
//                 key={n}
//                 onClick={() => setStars(n)}
//                 className={`text-2xl ${
//                   stars >= n ? 'text-yellow-400' : 'text-gray-300'
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
//           >
//             {loading ? 'Submitting...' : editingId ? 'Update Review' : 'Submit Review'}
//           </button>
//         </form>

//         <section>
//           <h2 className="text-2xl font-semibold mb-6 text-blue-800">All Reviews</h2>
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
//             {reviews.map((r) => (
//               <div
//                 key={r.id}
//                 className="bg-white rounded-xl p-5 shadow-lg border-l-4 border-pink-400 relative"
//               >
//                 <div className="flex justify-between items-center mb-1">
//                   <h3 className="font-bold text-lg text-blue-700">{r.name}</h3>
//                   <span className="text-xs text-gray-500">
//                     {r.createdAt?.seconds
//                       ? new Date(r.createdAt.seconds * 1000).toLocaleString()
//                       : '—'}
//                   </span>
//                 </div>
//                 <p className="text-gray-700 mb-2">{r.review}</p>
//                 <div className="flex items-center gap-1 text-yellow-400">
//                   {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
//                 </div>
//                 <div className="text-sm text-pink-600 font-medium mt-2">
//                   Priority: {r.priorityRanking}
//                 </div>

//                 <button
//                   onClick={() => {
//                     setEditingId(r.id);
//                     setName(r.name);
//                     setReview(r.review);
//                     setStars(r.stars);
//                     setPriority(r.priorityRanking);
//                     window.scrollTo({ top: 0, behavior: 'smooth' });
//                   }}
//                   className="text-sm text-blue-600 font-semibold mt-3 hover:underline"
//                 >
//                   ✏️ Edit
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </CheckAuth>
//   );
// }

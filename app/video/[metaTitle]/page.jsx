// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../../Admin/Firebase/config';
// import {
//   FaArrowLeft,
//   FaCalendarAlt,
//   FaClock,
//   FaTag,
//   FaUser,
// } from 'react-icons/fa';

// export default function VideoDetailByMetaTitle() {
//   const { metaTitle } = useParams();
//   const router = useRouter();

//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Query Firestore by metaTitle
//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const q = query(
//           collection(db, 'youtubeVideos'),
//           where('metaTitle', '==', decodeURIComponent(metaTitle))
//         );
//         const snapshot = await getDocs(q);
//         if (!snapshot.empty) {
//           setVideo(snapshot.docs[0].data());
//         }
//       } catch (err) {
//         console.error('Error fetching video:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (metaTitle) fetchVideo();
//   }, [metaTitle]);

//   const formatDuration = (duration) => {
//     const match = duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
//     const [, h, m, s] = match || [];
//     return [
//       h && `${h} hr`,
//       m && `${m} min`,
//       s && `${s} sec`,
//     ]
//       .filter(Boolean)
//       .join(' ');
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp?.seconds * 1000);
//     return date.toLocaleDateString('en-GB', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const extractLink = (text) => {
//     const match = text?.match(/https?:\/\/[^\s]+/);
//     return match ? match[0] : null;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
//         Loading video details...
//       </div>
//     );
//   }

//   if (!video) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-red-600">
//         <p className="text-xl">Video not found.</p>
//         <button
//           onClick={() => router.push('/')}
//           className="mt-4 text-blue-600 hover:underline"
//         >
//           ← Go back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <button
//             onClick={() => router.push('/')}
//             className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
//           >
//             <FaArrowLeft /> Back to Celebration
//           </button>
//         </div>

//         {/* Video */}
//         <div className="aspect-video w-full relative bg-black">
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
//             title={video.title}
//             frameBorder="0"
//             allow="autoplay; encrypted-media; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>

//         {/* Info */}
//         <div className="p-6 space-y-6 text-gray-800">
//           <h1 className="text-2xl md:text-3xl font-bold text-fuchsia-800">{video.title}</h1>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
//             <div className="flex items-center gap-2"><FaUser className="text-purple-500" /> {video.author}</div>
//             <div className="flex items-center gap-2"><FaTag className="text-green-500" /> {video.category}</div>
//             <div className="flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> {formatDate(video.publishedDate)}</div>
//             <div className="flex items-center gap-2"><FaClock className="text-yellow-500" /> {formatDuration(video.duration)}</div>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-pink-700 mb-2">Description</h2>
//             <p className="text-gray-700 leading-relaxed whitespace-pre-line">{video.description}</p>
//           </div>

//           {extractLink(video.description) && (
//             <a
//               href={extractLink(video.description)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
//             >
//               📷 View Full Album
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Admin/Firebase/config';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaUser,
  FaList,
  FaLink,
  FaInfoCircle,
} from 'react-icons/fa';

export default function VideoDetailByMetaTitle() {
  const { metaTitle } = useParams();
  const router = useRouter();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const q = query(
          collection(db, 'youtubeVideos'),
          where('metaTitle', '==', decodeURIComponent(metaTitle))
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setVideo(snapshot.docs[0].data());
        }
      } catch (err) {
        console.error('Error fetching video:', err);
      } finally {
        setLoading(false);
      }
    };
    if (metaTitle) fetchVideo();
  }, [metaTitle]);

  const formatDuration = (duration) => {
    const match = duration?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const [, h, m, s] = match || [];
    return [h && `${h} hr`, m && `${m} min`, s && `${s} sec`].filter(Boolean).join(' ');
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp?.seconds * 1000);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const extractLink = (text) => {
    const match = text?.match(/https?:\/\/[^\s]+/);
    return match ? match[0] : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Loading video details...
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-600">
        <p className="text-xl">Video not found.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 text-blue-600 hover:underline"
        >
          ← Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Celebration
          </button>
        </div>

        {/* Video Embed */}
        <div className="aspect-video w-full relative bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-gray-800">
          {/* Title */}
          <h1 className="text-3xl font-bold text-fuchsia-800">{video.title}</h1>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"><FaUser className="text-purple-500" /> {video.author}</div>
            <div className="flex items-center gap-2"><FaTag className="text-green-500" /> {video.category}</div>
            <div className="flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> {formatDate(video.publishedDate)}</div>
            <div className="flex items-center gap-2"><FaClock className="text-yellow-500" /> {formatDuration(video.duration)}</div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-pink-700 mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{video.description}</p>
          </div>

          {/* Tags */}
          {video.tags && video.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {video.tags.map((tag, idx) => (
                  <span key={idx} className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        <div>
          {extractLink(video.description) && (
              <a
                href={extractLink(video.description)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-800 underline"
              >
                <FaLink /> View Full Album
              </a>
            )}
        </div>
        </div>
      </div>
    </div>
  );
}

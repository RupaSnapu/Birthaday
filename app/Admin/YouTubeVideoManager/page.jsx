// 'use client';

// import { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from 'firebase/firestore';
// import { db } from '../Firebase/config';
// import CheckAuth from '../Firebase/CheckAuth';

// export default function YouTubeVideoManager() {
//   const [form, setForm] = useState({
//     videoId: '',
//     title: '',
//     description: '',
//     tags: '',
//     priority: '',
//     category: '',
//     publishedDate: '',
//     duration: '',
//     author: '',
//     metaTitle: '',
//     metaDescription: '',
//     schemaMarkup: '',
//   });

//   const [videos, setVideos] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedForm = { ...form, [name]: value };
//     updatedForm.schemaMarkup = generateSchema(updatedForm);
//     setForm(updatedForm);
//   };

//   const generateSchema = (data) => {
//     const {
//       videoId,
//       title,
//       description,
//       tags,
//       publishedDate,
//       duration,
//       author,
//     } = data;

//     return JSON.stringify(
//       {
//         "@context": "https://schema.org",
//         "@type": "VideoObject",
//         name: title,
//         description,
//         thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
//         uploadDate: publishedDate,
//         duration,
//         author: {
//           "@type": "Person",
//           name: author,
//         },
//         keywords: tags,
//         contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
//         embedUrl: `https://www.youtube.com/embed/${videoId}`,
//       },
//       null,
//       2
//     );
//   };

//   const getThumbnailUrl = (videoId) =>
//     videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

//   const fetchVideos = async () => {
//     const snapshot = await getDocs(collection(db, 'youtubeVideos'));
//     const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setVideos(data.sort((a, b) => a.priority - b.priority));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...form,
//       tags: form.tags.split(',').map((tag) => tag.trim()),
//       priority: parseInt(form.priority),
//       publishedDate: new Date(form.publishedDate),
//     };

//     try {
//       if (editId) {
//         await updateDoc(doc(db, 'youtubeVideos', editId), payload);
//         setEditId(null);
//       } else {
//         await addDoc(collection(db, 'youtubeVideos'), payload);
//       }

//       setForm({
//         videoId: '',
//         title: '',
//         description: '',
//         tags: '',
//         priority: '',
//         category: '',
//         publishedDate: '',
//         duration: '',
//         author: '',
//         metaTitle: '',
//         metaDescription: '',
//         schemaMarkup: '',
//       });

//       fetchVideos();
//     } catch (err) {
//       console.error('Error saving video:', err);
//     }
//   };

//   const handleEdit = (video) => {
//     setEditId(video.id);
//     setForm({
//       ...video,
//       tags: video.tags.join(', '),
//       publishedDate: video.publishedDate
//         ? new Date(video.publishedDate.seconds * 1000).toISOString().split('T')[0]
//         : '',
//     });
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Delete this video?')) {
//       await deleteDoc(doc(db, 'youtubeVideos', id));
//       fetchVideos();
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   return (
//     <CheckAuth>
//       <main className="p-8 bg-gray-100 min-h-screen">
//         <h1 className="text-2xl font-bold mb-6 text-indigo-700">YouTube Video Manager</h1>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="grid gap-4 bg-white p-6 rounded-xl shadow max-w-3xl"
//         >
//           {/* YouTube Video ID + Thumbnail Preview */}
//           <div>
//             <label className="block font-semibold mb-1">YouTube Video ID</label>
//             <input
//               type="text"
//               name="videoId"
//               value={form.videoId}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded"
//               placeholder="e.g., dQw4w9WgXcQ"
//               required
//             />
//             {form.videoId && (
//               <img
//                 src={getThumbnailUrl(form.videoId)}
//                 alt="Thumbnail Preview"
//                 className="mt-3 w-64 rounded shadow"
//               />
//             )}
//           </div>

//           {/* Other fields */}
//           {[
//             ['title', 'Title'],
//             ['description', 'Description'],
//             ['tags', 'Tags (comma separated)'],
//             ['priority', 'Priority'],
//             ['category', 'Category'],
//             ['publishedDate', 'Published Date'],
//             ['duration', 'Duration (ISO 8601)'],
//             ['author', 'Author'],
//             ['metaTitle', 'Meta Title'],
//             ['metaDescription', 'Meta Description'],
//           ].map(([name, label]) => (
//             <div key={name}>
//               <label className="block font-semibold mb-1">{label}</label>
//               <input
//                 type={name === 'publishedDate' ? 'date' : 'text'}
//                 name={name}
//                 value={form[name]}
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//                 required
//               />
//             </div>
//           ))}

//           {/* Schema Markup */}
//           <div>
//             <label className="block font-semibold mb-1">Schema Markup (Auto-Generated)</label>
//             <textarea
//               name="schemaMarkup"
//               value={form.schemaMarkup}
//               className="w-full border px-4 py-2 rounded h-48 font-mono text-sm bg-gray-50"
//               readOnly
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
//           >
//             {editId ? 'Update Video' : 'Save Video'}
//           </button>
//         </form>

//         {/* Video List */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
//           {videos.map((video) => (
//             <div key={video.id} className="bg-white rounded-lg shadow p-4">
//               <img
//                 src={getThumbnailUrl(video.videoId)}
//                 alt={video.title}
//                 className="w-full rounded mb-2"
//               />
//               <h3 className="font-semibold text-xm">{video.title}</h3>
//               <p className="text-sm text-gray-500 mb-1">Priority: {video.priority}</p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(video)}
//                   className="flex-1 bg-yellow-500 text-white text-sm py-1 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(video.id)}
//                   className="flex-1 bg-red-500 text-white text-sm py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </CheckAuth>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../Firebase/config';
import CheckAuth from '../Firebase/CheckAuth';
import Image from 'next/image';

export default function YouTubeVideoManager() {
  const [form, setForm] = useState({
    videoId: '',
    title: '',
    description: '',
    tags: '',
    priority: '',
    category: '',
    publishedDate: '',
    duration: '',
    author: '',
    metaTitle: '',
    metaDescription: '',
    schemaMarkup: '',
  });

  const [videos, setVideos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    updatedForm.schemaMarkup = generateSchema(updatedForm);
    setForm(updatedForm);
  };

  const generateSchema = (data) => {
    const {
      videoId,
      title,
      description,
      tags,
      publishedDate,
      duration,
      author,
    } = data;

    return JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        uploadDate: publishedDate,
        duration,
        author: {
          "@type": "Person",
          name: author,
        },
        keywords: tags,
        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      },
      null,
      2
    );
  };

  const getThumbnailUrl = (videoId) =>
    videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  const fetchVideos = async () => {
    const snapshot = await getDocs(collection(db, 'youtubeVideos'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setVideos(data.sort((a, b) => a.priority - b.priority));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags.split(',').map((tag) => tag.trim()),
      priority: parseInt(form.priority),
      publishedDate: new Date(form.publishedDate),
    };

    try {
      if (editId) {
        await updateDoc(doc(db, 'youtubeVideos', editId), payload);
        setEditId(null);
      } else {
        await addDoc(collection(db, 'youtubeVideos'), payload);
      }

      setForm({
        videoId: '',
        title: '',
        description: '',
        tags: '',
        priority: '',
        category: '',
        publishedDate: '',
        duration: '',
        author: '',
        metaTitle: '',
        metaDescription: '',
        schemaMarkup: '',
      });

      fetchVideos();
    } catch (err) {
      console.error('Error saving video:', err);
    }
  };

  const handleEdit = (video) => {
    setEditId(video.id);
    setForm({
      ...video,
      tags: video.tags.join(', '),
      publishedDate: video.publishedDate
        ? new Date(video.publishedDate.seconds * 1000).toISOString().split('T')[0]
        : '',
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this video?')) {
      await deleteDoc(doc(db, 'youtubeVideos', id));
      fetchVideos();
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <CheckAuth>
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">YouTube Video Manager</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-white p-6 rounded-xl shadow max-w-3xl"
        >
          {/* YouTube Video ID + Thumbnail Preview */}
          <div>
            <label className="block font-semibold mb-1">YouTube Video ID</label>
            <input
              type="text"
              name="videoId"
              value={form.videoId}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., dQw4w9WgXcQ"
              required
            />
            {form.videoId && (
              <Image
                src={getThumbnailUrl(form.videoId)}
                alt="Thumbnail Preview"
                className="mt-3 w-64 rounded shadow"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          {/* Description (TextArea instead of Input) */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded h-28"
              required
            />
          </div>

          {/* Other fields */}
          {[
            ['tags', 'Tags (comma separated)'],
            ['priority', 'Priority'],
            ['category', 'Category'],
            ['publishedDate', 'Published Date'],
            ['duration', 'Duration (ISO 8601)'],
            ['author', 'Author'],
            ['metaTitle', 'Meta Title'],
            ['metaDescription', 'Meta Description'],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block font-semibold mb-1">{label}</label>
              <input
                type={name === 'publishedDate' ? 'date' : 'text'}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                required
              />
            </div>
          ))}

          {/* Schema Markup */}
          <div>
            <label className="block font-semibold mb-1">Schema Markup (Auto-Generated)</label>
            <textarea
              name="schemaMarkup"
              value={form.schemaMarkup}
              className="w-full border px-4 py-2 rounded h-48 font-mono text-sm bg-gray-50"
              readOnly
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            {editId ? 'Update Video' : 'Save Video'}
          </button>
        </form>

        {/* Video List */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow p-4">
              <Image
                src={getThumbnailUrl(video.videoId)}
                alt={video.title}
                width={480} 
                height={360}
                className="w-full rounded mb-2"
              />
              <h3 className="font-semibold text-xm">{video.title}</h3>
              <p className="text-sm text-gray-500 mb-1">Priority: {video.priority}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(video)}
                  className="flex-1 bg-yellow-500 text-white text-sm py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="flex-1 bg-red-500 text-white text-sm py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </CheckAuth>
  );
}

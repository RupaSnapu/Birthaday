// 'use client';

// import { useState, useEffect } from 'react';
// import { db } from '../Firebase/config';
// import {
//   collection,
//   addDoc,
//   getDocs,  
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
//   orderBy,
// } from 'firebase/firestore';
// import Image from 'next/image';

// const CATEGORY_OPTIONS = [
//   'Kids Joy',
//   'Teen Vibes',
//   'Adult Celebrations',
//   'Milestones',
// ];

// export default function GalleryManager() {
//   const [gallery, setGallery] = useState([]);
//   const [form, setForm] = useState({
//     imageUrl: '',
//     category: '',
//     priority: '',
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Fetch gallery images on load
//   useEffect(() => {
//     const fetchGallery = async () => {
//       const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setGallery(data);
//     };

//     fetchGallery();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { imageUrl, category, priority } = form;

//     if (!imageUrl || !category || priority === '') {
//       alert('All fields are required.');
//       return;
//     }

//     if (editingId) {
//       const ref = doc(db, 'galleryImages', editingId);
//       await updateDoc(ref, {
//         imageUrl,
//         category,
//         priority: Number(priority),
//       });
//     } else {
//       await addDoc(collection(db, 'galleryImages'), {
//         imageUrl,
//         category,
//         priority: Number(priority),
//         createdAt: new Date(),
//       });
//     }

//     setForm({ imageUrl: '', category: '', priority: '' });
//     setEditingId(null);
//     location.reload(); // reload list after update
//   };

//   const handleEdit = (item) => {
//     setForm({
//       imageUrl: item.imageUrl,
//       category: item.category,
//       priority: item.priority,
//     });
//     setEditingId(item.id);
//   };

//   const handleDelete = async (id) => {
//     await deleteDoc(doc(db, 'galleryImages', id));
//     setGallery((prev) => prev.filter((img) => img.id !== id));
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Gallery Manager</h1>

//       {/* Form Section */}

//         <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded mb-10">
//   <div>
//     <label className="block mb-1 font-medium">Image URL</label>
//     <input
//       type="url"
//       name="imageUrl"
//       value={form.imageUrl}
//       onChange={handleChange}
//       className="w-full border border-gray-300 rounded px-3 py-2"
//       placeholder="https://example.com/image.jpg"
//       required
//     />
//   </div>

//   <div>
//     <label className="block mb-1 font-medium">Category</label>
//     <select
//       name="category"
//       value={form.category}
//       onChange={handleChange}
//       className="w-full border border-gray-300 rounded px-3 py-2"
//       required
//     >
//       <option value="">-- Select Category --</option>
//       {CATEGORY_OPTIONS.map((cat) => (
//         <option key={cat} value={cat}>
//           {cat}
//         </option>
//       ))}
//     </select>
//   </div>

//   <div>
//     <label className="block mb-1 font-medium">Priority</label>
//     <input
//       type="number"
//       name="priority"
//       value={form.priority}
//       onChange={handleChange}
//       className="w-full border border-gray-300 rounded px-3 py-2"
//       placeholder="e.g., 1"
//       required
//     />
//   </div>

//   <div className="flex gap-4">
//     <button
//       type="submit"
//       className="bg-purple-600 text-white font-semibold px-6 py-2 rounded hover:bg-purple-700"
//     >
//       {editingId ? 'Update Image' : 'Add Image'}
//     </button>

//     {editingId && (
//       <button
//         type="button"
//         onClick={() => {
//           setForm({ imageUrl: '', category: '', priority: '' });
//           setEditingId(null);
//         }}
//         className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded hover:bg-gray-400"
//       >
//         Cancel
//       </button>
//     )}
//   </div>
// </form>



//       {/* Category Filter */}
//       <div className="mb-6">
//         <label className="block mb-1 font-semibold text-gray-700">Filter by Category</label>
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2"
//         >
//           <option value="All">All</option>
//           {CATEGORY_OPTIONS.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//         {gallery
//           .filter(
//             (item) => selectedCategory === 'All' || item.category === selectedCategory
//           )
//           .map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded overflow-hidden border border-gray-200"
//             >
//               <Image
//                 src={item.imageUrl}
//                 alt={item.category}
//                 width={400} // Adjust as needed
//                 height={160} // Equivalent to h-40 (10rem * 16px = 160px)
//                 className="w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg text-purple-600">{item.category}</h3>
//                 <p className="text-sm text-gray-500">Priority: {item.priority}</p>
//                 <div className="flex justify-end mt-4 gap-2">
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="text-red-600 hover:underline text-sm"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { db } from '../Firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import CheckAuth from '../Firebase/CheckAuth';
import Image from 'next/image';

export default function GalleryManager() {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [form, setForm] = useState({
    imageUrl: '',
    priority: '',
    category: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch and sort gallery
  const fetchGallery = async () => {
    const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGallery(data);

    // Extract unique categories
    const uniqueCategories = [...new Set(data.map((item) => item.category || 'Uncategorized'))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ imageUrl: '', priority: '', category: '' });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { imageUrl, priority, category } = form;

    if (!imageUrl || priority === '' || !category.trim()) {
      alert('All fields are required.');
      return;
    }

    setLoading(true);

    try {
      if (editingId) {
        await updateDoc(doc(db, 'galleryImages', editingId), {
          imageUrl,
          priority: Number(priority),
          category: category.trim(),
        });
      } else {
        await addDoc(collection(db, 'galleryImages'), {
          imageUrl,
          priority: Number(priority),
          category: category.trim(),
          createdAt: new Date(),
        });
      }

      resetForm();
      await fetchGallery();
    } catch (err) {
      console.error('Error saving image:', err);
      alert('Error saving image.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setForm({
      imageUrl: item.imageUrl,
      priority: item.priority,
      category: item.category || '',
    });
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this image?')) {
      await deleteDoc(doc(db, 'galleryImages', id));
      setGallery((prev) => prev.filter((img) => img.id !== id));
    }
  };

  // Filtered gallery based on selected category
  const filteredGallery =
    selectedCategory === 'All'
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <CheckAuth>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Gallery Manager</h1>

        {/* === Form Section === */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4 mb-10 border"
        >
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Priority</label>
            <input
              type="number"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              placeholder="e.g. 1"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Wedding, Nature"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded"
            >
              {loading ? 'Saving...' : editingId ? 'Update Image' : 'Add Image'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* === Category Filter === */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded border ${
              selectedCategory === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-100'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded border ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 border-purple-300 hover:bg-purple-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* === Gallery Display === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow border overflow-hidden flex flex-col"
            >
              <Image
                src={item.imageUrl}
                height={200}
                width={200}
                alt="gallery image"
                className="w-full object-cover aspect-square"
              />
              <div className="p-3 flex flex-col flex-grow justify-between">
                <p className="text-xs text-gray-500">Priority: {item.priority}</p>
                <p className="text-xs text-gray-600 mb-2 italic">Category: {item.category}</p>
                <div className="flex justify-end mt-auto gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CheckAuth>
  );
}
 
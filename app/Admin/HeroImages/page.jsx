'use client';

import { useState, useEffect } from 'react';
import { db } from '../Firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc, 
} from 'firebase/firestore';
import CheckAuth from '../Firebase/CheckAuth';
import Image from 'next/image';

export default function HeroImagesPage() {
  const [priority, setPriority] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!priority || !imageUrl) {
      alert('Please fill in both fields.');
      return;
    }

    try {
      if (editId) {
        const docRef = doc(db, 'heroImages', editId);
        await updateDoc(docRef, {
          priority: parseInt(priority),
          imageUrl: imageUrl.trim(),
        });
        setEditId(null);
      } else {
        await addDoc(collection(db, 'heroImages'), {
          priority: parseInt(priority),
          imageUrl: imageUrl.trim(),
          createdAt: new Date(),
        });
      }

      setPriority('');
      setImageUrl('');
      fetchImages();
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  const fetchImages = async () => {
    const snapshot = await getDocs(collection(db, 'heroImages'));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setImages(data.sort((a, b) => a.priority - b.priority));
  };

  const handleEdit = (image) => {
    setEditId(image.id);
    setPriority(image.priority);
    setImageUrl(image.imageUrl);
  };

  const cancelEdit = () => {
    setEditId(null);
    setPriority('');
    setImageUrl('');
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this image?');
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'heroImages', id));
      fetchImages(); // Refresh list
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <CheckAuth>
      <main className="p-8 bg-gray-50 min-h-screen text-gray-800">
        <h1 className="text-3xl font-bold mb-6">
          Hero-Image Manages
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-8 max-w-xl"
        >
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Priority</label>
            <input
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="e.g., 1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className={`${
                editId
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-[#cf5563] hover:bg-[#712F37]'
              } text-white px-5 py-2 rounded`}
            >
              {editId ? 'Update Image' : 'Add Image'}
            </button>

            {editId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        {/* Image Cards */}
        <div className="grid gap-6 grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {images.map(({ id, priority, imageUrl }) => (
            <div key={id} className="bg-white p-4 rounded-lg shadow">
              <Image
                  height={200}
                  width={200}
                src={imageUrl}
                alt={`Hero Priority ${priority}`}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <p className="text-sm text-gray-700 mb-2">
                Priority: {priority}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit({ id, priority, imageUrl })}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded w-full"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)} // ✅ Delete handler
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded w-full"
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

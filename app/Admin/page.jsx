'use client';

import CheckAuth from './Firebase/CheckAuth';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FiCamera,
  FiPackage,
  FiImage,
 FiUsers,
  FiLogOut,
  FiThumbsUp
} from 'react-icons/fi';
import { FaYoutube,FaPhotoVideo } from 'react-icons/fa';
export default function AdminPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/Admin/login');
  };

  return (
    <CheckAuth>
      <main className="p-8 bg-gray-50 min-h-screen text-gray-800">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-700">
            Snapu Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          <Link href="/Admin/ReviewCards" passHref>
            <section className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-2">
                <FiThumbsUp className="text-xl text-blue-500" />
                <h2 className="text-xl font-bold">Review Cards</h2>
              </div>
              <p className="text-sm text-gray-600">
                Manage user reviews and testimonials here.
              </p>
            </section>
          </Link>

          <Link href="/Admin/HeroImages" passHref>
          <section className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-2 mb-2">
              <FiImage className="text-xl text-yellow-500" />
              <h2 className="text-xl font-bold">Hero Images</h2>
            </div>
            <p className="text-sm text-gray-600">
              Upload and manage homepage hero images.
            </p>
          </section>
        </Link>


        <Link href="/Admin/YouTubeVideoManager" passHref>
        <section className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <FaYoutube className="text-2xl text-red-600" />
            <h2 className="text-xl font-bold">YouTube Video Manager</h2>
          </div>
          <p className="text-sm text-gray-600">
            Upload and manage homepage YouTube videos.
          </p>
        </section>
      </Link>
          
          <Link href="/Admin/Gallery" passHref>
        <section className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <FaPhotoVideo   className="text-2xl text-red-600" />
            <h2 className="text-xl font-bold">Gallery Manager</h2>
          </div>
          <p className="text-sm text-gray-600">
            Upload and manage homepage YouTube videos.
          </p>
        </section>
      </Link>

      <Link href="/Admin/ContactManager" passHref>
        <section className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            < FiUsers className="text-2xl text-red-600" /> 
            <h2 className="text-xl font-bold">ContactManager Manager</h2>
          </div>
          <p className="text-sm text-gray-600">
            Upload and manage homepage YouTube videos.
          </p>
        </section>
      </Link>
          <section className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FiPackage className="text-xl text-green-500" />
            <h2 className="text-xl font-bold">Packages</h2>
          </div>
          <p className="text-sm text-gray-600">
            Add, update, or remove service packages.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <FiCamera className="text-xl text-purple-500" />
            <h2 className="text-xl font-bold">Why Choose Us</h2>
          </div>
          <p className="text-sm text-gray-600">
            Edit reasons that make Snapu unique.
          </p>
        </section>
        
        </div>
      </main>
    </CheckAuth>
  );
}

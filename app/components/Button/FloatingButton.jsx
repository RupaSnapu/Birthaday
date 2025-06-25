import Link from 'next/link';

export default function FloatingButton() {
  return (
    <Link href="/">
      <div className="fixed bottom-8 right-8 z-50 cursor-pointer group">
        <div className="w-14 h-14 bg-fuchsia-600 rounded-full flex items-center justify-center shadow-xl hover:bg-fuchsia-700 transition duration-300 group-hover:rotate-12">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
          Back to Home
        </div>
      </div>
    </Link>
  );
}
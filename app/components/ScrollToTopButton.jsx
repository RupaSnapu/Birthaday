'use client';

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="bg-[#247e7e] hover:bg-[#7ac0db] text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0e1238] transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopButton;

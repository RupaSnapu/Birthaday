// // // "use client";

// // // import { useState, useEffect } from 'react';
// // // import { Search, ZoomIn, Heart, Star, Sparkles, Camera, Gift, Play, Pause } from 'lucide-react';

// // // export default function GallerySection() {
// // //   const [activeCategory, setActiveCategory] = useState('all');
// // //   const [selectedImage, setSelectedImage] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [hoveredImage, setHoveredImage] = useState(null);
// // //   const [viewMode, setViewMode] = useState('masonry'); // masonry, carousel, grid
// // //   const [isAutoPlay, setIsAutoPlay] = useState(false);
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => setIsLoading(false), 1200);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   // Auto-carousel effect
// // //   useEffect(() => {
// // //     if (isAutoPlay && viewMode === 'carousel') {
// // //       const interval = setInterval(() => {
// // //         setCurrentSlide(prev => (prev + 1) % filteredPhotos.length);
// // //       }, 3000);
// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [isAutoPlay, viewMode]);

// // //   const categories = [
// // //     { id: 'all', name: 'All Moments', icon: <Sparkles className="w-4 h-4" />, color: 'from-slate-500 to-gray-600', accent: 'slate' },
// // //     { id: 'kids', name: 'Kids Joy', icon: <Star className="w-4 h-4" />, color: 'from-blue-500 to-indigo-600', accent: 'blue' },
// // //     { id: 'teen', name: 'Teen Vibes', icon: <Heart className="w-4 h-4" />, color: 'from-purple-500 to-violet-600', accent: 'purple' },
// // //     { id: 'adult', name: 'Adult Celebrations', icon: <Camera className="w-4 h-4" />, color: 'from-amber-600 to-orange-700', accent: 'amber' },
// // //     { id: 'milestone', name: 'Milestones', icon: <Gift className="w-4 h-4" />, color: 'from-emerald-500 to-teal-600', accent: 'emerald' },
// // //   ];

// // //   const photos = [
// // //     { id: 1, category: 'kids', src: '/img1.png', alt: 'Kids birthday celebration', likes: 234 },
// // //     { id: 2, category: 'kids', src: '/img2.png', alt: 'Children party fun', likes: 189 },
// // //     { id: 3, category: 'kids', src: '/img3.png', alt: 'Kids birthday cake moment', likes: 342 },
// // //     { id: 4, category: 'kids', src: '/img4.png', alt: 'Young birthday celebration', likes: 156 },
// // //     { id: 5, category: 'teen', src: '/pic1.png', alt: 'Teen birthday party', likes: 278 },
// // //     { id: 6, category: 'teen', src: '/pic2.png', alt: 'Teenage celebration vibes', likes: 195 },
// // //     { id: 7, category: 'teen', src: '/pic3.png', alt: 'Teen party memories', likes: 421 },
// // //     { id: 8, category: 'adult', src: '/simg1.png', alt: 'Adult birthday elegance', likes: 312 },
// // //     { id: 9, category: 'adult', src: '/simg2.png', alt: 'Sophisticated celebration', likes: 267 },
// // //     { id: 10, category: 'adult', src: '/simg3.png', alt: 'Adult party moments', likes: 389 },
// // //     { id: 11, category: 'adult', src: '/simg4.png', alt: 'Mature celebration style', likes: 234 },
// // //   ];

// // //   const filteredPhotos = activeCategory === 'all' ? photos : photos.filter(photo => photo.category === activeCategory);

// // //   const openLightbox = (photo) => {
// // //     setSelectedImage(photo);
// // //     document.body.style.overflow = 'hidden';
// // //   };

// // //   const closeLightbox = () => {
// // //     setSelectedImage(null);
// // //     document.body.style.overflow = 'unset';
// // //   };

// // //   if (isLoading) {
// // //     return (
// // //       <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-stone-100 to-gray-200 min-h-screen flex items-center justify-center">
// // //         <div className="text-center">
// // //           <div className="relative mb-8">
// // //             {/* Multiple rotating rings */}
// // //             <div className="w-24 h-24 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin mx-auto"></div>
// // //             <div className="absolute top-2 left-2 w-20 h-20 border-4 border-stone-300 border-b-stone-600 rounded-full animate-spin animate-reverse"></div>
// // //             <div className="absolute top-4 left-4 w-16 h-16 border-4 border-gray-300 border-r-gray-600 rounded-full animate-spin"></div>
// // //             <Sparkles className="w-8 h-8 text-slate-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
// // //           </div>
// // //           <div className="space-y-2">
// // //             <p className="text-slate-700 text-xl font-bold animate-pulse">Creating Magic</p>
// // //             <div className="flex justify-center space-x-1">
// // //               <div className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></div>
// // //               <div className="w-2 h-2 bg-stone-600 rounded-full animate-bounce delay-100"></div>
// // //               <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   const renderMasonryView = () => (
// // //     <div className="columns-2 sm:columns-3 lg:columns-3 xl:columns-4 2xl:columns-5 gap-8 space-y-8">
// // //       {filteredPhotos.map((photo, index) => (
// // //         <div
// // //           key={photo.id}
// // //           className="group relative break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transform transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:rotate-1"
// // //           style={{
// // //             animationDelay: `${index * 150}ms`,
// // //             animation: 'slideInFromBottom 0.8s ease-out forwards'
// // //           }}
// // //           onMouseEnter={() => setHoveredImage(photo.id)}
// // //           onMouseLeave={() => setHoveredImage(null)}
// // //           onClick={() => openLightbox(photo)}
// // //         >
// // //           <div className="relative overflow-hidden">
// // //             <img
// // //               src={photo.src}
// // //               alt={photo.alt}
// // //               className="w-full h-auto transition-all duration-700 group-hover:scale-110"
// // //             />
            
// // //             {/* Animated overlay */}
// // //             <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
// // //             {/* Floating zoom icon */}
// // //             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
// // //               <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl animate-bounce">
// // //                 <ZoomIn className="w-6 h-6 text-slate-700" />
// // //               </div>
// // //             </div>

// // //             {/* Animated like badge */}
// // //             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
// // //               <Heart className="w-4 h-4 text-red-600 group-hover:animate-pulse" />
// // //               <span className="text-slate-700 text-sm font-bold">{photo.likes}</span>
// // //             </div>

// // //             {/* Shimmer effect */}
// // //             {hoveredImage === photo.id && (
// // //               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
// // //             )}
// // //           </div>

// // //           <div className="p-5">
// // //             <p className="text-slate-700 text-sm font-semibold line-clamp-2 group-hover:text-slate-900 transition-colors duration-300">{photo.alt}</p>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );

// // //   const renderCarouselView = () => (
// // //     <div className="relative">
// // //       <div className="overflow-hidden rounded-3xl shadow-2xl">
// // //         <div 
// // //           className="flex transition-transform duration-700 ease-in-out"
// // //           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// // //         >
// // //           {filteredPhotos.map((photo, index) => (
// // //             <div key={photo.id} className="w-full flex-shrink-0 relative">
// // //               <img
// // //                 src={photo.src}
// // //                 alt={photo.alt}
// // //                 className="w-full h-96 sm:h-[500px] lg:h-[600px] object-cover"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
// // //               <div className="absolute bottom-8 left-8 right-8 text-white">
// // //                 <h3 className="text-2xl sm:text-3xl font-bold mb-2">{photo.alt}</h3>
// // //                 <div className="flex items-center gap-2">
// // //                   <Heart className="w-5 h-5 text-red-500" />
// // //                   <span className="text-lg">{photo.likes} likes</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Carousel controls */}
// // //       <div className="flex justify-center items-center gap-4 mt-8">
// // //         <button
// // //           onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : filteredPhotos.length - 1)}
// // //           className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
// // //         >
// // //           <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
// // //           </svg>
// // //         </button>

// // //         <button
// // //           onClick={() => setIsAutoPlay(!isAutoPlay)}
// // //           className="p-3 bg-slate-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-slate-700"
// // //         >
// // //           {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
// // //         </button>

// // //         <button
// // //           onClick={() => setCurrentSlide(prev => (prev + 1) % filteredPhotos.length)}
// // //           className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
// // //         >
// // //           <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
// // //           </svg>
// // //         </button>
// // //       </div>

// // //       {/* Dots indicator */}
// // //       <div className="flex justify-center gap-2 mt-6">
// // //         {filteredPhotos.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => setCurrentSlide(index)}
// // //             className={`w-3 h-3 rounded-full transition-all duration-300 ${
// // //               currentSlide === index ? 'bg-slate-600 scale-125' : 'bg-slate-300 hover:bg-slate-500'
// // //             }`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );

// // //   const renderGridView = () => (
// // //     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
// // //       {filteredPhotos.map((photo, index) => (
// // //         <div
// // //           key={photo.id}
// // //           className="group relative aspect-square overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transform transition-all duration-700 hover:shadow-2xl"
// // //           style={{
// // //             animationDelay: `${index * 100}ms`,
// // //             animation: 'flipIn 0.8s ease-out forwards'
// // //           }}
// // //           onClick={() => openLightbox(photo)}
// // //         >
// // //           <img
// // //             src={photo.src}
// // //             alt={photo.alt}
// // //             className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
// // //           />
          
// // //           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
// // //           <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
// // //             <div className="bg-white/20 backdrop-blur-md rounded-full p-4 mb-4 border border-white/30 animate-pulse">
// // //               <ZoomIn className="w-8 h-8 text-white" />
// // //             </div>
// // //             <p className="text-white text-center font-bold px-4">{photo.alt}</p>
// // //             <div className="flex items-center gap-1 mt-2">
// // //               <Heart className="w-4 h-4 text-red-500 fill-red-500" />
// // //               <span className="text-white font-semibold">{photo.likes}</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );

// // //   return (
// // //     <>
// // //       <section id='Gallery' className="relative py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-stone-100 to-gray-200 overflow-hidden">
// // //         {/* Animated background particles */}
// // //         <div className="absolute inset-0 opacity-20">
// // //           {[...Array(20)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute w-2 h-2 bg-slate-500 rounded-full animate-float"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 5}s`,
// // //                 animationDuration: `${3 + Math.random() * 4}s`
// // //               }}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="relative max-w-8xl mx-auto">
// // //           {/* Animated Header */}
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-slate-300 shadow-lg animate-bounce-slow">
// // //               <Camera className="w-5 h-5 text-slate-600 animate-pulse" />
// // //               <span className="text-slate-700 font-bold">Elegant Gallery</span>
// // //               <Sparkles className="w-5 h-5 text-slate-700 animate-spin-slow" />
// // //             </div>
            
// // //             <h2 className="text-fuchsia-900 text-xl xl:text-3xl  2xl:text-5xl font-black bg-gradient-to-r from-slate-700 via-stone-700 to-gray-800 bg-clip-text mb-6 leading-tight animate-gradient">
// // //               Birthday Memories
// // //             </h2>
            
// // //             <p className="text-xs xl:text-[15px] 2xl:text-2xl  text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
// // //               Every moment tells a story, every smile creates magic, every celebration becomes eternal
// // //             </p>
// // //           </div>

// // //           {/* View Mode Selector */}
// // //           <div className="flex justify-center gap-4 mb-8">
// // //             {[
// // //               { mode: 'masonry', label: 'Masonry', icon: <div className="w-2 h-[1px] mt-[-25px] grid grid-cols-2 gap-0.5"><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm h-6"></div><div className="bg-current rounded-sm"></div></div> },
// // //               { mode: 'carousel', label: 'Carousel', icon: <Play className="w-4 h-4" /> },
// // //               { mode: 'grid', label: 'Grid', icon: <div className="w-4 h-4 grid grid-cols-2 gap-0.5"><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div><div className="bg-current rounded-sm"></div></div> }
// // //             ].map((view) => (
// // //               <button
// // //                 key={view.mode}
// // //                 onClick={() => setViewMode(view.mode)}
// // //                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// // //                   viewMode === view.mode
// // //                     ? 'bg-slate-600 text-white shadow-lg scale-105'
// // //                     : 'bg-white/70 text-slate-700 hover:bg-white/90 hover:scale-105'
// // //                 }`}
// // //               >
// // //                 {view.icon}
// // //                 {view.label}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Enhanced Category Filters */}
// // //           <div className="flex flex-wrap justify-center gap-4 mb-16">
// // //             {categories.map((category, index) => (
// // //               <button
// // //                 key={category.id}
// // //                 onClick={() => setActiveCategory(category.id)}
// // //                 className={`group relative px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 backdrop-blur-sm border shadow-lg overflow-hidden ${
// // //                   activeCategory === category.id
// // //                     ? 'bg-white text-slate-800 border-slate-400 shadow-xl scale-110 rotate-1'
// // //                     : 'bg-white/60 text-slate-700 border-slate-300 hover:bg-white/80 hover:shadow-xl hover:scale-105 hover:rotate-1'
// // //                 }`}
// // //                 style={{
// // //                   animationDelay: `${index * 100}ms`,
// // //                   animation: 'bounceIn 0.6s ease-out forwards'
// // //                 }}
// // //               >
// // //                 <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
// // //                 <div className="relative flex items-center gap-3">
// // //                   <div className="animate-bounce">{category.icon}</div>
// // //                   {category.name}
// // //                   <div className={`w-2 h-2 bg-${category.accent}-600 rounded-full animate-pulse`}></div>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Dynamic Gallery Views */}
// // //           <div className="mb-16">
// // //             {viewMode === 'masonry' && renderMasonryView()}
// // //             {viewMode === 'carousel' && renderCarouselView()}
// // //             {viewMode === 'grid' && renderGridView()}
// // //           </div>

// // //           {/* Animated CTA */}
// // //           <div className="text-center mt-12">
// // //             <button className="group relative px-10 py-5 bg-gradient-to-r from-slate-600 via-stone-600 to-gray-700 text-white text-xl font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-110">
// // //               <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-stone-600 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // //               <div className="relative flex items-center gap-4">
// // //                 <Search className="w-6 h-6 group-hover:animate-bounce" />
// // //                 Explore Complete Gallery
// // //                 <Sparkles className="w-6 h-6 group-hover:animate-spin" />
// // //               </div>
// // //             </button>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* Enhanced Lightbox */}
// // //       {selectedImage && (
// // //         <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeLightbox}>
// // //           <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
// // //             <button
// // //               onClick={closeLightbox}
// // //               className="absolute top-6 right-6 z-10 w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-110"
// // //             >
// // //               x
// // //             </button>
            
// // //             <div className="p-8">
// // //               <img
// // //                 src={selectedImage.src}
// // //                 alt={selectedImage.alt}
// // //                 className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-lg"
// // //               />
              
// // //               <div className="mt-8 text-center animate-fade-in-up">
// // //                 <h3 className="text-slate-800 text-2xl font-bold mb-4">{selectedImage.alt}</h3>
// // //                 <div className="flex items-center justify-center gap-6 text-slate-600">
// // //                   <div className="flex items-center gap-2">
// // //                     <Heart className="w-5 h-5 text-red-600 animate-pulse" />
// // //                     <span className="font-semibold">{selectedImage.likes} likes</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <style jsx>{`
// // //         @keyframes slideInFromBottom {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(50px) scale(0.9);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0) scale(1);
// // //           }
// // //         }

// // //         @keyframes flipIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: rotateY(-90deg) scale(0.8);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: rotateY(0) scale(1);
// // //           }
// // //         }

// // //         @keyframes bounceIn {
// // //           0% {
// // //             opacity: 0;
// // //             transform: scale(0.3) translateY(50px);
// // //           }
// // //           50% {
// // //             opacity: 1;
// // //             transform: scale(1.05) translateY(-10px);
// // //           }
// // //           70% {
// // //             transform: scale(0.9) translateY(0);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: scale(1) translateY(0);
// // //           }
// // //         }

// // //         @keyframes shimmer {
// // //           0% {
// // //             transform: translateX(-100%) skewX(-12deg);
// // //           }
// // //           100% {
// // //             transform: translateX(200%) skewX(-12deg);
// // //           }
// // //         }

// // //         @keyframes float {
// // //           0%, 100% {
// // //             transform: translateY(0px) rotate(0deg);
// // //           }
// // //           50% {
// // //             transform: translateY(-20px) rotate(180deg);
// // //           }
// // //         }

// // //         @keyframes gradient {
// // //           0%, 100% {
// // //             background-position: 0% 50%;
// // //           }
// // //           50% {
// // //             background-position: 100% 50%;
// // //           }
// // //         }

// // //         @keyframes fade-in {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }

// // //         @keyframes fade-in-up {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes scale-in {
// // //           from {
// // //             opacity: 0;
// // //             transform: scale(0.8);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         .animate-shimmer {
// // //           animation: shimmer 1.5s ease-in-out;
// // //         }

// // //         .animate-float {
// // //           animation: float 4s ease-in-out infinite;
// // //         }

// // //         .animate-gradient {
// // //           background-size: 200% 200%;
// // //           animation: gradient 4s ease infinite;
// // //         }

// // //         .animate-bounce-slow {
// // //           animation: bounce 2s infinite;
// // //         }

// // //         .animate-spin-slow {
// // //           animation: spin 3s linear infinite;
// // //         }

// // //         .animate-pulse-glow {
// // //           animation: pulse 2s infinite;
// // //           box-shadow: 0 0 20px rgba(71, 85, 105, 0.3);
// // //         }

// // //         .animate-fade-in {
// // //           animation: fade-in 0.3s ease-out;
// // //         }

// // //         .animate-fade-in-up {
// // //           animation: fade-in-up 0.5s ease-out;
// // //         }

// // //         .animate-scale-in {
// // //           animation: scale-in 0.3s ease-out;
// // //         }

// // //         .animate-reverse {
// // //           animation-direction: reverse;
// // //         }

// // //         .line-clamp-2 {
// // //           display: -webkit-box;
// // //           -webkit-line-clamp: 2;
// // //           -webkit-box-orient: vertical;
// // //           overflow: hidden;
// // //         }

// // //         /* Responsive optimizations */
// // //         @media (min-width: 2560px) {
// // //           .text-5xl { font-size: 4rem; }
// // //           .text-6xl { font-size: 5rem; }
// // //           .text-7xl { font-size: 7rem; }
// // //           .text-lg { font-size: 1.5rem; }
// // //           .text-xl { font-size: 2rem; }
// // //         }

// // //         @media (max-width: 640px) {
// // //           .columns-1 { columns: 1; }
// // //           .gap-8 { gap: 1.5rem; }
// // //           .space-y-8 > * + * { margin-top: 1.5rem; }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }



// 'use client';

// import { useEffect, useState } from 'react';
// import { ZoomIn, Heart, Star, Sparkles, Camera, Gift, Play, Pause } from 'lucide-react';
// import { db } from '../Admin/Firebase/config';
// import { collection, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';

// export default function GallerySection() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [viewMode, setViewMode] = useState('masonry');
//   const [isAutoPlay, setIsAutoPlay] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [photos, setPhotos] = useState([]);
//   const [isGalleryLoading, setIsGalleryLoading] = useState(true);
//   const [hoveredImage, setHoveredImage] = useState(null);
//   const [userLikes, setUserLikes] = useState({});
//   const [lastTap, setLastTap] = useState(0);

//   const categories = [
//     { id: 'all', name: 'All Moments', icon: <Sparkles className="w-4 h-4" /> },
//     { id: 'Kids Joy', name: 'Kids Joy', icon: <Star className="w-4 h-4" /> },
//     { id: 'Teen Vibes', name: 'Teen Vibes', icon: <Heart className="w-4 h-4" /> },
//     { id: 'Adult Celebrations', name: 'Adult Celebrations', icon: <Camera className="w-4 h-4" /> },
//     { id: 'Milestones', name: 'Milestones', icon: <Gift className="w-4 h-4" /> },
//   ];

//   useEffect(() => {
//     async function loadPhotos() {
//       setIsGalleryLoading(true);
//       const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
//       const snap = await getDocs(q);
//       setPhotos(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//       setIsGalleryLoading(false);
//     }
//     loadPhotos();

//     if (typeof window !== 'undefined') {
//       setUserLikes(JSON.parse(localStorage.getItem('userLikes') || '{}'));
//     }
//   }, []);

//   const filteredPhotos = activeCategory === 'all'
//     ? photos
//     : photos.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

//   useEffect(() => {
//     if (viewMode === 'carousel' && isAutoPlay && filteredPhotos.length > 0) {
//       const iv = setInterval(() => setCurrentSlide(prev => (prev + 1) % filteredPhotos.length), 3000);
//       return () => clearInterval(iv);
//     }
//   }, [viewMode, isAutoPlay, filteredPhotos]);

//   const handleDoubleTap = async (photo) => {
//     const now = Date.now();
//     if (now - lastTap < 300) {
//       const liked = !!userLikes[photo.id];
//       const updated = { ...userLikes, [photo.id]: !liked };
//       setUserLikes(updated);
//       localStorage.setItem('userLikes', JSON.stringify(updated));

//       const ref = doc(db, 'galleryImages', photo.id);
//       await updateDoc(ref, { likes: liked ? photo.likes - 1 : (photo.likes || 0) + 1 });

//       setPhotos(ps => ps.map(p =>
//         p.id === photo.id ? { ...p, likes: liked ? p.likes - 1 : (p.likes || 0) + 1 } : p
//       ));
//     }
//     setLastTap(now);
//   };

//   const openLightbox = photo => setSelectedImage(photo);
//   const closeLightbox = () => setSelectedImage(null);

//   const renderImage = (photo, index) => (
//     <div key={photo.id}
//       className="group relative break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer transform transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:rotate-1"
//       style={{
//         animationDelay: `${index * 150}ms`,
//         animation: 'slideInFromBottom 0.8s ease-out forwards'
//       }}
//       onMouseEnter={() => setHoveredImage(photo.id)}
//       onMouseLeave={() => setHoveredImage(null)}
//       onClick={() => openLightbox(photo)}
//       onDoubleClick={() => handleDoubleTap(photo)}
//     >
//       <div className="relative overflow-hidden">
//         <img src={photo.imageUrl} alt={photo.alt} className="w-full h-auto transition-all duration-700 group-hover:scale-110" />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
//           <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl animate-bounce">
//             <ZoomIn className="w-6 h-6 text-slate-700" />
//           </div>
//         </div>
//         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
//           <Heart className="w-4 h-4 text-red-600 group-hover:animate-pulse" />
//           <span className="text-slate-700 text-sm font-bold">{photo.likes || 0}</span>
//         </div>
//         {hoveredImage === photo.id && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer" />}
//       </div>
//       <div className="p-5">
//         <p className="text-slate-700 text-sm font-semibold line-clamp-2 group-hover:text-slate-900 transition-colors duration-300">{photo.alt}</p>
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-100 via-stone-100 to-gray-200">
//       <div className="max-w-7xl mx-auto">
//         {/* View Mode Buttons */}
//         <div className="flex justify-center gap-4 mb-6">
//           {['masonry', 'carousel', 'grid'].map(mode => (
//             <button key={mode} onClick={() => setViewMode(mode)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${viewMode === mode ? 'bg-slate-600 text-white' : 'bg-white shadow'}`}>
//               {mode.charAt(0).toUpperCase() + mode.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map(cat => (
//             <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
//               className={`flex items-center px-5 py-3 rounded-2xl font-semibold transition ${activeCategory === cat.id ? 'bg-indigo-500 text-white' : 'bg-white shadow'}`}>
//               {cat.icon}<span className="ml-2">{cat.name}</span>
//             </button>
//           ))}
//         </div>

//         {/* Gallery Views */}
//         {isGalleryLoading ? (
//           <div className="flex justify-center py-20">
//             <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full" />
//           </div>
//         ) : viewMode === 'masonry' ? (
//           <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
//             {filteredPhotos.map((p, i) => renderImage(p, i))}
//           </div>
//         ) : viewMode === 'carousel' ? (
//           <div>
//             <div className="overflow-hidden rounded-2xl shadow-xl">
//               <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                 {filteredPhotos.map(photo => <div key={photo.id} className="w-full flex-shrink-0 p-2">{renderImage(photo)}</div>)}
//               </div>
//             </div>
//             <div className="mt-6 flex justify-center gap-4">
//               <button onClick={() => setCurrentSlide(s => (s + filteredPhotos.length - 1) % filteredPhotos.length)}>Prev</button>
//               <button onClick={() => setIsAutoPlay(p => !p)}>{isAutoPlay ? <Pause /> : <Play />}</button>
//               <button onClick={() => setCurrentSlide(s => (s + 1) % filteredPhotos.length)}>Next</button>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredPhotos.map(renderImage)}
//           </div>
//         )}

//         {/* Lightbox */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50" onClick={closeLightbox}>
//             <img src={selectedImage.imageUrl} alt={selectedImage.alt} className="max-w-full max-h-full rounded-xl" />
//             <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>×</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import { Heart, Share2, Sparkles, Star, Camera, Gift, Play, Pause } from 'lucide-react';
import { db } from '../Admin/Firebase/config';
import { collection, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';
import Image from 'next/image';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLikes, setUserLikes] = useState({});
  const [lastTap, setLastTap] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('masonry');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'all', name: 'All Moments', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'Kids Joy', name: 'Kids Joy', icon: <Star className="w-4 h-4" /> },
    { id: 'Teen Vibes', name: 'Teen Vibes', icon: <Heart className="w-4 h-4" /> },
    { id: 'Adult Celebrations', name: 'Adult Celebrations', icon: <Camera className="w-4 h-4" /> },
    { id: 'Milestones', name: 'Milestones', icon: <Gift className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const q = query(collection(db, 'galleryImages'), orderBy('priority', 'asc'));
      const snap = await getDocs(q);
      setPhotos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    };

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('userLikes');
      setUserLikes(stored ? JSON.parse(stored) : {});
    }

    fetchPhotos();
  }, []);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (viewMode === 'carousel' && isAutoPlay && filteredPhotos.length) {
      const iv = setInterval(() => setCurrentSlide(c => (c + 1) % filteredPhotos.length), 3000);
      return () => clearInterval(iv);
    }
  }, [viewMode, isAutoPlay, filteredPhotos]);

  const handleDoubleTap = async (photo) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      const liked = !!userLikes[photo.id];
      const updated = { ...userLikes, [photo.id]: !liked };
      setUserLikes(updated);
      localStorage.setItem('userLikes', JSON.stringify(updated));

      const ref = doc(db, 'galleryImages', photo.id);
      await updateDoc(ref, { likes: liked ? photo.likes - 1 : (photo.likes || 0) + 1 });
      setPhotos(p => p.map(x => x.id === photo.id ? { ...x, likes: liked ? x.likes -1 : (x.likes||0)+1 } : x));
    }
    setLastTap(now);
  };

  const sharePhoto = (photo) => {
    const url = `${window.location.origin}/photo/${photo.id}`;
    if (navigator.share) {
      navigator.share({ title: photo.alt, url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied!');
    }
  };

  // Renders a single image with like & share buttons below
  const Card = ({ photo }) => (
    <div
      key={photo.id}
      className="group break-inside-avoid bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition transform hover:scale-105"
      onDoubleClick={() => handleDoubleTap(photo)}
      onClick={() => setSelectedImage(photo)}
    >
      <Image 
      src={photo.imageUrl} 
      alt="SnapU photoGraphy"
      width={500}
      height={300}
      className="w-full h-auto object-cover" />
      <div className="p-4 flex justify-between items-center">
        <button onClick={e => { e.stopPropagation(); handleDoubleTap(photo); }}
          className="flex items-center gap-1">
          <Heart className={`w-5 h-5 ${userLikes[photo.id] ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          <span>{photo.likes || 0}</span>
        </button>
        <button onClick={e => { e.stopPropagation(); sharePhoto(photo); }}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-fuchsia-900 text-xl xl:text-3xl text-center  2xl:text-5xl font-black bg-gradient-to-r from-slate-700 via-stone-700 to-gray-800 bg-clip-text mb-6 leading-tight animate-gradient">
               Birthday Memories
             </h2>
            
             <p className="text-xs xl:text-[15px] 2xl:text-2xl text-center text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
               Every moment tells a story, every smile creates magic, every celebration becomes eternal
             </p>
        <div className="flex justify-center gap-4 mb-8">
          {['masonry','carousel','grid'].map(m => (
            <button key={m} onClick={() => setViewMode(m)}
              className={`px-4 py-2 rounded-full font-semibold ${viewMode===m?'bg-blue-600 text-white':'bg-white shadow'}`}>
              {m.charAt(0).toUpperCase()+m.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full ${
                activeCategory===cat.id?'bg-indigo-600 text-white':'bg-white shadow'
              }`}>
              {cat.icon}<span>{cat.name}</span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full" />
          </div>
        ) : viewMode === 'masonry' ? (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredPhotos.map(photo => <Card key={photo.id} photo={photo} />)}
          </div>
        ) : viewMode === 'carousel' ? (
          <div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentSlide*100}%)` }}>
                {filteredPhotos.map(photo =>
                  <div key={photo.id} className="w-full flex-shrink-0 p-2"><Card photo={photo}/></div>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={() => setCurrentSlide(s => (s+filteredPhotos.length-1)%filteredPhotos.length)}>Prev</button>
              <button onClick={() => setIsAutoPlay(p => !p)}>{isAutoPlay?'Pause':'Play'}</button>
              <button onClick={() => setCurrentSlide(s => (s+1)%filteredPhotos.length)}>Next</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden relative"
                onDoubleClick={() => handleDoubleTap(photo)}
                onClick={() => setSelectedImage(photo)}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={photo.imageUrl}
                    alt="SnapU photoGraphy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center px-4 py-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDoubleTap(photo);
                    }}
                    className="flex items-center gap-1"
                  >
                    <Heart className={`w-5 h-5 ${userLikes[photo.id] ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    <span>{photo.likes || 0}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sharePhoto(photo);
                    }}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}>
            <Image
              src={selectedImage.imageUrl}
              alt="Snapu"
              className="max-w-full max-h-full rounded-lg"
            />
            <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
          </div>
        )}
      </div>
    </section>
  );
}


// const [sessionLikes, setSessionLikes] = useState({});

// const handleLike = (photoId) => {
//   setSessionLikes((prev) => ({
//     ...prev,
//     [photoId]: !prev[photoId],
//   }));
// };

// const getLikes = (photoId) => sessionLikes[photoId] ? 1 : 0;

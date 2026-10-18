import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryPhoto } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Club Floor', 'Strength Zone', 'Cardio', 'Coaching', 'Turf Area'];

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((p) => p.category === selectedCategory);

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#e52e2e] mb-2 font-display">
              CLUB TOUR & FACILITY VISUALS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight font-display">
              Inside Body Fitness Club
            </h2>
            <p className="mt-3 text-slate-300 text-base max-w-2xl leading-relaxed font-sans">
              Take a visual tour through our gym floor, strength racks, cardio zones, and functional fitness training area in Daltonganj.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0c0c0c] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer rounded-none font-display ${
                  selectedCategory === cat
                    ? 'bg-[#e52e2e] text-white shadow-sm font-extrabold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-none overflow-hidden bg-[#0c0c0c] border border-white/10 aspect-[4/3] cursor-pointer hover:border-[#e52e2e]/50 transition-all duration-300 shadow-xl"
            >
              <img
                src={photo.imageSrc}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                <div className="self-end">
                  <span className="p-2 bg-black/75 text-white/80 group-hover:text-[#e52e2e] transition-colors flex items-center justify-center border border-white/10">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#e52e2e] font-display mb-1">
                    {photo.category}
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white font-display tracking-wide">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-sans">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#0a0a0a] border border-white/20 rounded-none overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0c0c]">
              <div>
                <span className="text-xs font-bold uppercase text-[#e52e2e] font-display tracking-wider">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close image modal"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={activePhoto.imageSrc}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                aria-label="Previous photograph"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 hover:bg-[#e52e2e] text-white transition-colors cursor-pointer border border-white/15"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                aria-label="Next photograph"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/80 hover:bg-[#e52e2e] text-white transition-colors cursor-pointer border border-white/15"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#0c0c0c] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
              <p className="font-sans">{activePhoto.description}</p>
              <span className="text-slate-400 shrink-0 uppercase tracking-wider font-semibold font-display">
                Body Fitness Club · Daltonganj
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

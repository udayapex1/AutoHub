import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images = [] }) {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState("next");

  const prev = () => {
    setDirection("prev");
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection("next");
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-xl shadow-2xl mt-7">
        <div className="relative h-96 bg-gray-100">
          {/* Image with slide animation */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              key={idx}
              src={images[idx]}
              alt={`carousel-${idx}`}
              className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                direction === "next"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2.5 rounded-full transition-all duration-300 hover:scale-110 text-white group active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft
            size={24}
            className="transition-transform group-hover:-translate-x-0.5"
          />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2.5 rounded-full transition-all duration-300 hover:scale-110 text-white group active:scale-95"
          aria-label="Next"
        >
          <ChevronRight
            size={24}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium animate-in fade-in">
          {idx + 1} / {images.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-950 transition-all duration-500 ease-out"
          style={{ width: `${((idx + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 justify-center flex-wrap">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > idx ? "next" : "prev");
              setIdx(i);
            }}
            className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 transform ${
              i === idx
                ? "ring-2 ring-gray-900 border-gray-900 scale-105"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            <img
              src={src}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > idx ? "next" : "prev");
              setIdx(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === idx
                ? "w-8 h-2.5 bg-gray-900 scale-110"
                : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-out-right {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px);
          }
        }

        @keyframes slide-out-left {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

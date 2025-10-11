"use client";

import { useEffect, useState } from "react";

export default function ModelViewer360({ src, onClose }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").then(() => setLoaded(true));
  }, []);

  const handleResetCamera = () => {
    const mv = document.querySelector("model-viewer");
    if (mv) mv.cameraOrbit = "0deg 75deg 2.5m";
  };

  const handleToggleAutoRotate = () => {
    const mv = document.querySelector("model-viewer");
    if (mv) mv.autoRotate = !mv.autoRotate;
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[500px] bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-2xl">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10 transition"
        >
          &times;
        </button>
      )}

      {/* Loader spinner */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Model viewer */}
      <model-viewer
        src={src}
        alt="3D car model"
        camera-controls
        auto-rotate
        shadow-intensity="2"
        exposure="1.2"
        environment-image="neutral"
        style={{ width: "100%", height: "100%" }}
        className={`${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></model-viewer>

      {/* 360° Badge */}
      <div className="absolute top-4 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow">
        360° View
      </div>

      {/* Control buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          className="bg-black text-white px-3 py-1 rounded shadow hover:bg-gray-800 text-sm transition"
          onClick={handleToggleAutoRotate}
        >
          Toggle Rotate
        </button>
        <button
          className="bg-black text-white px-3 py-1 rounded shadow hover:bg-gray-800 text-sm transition"
          onClick={handleResetCamera}
        >
          Reset View
        </button>
      </div>
    </div>
  );
}

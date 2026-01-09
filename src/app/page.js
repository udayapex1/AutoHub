"use client";

import { useState } from "react";
import { Info, Download, Share2, Star, Zap, Gauge, Fuel, Cog, ChevronRight } from "lucide-react";
import Carousel from "../components/Carousel";
import ModelViewer360 from "../components/ModelViewer360";
import PriceCalculator from "../components/PriceCalculator";
import CarOverview from "../components/CarOverview";
import EMICalculator from "@/components/EMICalculator";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [show3D, setShow3D] = useState(false);
  const [showEMI, setShowEMI] = useState(false);
  const [hoveredSpec, setHoveredSpec] = useState(null);

  const images = [
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200358/file_k4b4sa.avif",
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200473/file_1_mycwha.avif",
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200493/file_2_xcczuz.avif",
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200621/file_3_kprtqe.avif",
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200707/file_4_jihkzf.avif",
    "https://res.cloudinary.com/dwemivxbp/image/upload/v1760200763/file_5_zsdded.avif",
   
  ];

  const car = {
    model: "Audi A6 45 TFSI L",
    year: 2019,
    mileage: "10,000 km",
    price: "₹69,89,000",
  };

  const modelSrc = "/360/audi_a6_c7_limousine.glb";

  const dashboardSpecs = [
    { label: "Engine", value: "2.0L TFSI Turbo", icon: Cog },
    { label: "Power", value: "245 bhp", icon: Zap },
    { label: "Torque", value: "370 Nm", icon: Gauge },
    { label: "Transmission", value: "7-Speed Automatic", icon: Cog },
    { label: "Fuel Type", value: "Petrol", icon: Fuel },
    { label: "Mileage", value: "12-14 km/l", icon: Gauge },
  ];

  const features = [
    "Premium leather interior",
    "Panoramic sunroof",
    "Advanced climate control",
    "Bang & Olufsen sound system",
    "LED headlights & taillights",
    "Power steering with memory",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Animation */}
          <div
            className="mb-12 animate-in fade-in slide-in-from-top duration-700"
          >
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 animate-in fade-in slide-in-from-left duration-700 delay-100">
                  Premium Luxury Sedan
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 animate-in fade-in slide-in-from-left duration-700 delay-200">
                  {car.model}
                </h1>
                <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-left duration-700 delay-300">
                  {car.year} • {car.mileage}
                </p>
              </div>
              <div className="flex items-center gap-1 animate-in fade-in slide-in-from-right duration-700 delay-200">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-in fade-in duration-700"
                    style={{ animationDelay: `${300 + i * 50}ms` }}
                  >
                    <Star
                      size={20}
                      className={
                        i < 4
                          ? "fill-gray-900 text-gray-900"
                          : "text-gray-300"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-1 w-24 bg-gray-900 rounded-full animate-in scale-x-0 origin-left duration-700 delay-400"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Carousel Card with hover effect */}
              <div
                className="group animate-in fade-in slide-in-from-left duration-700 delay-500"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
                  <div className="relative">
                    <Carousel images={images} />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-gray-900 shadow-lg animate-in fade-in slide-in-from-top duration-500 delay-700">
                      {images.length} Photos
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <button
                      onClick={() => setShow3D(true)}
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn"
                    >
                      <span className="text-xl group-hover/btn:animate-pulse">✦</span>
                      View 360° Interactive Model
                    </button>
                  </div>
                </div>
              </div>

              {/* Specifications Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-left duration-700 delay-600">
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="animate-in fade-in slide-in-from-left duration-700 delay-700">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Performance & Specs
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Technical details and engine specifications
                      </p>
                    </div>
                  </div>

                  {/* Specs Grid with Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {dashboardSpecs.map((spec, index) => {
                      const IconComponent = spec.icon;
                      return (
                        <div
                          key={index}
                          className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer animate-in fade-in duration-500"
                          style={{ animationDelay: `${700 + index * 75}ms` }}
                          onMouseEnter={() => setHoveredSpec(index)}
                          onMouseLeave={() => setHoveredSpec(null)}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-gray-900 rounded-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                              <IconComponent size={16} className="text-white" />
                            </div>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              {spec.label}
                            </p>
                          </div>
                          <p className="text-lg font-bold text-gray-900 transition-all duration-300 transform group-hover:translate-y-[-2px]">
                            {spec.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 border-t border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Premium Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-1 animate-in fade-in duration-500"
                        style={{ animationDelay: `${1100 + index * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"></div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-8 border-t border-gray-100 flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl group/download animate-in fade-in slide-in-from-bottom duration-500 delay-1000">
                    <Download
                      size={20}
                      className="transition-transform group-hover/download:animate-bounce"
                    />
                    Download Specs
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200 group/share animate-in fade-in slide-in-from-bottom duration-500 delay-1000">
                    <Share2
                      size={20}
                      className="transition-transform group-hover/share:rotate-12"
                    />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Summary & Actions */}
            <div className="lg:col-span-4 space-y-6">
              {/* Price Card - Premium */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative animate-in fade-in slide-in-from-right duration-700 delay-500">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-wide opacity-80 mb-2 animate-in fade-in duration-700 delay-600">
                    Asking Price
                  </p>
                  <h2 className="text-4xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
                    {car.price}
                  </h2>
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm animate-in fade-in duration-700 delay-800">
                      ✓ Includes comprehensive warranty
                    </p>
                    <p className="text-gray-300 text-sm animate-in fade-in duration-700 delay-900">
                      ✓ Full service history available
                    </p>
                  </div>
                </div>
              </div>

              {/* Car Overview */}
              <div className="sticky top-24 animate-in fade-in slide-in-from-right duration-700 delay-600">
                <CarOverview car={car} />
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => setShowEMI(true)}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] text-lg group animate-in fade-in slide-in-from-right duration-700 delay-700 flex items-center justify-center gap-2"
              >
                Check EMI & Eligibility
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              {/* Price Calculator */}
              <div className="animate-in fade-in slide-in-from-right duration-700 delay-800">
                <PriceCalculator baseRate={60} />
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-in fade-in slide-in-from-right duration-700 delay-900">
                <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  {[
                    "Verified seller with 500+ reviews",
                    "24/7 customer support",
                    "Hassle-free test drive",
                    "Easy return policy",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/trust cursor-pointer transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mt-0.5 transition-all duration-300 group-hover/trust:scale-110">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 transition-all duration-300 group-hover/trust:text-gray-900 group-hover/trust:font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model Viewer Modal */}
        {show3D && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-t-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <ModelViewer360
                src={modelSrc}
                onClose={() => setShow3D(false)}
              />
            </div>
          </div>
        )}

        {/* EMI Calculator Modal */}
        {showEMI && (
          <div className="animate-in fade-in duration-300">
            <EMICalculator onClose={() => setShowEMI(false)} />
          </div>
        )}
      </main>
    </>
  );
}

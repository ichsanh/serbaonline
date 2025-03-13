import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        src="/serbaonline/img/Hero Banner.png"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>

      {/* Content */}
      <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white max-w-md">
        <h1 className="text-4xl font-bold leading-snug">
          Tingkatkan bisnis Anda dengan manajemen order yang cepat dan otomatis!
        </h1>
        <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;

import React from "react";

const SectionSmartLogistic = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col-reverse md:flex-row items-center">
      {/* Bagian Kiri - Teks */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-lg text-gray-600">
          Tingkatkan Success Rate, kirim paket COD lebih aman dengan...
        </p>
        <h2 className="text-3xl font-bold text-gray-900 my-4">SMART LOGISTIC</h2>
        <p className="text-gray-600 mb-6">
          Solusi terbaik bagi pemilik toko online untuk mengatasi kegagalan pengiriman COD. 
          Dengan fitur Smart Logistic, paket COD Anda sampai dengan lebih lancar dan aman.
        </p>
        <p className="text-gray-600 mb-6">
          Klik tombol di bawah untuk informasi lengkap mengenai fitur Logistics:
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          LOGISTIC INFORMATION
        </button>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div className="md:w-1/2 flex justify-center">
        <img src="/img/img-4.png" alt="Smart Logistic" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default SectionSmartLogistic;

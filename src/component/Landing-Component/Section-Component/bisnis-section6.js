import React from "react";

const IntegrationSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Bagian Kiri - Teks */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
          Dukungan Integrasi <br /> dengan Tools Favorit Anda
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          SerbaOnline dapat dengan mudah dihubungkan ke berbagai tools seperti Facebook, Google, 
          MailChimp, Zenziva, dan Waboxapp. Dengan integrasi ini, Anda bisa mengotomatisasikan pemasaran, 
          memperluas jangkauan pelanggan, dan meningkatkan efisiensi bisnis dalam satu platform.
        </p>
      </div>

      {/* Bagian Kanan - Gambar */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img 
          src="/img/img-5.png" 
          alt="Integrasi dengan Tools Favorit" 
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default IntegrationSection;

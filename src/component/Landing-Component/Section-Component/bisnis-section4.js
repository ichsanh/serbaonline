import React from "react";
import { motion } from "framer-motion";

const SectionSmartLogistic = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col-reverse md:flex-row items-center">
      {/* Bagian Kiri - Teks */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tingkatkan Success Rate, kirim paket COD lebih aman dengan...
        </motion.p>

        <motion.h2
          className="text-3xl font-bold text-gray-900 my-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          SMART LOGISTIC
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Solusi terbaik bagi pemilik toko online untuk mengatasi kegagalan pengiriman COD. 
          Dengan fitur Smart Logistic, paket COD Anda sampai dengan lebih lancar dan aman.
        </motion.p>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Klik tombol di bawah untuk informasi lengkap mengenai fitur Logistics:
        </motion.p>

        <motion.button
          className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          LOGISTIC INFORMATION
        </motion.button>
      </div>

      {/* Bagian Kanan - Gambar */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/serbaonline/img/img-4.png" alt="Smart Logistic" className="w-full max-w-md" />
      </motion.div>
    </div>
  );
};

export default SectionSmartLogistic;

import React from "react";
import { motion } from "framer-motion";

const IntegrationSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Bagian Kiri - Teks */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
          Dukungan Integrasi <br /> dengan Tools Favorit Anda
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          SerbaOnline dapat dengan mudah dihubungkan ke berbagai tools seperti Facebook, Google, 
          MailChimp, Zenziva, dan Waboxapp. Dengan integrasi ini, Anda bisa mengotomatisasikan pemasaran, 
          memperluas jangkauan pelanggan, dan meningkatkan efisiensi bisnis dalam satu platform.
        </p>
      </motion.div>

      {/* Bagian Kanan - Gambar */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img 
          src="/serbaonline/img/img-5.png" 
          alt="Integrasi dengan Tools Favorit" 
          className="w-full max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default IntegrationSection;

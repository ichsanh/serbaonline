import React from "react";
import { motion } from "framer-motion";

const BusinessProcessCard = ({ title, description, image, index }) => {
  return (
    <motion.div
      className="relative z-10 bg-white p-6 rounded-2xl shadow-lg text-center w-64 flex flex-col items-center"
      initial={{ opacity: 0, x: 100 }} // Mulai dari kanan
      whileInView={{ opacity: 1, x: 0 }} // Bergerak ke kiri saat terlihat
      viewport={{ once: true, amount: 0.2 }} // Aktif hanya sekali & muncul saat 20% elemen terlihat
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }} // Animasi bertahap
    >
      <img src={image} alt={title} className="h-32 mb-4" />
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
};

export default BusinessProcessCard;

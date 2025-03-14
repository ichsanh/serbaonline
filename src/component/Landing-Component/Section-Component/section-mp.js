import React from "react";
import { motion } from "framer-motion";

const shippingLogos = [
  "/serbaonline/img/jne.png",
  "/serbaonline/img/jnt.png",
  "/serbaonline/img/sap.png",
  "/serbaonline/img/ninja.png",
  "/serbaonline/img/idex.png",
];

const PaymentShippingSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      {/* Animasi Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Kemudahan transaksi dengan layanan pembayaran dan pengiriman terbaik!
      </motion.h2>
      
      {/* Animasi Logos */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {shippingLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Shipping Logo"
            className="h-12 md:h-16 object-contain"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentShippingSection;

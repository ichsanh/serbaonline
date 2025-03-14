import React from "react";
import { motion } from "framer-motion";
import BusinessProcessCard from "./bisnisprosescard";

const businessProcesses = [
  {
    title: "Menampilkan Produk",
    description: "Landing Page Builder & Store Builder",
    image: "/serbaonline/img/pb1.png",
  },
  {
    title: "Menerima Pesanan",
    description: "Checkout Form",
    image: "/serbaonline/img/pb2.png",
  },
  {
    title: "Mengelola Pesanan",
    description: "Order Management",
    image: "/serbaonline/img/pb3.png",
  },
  {
    title: "Mengirim Pesanan",
    description: "Logistic",
    image: "/serbaonline/img/pb4.png",
  },
];

const BusinessProcessSection = () => {
  return (
    <div className="py-12 text-center relative">
      {/* Animasi Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 50 }} // Mulai dari bawah dengan opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Muncul dan naik ke posisi normal
        viewport={{ once: true, amount: 0.2 }} // Hanya animasi sekali saat 20% bagian terlihat
        transition={{ duration: 0.8, ease: "easeOut" }} // Efek halus
      >
        Seluruh Proses Bisnis Online dengan{" "}
        <span className="text-blue-600">Satu Akun OrderOnline.id</span>
      </motion.h2>

      {/* Garis putus-putus di belakang kartu */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 border-dashed border-2 border-gray-300 z-0"></div>

      <div className="flex justify-center gap-x-[50px] gap-y-[15px] flex-wrap relative z-10">
        {businessProcesses.map((process, index) => (
          <BusinessProcessCard key={index} {...process} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BusinessProcessSection;

import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Variants untuk animasi fade-in dan slide-up
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#1E3A5F] text-white py-16"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">PILIH LANGGANAN YANG TEPAT UNTUK ANDA</h2>
        <p className="text-gray-300 italic">Lebih hemat dengan paket 12 bulan</p>
        <div className="mt-4 flex justify-center">
          <button
            className={`px-4 py-2 rounded-l-lg ${!isYearly ? "bg-white text-black" : "bg-gray-500 text-white"}`}
            onClick={() => setIsYearly(false)}
          >
            Bulanan
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${isYearly ? "bg-white text-black" : "bg-gray-500 text-white"}`}
            onClick={() => setIsYearly(true)}
          >
            Tahunan
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        {[
          {
            name: "PERSONAL",
            price: isYearly ? "1.490rb" : "149rb",
            features: [
              "✅ FREE Updates & Support",
              "✅ 50 Produk",
              "✅ 5.000 Quota Order / Bulan",
              "✅ 5 Team Member",
              "✅ Checkout Page",
              "✅ COD Menggunakan J&T, JNE, SAP, Ninja, & ID Express",
              "❌ Reseller System",
              "❌ Store Builder",
              "❌ Menghilangkan Logo SerbaOnline.id"
            ],
            bg: "bg-[#2C527C]",
          },
          {
            name: "BUSINESS",
            price: isYearly ? "1.490rb" : "149rb",
            features: [
              "✅ FREE Updates & Support",
              "✅ Unlimited Produk",
              "✅ 25.000 Quota Order / Bulan",
              "✅ 25 Team Member",
              "✅ 1000 Reseller",
              "✅ Store Builder",
              "✅ COD Menggunakan J&T, JNE, SAP, Ninja, & ID Express",
              "✅ Menghilangkan Logo SerbaOnline.id"
            ],
            bg: "bg-white text-black",
          },
          {
            name: "ENTERPRISE",
            price: isYearly ? "1.490rb" : "149rb",
            features: [
              "✅ FREE Updates & Support",
              "✅ Unlimited Produk",
              "✅ 200.000 Quota Order / Bulan",
              "✅ 100 Team Member",
              "✅ Unlimited Reseller",
              "✅ Store Builder",
              "✅ COD Menggunakan J&T, JNE, SAP, Ninja, & ID Express",
              "✅ Menghilangkan Logo SerbaOnline.id"
            ],
            bg: "bg-[#2C527C]",
          }
        ].map((plan, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${plan.bg} p-10 rounded-lg w-80 border border-gray-500 transition-all`}
          >
            <h3 className="text-4xl font-bold">{plan.name}</h3>
            <p className="text-2xl mt-6">Rp{plan.price}/Bulan</p>
            <ul className="mt-5 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-orange-500 py-2 rounded-lg text-white">
              DAFTAR SEKARANG
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingSection;

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Apa itu SerbaOnline.id?",
    answer:
      "SerbaOnline.id adalah platform berbasis web yang mempermudah proses penjualan dengan fitur form order, manajemen pesanan, pelanggan, dan tim. Sebagai aplikasi web-based, OrderOnline dapat diakses kapan saja tanpa perlu domain atau hosting tambahan.",
  },
  {
    question: 'Apa maksud dari jumlah "Produk" pada pilihan paket harga?',
    answer:
      'Jumlah "Produk" mengacu pada total produk yang dapat ditambahkan ke OrderOnline.id. Misalnya, paket Personal memungkinkan hingga 50 produk. Namun, setiap produk bisa memiliki berbagai varian seperti warna, ukuran, atau paket.',
  },
  {
    question: 'Apa maksud dari jumlah "Order / Bulan" pada pilihan paket harga?',
    answer:
      "Jumlah \"Order / Bulan\" adalah batas maksimal order yang dapat diterima melalui akun OrderOnline.id setiap bulan. Misalnya, paket Personal memiliki batas 5.000 order per bulan. Jika batas tercapai, form order tidak dapat menerima order baru kecuali Anda meng-upgrade paket.",
  },
  {
    question: 'Apa maksud dari jumlah "Team Member" pada pilihan paket harga?',
    answer:
      "Jumlah \"Team Member\" adalah batas jumlah akun tim yang dapat ditambahkan ke akun OrderOnline.id Anda. Tim ini mencakup Customer Service (CS), Admin, dan Shipper. Misalnya, paket Personal memungkinkan hingga 5 anggota tim.",
  },
  {
    question: "Apakah ada tutorial penggunaan SerbaOnline?",
    answer:
      "Ya, kami menyediakan tutorial lengkap dalam bentuk teks, gambar, dan video. Jika masih ada kendala, Anda juga bisa menghubungi kami untuk mendapatkan bantuan lebih lanjut.",
  },
  {
    question: "Apakah bisnis saya cocok menggunakan SerbaOnline?",
    answer:
      "Jika produk Anda dapat dijual secara online, maka Anda bisa menggunakan OrderOnline. Banyak bisnis telah menggunakan OrderOnline untuk menjual properti, produk fisik, produk digital, jasa, dan lainnya.",
  },
  {
    question: "Saya masih newbie, apakah bisa menggunakan aplikasi SerbaOnline ini?",
    answer:
      "Sangat bisa! Tim kami berpengalaman dalam membuat aplikasi yang mudah dipahami oleh banyak orang.",
  },
  {
    question:
      "Saat ini saya berjualan di marketplace, Facebook & Instagram, apakah tetap bisa menggunakan SerbaOnline?",
    answer:
      "Sangat bisa! Anda dapat menggunakan OrderOnline sebagai alat bantu manajemen order dari marketplace maupun media sosial seperti Facebook & Instagram.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F] mb-10">
          FAQ
        </h2>
        <div className="bg-white">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Pertanyaan */}
              <button
                className="w-full text-left p-4 font-semibold flex items-center gap-3"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg text-[#1E3A5F]">
                  {openIndex === index ? "▲" : "▼"}
                </span>
                {faq.question}
              </button>

              {/* Animasi Expand/Collapse dengan Framer Motion */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 text-gray-700">{faq.answer}</div>
              </motion.div>

              {/* Garis Pembatas */}
              {index < faqs.length - 1 && <hr className="border-gray-300" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

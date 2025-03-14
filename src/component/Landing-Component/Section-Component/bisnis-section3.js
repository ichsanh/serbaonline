import { FaComments, FaGoogle, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const SectionThree = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section-three");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="section-three"
      className="flex flex-col md:flex-row items-center justify-between p-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {/* Konten Kiri */}
      <motion.div className="md:w-1/2 text-left" variants={fadeIn}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bisnis lebih lancar dengan automation!
        </h2>
        <p className="text-gray-600">
          Notifikasi order, follow-up pelanggan, hingga konfirmasi pembayaran
          berjalan otomatis via WhatsApp, SMS, dan Email. A/B testing pun jadi
          lebih praktis!
        </p>

        {/* Grid Ikon dan Teks */}
        <motion.div className="grid grid-cols-2 gap-6 mt-6" variants={fadeIn}>
          {[ 
            { icon: <FaComments />, text: "Message Automation" },
            { icon: <FaGoogle />, text: "Google Contacts" },
            { icon: <FaMoneyCheckAlt />, text: "Payment Processor" },
            { icon: <FaTruck />, text: "Logistic" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={iconVariants}
            >
              <div className="bg-blue-900 p-4 rounded-xl text-white text-2xl">
                {feature.icon}
              </div>
              <p className="mt-2 text-gray-900 font-semibold">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Gambar */}
      <motion.div className="md:w-1/2 flex justify-center mt-8 md:mt-0" variants={fadeIn}>
        <img
          src="/serbaonline/img/img-3.png"
          alt="Automation Illustration"
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default SectionThree;

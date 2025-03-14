import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaCommentDots, FaGoogle, FaCreditCard, FaFlask, FaTruck } from "react-icons/fa";

const SectionAutomation = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center py-12 px-6">
      {/* Animasi Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img 
          src="/serbaonline/img/img-2.png" 
          alt="Automation Illustration" 
          className="max-w-sm lg:max-w-md"
        />
      </motion.div>
      
      {/* Text & Features */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Animasi Title */}
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bisnis lebih lancar dengan automation!
        </motion.h2>

        {/* Animasi Subtext */}
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Notifikasi order, follow-up pelanggan, hingga konfirmasi pembayaran berjalan otomatis via WhatsApp, SMS, dan Email. A/B testing pun jadi lebih praktis!
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Data Features
const features = [
  { icon: FaCommentDots, text: "Message Automation" },
  { icon: FaEnvelopeOpenText, text: "Email Marketing" },
  { icon: FaGoogle, text: "Google Contacts" },
  { icon: FaCreditCard, text: "Payment Processor" },
  { icon: FaFlask, text: "A/B Testing Form" },
  { icon: FaTruck, text: "Logistic" },
];

// Component Feature dengan Animasi
const Feature = ({ icon: Icon, text, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-lg mb-2">
        <Icon size={30} />
      </div>
      <p className="text-gray-700 font-medium">{text}</p>
    </motion.div>
  );
};

export default SectionAutomation;

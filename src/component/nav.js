import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Ikon burger & close

const menuItems = ["Fitur", "Harga", "FB ads whitelist", "Blog", "Help Center"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/serbaonline/img/logo-serbaonline.png" alt="Logo" className="h-6" />
        <span className="font-bold text-lg text-blue-900">serbaonline.id</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-6 text-blue-900">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className="relative"
            whileHover={{ y: -3, opacity: 0.8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      {/* Tombol Login & Daftar (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <motion.button
          className="border border-blue-900 px-4 py-1 rounded-md"
          whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.button>
        <motion.button
          className="bg-blue-900 text-white px-4 py-1 rounded-md"
          whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
          transition={{ duration: 0.2 }}
        >
          Daftar
        </motion.button>
      </div>

      {/* Tombol Burger (Mobile) */}
      <button className="md:hidden text-blue-900 text-2xl" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Mobile Dropdown dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-4 py-6 z-50"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-blue-900"
                whileHover={{ y: -3, opacity: 0.8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {item}
              </motion.a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <motion.button
                className="border border-blue-900 px-4 py-1 rounded-md"
                whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                transition={{ duration: 0.2 }}
              >
                Login
              </motion.button>
              <motion.button
                className="bg-blue-900 text-white px-4 py-1 rounded-md"
                whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
                transition={{ duration: 0.2 }}
              >
                Daftar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

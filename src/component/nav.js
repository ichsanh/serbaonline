import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Ikon burger & close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="${process.env.PUBLIC_URL}/img/logo-serbaonline.png" alt="Logo" className="h-6" />
        <span className="font-bold text-lg text-blue-900">serbaonline.id</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-6 text-blue-900">
        <a href="#" className="hover:text-blue-600">Fitur</a>
        <a href="#" className="hover:text-blue-600">Harga</a>
        <a href="#" className="hover:text-blue-600">FB ads whitelist</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <a href="#" className="hover:text-blue-600">Help Center</a>
      </div>

      {/* Tombol Login & Daftar (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-blue-900 px-4 py-1 rounded-md hover:bg-gray-100">Login</button>
        <button className="bg-blue-900 text-white px-4 py-1 rounded-md hover:bg-blue-700">Daftar</button>
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
            <a href="#" className="text-blue-900 hover:text-blue-600">Fitur</a>
            <a href="#" className="text-blue-900 hover:text-blue-600">Harga</a>
            <a href="#" className="text-blue-900 hover:text-blue-600">FB ads whitelist</a>
            <a href="#" className="text-blue-900 hover:text-blue-600">Blog</a>
            <a href="#" className="text-blue-900 hover:text-blue-600">Help Center</a>
            <div className="flex flex-col space-y-2 mt-4">
              <button className="border border-blue-900 px-4 py-1 rounded-md hover:bg-gray-100">Login</button>
              <button className="bg-blue-900 text-white px-4 py-1 rounded-md hover:bg-blue-700">Daftar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

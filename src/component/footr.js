import React from "react";

const Footer = () => {
  return (
    <>
      {/* Garis Pembatas di bawah section FAQ */}
      <hr className="border-gray-300 my-8" />

      <footer className="bg-white pt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Logo & Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-12 w-full">
              {/* Logo di mobile dibuat center */}
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <img src="/img/logo-serbaonline.png" alt="Logo" className="h-6 mb-2 md:mr-2" />
                <span className="font-bold text-lg text-blue-900 text-center md:text-left">serbaonline.id</span>
              </div>
              {/* Menu Footer */}
              {[
                {
                  title: "Fitur",
                  links: [
                    "Form Order", "Logistics", "Order Management",
                    "Landing Page Builder", "Store Builder",
                    "E-Payment", "Fitur Lainnya"
                  ],
                },
                {
                  title: "Insight Bisnis",
                  links: ["Cara Berjualan", "Blog Terbaru", "Seller Success Story"],
                },
                {
                  title: "Support",
                  links: [
                    "Help Center", "Pertanyaan Umum",
                    "Ketentuan Klaim & Refund Logistics",
                    "Syarat & Ketentuan", "Syarat & Ketentuan Logistics",
                    "Kebijakan Privasi", "Return & Refund Policy", "Service Status"
                  ],
                },
                {
                  title: "serbaonline.id",
                  links: ["Informasi Perusahaan", "Hubungi Kami", "Daftar Affiliate"],
                },
                {
                  title: "Media Sosial",
                  links: ["Facebook", "Instagram", "Youtube", "LinkedIn", "Tiktok"],
                }
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="font-bold">{section.title}</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    {section.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Garis Pembatas di atas copyright */}
        <hr className="mt-8 border-gray-300" />

        {/* Copyright Section */}
        <div className="bg-gray-200 py-3">
          <div className="text-center text-sm text-gray-500">
            © 2025, SerbaOnline.id - PT. Visinet Digital Nusantara
          </div>
        </div>

        {/* Garis Pembatas di bawah copyright */}
        <hr className="border-gray-300" />
      </footer>
    </>
  );
};

export default Footer;

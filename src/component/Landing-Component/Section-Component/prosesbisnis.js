import React from "react";

const businessProcesses = [
  {
    title: "Menampilkan Produk",
    description: "Landing Page Builder & Store Builder",
    image: "/img/pb1.png",
  },
  {
    title: "Menerima Pesanan",
    description: "Checkout Form",
    image: "/img/pb2.png",
  },
  {
    title: "Mengelola Pesanan",
    description: "Order Management",
    image: "/img/pb3.png",
  },
  {
    title: "Mengirim Pesanan",
    description: "Logistic",
    image: "/img/pb4.png",
  },
];

const BusinessProcessCard = ({ title, description, image }) => {
  return (
    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg text-center w-64 flex flex-col items-center">
      <img src={image} alt={title} className="h-32 mb-4" />
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

const BusinessProcessSection = () => {
  return (
    <div className="py-12 text-center relative">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        Seluruh Proses Bisnis Online dengan <span className="text-blue-600">Satu Akun OrderOnline.id</span>
      </h2>
      
      {/* Garis putus-putus di belakang kartu */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-0.5 border-dashed border-2 border-gray-300 z-0"></div>
      
      <div className="flex justify-center gap-x-[50px] flex-wrap relative z-10">
        {businessProcesses.map((process, index) => (
          <BusinessProcessCard key={index} {...process} />
        ))}
      </div>
    </div>
  );
};

export default BusinessProcessSection;
import { FaFunnelDollar, FaFileInvoice, FaUsersCog, FaBoxes, FaCalculator, FaClipboardList } from "react-icons/fa";

const features = [
  { icon: <FaFunnelDollar size={40} />, title: "Funnel Builder" },
  { icon: <FaFileInvoice size={40} />, title: "Order Form Builder" },
  { icon: <FaUsersCog size={40} />, title: "Team & Order Management" },
  { icon: <FaBoxes size={40} />, title: "Inventory Management" },
  { icon: <FaCalculator size={40} />, title: "Expense" },
  { icon: <FaClipboardList size={40} />, title: "Smart Reporting" },
];

export default function BusinessSection() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Bangun bisnis online tanpa ribet!
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Atur operasional bisnis sesuai kebutuhan Anda—mulai dari pembagian tugas tim, SOP, hingga pengelolaan pesanan dan laporan bisnis.
        </p>
        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-900 text-white p-3 md:p-4 rounded-lg">{feature.icon}</div>
              <p className="mt-2 text-gray-800 text-sm md:text-base font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src="/img/img-1.png" alt="Business Illustration" className="w-3/4 sm:w-full max-w-md" />
      </div>
    </div>
  );
}
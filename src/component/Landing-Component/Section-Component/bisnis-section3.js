import { FaComments, FaGoogle, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";

const SectionThree = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Konten Kiri */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bisnis lebih lancar dengan automation!
        </h2>
        <p className="text-gray-600">
          Notifikasi order, follow-up pelanggan, hingga konfirmasi pembayaran
          berjalan otomatis via WhatsApp, SMS, dan Email. A/B testing pun jadi
          lebih praktis!
        </p>

        {/* Grid Ikon dan Teks */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-900 p-4 rounded-xl">
              <FaComments className="text-white text-2xl" />
            </div>
            <p className="mt-2 text-gray-900 font-semibold">Message Automation</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-900 p-4 rounded-xl">
              <FaGoogle className="text-white text-2xl" />
            </div>
            <p className="mt-2 text-gray-900 font-semibold">Google Contacts</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-900 p-4 rounded-xl">
              <FaMoneyCheckAlt className="text-white text-2xl" />
            </div>
            <p className="mt-2 text-gray-900 font-semibold">Payment Processor</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-900 p-4 rounded-xl">
              <FaTruck className="text-white text-2xl" />
            </div>
            <p className="mt-2 text-gray-900 font-semibold">Logistic</p>
          </div>
        </div>
      </div>

      {/* Gambar */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/img/img-3.png"
          alt="Automation Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default SectionThree;

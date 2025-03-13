import React from "react";

const banks = [
  { src: "/serbaonline/img/bca.png", alt: "BCA" },
  { src: "/serbaonline/img/bni.png", alt: "BNI" },
  { src: "/serbaonline/img/mandiri.png", alt: "Mandiri" },
  { src: "/serbaonline/img/permatabank.png", alt: "Permata Bank" },
];

const eWallets = [
  { src: "/serbaonline/img/ovo.png", alt: "OVO" },
  { src: "/serbaonline/img/dana.png", alt: "DANA" },
  { src: "/serbaonline/img/gopay.png", alt: "GoPay" },
  { src: "/serbaonline/img/shopeepay.png", alt: "ShopeePay" },
  { src: "/serbaonline/img/alfamart.png", alt: "Alfamart" },
];

const PaymentMethodSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12 text-center">
      {/* Judul */}
      <h2 className="text-lg sm:text-3xl font-bold text-gray-900 mb-6">
        Mendukung Berbagai Metode Pembayaran Instan
      </h2>

      {/* Baris 1: Bank */}
      <div className="flex justify-center items-center flex-wrap gap-2 mb-2">
        {banks.map((bank, index) => (
          <img key={index} src={bank.src} alt={bank.alt} className="h-7 sm:h-8 md:h-9 max-w-[180px]" />
        ))}
      </div>

      {/* Baris 2: E-Wallets */}
      <div className="flex justify-center items-center flex-wrap gap-2">
        {eWallets.map((wallet, index) => (
          <img key={index} src={wallet.src} alt={wallet.alt} className="h-7 sm:h-8 md:h-9 max-w-[180px]" />
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSection;

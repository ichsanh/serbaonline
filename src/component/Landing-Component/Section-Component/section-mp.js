import React from "react";

const shippingLogos = [
  "/serbaonline/img/jne.png",
  "/serbaonline/img/jnt.png",
  "/serbaonline/img/sap.png",
  "/serbaonline/img/ninja.png",
  "/serbaonline/img/idex.png",
];

const PaymentShippingSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        Kemudahan transaksi dengan layanan pembayaran dan pengiriman terbaik!
      </h2>
      
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {shippingLogos.map((logo, index) => (
          <img key={index} src={logo} alt="Shipping Logo" className="h-12 md:h-16 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default PaymentShippingSection;

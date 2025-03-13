import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "RAFI ANANDA",
    role: "Entrepreneur & Digital Marketer",
    image: "/img/rafi.png",
    text: "Ter solusi yang gue butuhin! Gak perlu ribet setting atau beli domain, tapi bisa langsung jualan dengan pemesanan yang praktis...",
  },
  {
    name: "DEVA RAMADHAN",
    role: "Founder & CEO at FastGrow Digital",
    image: "/img/deva.png",
    text: "setelah stuck cukup lama, bisnis gue akhirnya naik lagi setelah pakai platform ini. serius bantu banget buat ngeboost sales!",
  },
  {
    name: "NADIA PUTRI",
    role: "Digital Marketing Specialist",
    image: "/img/nadia.png",
    text: "Luar biasa! Platform ini bikin funneling jadi super gampang. Fitur Split Test form order-nya keren banget!",
  },
  {
    name: "NADIA PUTRI",
    role: "Digital Marketing Specialist",
    image: "/img/nadia.png",
    text: "Luar biasa! Platform ini bikin funneling jadi super gampang. Fitur Split Test form order-nya keren banget!",
  },
  {
    name: "NADIA PUTRI",
    role: "Digital Marketing Specialist",
    image: "/img/nadia.png",
    text: "Luar biasa! Platform ini bikin funneling jadi super gampang. Fitur Split Test form order-nya keren banget!",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-5xl mx-auto text-center py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        SERBAONLINE.ID TERBUKTI HANDAL & POWERFUL!
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border solid rounded-2xl p-6 flex flex-col items-center text-center max-w-sm mx-auto min-h-[250px]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
              <p className="text-gray-700 text-sm">"{testimonial.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;

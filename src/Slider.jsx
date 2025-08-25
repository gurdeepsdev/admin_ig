import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PaymentSlider() {
  const payments = [
    {
      name: "Google Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    },
    {
      name: "PhonePe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/PhonePe_Logo.svg",
    },
    {
      name: "Paytm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png",
    },
    {
      name: "Amazon Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Amazon_Pay_logo.svg",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-6">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Our Payment Partners
      </h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 },  // mobile
          640: { slidesPerView: 3 }, // tablet
          1024: { slidesPerView: 4 }, // desktop
        }}
      >
        {payments.map((p, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <img
              src={p.logo}
              alt={p.name}
              className="h-16 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

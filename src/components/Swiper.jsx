import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function Abc() {

  const testimonials = [
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-1.jpg",
      bgColor: "bg-green-100"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-2.jpg",
      bgColor: "bg-green-500"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-3.jpg",
      bgColor: "bg-green-100"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-4.jpg",
      bgColor: "bg-green-100"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-1.jpg",
      bgColor: "bg-green-100"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-2.jpg",
      bgColor: "bg-green-100"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      name: "Client Name",
      profession: "Profession",
      image: "/testimonial-3.jpg",
      bgColor: "bg-green-100"
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-[40px]">Our Clients Say!!!</h1>
      </div>
      <div className=" bg-gray-50 my-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop ={true}
        autoplay ={
          { delay :100,
            disableOnInteraction: false
          }
        }
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={`p-6 rounded-lg w-[280px] my-5`}>
              <i className="fas fa-quote-left text-3xl text-green-700 mb-4"></i>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt="Client Image" className="w=[132px] h-[132px] rounded-full mr-4" />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.profession}</p>
                </div>
              </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}

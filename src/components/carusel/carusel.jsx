import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import "swiper/css";
// import "./carusel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {HotelCard} from "@/components";

const Carusel = ({ content }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Autoplay, Navigation]}
        navigation={{
          nextEl: ".my-navigation-next",
          prevEl: ".my-navigation-prev",
        }}
        pagination={{
          clickable: true,
          el: ".my-pagination",
        }}
        breakpoints={{
          "768px": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "1024px": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "1200px": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        className="mySwiper section-carusel"
      >
        {content?.map((card, id) => (
          <SwiperSlide key={id}>
            <HotelCard
            indexForAos={id}
              img={card?.img}
              key={card?.id}
              id={card?.id}
              cardTitle={card?.title}
              descriptions={card?.information}
              href={card?.slug}
              price={card?.price}
              time={card?.time}
            />
          </SwiperSlide>
        ))}
        <div data-aos='fade-up' className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
          <div className="cursor-pointer text-[#8F8170] my-navigation my-navigation-prev ">
            <GrPrevious className="text-2xl" />
          </div>
          <div className="inline-flex items-center gap-x-4 my-pagination pagintaion"></div>

          <div className="cursor-pointer text-[#8F8170] my-navigation my-navigation-next ">
            <GrNext className="text-2xl" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carusel;

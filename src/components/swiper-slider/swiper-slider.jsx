import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HotelCard, ImgUI, NewsCard, ServiceCard } from "@/components";



const SwiperSlider = ({ hotelCardData, newsCard, services, xlSlidesPerView }) => {



  return (
    <div   className="card-ui relative">
      {(hotelCardData || newsCard || services ) &&
        <Swiper
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swipper-button-next",
            prevEl: ".swipper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: xlSlidesPerView ? xlSlidesPerView : 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
            el: ".my-pagination",
          }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full mySwiper h-full flex items-center justify-center overflow-auto"
        >
          {hotelCardData &&
            hotelCardData?.map((card) => (
              <SwiperSlide className={"h-full"} key={card?.id}>
                <HotelCard
                  img={card?.img}
                  key={card.id}
                  id={card.id}
                  cardTitle={card?.title}
                  descriptions={card?.information}
                  href={card?.slug}
                  price={card?.price}
                  time={card?.time}
                />
              </SwiperSlide>
            ))}
          {newsCard &&
            newsCard?.map((card) => (
              <SwiperSlide className={"h-full"} key={card?.id}>
                <NewsCard
                  img={card?.img}
                  date={card?.date}
                  decr={card?.decr}
                  href={card?.href}
                />
              </SwiperSlide>
            ))}
          {/*{productsArr?.map(product => (*/}
          {/*    product?.id && <SwiperSlide className={'h-full '} key={product?.id}>*/}

          {/*    </SwiperSlide>*/}
          {/*))}*/}
          {services && 
          services?.map((item , index) => (
            <SwiperSlide className="h-full" key={item.id}>
              <ServiceCard indexForAos={index}  key={item.title} title={item.title} href={item.href} decsr={item.decsr} src={item.src}/>
            </SwiperSlide>
          ))
          }

          <div className="relative flex items-center justify-center py-4 mt-5 md:mt-10 gap-x-5">
            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-prev ">
              <GrPrevious className="text-2xl" />
            </div>
            <div className="inline-flex items-center gap-x-4 my-pagination pagintaion-slider"></div>

            <div className="cursor-pointer text-[#8F8170] p-2  swipper-button-next ">
              <GrNext className="text-2xl" />
            </div>
          </div>
        </Swiper>
      }
    </div>
  );
};

export default SwiperSlider;

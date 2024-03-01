import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImgUI } from '..'
import { GrNext, GrPrevious } from 'react-icons/gr'
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useCallback, useEffect, useRef, useState } from "react";

const GallerySlider = ({gallery}) => {
  //   const [openGallery, setOpenGallery] = useState(false)
  //   const lightGalleryRef = useRef(null)
  //   const containerRef = useRef(null)
  //   const [galleryContainer, setGalleryContainer] = useState(null)
  //   useEffect(() => {
  //     if (containerRef.current) {
  //         setGalleryContainer(containerRef.current);
  //     }
  // }, []);

  // const onInit = useCallback((detail) => {
  //   if (detail && detail.instance) {
  //     lightGalleryRef.current = detail.instance;
  //     console.log("lightGallery has been initialized");
  //     setOpenGallery(true);
  //   } else {
  //     console.error("Error: Detail object or instance property is undefined.");
  //   }
  // }, [setOpenGallery]);

  // const handleGalleryClick = () => {
  //   if (openGallery) {
  //     lightGalleryRef.current && lightGalleryRef.current.openGallery();
  //   }
  // };
  return (
    <div   className=" relative">
       {/* <div ref={containerRef}>
        
        </div>
        <LightGallery
            container={galleryContainer}
            onInit={onInit}
            plugins={[lgZoom, lgThumbnail]}
            closable={false}
            showMaximizeIcon={true}
            slideDelay={400}
            // thumbWidth={130}
            // thumbHeight={'100px'}
            // thumbMargin={6}
            appendSubHtmlTo={'.lg-item'}
            dynamic={true}
            dynamicEl={gallery}
            hash={false}
            elementClassNames={'inline-gallery-container'}
          />       */}
      {gallery && (
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
                  slidesPerView: 3,
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
              
                {gallery?.map((image, index) => (
                  <SwiperSlide className={"h-full"} key={image?.id}>
                    <div
                      data-aos='fade-up' data-aos-delay={`${index}00`}
                        // onClick={() => handleGalleryClick(true)}
                      className={"w-full h-[200px] md:h-[400px] block relative overflow-hidden card-shadow duration-300"}
                    >
                      <ImgUI
                        src={image?.src}
                        alt={"gallery"}
                        objectFit={"object-cover"}
                      />
                    </div>
                  </SwiperSlide>
                ))}
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
          )}
    </div>

  )
}

export default GallerySlider
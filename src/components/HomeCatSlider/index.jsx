import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = (props) => {
  return (
    <div className="homeCatSlider select-none py-8 ">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 8 },
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="homeSliderCat"
        >

          {

            props?.data?.map((cat, index) => {
              return (
                <SwiperSlide>
                  <Link to={`/products?catId=${cat._id}`} key={index}>
                    <div className="item bg-white items-center justify-center flex flex-col py-8 px-3 rounded-md">
                      <img src={cat?.images} alt="" className='w-[60px] transition-all' />
                      <h3 className='text-[15px] font-[500] mt-3'>{cat?.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider

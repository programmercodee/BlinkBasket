// import React from 'react'
// import { useRef, useState } from 'react';
// Import Swiper React components
import '../../App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-4 select-none">
        <div className="container">
          <Swiper spaceBetween={20}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation,Autoplay]}
            className="sliderHome">
            
            <SwiperSlide>
            <Link to='/'>
            <div className="item rounded-[20px] overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="" className='w-full' />
            </div>
            </Link>
            </SwiperSlide>
            
            <SwiperSlide>
            <Link to='/'>
            <div className="item rounded-[20px] overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="" className='w-full' />
            </div>
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to='/'>
            <div className="item rounded-[20px] overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" alt="" className='w-full' />
            </div>
            </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HomeSlider;

import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
  return (
    <div className='productsSlider'>
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 40000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="homeSliderCat"
      >
        {
          props?.data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductItem item={item} />
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </div>
  )
}

export default ProductsSlider

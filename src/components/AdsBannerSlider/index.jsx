import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className='py-4 productsSlider'> 
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'} link={'/'}/>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default AdsBannerSlider

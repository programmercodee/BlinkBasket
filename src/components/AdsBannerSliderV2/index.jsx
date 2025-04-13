import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import BannerBoxV2 from '../bannerBoxV2';

const AdsBannerSliderV2 = (props) => {
  return (
    <div className='py-4 productsSlider'> 
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
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
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left"  link={'/'}/>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2

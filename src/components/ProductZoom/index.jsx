import React, { useRef, useState } from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const ProductZoom = (props) => {

  const [slideIndex, SetSlideIndex] = useState(0)
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    SetSlideIndex(index)
    zoomSliderBig.current.swiper.slideTo(index)
    zoomSliderSml.current.swiper.slideTo(index)
  }

  return (
    <>
      <div className="flex gap-3 select-none">
        <div className="slider w-[15%] ">
          <Swiper
            ref={zoomSliderSml}
            slidesPerView={4}
            spaceBetween={10}
            direction={'vertical'}
            navigation={true}

            modules={[Navigation]}
            className="zoomProductSliderThubs h-[500px] overflow-hidden"
          >{
              props.images?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={`item rounded-md overflow-hidden cursor-pointer group  ${slideIndex === index ? 'opacity-1' : 'opacity-30'}`} onClick={() => { goto(index) }}>
                      <img src={item} alt="" className='group-hover:scale-105 transition-all w-full' />
                    </div>
                  </SwiperSlide>
                )
              })
            }



          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">

          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}

          >

            {
              props.images?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <InnerImageZoom src={item} zoomScale={1} zoomType='hover' />
                  </SwiperSlide>
                )
              })}


          </Swiper>

        </div>
      </div>

    </>
  )
}

export default ProductZoom

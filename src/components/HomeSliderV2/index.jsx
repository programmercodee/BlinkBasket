import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination ,Autoplay} from 'swiper/modules';

import Button from '@mui/material/Button';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';


const HomeSliderV2 = () => {

    const context = useContext(MyContext)

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="https://res.cloudinary.com/defazdfkp/image/upload/v1742027733/v2-2_nuzyxw.jpg" />

            <div className="info flex items-center flex-col absolute top-0 right-[0px]  transition-all duration-500 h-[100%] z-50 p-8 justify-center w-[50%] ]">
              <h4 className='text-[18px] font-[500] w-full mb-5 -top-[500px] relative duration-700'><span className='text-[#ff5252]'>Big</span> Saving Days Sale</h4>
              <h2 className='text-[40px] font-[600] w-full mb-2  left-[500px] relative duration-300'>Want to stand out <br /> from the crowd?</h2>
              <h3 className='text-[18px] font-[500] w-full mb-3  left-[500px] relative duration-700'>Starting At Only <span className='text-[30px] text-[#ff5252] font-[700]'>₹599.00</span></h3>

              <div className="w-full btn_ relative -bottom-[500px] duration-700">
              <Link to={`/products?subCatId=${context?.catData[0]?.children[1]?._id}`}>
                <Button className='btn-org '>SHOP NOW</Button>
               </Link>
              </div>

            </div>
            {/* {
              console.log(context?.catData[0]?.
                children[1]?._id)
            } */}

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item w-full rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/defazdfkp/image/upload/v1741982988/v2-1_veuwqn.jpg" />

            <div className="info flex items-center flex-col absolute top-0 right-[0px] transition-all duration-500 h-[100%] z-50 p-8 justify-center w-[50%] ]">
              <h4 className='text-[18px] font-[500] w-full mb-5 -top-[500px] relative duration-700'><span className='text-[#ff5252]'>Big</span> Saving Days Sale</h4>
              <h2 className='text-[40px] font-[600] w-full mb-2  left-[900px] relative duration-300'><span className='text-[#ff5252]'>Upgrade</span> your world <span className='text-[#38aa49]'>with</span>  this new phone</h2>
              <h3 className='text-[18px] font-[500] w-full mb-3  left-[500px] relative duration-700'>Starting At Only <span className='text-[30px] text-[#ff5252] font-[700]'>₹15,599/-</span></h3>

              <div className="w-full btn_ relative -bottom-[500px] duration-700">
              <Link to={`/products?subCatId=${context?.catData[1]?.children[0]?._id}`}>
                <Button className='btn-org '>SHOP NOW</Button>
                </Link>
              </div>

            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSliderV2

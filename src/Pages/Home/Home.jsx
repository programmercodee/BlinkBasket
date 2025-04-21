// import React, { useContext, useEffect, useState } from 'react';
// import HomeSlider from '../../components/HomeSlider'
// import HomeSliderV2 from '../../components/HomeSliderV2'
// import HomeCatSlider from '../../components/HomeCatSlider'
// // import { FaShippingFast } from "react-icons/fa";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import AdsBannerSlider from "../../components/AdsBannerSlider";
// import ProductsSlider from '../../components/ProductsSlider';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navigation, Autoplay } from 'swiper/modules';
// import BlogItem from '../../components/BlogItem';
// import BannerBoxV2 from '../../components/bannerBoxV2';
// import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';
// import { MyContext } from '../../App';
// import { fetchDataFromApi } from '../../utils/api';
// import { data } from 'react-router-dom';


// const Home = () => {

//   const context = useContext(MyContext)
//   const [popularProductData, setPopularProductData] = useState([])
//   const [productsData, setAllProductsData] =useState([])
//   const [featuredProductsData, setFeaturedProductsData] =useState([])

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     console.log(event.target.value)
//     setValue(newValue);
//   };

//   useEffect(() => {

//     fetchDataFromApi(`/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`).then((res) => {
//       setPopularProductData(res?.products)
//     })

//   }, [context?.catData])

//   useEffect(() => {

//     fetchDataFromApi(`/api/product/getAllProducts`).then((res) => {
//       setAllProductsData(res?.products)
//     })

//     fetchDataFromApi(`/api/product/getAllFeaturedProducts`).then((res) => {
//       setFeaturedProductsData(res?.products)
//     })

//     window.scrollTo(0,0)

//   }, [])


//   const filterByCatTd = (id) => {
//     fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
//       setPopularProductData(res?.products)
//     })
//   }


//   return (
//     <>
     


//       <section className='py-5'>
//         <div className="container flex items-center gap-5">
//           <div className="part1 w-[70%]">
//             <HomeSliderV2 />
//           </div>

//           <div className="part2 w-[30%] flex items-center gap-3 flex-col">
//             <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left" />
//             <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg'} info="right" />
//           </div>

//         </div>
//       </section>

//       {
//         context?.catData?.length !== 0 && <HomeCatSlider data={context?.catData} />
//       }




//       <section className="bg-white py-8">
//         <div className="container">
//           <div className="flex justify-between items-center">
//             <div className="leftSec">
//               <h2 className="uppercase font-[600] text-[20px]">Popular Products</h2>
//               <p className='uppercase font-[400] text-[12px]'>Do not miss the current offers until the end of March.</p>
//             </div>

//             <div className="rightSec w-[60%]">

//               {
//                 context?.catData?.length !== 0 &&
//                 <Tabs
//                   value={value}
//                   onChange={handleChange}
//                   variant="scrollable"
//                   scrollButtons="auto"
//                   aria-label="scrollable auto tabs example"
//                 >

//                   {
//                     context?.catData?.map((cat, index) => {
//                       return (
//                         <Tab label={cat?.name} key={index} onClick={() => { filterByCatTd(cat?._id) }} />
//                       )
//                     })
//                   }


//                 </Tabs>
//               }


//             </div>
//           </div>

//           {
//             popularProductData?.length !== 0 && <ProductsSlider items={6} data={popularProductData} />
//           }

//         </div>
//       </section>


//       <section className='bg-white py-8 '>
//         <div className="container">
//           <div className="freeShipping border-2 border-[#ff5656] p-5 w-full flex justify-between items-center rounded-md py-4 mb-7">
//             <div className="col1 flex items-center gap-4 uppercase">
//               <LiaShippingFastSolid className='text-[50px]' />
//               <span className='text-[20px] font-[600]'>Free Shipping </span>
//             </div>

//             <p className='text-[30px] font-[100] text-[#d9d9d9]'>|</p>

//             <div className="col2 ">
//               <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over ₹999</p>
//             </div>

//             <p className='text-[30px] font-[100] text-[#d9d9d9]'>|</p>

//             <div className="col3 uppercase">
//               <p className='mb-0 font-[600] text-[25px]'>- Only ₹999*</p>
//             </div>
//           </div>

//           <AdsBannerSliderV2 items={4} />

//         </div>
//       </section>

//       <HomeSlider />

//       {/* Latest Products */}
//       <section className='py-6 bg-white'>
//         <div className="container">
//           <h2 className="uppercase font-[600] text-[20px] pb-2">Latest Products</h2>
//           {
//             productsData?.length !== 0 &&  <ProductsSlider items={6} data={productsData}/>
//           }
         

//           <AdsBannerSlider items={3} />
//         </div>
//       </section>


//       {/* Featured Products */}
//       <section className='py-9 pt-0 bg-white'>
//         <div className="container">
//           <h2 className="uppercase font-[600] text-[20px] pb-4">Featured Products</h2>
          

//           {
//             featuredProductsData?.length !== 0 &&  <ProductsSlider items={6} data={featuredProductsData}/>
//           }

//           {/* <ProductsSlider items={6} /> */}
//         </div>
//       </section>


//       <section className='py-6 pt-0 bg-white'>
//         <div className="container py-3">
//           <h2 className="uppercase font-[600] text-[20px] pb-4">From The Blog</h2>
//           <Swiper
//             slidesPerView={4}
//             spaceBetween={10}
//             navigation={true}
//             modules={[Navigation, Autoplay]}
//             className="blogSlider"
//           >
//             <SwiperSlide>
//               <BlogItem />
//             </SwiperSlide>
//             <SwiperSlide>
//               <BlogItem />
//             </SwiperSlide>
//             <SwiperSlide>
//               <BlogItem />
//             </SwiperSlide>
//             <SwiperSlide>
//               <BlogItem />
//             </SwiperSlide>
//             <SwiperSlide>
//               <BlogItem />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>


//     </>
//   )
// }

// export default Home


import React, { useContext, useEffect, useState } from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeSliderV2 from '../../components/HomeSliderV2';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AdsBannerSlider from "../../components/AdsBannerSlider";
import ProductsSlider from '../../components/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';
import { MyContext } from '../../App';
import { fetchDataFromApi } from '../../utils/api';
import BannerBoxV2 from '../../components/BannerBoxV2';



const Home = () => {
  const context = useContext(MyContext);
  const [popularProductData, setPopularProductData] = useState([]);
  const [productsData, setAllProductsData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`).then((res) => {
      setPopularProductData(res?.products);
    });
  }, [context?.catData]);

  useEffect(() => {
    fetchDataFromApi(`/api/product/getAllProducts`).then((res) => {
      setAllProductsData(res?.products);
    });
    fetchDataFromApi(`/api/product/getAllFeaturedProducts`).then((res) => {
      setFeaturedProductsData(res?.products);
    });
    window.scrollTo(0, 0);
  }, []);

  const filterByCatTd = (id) => {
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
      setPopularProductData(res?.products);
    });
  };

  return (
    <>
      <section className='py-5'>
        <div className="container flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-[70%]">
            <HomeSliderV2 />
          </div>

          <div className="w-full lg:w-[30%] flex flex-col gap-3">
            <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'} info="left" />
            <BannerBoxV2 image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg'} info="right" />
          </div>
        </div>
      </section>



      <section className="bg-white py-10 ">
        <div className="container ">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
            <div className=''>
              <h2 className="uppercase font-semibold md:text-xl text-[15]">Popular Products</h2>
              <p className='uppercase font-normal md:text-xs text-[9px]'>Do not miss the current offers until the end of March.</p>
            </div>

            <div className="w-full  lg:w-[60%]">
              {context?.catData?.length !== 0 &&
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {context?.catData?.map((cat, index) => (
                    <Tab label={cat?.name} key={index} onClick={() => filterByCatTd(cat?._id)} />
                  ))}
                </Tabs>}
            </div>
          </div>

          {popularProductData?.length !== 0 && <ProductsSlider items={6} data={popularProductData} />}
        </div>
      </section>

      {context?.catData?.length !== 0 && <HomeCatSlider data={context?.catData} />}
      
      <section className='bg-white py-8'>
        <div className="container">
          <div className="freeShipping border-2 border-[#ff5656] p-5 w-full flex flex-col md:flex-row justify-between items-center rounded-md gap-4 mb-7">
            <div className="flex items-center gap-4 uppercase">
              <LiaShippingFastSolid className='text-[40px] md:text-[50px]' />
              <span className='text-[18px] md:text-[20px] font-semibold'>Free Shipping </span>
            </div>

            <div className="text-center md:text-left">
              <p className='mb-0 font-medium'>Free Delivery Now On Your First Order and over ₹999</p>
            </div>

            <div className="uppercase">
              <p className='mb-0 font-semibold text-[20px] md:text-[25px]'>- Only ₹999*</p>
            </div>
          </div>

          <AdsBannerSliderV2 items={4} />
          
        </div>
      </section>

      {/* <HomeSlider /> */}

      <section className='py-10 bg-white'>
        <div className="container">
          <h2 className="uppercase font-semibold text-xl pb-2">Latest Products</h2>
          <div className='mb-10 '>

          {productsData?.length !== 0 && <ProductsSlider items={6} data={productsData} />}
          </div>
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className='py-9 pt-0 bg-white'>
        <div className="container">
          <h2 className="uppercase font-semibold text-xl pb-4">Featured Products</h2>
          {featuredProductsData?.length !== 0 && <ProductsSlider  data={featuredProductsData} />}
        </div>
      </section>

      <section className='py-6 pt-0 bg-white'>
        <div className="container py-3">
          <h2 className="uppercase font-semibold text-xl pb-4">From The Blog</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="blogSlider"
          >
            {[...Array(5)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <BlogItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;

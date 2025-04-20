// import React from 'react'
// import '../BannerBoxV2/style.css'
// import { Link } from 'react-router-dom'


// const BannerBoxV2 = (props) => {
//   return (
//     <div className='bannerBoxV2 group overflow-hidden rounded-md relative' >
//       <Link to="/" >
//         <img src={props.image} alt="" className='w-full rounded-md overflow-hidden group-hover:scale-105 transition-all duration-500' />
//       </Link>

//       <div className={`info absolute top-0  ${props.info === 'left' ? 'left-0' : 'right-0'} z-50 h-[100%] w-[50%] p-5 flex items-center justify-center flex-col gap-2`}>
//         <h2 className='text-[20px] font-[500]  '>Samsung Gear<br /> VR Camera</h2>

//         <h3 className='w-full text-[20px] font-[700] text-primary '>₹529.00</h3>

//         <div className="w-full">
//           <Link to="/" className='link font-[500] hover:underline transition-all '>SHOP NOW</Link>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default BannerBoxV2

import React from 'react'
import '../BannerBoxV2/style.css'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className='bannerBoxV2 group overflow-hidden rounded-md relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'>
      <Link to="/">
        <img
          src={props.image}
          alt=""
          className='w-full h-full rounded-md object-cover transition-all duration-500 group-hover:scale-105'
        />
      </Link>

      <div
        className={`info absolute top-0 ${props.info === 'left' ? 'left-0' : 'right-0'} z-50 h-full w-1/2 p-3 sm:p-5 flex items-center justify-center flex-col gap-2 bg-gradient-to-r from-black/10 to-black/20`}
      >
        <h2 className='text-base sm:text-lg md:text-xl font-medium text-center text-white'>
          Samsung Gear<br /> VR Camera
        </h2>

        <h3 className='w-full text-base sm:text-lg md:text-xl font-bold text-primary text-center'>₹529.00</h3>

        <div className="w-full text-center">
          <Link
            to="/"
            className='link font-medium text-white hover:underline transition-all'
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerBoxV2

import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem  cursor-pointer">
      <div className="imgWrapper group w-full overflow-hidden rounded-md relative">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg" alt="" className='w-full group-hover:scale-105 transition-all' />
        <span className='flex items-center justify-center gap-1 absolute bottom-3 text-[12px] left-5 z-50 text-white bg-primary p-1 rounded-lg'> <IoMdTime className='text-[17px]' /> 19 JANUARY, 2025</span>
      </div>

      <div className="info py-4">

        <h2 className='text-[16px] font-[600] text-black'> <Link to="/" className='link transition-all'>Nullam ullamcorper ornare molestie</Link></h2>

        <p className='text-[15px] font-[400] text-[rgba(0,0,0,0.8)] py-1 mb-1'>
          Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam...
        </p>

        <Link to="/" className='hover:underline text-[#ff5252] font-[500] text-[15px] flex items-center'>Read More <IoMdArrowDropright className='text-[18px]' /></Link>

      </div>

    </div>
  )
}

export default BlogItem

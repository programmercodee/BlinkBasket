import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { deleteData, fetchDataFromApi } from '../../utils/api';
import { MyContext } from '../../App';

const MylistItems = (props) => {

  const context = useContext(MyContext)

  const removeItem = (id) => {
    deleteData(`/api/myList/${id}`).then((res) => {
      context?.openAlertBox("success","Product removed from My List")
      context?.getMyListData()
    })
  }

  return (

    <div className="cartItem w-full flex p-3 items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
      {
        console.log(props?.item)
      }
      <div className="img w-[12%] overflow-hidden rounded-md group">
        <Link to={`/product/${props?.item?.productId}`}>
          <img src={props?.item?.image} alt="" className='w-full group-hover:scale-105 transition-all' />
        </Link>
      </div>

      <div className="info w-[87%] relative ">
        <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] !absolute top-1 right-2' onClick={() => { removeItem(props?.item?._id) }}>
          <IoMdClose className='text-[20px]  cursor-pointer' />
        </Button>
        <span className='text-[11px] font-[700] mb-0 mt-0'>{props?.item?.brand}</span>
        <h3 className='text-[13px] font-[400]'><Link to={`/product/${props?.item?.productId}`} className='link'>{props?.item?.productTitle.substr(0, 80) + "..."}</Link></h3>

        <Rating name="size-small" value={props?.item?.rating} precision={0.5} size="small" readOnly />


        {/* Price */}
        <div className="price flex items-center gap-2">

          <span className='newPrice text-black text-[12px] font-[500]'>₹{props?.item?.price}.00</span>
          <span className='oldPrice line-through text-gray-600 text-[12px] font-[500]'>₹{props?.item?.oldPrice}.00</span>
          <span className='oldPrice text-primary text-[12px] font-[500]'>{props?.item?.discount}% OFF</span>

        </div>
        <p className='flex items-center text-[10px] gap-1 mt-[2px] mb-2'><TbTruckReturn className='text-[13px]' /> <span className='font-[700]'>14 days</span> return available</p>

        <Link to={`/product/${props?.item?.productId}`}>
          <Button className='btn-org btn-sm'>Go to Your Product</Button>
        </Link>
      </div>
    </div>
  )
}

export default MylistItems

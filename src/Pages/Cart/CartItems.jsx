import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { deleteData } from '../../utils/api';
import { MyContext } from '../../App';

const CartItems = (props) => {
  // size menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const open = Boolean(anchorEl); //dont move this line.

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const context = useContext(MyContext)

  //Qty menu
  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const qtyopen = Boolean(qtyanchorEl); //dont move this line.

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context.openAlertBox("success", "Item removed")
      context?.getCartData()
    })
  }

  return (
    <div className="cartItem w-full flex p-3 items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
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
        <h3 className='text-[13px] font-[400] mb-1'><Link to={`/product/${props?.item?.productId}`} className='link'>{props?.item?.productTitle}</Link></h3>

        <Rating name="size-small" value={props?.item?.rating} precision={0.5} size="small" readOnly />

        <div className="flex items-center gap-4">

          {/* Size Menu */}
          {/* <div className='relative'>
            <span onClick={handleClick} className='flex items-center gap-1 justify-center bg-[#f1f1f1] py-1 px-2 text-[10px] rounded-md font-[600] cursor-pointer'>Size : {selectedSize} <GoTriangleDown /></span>
            <Menu
              id="size-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => { handleClose(null) }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => { handleClose('S') }}>S</MenuItem>

            </Menu>

          </div> */}
          {/* Qty Menu */}
          {/* <div className='relative'>
            <span onClick={handleClickQty} className='flex items-center gap-1 justify-center bg-[#f1f1f1] py-1 px-2 text-[10px] rounded-md font-[600] cursor-pointer'>Qty : {selectedQty} <GoTriangleDown /></span>

            <Menu
              id="size-menu"
              anchorEl={qtyanchorEl}
              open={qtyopen}
              onClose={() => { handleCloseQty(null) }}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => { handleCloseQty('1') }}>1</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('2') }}>2</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('3') }}>3</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('4') }}>4</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('5') }}>5</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('6') }}>6</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('7') }}>7</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('8') }}>8</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('9') }}>9</MenuItem>
              <MenuItem onClick={() => { handleCloseQty('10') }}>10</MenuItem>
            </Menu>

          </div> */}


        </div>
        {/* Price */}
        <div className="price flex items-center mt-[5px] gap-2">
          <span className='newPrice text-black text-[12px] font-[500]'>₹{props?.item?.price}.00</span>
          <span className='oldPrice line-through text-gray-600 text-[12px] font-[500]'>₹{props?.item?.oldPrice}.00</span>
          <span className='oldPrice text-primary text-[12px] font-[500]'>{props?.item?.discount}% OFF</span>

        </div>
        <p className='flex items-center text-[10px] gap-1 mt-[5px]'><TbTruckReturn className='text-[13px]' /> <span className='font-[700]'>14 days</span> return available</p>

      </div>
    </div>
  )
}

export default CartItems

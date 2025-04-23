import React from 'react'
import Button from "@mui/material/Button";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../../App';

const MobileNev = () => {

  const context = React.useContext(MyContext)

  return (
    <div className='mobileNav bg-white p-1 px-3 w-full grid grid-cols-5 fixed bottom-0 left-0 z-[999] justify-items-center'>
      <NavLink to="/" exact={true} activeClassName="isActive">

        <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700 '>
          <IoHomeOutline className='text-3xl' />
          <span className='text-md'>Home</span>
        </Button>
      </NavLink>

      <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
        <IoSearch className='text-3xl' />
        <span className='text-md'>Search</span>
      </Button>
     
        <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700 relative' onClick={() => { context.setOpenCartPanel(true) }}>
          <MdOutlineShoppingCart className='text-3xl' />
          <span className='text-md'>Cart</span>
          <span className='top-1 right-0 absolute bg-[#ff5656] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-xs'>
          {context?.cartData?.length !== 0 ? context?.cartData?.length : "0"}
          </span>
        </Button>

      <NavLink to="/my-orders" exact={true} activeClassName="isActive">
        <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
          <IoBagHandleOutline className='text-3xl' />
          <span className='text-md'>Order</span>
        </Button>
      </NavLink>
      <NavLink to="/my-account" exact={true} activeClassName="isActive">

        <Button className='flex-col !w-[40px] !min-w-[40px] !capitalize !text-gray-700'>
          <FaRegUser className='text-3xl' />
          <span className='text-md'>Profile</span>
        </Button>
      </NavLink>
    </div>
  )
}

export default MobileNev

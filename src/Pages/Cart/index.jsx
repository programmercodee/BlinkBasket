import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { IoBagCheckOutline } from "react-icons/io5";
import CartItems from './CartItems';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

import emptycart from '../../assets/icons/shopping.png'

const Cart = () => {

  const context = useContext(MyContext)

  return (
    <section className='section py-5'>

      <div className="container max-w-[75%] flex gap-3 ">
        {/* left part */}
        <div className="leftPart w-[73%]">


          <div className="shadow-md rounded-md bg-[#fff] mt-3">

            <div className="px-3 py-2 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className='text-[18px] font-[600]'>Your Cart</h2>
              <p className='text-[14px] font-[500] mt-0'>There are <span className='text-primary font-bold'>{context?.cartData?.length}</span> products in your cart</p>
            </div>

            {
              context?.cartData?.length !== 0 ? context?.cartData?.map((item, index) => {
                return (
                  <CartItems size='S' qty={item?.quantity} item={item} key={index} />
                )
              }) :

              <>
             <div className="flex items-center justify-center flex-col h-[400px]">
              <img src={emptycart} alt="" className='w-[220px] h-[220px] pb-2'/>
              <p className='text-[22px] font-[500] text-[#ff5252] pb-5'>Yout cart is currently empty</p>
              <Link to={"/"}>
              <Button className='btn-org '>Continue Shopping</Button>
              </Link>
             </div>
              </>
            }

          </div>

        </div>

        {/* right part */}
        <div className="rightPart w-[27%]  ">
          <div className="shadow-md rounded-md bg-[#fff] mt-3 p-5 border-2 ">
            <h3 className='mb-2 font-[700] text-[17px]'>Cart Totals</h3>
            <hr />
            <p className='flex items-center justify-between py-2'>
              <span className='text-[15px] font-[500]'>Subtotal</span>
              <span className='text-primary font-[600] text-[15px]'>{
                context?.cartData?.length !== 0
                  ? context?.cartData
                    ?.map(item => parseInt(item.price) * item.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString('en-US', { style: 'currency', currency: 'INR' }) // Ensure this is called on the final value
                  : "₹0.00"
              }</span>
            </p>
            <p className='flex items-center justify-between py-2'>
              <span className='text-[15px] font-[500]'>Shipping</span>
              <span className='font-[600] text-[15px]'>Free</span>
            </p>
            <p className='flex items-center justify-between py-2'>
              <span className='text-[15px] font-[500]'>Estimate for</span>
              <span className='font-[600] text-[15px]'>India</span>
            </p>
            <p className='flex items-center justify-between py-2'>
              <span className='text-[15px] font-[500]'>Total</span>
              <span className='text-primary font-[600] text-[15px]'>{
                context?.cartData?.length !== 0
                  ? context?.cartData
                    ?.map(item => parseInt(item.price) * item.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString('en-US', { style: 'currency', currency: 'INR' }) // Ensure this is called on the final value
                  : "₹0.00"
              }</span>
            </p>
            <div className="pt-4">
              <Link to='/checkout'>
                <Button className='btn-org flex items-center justify-between gap-3 w-full'>
                  <IoBagCheckOutline className='text-[21px]' />
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Cart

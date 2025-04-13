// Jai Shree Ram jii
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from "react-icons/md";
import Button from '@mui/material/Button';
import { MyContext } from '../../App';
import { deleteData } from '../../utils/api';

const CartPanel = (props) => {
  const context = useContext(MyContext)

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context.openAlertBox("success", "Item Removed")
      context.getCartData()
    })
  }

  return (


    <>

      <div className="scroll w-full max-h-[400px] overflow-y-scroll overflow-x-hidden px-3 ">
        {
          props?.data?.map((item, index) => {
      
            return (
              <div className="cartItem flex gap-3 my-5 border-b border-[rgba(0,0,0,0.1)] pb-4" key={index}>
                <div className="img w-[25%] h-[100px] rounded-lg overflow-hidden group">
                  <Link to={`/product/${item?.productId}`}>
                    <img src={item?.image} alt="" className='w-full group-hover:scale-105 transition-all' />
                  </Link>
                </div>
                <div className="info w-[75%] pr-5 relative">
                  <Link to={`/product/${item?.productId}`}>
                    
                    <h4 className='text-[14px] font-[500] link cursor-pointer w-[95%] '>{item?.productTitle?.substr(0, 40) + "..."}</h4>
                  </Link>
                  <p className='flex gap-4 my-4'>
                    <span>Qty : <span>{item?.quantity}</span> </span>
                    <span className='text-primary font-[600]'>Price :  ₹{item?.subTotal}</span>
                  </p>
                  <Button className="!top-[0px] !absolute !right-[1px] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]" onClick={() => { removeItem(item?._id) }}>
                    <MdOutlineDelete className=' text-[25px] cursor-pointer link transition-all' />
                  </Button>
                </div>
              </div>
            )
          })
        }



      </div>


      <div className="bottomSec absolute bottom-[10px] left-[0px] w-full ">
        <div className="bottomInfo px-4 py-2 border-t  border-[rgba(0,0,0,0.1)] rounded-t-xl">
          <div className="flex items-center justify-between flex-col border-b border-[rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between w-full">
              <span className='text-[14px] font-[500]'>{context?.cartData?.length} items</span>
              <span className='text-primary font-[600] text-[14px]'>{
                context?.cartData?.length !== 0
                  ? context?.cartData
                    ?.map(item => parseInt(item.price) * item.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString('en-US', { style: 'currency', currency: 'INR' }) // Ensure this is called on the final value
                  : "₹0.00"
              }</span>
            </div>

            <div className="flex items-center justify-between w-full py-4">
              <span className='text-[14px] font-[500]'>Shipping</span>
              <span className='text-primary font-[600] text-[14px]'>₹0.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col pt-5">
            <div className="flex items-center justify-between w-full">
              <span className='text-[14px] font-[500]'>Total (tax excl.)</span>
              <span className='text-primary font-[600] text-[14px]'>{
                context?.cartData?.length !== 0
                  ? context?.cartData
                    ?.map(item => parseInt(item.price) * item.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString('en-US', { style: 'currency', currency: 'INR' }) // Ensure this is called on the final value
                  : "₹0.00"
              }</span>
            </div>

            <div className="flex items-center justify-between w-full py-4">
              <span className='text-[14px] font-[500]'>Total (tax incl.)</span>
              <span className='text-primary font-[600] text-[14px]'>{
                context?.cartData?.length !== 0
                  ? context?.cartData
                    ?.map(item => parseInt(item.price) * item.quantity)
                    .reduce((total, value) => total + value, 0)
                    .toLocaleString('en-US', { style: 'currency', currency: 'INR' }) // Ensure this is called on the final value
                  : "₹0.00"
              }</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className='text-[14px] font-[500]'>Taxes:</span>
              <span className='text-primary font-[600] text-[14px]'>₹0.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 w-full gap-5">
            <Link to="/cart" className='w-[50%]'>
              <Button className='btn-org w-full' onClick={context.toggleCartPanel(false)}>view cart</Button>
            </Link>
            <Link to="/checkout" className='w-[50%]'>
              <Button className='btn-org btn-border w-full' onClick={context.toggleCartPanel(false)}>checkout</Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default CartPanel

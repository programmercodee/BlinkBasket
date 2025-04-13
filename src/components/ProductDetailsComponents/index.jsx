import React, { useContext, useState } from 'react'

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';


const ProductDetailsComponents = (props) => {

  const context = useContext(MyContext)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTabName, setSelectedTabName] = useState(null)
  const [ProductActionIndex, SetProductActionIndex] = useState(null);
  const [tabError, setTabError] = useState(false)

  const setProductActionIndex = (index, name) => {
    SetProductActionIndex(index)
    setSelectedTabName(name)
  }

  const handleSelectQty = (qty) => {
    setQuantity(qty)
  }




  const addToCart = (product, userId, quantity) => {

    if (userId === undefined) {
      context.openAlertBox("error", "You are not login!")
    }else{

   


    const productItem = {
      _id: product?._id,
      productTitle: product?.name,
      image: product?.images[0],
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      discount: product?.discount,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      userId: userId,
      brand: product?.brand,
      size: props?.item?.size?.length !== 0 ? selectedTabName : '',
      weight: props?.item?.productWeight?.length !== 0 ? selectedTabName : '',
      ram: props?.item?.productRam?.length !== 0 ? selectedTabName : '',
    }


    if (selectedTabName !== null) {
      setIsLoading(true)


      postData("/api/cart/add", productItem).then((res) => {
        context?.openAlertBox("success", res?.message)

        context?.getCartData()
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)


      })

    }else{
      setTabError(true)
    }

  }
  }

  return (
    <>
      <h1 className='text-[25px] font-[600]'>{props?.item?.name} </h1>
      <div className="flex items-center gap-3 pt-2">
        <span className='text-gray-400 text-[15px]'>Brands : <span className='text-[#000] pl-2 opacity-70'>{props?.item?.brand} </span></span>
        <Rating className='ml-4' name="size-small" defaultValue={props?.item?.rating} precision={0.5} size="small" readOnly />
        {/* <span className='text-[15px] text-gray-400 cursor-pointer'>Rating(4)</span> */}
      </div>

      <div className="price flex items-center gap-4 mt-3">

        <span className='oldPrice line-through text-gray-500 text-[21px] font-[500]'>₹{props?.item?.oldPrice}.00</span>
        <span className='newPrice text-primary text-[21px] font-[600]'>₹{props?.item?.price}.00</span>

        <span className='text-[14px] ml-4'>Available In Stock:&nbsp; <span className='text-green-500 font-bold'>{props?.item?.countInStock} Items</span></span>

      </div>


      <p className='text-[15px] w-[97%] leading-[25px] mt-4 mb-4'>{props?.item?.description}</p>
      {
        props?.item?.productRam?.length !== 0 &&
        <div className='productContent'>
          <div className="flex items-center gap-3 action">
            <span className='text-[15px]'>RAM:</span>
            <div className="flex items-center gap-2 py-1">
              {
                props?.item?.productRam?.map((item, index) => {
                  return (
                    <Button className={`${ProductActionIndex === index ? 'bg-primary !text-white' : ''}
                     ${tabError === true && 'error'}  `} onClick={() => { setProductActionIndex(index, item) }}>{item}</Button>
                  )
                })
              }


            </div>
          </div>
        </div>
      }



      {
        props?.item?.size?.length !== 0 &&
        <div className='productContent'>
          <div className="flex items-center gap-3 action">
            <span className='text-[15px]'>Size:</span>
            <div className="flex items-center gap-2 py-1">
              {
                props?.item?.size?.map((item, index) => {
                  return (
                    <Button className={`${ProductActionIndex === index ? 'bg-primary !text-white' : ''}  `} onClick={() => { setProductActionIndex(index, item) }}>{item}</Button>
                  )
                })
              }


            </div>
          </div>
        </div>
      }





      {
        props?.item?.productWeight?.length !== 0 &&
        <div className='productContent'>
          <div className="flex items-center gap-3 action">
            <span className='text-[15px]'>Weight:</span>
            <div className="flex items-center gap-2 py-1">
              {
                props?.item?.productWeight?.map((item, index) => {
                  return (
                    <Button className={`${ProductActionIndex === index ? 'bg-primary !text-white' : ''}  `} onClick={() => { setProductActionIndex(index, item) }}>{item}</Button>
                  )
                })
              }


            </div>
          </div>
        </div>
      }


      <p className=' py-3 text-[13.5px]'>Free Shipping (Est. Delivery Time 2-3 Days)</p>


      <div className="flex items-center gap-3">
        <div className="qtyBoxWrapper w-[70px]">
          <QtyBox handleSelectQty={handleSelectQty} />
        </div>

        {

        }
        <Button className='btn-org flex items-center gap-3 !min-w-[180px]' onClick={() => { addToCart(props?.item, context?.userData?._id, quantity) }}>
          {
            isLoading === true ? <CircularProgress color="inherit" /> :
              <>
                <FaCartShopping />Add to Cart

              </>
          }
        </Button>

      </div>

      <div className="flex items-center gap-5 mt-5">
        <span className='flex items-center gap-2 cursor-pointer link text-[15px] transition-all font-[500]'><FaRegHeart className='text-[18px]' />Add to Wishlist</span>
        <span className='flex items-center gap-2 cursor-pointer link text-[15px] transition-all font-[500]'><IoGitCompareOutline className='text-[18px]' />Add to Compare</span>

      </div>

      <div className="bankOffers pt-6">
        <p className='flex items-center text-[13px] text-[#000]'>
          <BiSolidOffer className='text-[16px] text-green-500' /> &nbsp; <span className='font-[600]'> Bank Offer </span>&nbsp;5% Unlimited Cashback on Flipkart Axis Bank Credit Card  &nbsp;<span className='font-[600] text-[#ff5252] cursor-pointer'>T&C</span></p>

        <p className='flex items-center text-[13px] text-[#000] py-2'>
          <BiSolidOffer className='text-[16px] text-green-500' /> &nbsp; <span className='font-[600]'> Bank Offer </span>&nbsp;10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above&nbsp;<span className='font-[600] text-[#ff5252] cursor-pointer'>T&C</span></p>


      </div>

    </>
  )
}

export default ProductDetailsComponents

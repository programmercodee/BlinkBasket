import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import { IoMdAdd } from "react-icons/io";
import Radio from '@mui/material/Radio';
import relocation from '../../assets/icons/relocation.png'
import { color } from "@mui/system";
import { deleteData, fetchDataFromApi, postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { SiRazorpay } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";

const VITE_APP_RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;
const VITE_APP_RAZORPAY_KEY_SECRET = import.meta.env.VITE_APP_RAZORPAY_KEY_SECRET;

const Checkout = () => {

  const history = useNavigate()

  const context = useContext(MyContext)
  const [isChecked, setIsChecked] = useState(0)
  const [selectedAddress, setSelectedAddress] = useState("")
  const [totalAmount, setTotalAmount] = useState()

  useEffect(() => {
    setSelectedAddress(context?.userData?.address_details[0]?._id)

  }, [context?.userData])

  useEffect(() => {


    setTotalAmount(
      context?.cartData?.length !== 0
        ? context?.cartData
          ?.map((item) => parseInt(item.price) * item.quantity)
          .reduce((total, value) => total + value, 0)
        : 0
    );

    // setTotalAmount(
    //   context?.cartData?.length !== 0 ?
    //     context?.cartData?.map(item => parseInt(item.price) * item.quantity)
    //       .reduce((total, value) => total + value, 0) : 0)
    //   ?.toLocaleString('en-US', { style: 'currency', currency: 'INR' });

    // localStorage.setItem("totalAmount", context?.cartData?.length !== 0 ?
    //   context?.cartData?.map(item => parseInt(item.price) * item.quantity)
    //     .reduce((total, value) => total + value, 0) : 0)
    //   ?.toLocaleString('en-US', { style: 'currency', currency: 'INR' })

  }, [context?.cartData])


  const handleChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index)
      setSelectedAddress(e.target.checked)
    }
  }
  const checkout = (e) => {
    e.preventDefault()

    const amountInPaise = totalAmount ? parseInt(totalAmount) * 100 : 0;
    if (amountInPaise <= 0) {
      context.openAlertBox("error", "Invalid total amount.");
      return;
    }


    var option = {
      key: VITE_APP_RAZORPAY_KEY_ID,
      key_secret: VITE_APP_RAZORPAY_KEY_SECRET,
      amount: parseInt(totalAmount) * 100,
      currency: "INR",
      order_receipt: "order_receipt_" + context?.userData?.name,
      name: "BlinkBasket",
      description: "Thanks for buy.",

      handler: function (response) {

        const paymentId = response.razorpay_payment_id;

        const user = context?.userData;
        const products = context?.cartData

        const payLoad = {
          userId: user?._id,
          products: products,
          paymentId: paymentId,
          payment_status: "COMPLETED",
          delivery_address: selectedAddress,
          totalAmt: totalAmount,
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
          })
        };



        postData(`/api/order/create`, payLoad).then((res) => {
          context.openAlertBox("success", res.message)
          deleteData(`/api/cart/emptyCart/${user?._id}`).then((res) => {
            context?.getCartData()
          })
          history("/")
        })



      },

      theme: {
        color: "#ff5252",
      }
    };

    var pay = new window.Razorpay(option)
    pay.open()

  }



  const cashOnDelivery = (e) => {

    const user = context?.userData;

    const payLoad = {
      userId: user?._id,
      products: context?.cartData,
      paymentId: '',
      payment_status: "CASH ON DELIVERY",
      delivery_address: selectedAddress,
      totalAmt: totalAmount,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      })
    };

    postData(`/api/order/create`, payLoad).then((res) => {
      context.openAlertBox("success", res.message)
      deleteData(`/api/cart/emptyCart/${user?._id}`).then((res) => {
        context?.getCartData()
      })
      history("/")
    })

  }

  return (
    <section className="py-8">
      <form onSubmit={checkout}>
        <div className="container flex gap-5">
          <div className="leftCol w-[70%]">
            <div className="cart bg-white shadow-md p-5 rounded-md w-full">
              <div className="flex items-center justify-between">
                <h1 className="font-[600] text-[17px]">Billing Details & Select Delivery Address</h1>
                <Button className="flex items-center gap-2 btn-sm btn-org btn-border" onClick={context.toggleAddressPanel(true)}><IoMdAdd className="text-[18px]" />ADD NEW ADDRESS</Button>
              </div>

              <br />

              <div className="flex flex-col gap-4">
                {
                  context?.userData?.address_details?.length !== 0 ? context?.userData?.address_details?.map((item, index) => {
                    return (
                      <label key={index} className={`card  flex gap-3 border border-[rgba(0,0,0,0.2)] p-4 rounded-md ${isChecked === index && "bg-[#f4eaea]"}`}>
                        <div>

                          <Radio className="" onChange={(e) => handleChange(e, index)}
                            checked={isChecked === index}
                            value={item?._id}
                          />
                        </div>
                        <div className="info ">
                          <span className="p-1 bg-[#c7c7c7] font-[600] rounded-sm text-[13px] px-2">{item?.addressType}</span>
                          <h3 className="font-[600] mt-1">{context?.userData?.name}</h3>
                          <p className="text-[14px] py-1">{item?.address_line + " " + item?.city + " " + item?.state + " " + item?.country + " " + item?.landmark}</p>
                          <p className="text-[13px] font-[500]">+{item?.mobile}</p>
                        </div>
                      </label>
                    )
                  })

                    :

                    <>
                      <div className="flex justify-center items-center h-[278px] flex-col">
                        <img src={relocation} alt="" className="w-[100px] mb-2" />
                        <h3 className="text-[20px] font-[600]">No Address found in your account!</h3>
                        <p className="my-1">Add a delivery address.</p>
                        <Button className="btn-org w-[20%]">ADD ADDRESSES</Button>
                      </div>
                    </>
                }

              </div>

            </div>
          </div>

          <div className="rightCol w-[30%]">
            <div className="card p-5 shadow-md bg-white rounded-md">
              <h2 className="text-[15px] font-[600] mb-3">Your Order</h2>

              <div className="flex items-center py-3 justify-between border-t border-b border-[rgba(0,0,0,0.1)]">
                <span className="text-[14px] font-[600]">Product</span>
                <span className="text-[14px] font-[600]">Subtotal</span>
              </div>
              <div className="scroll mb-5 max-h-[200px] overflow-y-scroll overflow-x-hidden pr-5">

                {
                  context?.cartData?.length !== 0 && context?.cartData?.map((item, index) => {
                    return (
                      <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                          <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md cursor-pointer group">
                            <img
                              src={item?.image}
                              alt=""
                              className="w-full group-hover:scale-105 transition-all"
                            />
                          </div>

                          <div className="info">
                            <h4 className="text-[14px] font-[500] cursor-pointer" title={item?.productTitle}>
                              {item?.productTitle.substr(0, 18) + "..."}
                            </h4>
                            <span className="text-[13px]">Qty : {item?.quantity}</span>
                          </div>
                        </div>

                        <span className="text-[14px] font-[500]">₹{item?.subTotal}.00</span>
                      </div>
                    )
                  })
                }


              </div>

              <div className="flex items-center gap-2 mb-2 flex-col">

                <Button type="submit" className="btn-org w-full flex items-center gap-2"> <SiRazorpay className="text-[18px] text-blue-400" /> pay with razorpay</Button>

                <Button
                  type="button"
                  className="btn-org btn-border w-full flex items-center gap-3"
                  onClick={cashOnDelivery}
                >
                  <BsCashCoin className="text-[20px]" /> Cash On Delivery
                </Button>
              </div>




            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;

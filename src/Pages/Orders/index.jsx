import React, { useEffect, useState } from "react";
import AccountSideBar from "../../components/AccountSideBar";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import Badge from "../../components/Badge/index";
import { fetchDataFromApi } from "../../utils/api";

const Orders = () => {
  const [isShowOrder, setIsShowOrder] = useState(null);

  const [order, setOrder] = useState([])

  const ShowOrderProduct = (index) => {
    if (isShowOrder === index) {
      setIsShowOrder(null);
    } else {
      setIsShowOrder(index);
    }
  };


  useEffect(() => {
    fetchDataFromApi("/api/order/order-list").then((res) => {
      setOrder(res?.data)
    })
  }, [])

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-[#fff]">
            <div className="px-3 py-2 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600]">My Orders</h2>
              <p className="text-[14px] font-[500] mt-0">
                There are <span className="text-primary font-bold">{order?.length}</span>{" "}
                orders
              </p>

              <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order status
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      order?.length !== 0 && order?.map((order, index) => {
                        return (
                          <>
                            <tr className="bg-white border-b border-gray-200">
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <Button
                                  className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                                  onClick={() => {
                                    ShowOrderProduct(index);
                                  }}
                                >
                                  {isShowOrder === index ? (
                                    <FaAngleUp className="text-black text-[15px]" />
                                  ) : (
                                    <FaAngleDown className="text-black text-[15px]" />
                                  )}
                                </Button>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="text-primary">
                                  {order?._id}
                                </span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="text-primary">{order?.paymentId ? order?.paymentId : "CASH ON DELIVERY"}</span>
                              </td>
                              <td scope="row" className="px-6 py-4 font-medium  ">
                                <span className=" block w-[220px]">
                                  {order?.userId?.name}
                                </span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="">{order?.userId?.mobile}</span>
                              </td>
                              <td className="px-6 py-4 font-medium  ">
                                <span className=" block w-[350px]">
                                  {order?.delivery_address?.address_line + " " + order?.delivery_address?.city
                                    + " " + order?.delivery_address?.landmark + " " + order?.delivery_address?.state + " " + order?.delivery_address?.country + " " + order?.delivery_address?.pincode

                                  }
                                </span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="">{order?.delivery_address?.pincode}</span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium text-center whitespace-nowrap "
                              >
                                <span className="text-primary">₹{order?.totalAmt}/-</span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="">{order?.userId?.email}</span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="text-primary">{order?.userId?._id}</span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="">
                                  <Badge status={order?.order_status} />
                                </span>
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap "
                              >
                                <span className="">{order?.createdAt?.split("T")[0]}</span>
                              </td>
                            </tr>
                            {/* inner Details */}

                            {isShowOrder === index && (
                              <tr className="">
                                <td className="pl-20" colSpan={6}>
                                  {/* inner table */}
                                  <div className="relative overflow-x-auto mt-">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                      <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                                        <tr>
                                          <th className="px-6 py-3 whitespace-nowrap">
                                            Product Id
                                          </th>
                                          <th className="px-6 py-3 whitespace-nowrap">
                                            Product Title
                                          </th>
                                          <th
                                            scope="col"
                                            className="px-6 py-3 whitespace-nowrap"
                                          >
                                            Image
                                          </th>
                                          <th
                                            scope="col"
                                            className="px-6 py-3 whitespace-nowrap"
                                          >
                                            Quantity
                                          </th>
                                          <th
                                            scope="col"
                                            className="px-6 py-3 whitespace-nowrap"
                                          >
                                            Price
                                          </th>
                                          <th
                                            scope="col"
                                            className="px-6 py-3 whitespace-nowrap"
                                          >
                                            Subtotal
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                        {
                                          order?.products?.map((item, index) => {
                                            return (
                                              <tr className="bg-white border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium whitespace-nowrap ">
                                                 {item?._id}
                                                </td>
                                                <td className="px-6 py-4 font-medium w-[550px] ">
                                                  <span className="text-primary">
                                                   {item?.productTitle}
                                                  </span>
                                                </td>
                                                <td
                                                  scope="row"
                                                  className="px-6 py-4 font-medium whitespace-nowrap "
                                                >
                                                  <span className="text-primary">
                                                    <img
                                                      src={item?.image}
                                                      alt=""
                                                      width={40}
                                                      className="rounded-md"
                                                    />
                                                  </span>
                                                </td>
                                                <td
                                                  scope="row"
                                                  className="px-6 py-4 font-medium  "
                                                >
                                                  <span className="">{item?.quantity}</span>
                                                </td>
                                                <td
                                                  scope="row"
                                                  className="px-6 py-4 font-medium "
                                                >
                                                  <span className="">₹{item?.price}/-</span>
                                                </td>
                                                <td className="px-6 py-4 font-medium  ">
                                                  <span className="">₹{item?.subTotal}/-</span>
                                                </td>
                                              </tr>
                                            )
                                          })
                                        }





                                        <tr>
                                          <td className="bg-[#ccc]" colSpan={12}></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </>
                        )
                      })
                    }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;

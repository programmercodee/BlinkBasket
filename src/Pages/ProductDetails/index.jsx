import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { VscPreview } from "react-icons/vsc";
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider/index'

import logo from '../../assets/icons/logo.jpg'
import ProductDetailsComponents from '../../components/ProductDetailsComponents';
import { fetchDataFromApi } from '../../utils/api';

const ProductDetails = () => {
  const [productsData, setAllProductsData] = useState([])
  const [featuredProductsData, setFeaturedProductsData] = useState([])
  const [activeTab, setActiveTab] = useState(0)

  const { id } = useParams()

  const [productData, setProductData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      setProductData(res?.product)
      setIsLoading(false)
    })


    fetchDataFromApi(`/api/product/getAllProducts`).then((res) => {
      setAllProductsData(res?.products)
    })


    fetchDataFromApi(`/api/product/getAllFeaturedProducts`).then((res) => {
      setFeaturedProductsData(res?.products)
    })


    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      <div className='pb-0'>
        <div className="container py-5 ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/" className='link transition-all'>
              HOME
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/products"
              className='link transition-all '
            >
              {/* FASHION catName */}
              {productData?.catName}
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className='link transition-all'
            >
              {/* Mens Cotton Casual Short Sleeve T-Shirts */}
              {productData?.name}
            </Link>

          </Breadcrumbs>
        </div>
      </div>



      <section className='bg-white py-10 '>
        {
          isLoading === true ?
            <div className="flex items-center justify-center min-h-[400px]">
              <CircularProgress color="inherit" />
            </div>

            :

            <>
              <div className="container flex flex-col md:flex-row gap-8">
                <div className="productZoomContainer md:w-[35%] w-full md:h-[70vh] h-[45vh] overflow-hidden ">
                  <ProductZoom images={productData?.images} />
                </div>

                <div className="productContent md:w-[65%] w-full">

                  <ProductDetailsComponents item={productData} />

                </div>
              </div>

              <div className="container py-10 select-none">
                <div className="flex items-center gap-8 mb-5">
                  <span className={`'link text-[18px] cursor-pointer font-[500] transition-all' ${activeTab === 0 ? 'text-primary' : ''}`} onClick={() => { setActiveTab(0) }}>Description</span>
                  <span className={`'link text-[18px] cursor-pointer font-[500] transition-all' ${activeTab === 1 ? 'text-primary' : ''}`} onClick={() => { setActiveTab(1) }}>Product Details</span>
                  <span className={`'link text-[18px] cursor-pointer font-[500] transition-all' ${activeTab === 2 ? 'text-primary' : ''}`} onClick={() => { setActiveTab(2) }}>Reviews(5)</span>
                </div>

                {
                  activeTab === 0 && (
                    <div className="w-full shadow-xl p-5 rounded-md">

                      {
                        productData?.description
                      }
                    </div>
                  )
                }

                {
                  activeTab === 1 && (
                    <div className="p-5 shadow-xl rounded-md w-full">

                      <img src={logo} alt="" className='w-[150px] border border-gray-200 rounded-md p-2 mb-4' />


                      <div class="relative overflow-x-auto">
                        <h4 className='text-[15px] mb-2 font-[600] pl-1'>Data sheet</h4 >
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                              <th scope="col" class="px-6 py-3">
                                Stand Up
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Folded (w/o wheels)
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Folded (w/ wheels)
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Door Pass Through
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-white border-b border-gray-200">
                              <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                35″L x 24″W x 37-45″H(front to back wheel)
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 18.5″W x 16.5″H
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 24″W x 18.5″H
                              </td>
                              <td class="px-6 py-4">
                                24
                              </td>
                            </tr>

                            <tr class="bg-white border-b border-gray-200">
                              <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                35″L x 24″W x 37-45″H(front to back wheel)
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 18.5″W x 16.5″H
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 24″W x 18.5″H
                              </td>
                              <td class="px-6 py-4">
                                24
                              </td>
                            </tr>

                            <tr class="bg-white border-b border-gray-200">
                              <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                35″L x 24″W x 37-45″H(front to back wheel)
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 18.5″W x 16.5″H
                              </td>
                              <td class="px-6 py-4">
                                32.5″L x 24″W x 18.5″H
                              </td>
                              <td class="px-6 py-4">
                                24
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                }

                {
                  activeTab === 2 && (
                    <div className='p-5 shadow-xl rounded-md w-[80%] productReviewsContainer'>
                      <h2 className='font-[600] text-[17px]'>Customer questions & answers</h2>

                      <div className="reviewScroll overflow-y-scroll overflow-x-hidden w-full max-h-[360px] mt-4 pr-4">

                        <div className="review w-full flex items-center justify-between  border-b border-[rgba(0,0,0,0.1)]">
                          <div className="info w-[80%] flex items-center gap-4 ">

                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                              <img src="https://technoglobalhospital.com/assets/src_sir.jpg" alt="" className='w-full' />
                            </div>

                            <div className='w-[90%]  py-4'>
                              <h2 className='text-[18px] font-[600]'>Shubham Yadav</h2>
                              <h4 className='text-[13px] text-gray-400 py-1'>2025-01-10</h4>
                              <p className='text-[14px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa qui, ea velit libero voluptatibus inventore cum neque, omnis corporis, tempora ipsa mollitia modi nesciunt veniam adipisci hic nihil blanditiis quos autem veritatis numquam dolore placeat dicta. Ab corrupti a rerum nobis, eum asperiores laborum.</p>
                            </div>

                          </div>

                          <Rating className='ml-4' name="size-small" defaultValue={3} size="small" readOnly />
                        </div>


                        <div className="review w-full flex items-center justify-between  border-b border-[rgba(0,0,0,0.1)]">
                          <div className="info w-[90%] flex items-center gap-4 ">

                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                              <img src="https://technoglobalhospital.com/assets/src_sir.jpg" alt="" className='w-full' />
                            </div>

                            <div className='w-[80%]  py-4'>
                              <h2 className='text-[18px] font-[600]'>Shubham Yadav</h2>
                              <h4 className='text-[13px] text-gray-400 py-1'>2025-01-10</h4>
                              <p className='text-[14px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa qui, ea velit libero voluptatibus inventore cum neque, omnis corporis, tempora ipsa mollitia modi nesciunt veniam adipisci hic nihil blanditiis quos autem veritatis numquam dolore placeat dicta. Ab corrupti a rerum nobis, eum asperiores laborum.</p>
                            </div>

                          </div>

                          <Rating className='ml-4' name="size-small" defaultValue={3} size="small" readOnly />
                        </div>


                        <div className="review w-full flex items-center justify-between  border-b border-[rgba(0,0,0,0.1)]">
                          <div className="info w-[90%] flex items-center gap-4 ">

                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                              <img src="https://technoglobalhospital.com/assets/src_sir.jpg" alt="" className='w-full' />
                            </div>

                            <div className='w-[80%]  py-4'>
                              <h2 className='text-[18px] font-[600]'>Shubham Yadav</h2>
                              <h4 className='text-[13px] text-gray-400 py-1'>2025-01-10</h4>
                              <p className='text-[14px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa qui, ea velit libero voluptatibus inventore cum neque, omnis corporis, tempora ipsa mollitia modi nesciunt veniam adipisci hic nihil blanditiis quos autem veritatis numquam dolore placeat dicta. Ab corrupti a rerum nobis, eum asperiores laborum.</p>
                            </div>

                          </div>

                          <Rating className='ml-4' name="size-small" defaultValue={3} size="small" readOnly />
                        </div>


                      </div>


                      <br />

                      <div className="reviewForm p-4 bg-[#fafafa] rounded-md">
                        <h2 className='flex items-center gap-2 text-[18px] font-[600]'>Add a review <VscPreview className='text-[20px]' /></h2>
                        <br />

                        <form className='w-full'>

                          <TextField
                            id="outlined-multiline-static"
                            label="Write a review..."
                            multiline
                            rows={4}
                            className='w-full'
                            defaultValue=""
                          />

                        </form>

                        <br />
                        <Rating name="size-medium" defaultValue={1} />

                        <div className='mt-4'>
                          <Button className='btn-org'>SUBMIT REVIEW</Button>
                        </div>

                      </div>

                    </div>
                  )
                }


              </div>

              <div className="container pt-10">
                <h2 className="uppercase font-[600] text-[20px] pb-2">best sale product</h2>
                {
                  productsData?.length !== 0 && <ProductsSlider items={6} data={productsData} />
                }
              </div>
              <div className="container pt-10">
                <h2 className="uppercase font-[600] text-[20px] pb-2">Most preferred products</h2>
                {
                  featuredProductsData?.length !== 0 && <ProductsSlider items={6} data={featuredProductsData} />
                }
              </div>
            </>
        }




      </section>
    </>
  )
}

export default ProductDetails

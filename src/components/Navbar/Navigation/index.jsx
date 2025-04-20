import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import '../../../App.css'
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchDataFromApi } from '../../../utils/api';
import CategoriesPanel from './categoriesPanel';
import { MyContext } from '../../../App';

const Navigation = () => {
  const context = useContext(MyContext)
  const [catData, setCatData] = useState([]) //if somethingh is worng then use 'setCatData'

  useEffect(() => {
    context?.setCatData(context?.catData)
  }, [context?.catData])
  const { id } = useParams()

  useEffect(() => {
    // alert(id)
  })

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true)
  }

  return (
    <nav className='py-'>

      <div className="container flex items-center justify-end gap-8">

        <div className="col_1 md:w-[20%] w-full">
          <Button className='!text-black gap-3 w-full ' onClick={openCategoryPanel}>
            <RiMenu2Fill className='text-[18px]' />
            Shop by Categories
            <LiaAngleDownSolid className='text-[15px] ml-auto' />
          </Button>
        </div>

        <div className="col_2 w-[60%]  lg:block hidden !py-3">
          <ul className='flex items-center gap-8 nav'>
            <li>
              <Link to="/" className='text-[14px] font-[500] link transition'>Home</Link>
            </li>

            {
              context?.catData?.length !== 0 && context?.catData?.map((cat, index) => {

                return (
                  <li className='relative'key={cat._id}>
                    <Link to={`/products?catId=${cat._id}`} className='text-[14px]  link transition' key={index}>{cat?.name}</Link>

                    {
                      cat?.children?.length !== 0 &&
                      <div className="submenu absolute top-[120%] left-[0%] bg-white min-w-[200px] shadow-lg opacity-0 transition-all">
                        <ul className=''>

                          {
                            cat?.children?.map((subCat, index_) => {
                              return (
                                <li className='list-none w-full relative' key={index_}>
                                  <Link className='w-full' to={`/products?subCatId=${subCat._id}`}>
                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>{subCat?.name}</Button>

                                    {
                                      cat?.children?.length !== 0 &&
                                      <div className="submenu absolute top-[0%] left-[100%] bg-white min-w-[150px] shadow-lg opacity-0 transition-all">
                                        <ul className=''>

                                          {
                                            subCat?.children?.map((thirdLevelCat, index__) => {
                                              return (
                                                <li className='list-none w-full' key={index__}>
                                                  <Link className='w-full' to={`/products?thirdLevelCatId=${thirdLevelCat._id}`}>
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !justify-start !text-left !rounded-none'>{thirdLevelCat?.name} </Button>
                                                  </Link>
                                                </li>
                                              )
                                            })
                                          }

                                        </ul>
                                      </div>
                                    }


                                    {/* submenu */}

                                  </Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>

                    }



                  </li>
                )
              })
            }





          </ul>
        </div>

        <div className="col_3 md:w-[20%] w-[0%] md:block hidden">
          <p className='flex items-center gap-3 font-[500]'><GoRocket className='text-[16px]' />Free International Delivery
          </p>
        </div>

      </div>

      {
        context?.catData?.length !== 0 &&
        <CategoriesPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} data={context?.catData} />
      }



    </nav>
  )
}

export default Navigation

import React from 'react'
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = (props) => {
  const [submenuIndex, setSubmenuIndex] = React.useState(null)

  const openSubmenu = (index) => {
    if (submenuIndex == index) {
      setSubmenuIndex(null)

    } else {

      setSubmenuIndex(index)
    }
  }

  const [inner_submenuIndex, setInner_submenuIndex] = React.useState(null)

  const openInner_submenu = (index) => {

    if (inner_submenuIndex == index) {
      setInner_submenuIndex(null)
    } else {

      setInner_submenuIndex(index)
    }

  }
  return (
    <>
      <div className="scroll">
        <ul className='w-full'>

          {
            props?.data?.length !== 0 && props?.data?.map((cat, index) => {
              return (
                <li className='list-none flex items-center relative flex-col cursor-pointer' key={index}>
                  <Link to={`/products?catId=${cat._id}`} className='w-full'>
                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>{cat?.name}</Button>
                  </Link>
                  {
                    submenuIndex === index ? <FiMinusSquare className='absolute top-[10px] right-[15px]' onClick={() => {
                      openSubmenu(index)
                    }} /> :
                      <FaRegPlusSquare className='absolute top-[10px] right-[15px]' onClick={() => { openSubmenu(index) }} />
                  }


                  {
                    submenuIndex === index && (
                      <ul className='submenu  w-full pl-3'>

                        {
                          cat?.children?.length !== 0 && cat?.children?.map((subCat, index_) => {
                            return (
                              <li className='list-none relative ' key={index_}>
                                <Link to={`/products?subCatId=${subCat._id}`} className='w-full'><Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] '>{subCat?.name}</Button></Link>

                                {
                                  inner_submenuIndex === index_ ? <FiMinusSquare className='absolute top-[10px] right-[15px]' onClick={() => { openInner_submenu(index_) }} /> : <FaRegPlusSquare className='absolute top-[10px] right-[15px]' onClick={() => { openInner_submenu(index_) }} />
                                }


                                {
                                  inner_submenuIndex === index_ && (
                                    <ul className='inner_submenu w-full pl-3'>

                                      {
                                        subCat?.children?.length !== 0 && subCat?.children?.map((thirdLevel, index__) => {
                                          return (
                                            <li className='list-none relative mb-1' key={index__}>
                                              <Link thirdLevel className=' link transition-all w-full !text-left !justify-start !px-3'>{thirdLevel?.name}</Link>
                                            </li>
                                          )
                                        })
                                      }


                                    </ul>
                                  )
                                }

                              </li>
                            )
                          })
                        }


                      </ul>
                    )
                  }

                </li>
              )
            })
          }






        </ul>
      </div>
    </>
  )
}

export default CategoryCollapse

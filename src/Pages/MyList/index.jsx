import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { IoBagCheckOutline } from "react-icons/io5";;
import empltylist from '../../assets/icons/mylist.png'
import { Link } from 'react-router-dom';
import MylistItems from './MylistItems';
import AccountSideBar from '../../components/AccountSideBar';
import { MyContext } from '../../App';

const MyList = () => {

  const context = useContext(MyContext)

  return (
    <section className='py-10 w-full'>
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md bg-[#fff]">

            <div className="px-3 py-2 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className='text-[18px] font-[600]'>My Lists</h2>
              <p className='text-[14px] font-[500] mt-0'>There are <span className='text-primary font-bold'>{context?.myListData?.length}</span> products in your list</p>
            </div>

            {
              context?.myListData?.length !== 0 ? context?.myListData?.map((item, index) => {
                return (
                  <MylistItems key={index} item={item} />
                )
              }) :

                <>
                  <div className="flex h-[385px] items-center justify-center flex-col">
                    <img src={empltylist} alt="" className='h-[150px]'/>
                    <h3 className='text-[20px] my-5 text-[#ff5252] font-[500]'>My List is currently empty</h3>
                    <Link to={"/"}>
                    <Button className='btn-org'>Continue Shopping...</Button>
                    </Link>
                  </div>
                </>
            }

          </div>

        </div>

      </div>
    </section>

  )
}

export default MyList

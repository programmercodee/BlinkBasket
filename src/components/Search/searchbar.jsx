import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";


const Searchbar = () => {
  return (
    <div className='bg-gray-200 w-full h-[50px] rounded-lg p-2 relative'>
      <input type="text" placeholder='Search here' className='h-[35px] focus:outline-none w-full bg-inherit text-sm p-2' />
      <Button className='!rounded-full !w-[35px] !min-w-[10px] !absolute top-2 right-3 h-[35px] '><IoSearch className='text-black' /></Button>
    </div>
  )
}

export default Searchbar

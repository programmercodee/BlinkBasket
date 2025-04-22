import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import { MyContext } from '../../App';
import { postData } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const Searchbar = () => {

  const context = useContext(MyContext)
  const [isLoading, setIsLoading] = useState(false)

  const history = useNavigate()

  const [searchQuery, setsearchQuery] = useState('')

  const onChangeInput = (e) => {
    setsearchQuery(e.target.value)

  }

  const search = () => {

    setIsLoading(true)
    const obj = {
      page: 1,
      limit: 3,
      query: searchQuery
    }

    if (searchQuery !== "") {
      postData(`/api/product/search/get`, obj).then((res) => {
        context?.setsearchData(res)

        setTimeout(() => {
          setIsLoading(false)
          history('/search')
        },1500)

        
      })

    }

  }

  return (
    <div className='bg-gray-200 w-full md:h-[50px] h-[40px]  rounded-lg p-2 relative'>
      <input
        type="text"
        placeholder='Search here'
        className='md:h-[35px] h-[20px] focus:outline-none w-full bg-inherit text-sm p-2'
        value={searchQuery}
        onChange={onChangeInput}
      />
      <Button className='searchBox !rounded-full !w-[35px] !min-w-[10px] !absolute md:top-2 top-1 right-3 h-[35px]' onClick={search}>
        {
          isLoading === true ? <CircularProgress /> :  <IoSearch className='text-black text-2xl' />
        }
       
        
      </Button>
    </div>
  )
}

export default Searchbar

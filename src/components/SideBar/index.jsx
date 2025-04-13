import React, { useContext, useEffect, useState } from 'react'
import '../SideBar/style.css'
import { Collapse } from 'react-collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import { MyContext } from '../../App';
import { useLocation } from 'react-router-dom';
import { postData } from '../../utils/api';

// const { id } = useParams();

const SideBar = (props) => {

  const context = useContext(MyContext)

  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] = useState(true)
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true)


  const [filters, setFilters] = useState({
    catId: [],
    subCatId: [],
    thirdsubCatId: [],
    minPrice: '',
    maxPrice: '',
    rating: '',
    page: 1,
    limit: 10
  })

  const [price, setPrice] = useState([0, 99999])

  const location = useLocation()

  const handleCheckBoxChange = (field, value) => {

    const currentValue = filters[field] || []
    const updatedValue = currentValue?.includes(value) ?
      currentValue.filter((item) => item !== value) :
      [...currentValue, value]

    setFilters((prev) => ({
      ...prev,
      [field]: updatedValue
    }))

    if (field === "catId") {
      setFilters((prev) => ({
        ...prev,
        subCatId: [],
        thirdsubCatId: []
      }))
    }

  }

  useEffect(() => {
    props.setIsLoading(true);
    postData(`/api/product/filters`, filters).then(res => {
      props.setProductData(res);
      props.setIsLoading(false);
      props.setTotalPage(res?.total);
    });
  }, [filters, props.page]);

  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    const categoryId = queryParameters.get('catId');
    if (categoryId) {
      setFilters(prev => ({
        ...prev,
        catId: [categoryId],
        subCatId: [],
        thirdsubCatId: [],
        rating: []
      }));
    }
  }, [location]);
  
  

  useEffect(() => {
    const url = window.location.href

    const queryParammeters = new URLSearchParams(location.search)

    if (url?.includes("catId")) {
      const categoryId = queryParammeters.get('catId')
      const catArr = []
      catArr.push(categoryId)
      filters.catId = catArr
      filters.subCatId = []
      filters.thirdsubCatId = []
      filters.rating = []
    }


    if (url?.includes("subCatId")) {
      const subcategoryId = queryParammeters.get('subCatId')
      const subcatArr = []
      subcatArr.push(subcategoryId)
      filters.subCatId = subcatArr
      filters.catId = []
      filters.thirdsubCatId = []
      filters.rating = []
    }

    if (url?.includes("thirdLevelCatId")) {
      const thirdsubcategoryId = queryParammeters.get('thirdLevelCatId')
      const thirdsubcatArr = []
      thirdsubcatArr.push(thirdsubcategoryId)
      filters.thirdsubCatId = thirdsubcatArr
      filters.catId = []
      filters.subCatId = []
      filters.rating = []
    }

    filters.page = 1

    setTimeout(() => {
      filtersData()
    }, 2000)

  }, [location])

  const filtersData = () => {
    props.setIsLoading(true)
    postData(`/api/product/filters`, filters).then((res) => {
      props.setProductData(res)
      console.log(res)
      props.setIsLoading(false)
      props.setTotalPage(res?.total      )
      // window.scrollTo(0,0)
    })
  }

  useEffect(() => {
    filters.page = props.page
    filtersData()
  }, [filters, props.page])

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      minPrice: price[0],
      maxPrice: price[1]
    }))
  }, [price])

  return (
    <aside className='sideBar py-5'>
      <div className="box">

        <h3 className='w-full mb-1 text-[16px] font-[600] flex items-center gap-2'>
          PRODUCT CATEGORIES
          <Button onClick={() => {
            setIsOpenCategoryFilter(!isOpenCategoryFilter)
          }}
            className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
          >
            {
              isOpenCategoryFilter === true ? <FaAngleDown className='text-[17px] ' /> : <FaAngleUp className='text-[17px] ' />
            }


          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryFilter} >
          <div className="scroll px-1">
            {
              context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={item?._id}
                    checked={filters?.catId?.includes(item?._id)}
                    control={<Checkbox size='small' />}
                    label={item?.name}
                    className='w-full'
                    onChange={() => handleCheckBoxChange('catId', item?._id)}
                  />
                )
              })
            }


          </div>
        </Collapse>
      </div>


      <div className="box mt-5">

        <h3 className='w-full mb-1 text-[16px] font-[600] flex items-center gap-2'>
          Availability
          <Button onClick={() => {
            setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
          }}
            className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
          >
            {
              isOpenAvailabilityFilter === true ? <FaAngleDown className='text-[17px] ' /> : <FaAngleUp className='text-[17px] ' />
            }


          </Button>
        </h3>

        <Collapse isOpened={isOpenAvailabilityFilter} >
          <div className="scroll px-1">
            <FormControlLabel control={<Checkbox size='small' />} label="Available" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label=" In stock" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label=" Not available" className='w-full' />
          </div>
        </Collapse>
      </div>


      <div className="box mt-5">

        <h3 className='w-full mb-1 text-[16px] font-[600] flex items-center gap-2'>
          Size
          <Button onClick={() => {
            setIsOpenSizeFilter(!isOpenSizeFilter)
          }}
            className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'
          >
            {
              isOpenSizeFilter === true ? <FaAngleDown className='text-[17px] ' /> : <FaAngleUp className='text-[17px] ' />
            }


          </Button>
        </h3>

        <Collapse isOpened={isOpenSizeFilter} >
          <div className="scroll px-1">
            <FormControlLabel control={<Checkbox size='small' />} label="Small" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Medium" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="Large" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="XL" className='w-full' />
            <FormControlLabel control={<Checkbox size='small' />} label="XXL" className='w-full' />
          </div>
        </Collapse>
      </div>



      <div className="box mt-5">
        <h3 className='w-full mb-1 text-[16px] font-[600] flex items-center gap-2'>Price</h3>
        <RangeSlider
          value={price}
          onInput={setPrice}
          min={100}
          max={99999}
          steps={5}
        />

        <div className="priceRange flex py-3">
          <span className='text-[13px]'>
            From: <strong className='text-black'>Rs : {price[0]}</strong>
          </span>
          <span className='ml-auto text-[13px]'>
            From: <strong className='text-black'>Rs : {price[1]}</strong>
          </span>
        </div>

      </div>


      <div className="box mt-5">
        <h3 className='w-full mb-1 text-[16px] font-[600] flex items-center gap-2'>Rating</h3>

        <div className="flex items-center">
          <FormControlLabel
            value={5}
            checked={filters?.rating?.includes(5)}
            control={<Checkbox size='small' />}
            className='w-full'
            onChange={() => handleCheckBoxChange('rating', 5)}
          />

          <div className="w-full">
            <Rating name="Rating"
              value={5} readOnly />
          </div>
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={4}
            checked={filters?.rating?.includes(4)}
            control={<Checkbox size='small' />}
            className='w-full'
            onChange={() => handleCheckBoxChange('rating', 4)}
          />

          <div className="w-full">
            <Rating name="Rating"
              value={4} readOnly />
          </div>
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={3}
            checked={filters?.rating?.includes(3)}
            control={<Checkbox size='small' />}
            className='w-full'
            onChange={() => handleCheckBoxChange('rating', 3)}
          />

          <div className="w-full">
            <Rating name="Rating"
              value={3} readOnly />
          </div>
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={2}
            checked={filters?.rating?.includes(2)}
            control={<Checkbox size='small' />}
            className='w-full'
            onChange={() => handleCheckBoxChange('rating', 2)}
          />

          <div className="w-full">
            <Rating name="Rating"
              value={2} readOnly />
          </div>
        </div>

        <div className="flex items-center">
          <FormControlLabel
            value={1}
            checked={filters?.rating?.includes(1)}
            control={<Checkbox size='small' />}
            className='w-full'
            onChange={() => handleCheckBoxChange('rating', 1)}
          />

          <div className="w-full">
            <Rating name="Rating"
              value={1} readOnly />
          </div>

        </div>


      </div>


    </aside>
  )
}

export default SideBar

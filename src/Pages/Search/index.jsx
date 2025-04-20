import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductsSlider from '../../components/ProductItem'
import Button from '@mui/material/Button';
import { IoGridOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';
import { useLocation } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';


const SearchPage = () => {

  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category"); // Get category ID from URL

  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  // useEffect(() => {
  //   setIsLoading(true);
  //   let url = "/api/products";
  //   if (categoryId) {
  //     url += `?category=${categoryId}`;
  //   }

  //   fetchDataFromApi(url).then((res) => {
  //     setProductData(res?.data || []);
  //     setIsLoading(false);
  //   });
  // }, [categoryId]);

  useEffect(() => {
    setIsLoading(true);
    let url = `/api/products?page=${page}`; // Ensure page is included
    if (categoryId) {
      url += `&category=${categoryId}`;
    }

    fetchDataFromApi(url).then((res) => {
      setProductData(res?.data?.products || []);
      setTotalPage(res?.data?.totalPages || 1); // Ensure totalPage is updated
      setIsLoading(false);
    });
  }, [categoryId, page]);

  return (
    <section className='py-5 pb-0'>
      <div className="container">
        {/* breadcurmb */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className='link transition-all'>
            HOME
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
            className='link transition-all'
          >
            FASHION
          </Link>

        </Breadcrumbs>
        {/* breadcurmb */}

      </div>

      <div className="p-2 bg-white mt-4">
        <div className="container flex gap-3">
          <div className="sideBarWrapper bg-white w-[20%] h-full">
            <SideBar
              productData={productData}
              setProductData={setProductData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setTotalPage={setTotalPage}

            />
          </div>


          <div className="rightContent w-[80%] ">

            <div className="bg-[#f1f1f1] p-4 rounded-md w-full flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions">

                <Button onClick={() => { setItemView("grid") }} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`}><IoGridOutline className='text-[20px]' /></Button>

                <Button onClick={() => { setItemView("list") }} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`}><FiMenu className='text-[27px]' /></Button>
                
                <span className='font-[500] ml-3'>There are <span className='text-[#ff5252]'> {productData?.length !== 0 ? productData?.products?.length : 0}</span> products.</span>
                
              </div>
             

              <div className="col2 flex items-center ml-auto justify-end gap-2">
                <span className='font-[400] ml-3'>Sort by:</span>

                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='!text-[13px] !text-[#000] !border !border-[#000] !bg-white !capitalize'
                >
                  Sales, highest to lowest
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize' > Sales, highest to lowest</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize' >Relevance</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose} className='!text-[13px] !text-[#000] !capitalize'>Price, high to low</MenuItem>

                </Menu>

              </div>

            </div>

            <div className={`grid gap-2 ${itemView === 'grid' ? 'grid-cols-5 md:grid-cols-5' : 'grid-cols-1 md:grid-cols-1'} `}>

              {
                itemView === "grid" ? (
                  <>
                    {
                      productData?.products?.length !== 0 && productData?.products?.map((item, index) => {
                        return (
                          <ProductsSlider item={item} key={index} />
                        )
                      })

                    }

                  </>

                ) : (
                  <>

                    {
                      productData?.products?.length !== 0 && productData?.products?.map((item, index) => {
                        return (

                          <ProductItemListView item={item} key={index} />
                         
                        )
                      })

                    }


                  </>
                )
              }




            </div>


   

              {totalPage > 1 && (
                <div className="pagination flex items-center  justify-center my-10">
                  <Pagination
                    count={totalPage}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    showFirstButton
                    showLastButton
                  />
                </div>
              )}

     
          </div>

        </div>
      </div>
    </section>
  )
}

export default SearchPage

// import React, { useEffect, useState } from 'react';
// import SideBar from '../../components/SideBar';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import ProductsSlider from '../../components/ProductItem';
// import Button from '@mui/material/Button';
// import { IoGridOutline } from 'react-icons/io5';
// import { FiMenu } from 'react-icons/fi';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ProductItemListView from '../../components/ProductItemListView';
// import Pagination from '@mui/material/Pagination';
// import { useLocation } from 'react-router-dom';
// import { fetchDataFromApi } from '../../utils/api';

// const Products = () => {
//   const [itemView, setItemView] = useState('grid');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [availability, setAvailability] = useState('');
//   const [size, setSize] = useState('');

//   const open = Boolean(anchorEl);
//   const handleSetAvailability = (value) => {
//     if (value !== availability) setAvailability(value);
//   };

//   const handleSetSize = (value) => {
//     if (value !== size) setSize(value);
//   };

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const categoryId = queryParams.get('category');

//   const [productData, setProductData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [totalPage, setTotalPage] = useState(1);

//   useEffect(() => {
//     setIsLoading(true);
//     let url = `/api/products?page=${page}`;
//     if (categoryId) url += `&category=${categoryId}`;
//     if (availability) url += `&availability=${availability}`;
//     if (size) url += `&size=${size}`;

//     fetchDataFromApi(url).then((res) => {
//       setProductData(res?.data || []);
//       setTotalPage(res?.totalPage || 1);
//       setIsLoading(false);
//     });
//   }, [categoryId, availability, size, page]);

//   return (
//     <section className='py-5 pb-0'>
//       <div className='container'>
//         <Breadcrumbs aria-label='breadcrumb'>
//           <Link underline='hover' color='inherit' href='/' className='link transition-all'>
//             HOME
//           </Link>
//           <Link underline='hover' color='inherit' to='/products' className='link transition-all'>
//             FASHION
//           </Link>
//         </Breadcrumbs>
//       </div>
//       <div className='p-2 bg-white mt-4'>
//         <div className='container flex gap-3'>
//           <div className='sideBarWrapper bg-white w-[20%] h-full'>
//             <SideBar
//               productData={productData}
//               setProductData={setProductData}
//               isLoading={isLoading}
//               setIsLoading={setIsLoading}
//               page={page}
//               setPage={setPage}
//               totalPage={totalPage}
//               setTotalPage={setTotalPage}
//               setAvailability={setAvailability}
//               setSize={setSize}
//             />
//           </div>

//           <div className='rightContent w-[80%]'>
//             <div className='bg-[#f1f1f1] p-4 rounded-md w-full flex items-center justify-between'>
//               <div className='col1 flex items-center gap-1 itemViewActions'>
//                 <Button onClick={() => setItemView('grid')}><IoGridOutline className='text-[20px]' /></Button>
//                 <Button onClick={() => setItemView('list')}><FiMenu className='text-[27px]' /></Button>
//                 <span className='font-[500] ml-3'>There are {productData?.length || 0} products.</span>
//               </div>
//             </div>

//             <div className={`grid gap-2 ${itemView === 'grid' ? 'grid-cols-4' : 'grid-cols-1'}`}>
//               {
//               productData?.map((item, index) =>{
//                 return(
//                   itemView === 'grid' ? (
//                     <ProductsSlider item={item} key={item} />
//                   ) : (
//                     <ProductItemListView item={item} key={index} />
//                   )
//                 )
//               })
//               }
//             </div>

//             {totalPage > 1 && (
//               <div className='pagination flex items-center justify-center my-10'>
//                 <Pagination count={totalPage} page={page} onChange={(e, value) => setPage(value)} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import React, { useContext, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { TbHeartCheck } from "react-icons/tb";

import '../ProductItem/style.css'

import { Link } from 'react-router-dom'
import { MyContext } from '../../App';
import { deleteData, editData, postData } from '../../utils/api';

const ProductItem = (props) => {

  const context = useContext(MyContext);

  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdd] = useState(false)
  const [isAddedMyList, setIsAddMyList] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [selectedTabName, setSelectedTabName] = useState(null)
  const [isShowTab, setIsShowTab] = useState(false)

  const handleClickActiveTab = (index, name) => {
    setActiveTab(index)
    setSelectedTabName(name)
  }

  const addToCart = (product, userId, quantity) => {
    if (userId === undefined) {
      context.openAlertBox("error", "You are not login!")
    }
    else{

    const productItem = {
      _id: product?._id,
      name: product?.name,
      image: product?.images[0],
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      discount: product?.discount,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      userId: userId,
      brand: product?.brand,
      size: props?.item?.size?.length !== 0 ? selectedTabName : '',
      weight: props?.item?.productWeight?.length !== 0 ? selectedTabName : '',
      ram: props?.item?.productRam?.length !== 0 ? selectedTabName : '',
    }


    if (props?.item?.size?.length !== 0 || props?.item?.productRam?.length !== 0 || props?.item?.productWeight?.length !== 0) {
      setIsShowTab(true)
    } else {
      context?.addToCart(product, userId, quantity)
      setIsAdd(true)
      setIsShowTab(false)
    }



    if (activeTab !== null) {
      context?.addToCart(productItem, userId, quantity)
      setIsAdd(true)
      setIsShowTab(false)
    }
  }
  }

  //check cart data is already or not
  useEffect(() => {

    const item = context?.cartData?.filter((cartItem) =>
      cartItem.productId.includes(props?.item?._id)
    )

    const myListItem = context?.myListData?.filter((item) =>
      item.productId.includes(props?.item?._id)
    )



    if (item && item.length !== 0) {
      setCartItem(item)
      // console.log(item)
      setIsAdd(true)
      setQuantity(item[0]?.quantity)
    } else {
      setQuantity(1)
    }



    if (myListItem?.length !== 0) {
      setIsAddMyList(true)
    } else {
      setIsAddMyList(false)
    }

  }, [context?.cartData])

  const removeQty = () => {
    if (quantity !== 1 && quantity > 1) {
      setQuantity(quantity - 1)
    } else {
      setQuantity(1)
    }

    if (quantity === 1) {
      deleteData(`/api/cart/delete-cart-item/${cartItem[0]?._id}`).then((res) => {
        setIsAdd(false)
        context.openAlertBox("success", "Item Removed")
        context.getCartData()
        setIsShowTab(false)
        setActiveTab(null)
      })
    } else {
      const obj = {
        _id: cartItem[0]?._id,
        qty: quantity - 1,
        subTotal: props?.item?.price * (quantity - 1)
      }

      editData(`/api/cart/update-qty`, obj).then((res) => {
        context.openAlertBox("success", res?.data?.message)
        context.getCartData()
      })
    }

  }


  const addQty = () => {

    setQuantity(quantity + 1)

    const obj = {
      _id: cartItem[0]?._id,
      qty: quantity + 1,
      subTotal: props?.item?.price * (quantity + 1)
    }

    editData(`/api/cart/update-qty`, obj).then((res) => {
      context.openAlertBox("success", res?.data?.message)
      context.getCartData()
    })

  }


  const handleAddToMyList = (item) => {

    if (context?.userData === null) {
      context?.openAlertBox("error", "You are not login!")
      return false
    } else {

      const obj = {
        productId: item?._id,
        userId: context?.userData?._id,
        productTitle: item?.name,
        image: item?.images[0],
        rating: item?.rating,
        price: item?.price,
        oldPrice: item?.oldPrice,
        brand: item?.brand,
        discount: item?.discount
      }


      postData("/api/myList/add", obj).then((res) => {
        context?.openAlertBox("success", res?.message)
        setIsAddMyList(true)
        context?.getMyListData()
      })

      return true;

    }

  }




  return (
    <div className='productItem overflow-hidden rounded-md py-3 shadow-lg flex '>

      <div className="group relative imgWrapper w-[18%] h-[250px] overflow-hidden">

        <Link to={`/product/${props?.item?._id}`}>
          <div className="img  h-[300px] overflow-hidden">
            <img src={props?.item?.images[0]} alt="Product Image" className='w-full ' />

            <img src={props?.item?.images[1]} alt="Product Image" className='w-full  absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ' />
          </div>
        </Link>

        {
          isShowTab === true &&
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-[900] p-3 gap-2">

            <IoCloseOutline className='absolute top-5 right-3 cursor-pointer hover:text-[#ff5252] transition-all text-white text-[25px] z-[900]' onClick={() => { setIsShowTab(false) }} />
            {
              props?.item?.size?.length !== 0 && props?.item?.size?.map((size, index) => {
                return (

                  <span key={index} className={`flex items-center justify-center p-2 px-4 bg-[rgba(255,555,255,0.8)] max-w-[35px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${activeTab === index && '!bg-[#ff5252] text-white'} `} onClick={() => { handleClickActiveTab(index, size) }} >{size}</span>
                )
              })
            }

            {
              props?.item?.productRam?.length !== 0 && props?.item?.productRam?.map((item, index) => {
                return (

                  <span key={index} className={`flex items-center justify-center p-2 px-4 bg-[rgba(255,555,255,0.8)] max-w-[35px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${activeTab === index && '!bg-[#ff5252] text-white'} `} onClick={() => { handleClickActiveTab(index, item) }} >{item}</span>
                )
              })
            }

            {
              props?.item?.productWeight?.length !== 0 && props?.item?.productWeight?.map((item, index) => {
                return (

                  <span key={index} className={`flex items-center justify-center p-2 px-4 bg-[rgba(255,555,255,0.8)] max-w-[35px] h-[25px] rounded-sm cursor-pointer hover:bg-white ${activeTab === index && '!bg-[#ff5252] text-white'} `} onClick={() => { handleClickActiveTab(index, item) }} >{item}</span>
                )
              })
            }

          </div>
        }



        <span className='text-[10px] font-[500] shadow-xl absolute top-[10px] left-[10px] bg-[#ff5252] p-1 text-white rounded-md w-[35px] flex items-center justify-center'>-{props?.item?.discount}%</span>

        <div className="actions absolute top-[-1000px] group-hover:top-[10px] right-[10px] flex items-center gap-2 flex-col w-[50px] z-50  transition-all duration-300 opacity-0 group-hover:opacity-100">

          <Button className={`!rounded-full !w-[40px] !h-[40px] !min-w-[40px] !bg-white text-black hover:!bg-[#ff5252] hover:text-white group `} onClick={() => { handleAddToMyList(props?.item) }}>
            {
              isAddedMyList === true ? <TbHeartCheck className='text-[22px] !text-[#ff5252] hover:!text-white' /> : <FaRegHeart className='text-[18px] !text-black hover:!text-white' />
            }
          </Button>



          <Button className='!rounded-full !w-[40px] !h-[40px] !min-w-[40px] !bg-white text-black hover:!bg-[#ff5252] hover:text-white group'>
            <GoGitCompare className='text-[18px] !text-black hover:!text-white' />
          </Button>

          <Button className='!rounded-full !w-[40px] !h-[40px] !min-w-[40px] !bg-white text-black hover:!bg-[#ff5252] hover:text-white group' onClick={() => { context.handleOpenProductDetailModel(true, props?.item) }}>
            <MdZoomOutMap className='text-[18px] !text-black hover:!text-white' />
          </Button>

        </div>

      </div>

      <div className="productDetails p-4 py-5 overflow-y-hidden flex-grow  w-[82%] flex flex-col justify-between">
        <div>
          <h6 className='text-[13px]'>{props?.item?.brand}</h6>
          <h3 className='text-[14px] title font-[500] text-[rgba(0,0,0,0.9)] mt-1 line-clamp-2  overflow-hidden' >
            <Link to={`/product/${props?.item?._id}`} className='link transition-all'>{props?.item?.name}</Link></h3>

          <p className='w-[80%] text-[14px] py-1'>{props?.item?.description?.substr(0, 220) + "..."}</p>

          <div className="flex gap-5">
            <Rating name="size-small" value={props?.item?.rating} size="small" readOnly precision={0.5} />
            <span className='text-[14px] font-[500] ml-2 text-gray-600'> Available In Stock: <span className='text-green-600 font-bold'>{props?.item?.countInStock} Items</span> </span>
          </div>

          <div className="price flex items-center mt-1 gap-4">

            <span className='oldPrice line-through text-gray-600 text-[16px] font-[500]'>₹{props?.item?.oldPrice}.00</span>
            <span className='newPrice text-primary text-[16px] font-[600] py-1'>₹{props?.item?.price}.00</span>

          </div>
        </div>

        <div className="w-full mt-2 ">
          {
            isAdded === false ?
              <Button className='flex items-center btn-org btn-border btn-sm gap-2' onClick={() => { addToCart(props?.item, context?.userData?._id, quantity) }}>
                <MdOutlineShoppingCart className='text-[22px]' />Add to Cart</Button>

              :

              <div className="flex items-center justify-between overflow-hidden rounded-full border border-[rgba(0,0,0,0.1)]">
                <Button className='!min-w-[35px] !w-[35px] !h-[35px] !bg-[#f1f1f1] !rounded-none' onClick={() => { removeQty() }}><FaMinus className='text-[rgba(0,0,0,0.8)]' /></Button>
                <span>{quantity}</span>
                <Button className='!min-w-[35px] !w-[35px] !h-[35px] !bg-[#ff5252]  !rounded-none' onClick={() => { addQty() }}><FaPlus className='text-white' /></Button>
              </div>

          }


        </div>


      </div>

    </div>
  )
}

export default ProductItem


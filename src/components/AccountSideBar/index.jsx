import React, { useContext, useEffect, useState } from 'react'
import { MdCloudUpload } from "react-icons/md";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import usericon from '../../assets/icons/user.png'
import { fetchDataFromApi, uploadImage } from '../../utils/api';
import { LuMapPinPlus } from "react-icons/lu";

const AccountSideBar = () => {
  const context = useContext(MyContext)
    const history = useNavigate()

  const logout = () => {
   

    fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem("accessToken")}`, { withCredentials: true }).then((res) => {
      console.log(res)

      if (res?.error === false) {

        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        context.setIsLogin(false)
        context.openAlertBox("success", res.message)
        context?.setUserData(null)
        context.getCartData()
        context.getMyListData()
        context.setCartData([])
        context.setMyListData([])
        history("/")

      }

    })
  }



  useEffect(() => {
    const userAvtar = []

    if (context?.userData?.avatar !== "" && context?.userData?.avatar !== undefined) {
      userAvtar.push(context?.userData?.avatar)
      setPreviews(userAvtar)
    }
  }, [context?.userData])

  //used in backend 
  const [previews, setPreviews] = useState([])

  const [uploading, setUploading] = useState(false)

  let selectedImages = []

  const formdata = new FormData()

  const onchangeFile = (e, apiEndPoint) => {
    try {
      //img save in this state varialbe from cloudnary
      setPreviews([])

      const files = e.target.files;
      setUploading(true)
      console.log(files)
      for (var i = 0; i < files.length; i++) {
        if (files[i] && (files[i].type === "image/jpeg" ||
          files[i].type === "image/jpg" ||
          files[i].type === "image/png" ||
          files[i].type === "image/webp")) {

          const file = files[i]
          selectedImages.push(file)
          formdata.append(`avatar`, file)

          uploadImage("/api/user/user-avatar", formdata).then((res) => {
            setUploading(false)
            //getting image from response
            let avatar = []
            avatar.push(res?.data?.avtar)
            setPreviews(avatar)
            // console.log(res)
            console.log(avatar)
          })

        } else {

          context.openAlertBox("error", "Please select a valid JPG, JPEG, WEBP or PNG image file.")
          setUploading(false)
          return false;
        }
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>

      <div className="card shadow-md bg-white p- rounded-md sticky top-5">
        <div className="w-full p-5 flex items-center justify-center flex-col">

          {/* user iamge upload section  */}
          <div className="w-[110px] h-[110px] min-w-[80px] rounded-full overflow-hidden relative mb-3 flex justify-center items-center bg-gray-200">

            {
              uploading === true ?
                < CircularProgress color="inherit" className='' /> :
                <>
                  {
                    previews?.length !== 0 ? previews?.map((img, index) => {
                      // console.log(img)
                      return (
                        <img className='w-full h-full object-cover' src={img} key={index} />
                      )
                    })

                      :

                      <img className='w-full h-full object-cover' src={usericon} />
                  }
                </>
            }


            <div className="w-[100%] h-[100%] overlay bg-[rgba(0,0,0,0.5)] absolute z-50 top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
              <MdCloudUpload className='text-white text-3xl' />
              <input type="file"
                id=""
                className='h-full w-full opacity-0 absolute top-0 left-0'
                onChange={(e) => {
                  //route of "user.route.js" in server folder.
                  onchangeFile(e, "/api/user/user-avatar")
                }}
                //name of "user.model.js" in server folder.
                name="avatar"
                accept='image/*'
              />
            </div>

          </div>

          <h3 className='font-[500]'>{context?.userData?.name}</h3>
          <h6 className='text-[13px] font-[400] text-[rgba(0,0,0,0.6)]'>{context?.userData?.email}</h6>
        </div>

        <ul className='list-none bg-[#f1f1f1] myAccountTabs w-full'>
          <li className='w-full pb-2'>
            <NavLink to="/my-account" exact={true} activeClassName="isActive">
              <Button className='flex gap-3 items-center w-full !rounded-none !text-[rgba(0,0,0,0.8)] !capitalize !text-left !justify-start !px-5 !p-2'><FaRegUser className='text-[17px]' />My Profile</Button>
            </NavLink>
          </li>
          <li className='w-full pb-2'>
            <NavLink to="/address" exact={true} activeClassName="isActive">
              <Button className='flex gap-3 items-center w-full !rounded-none !text-[rgba(0,0,0,0.8)] !capitalize !text-left !justify-start !px-5 !p-2'><LuMapPinPlus className='text-[17px]' />Address</Button>
            </NavLink>
          </li>
          <li className='w-full pb-2'>
            <NavLink to="/my-orders" exact={true} activeClassName="isActive">
              <Button className='flex gap-3 items-center w-full !rounded-none !text-[rgba(0,0,0,0.8)] !capitalize !text-left !justify-start !px-5 !p-2'><IoBagCheckOutline className='text-[18px]' />Orders</Button>
            </NavLink>
          </li>
          <li className='w-full pb-2'>
            <NavLink to="/my-List" exact={true} activeClassName="isActive">
              <Button className='flex gap-3 items-center w-full !rounded-none !text-[rgba(0,0,0,0.8)] !capitalize !text-left !justify-start !px-5 !p-2'><MdChecklist className='text-[18px]' />My List</Button>
            </NavLink>
          </li>
          <li className='w-full pb-2' onClick={logout}>
            <NavLink to="/" exact={true} activeClassName="isActive" onClick={logout}>
              <Button onClick={logout} className='flex gap-3 items-center w-full !rounded-none !text-[rgba(0,0,0,0.8)] !capitalize !text-left !justify-start !px-5 !p-2'><AiOutlineLogout className='text-[18px]' />Logout</Button>
            </NavLink>
          </li>
        </ul>

      </div>

    </>
  )
}

export default AccountSideBar

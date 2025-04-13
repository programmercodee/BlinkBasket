import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { MyContext } from '../../App';
import forgetIcon from '../../assets/icons/forget_password.png';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';

const ForgetPassword = () => {
  //for login button 
  const [isLoading, setIsLoading] = useState(false)
  const history = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  //ths is used in backend.
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: ""
  })

  //ths is used in backend.
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value
      }
    })
  }

  //it ensure that every field not empty
  const valideValue = Object.values(formFields).every(el => el)


  //ths is used in backend.
  const handleSubmit = (e) => {
    //prevenr the page load or refresh
    e.preventDefault();

    setIsLoading(true)

    //validation of email
    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter New Password!")
      setIsLoading(false)
      return false
    }

    //validation of password
    if (formFields.confirmPassword !== formFields.newPassword) {
      context.openAlertBox("error", "New Password & Confirm Password is not match!")
      setIsLoading(false)
      return false
    }

    postData("/api/user/reset-password", formFields).then((res) => {
      console.log(res)
      if (res?.error === false) {
        context.openAlertBox("success", res.message)
        localStorage.removeItem("userEmail")
        localStorage.removeItem("actionType")
        setIsLoading(false)
        history("/login")
      } else {
        context.openAlertBox("error", res.message)
      }

    })

  }


  const context = useContext(MyContext)




  return (
    <section className='py-10'>
      <div className="container">
        <div className="card shadow-xl w-[430px] p-4 px-10 m-auto bg-white rounded-lg">
          <div className="flex items-center justify-center mt-3">
            <img src={forgetIcon} alt="" width={90} />
          </div>
          <h3 className='text-[18px] text-[#000] font-[600] text-center my-5 '>Forget Password</h3>

          <form className='w-full' onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                type={isShowPassword2 === true ? 'text' : 'password'}
                label="New password*"
                variant="outlined"
                className='w-full'
                name='newPassword'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.newPassword}
              />
            </div>
            <div className="form-group w-full relative mb-3">
              <TextField
                type={isShowPassword === true ? 'text' : 'password'}
                label="Confirm Password*"
                variant="outlined"
                className='w-full '
                name='confirmPassword'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.confirmPassword}
              />

              <Button className='!absolute top-2 right-2 z-50 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]' onClick={() => { setIsShowPassword(!isShowPassword) }}>
                {
                  isShowPassword === false ? <IoIosEye className='text-[22px] opacity-75 ' /> : <IoIosEyeOff className='text-[22px] opacity-75 ' />
                }
              </Button>

            </div>

            <div className="flex items-center w-full my-6">
              <Button type='submit' className='btn-org w-full'>
                {
                  isLoading === true ? <CircularProgress color="inherit" /> : ' Change Password'
                }

              </Button>
            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default ForgetPassword

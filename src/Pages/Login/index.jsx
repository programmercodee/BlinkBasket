import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { MyContext } from '../../App';
import login_icon from '../../assets/icons/login_icon.png';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../../firebase';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


const Login = () => {

  //for login button 
  const [isLoading, setIsLoading] = useState(false)

  const context = useContext(MyContext)

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  //ths is used in backend.
  const [formFields, setFormFields] = useState({
    email: "",
    password: ""
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
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter Email ID!")
      return false
    }

    //validation of password
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password!")
      return false
    }

    //
    postData("/api/user/login", formFields, { withCredentials: true }).then((res) => {
      console.log(res)
      setIsLoading(false)
      //after submit blank all the fields
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message)
        setIsLoading(false)
        localStorage.setItem("userEmail", formFields.email)

        //after submit blank all the fields
        setFormFields({
          email: "",
          password: ""
        })

        localStorage.setItem("accessToken", res?.data?.accessToken)
        localStorage.setItem("refreshToken", res?.data?.refreshToken)

        context.setIsLogin(true)

        history('/')
      } else {
        context.openAlertBox("error", res?.message)
        setIsLoading(false)
      }

    })
  }


  const [isShowPassword, setIsShowPassword] = useState(false);

  const forgotPassword = () => {
    if (formFields.email !== "") {
      context.openAlertBox("success", "OTP sent to:" + formFields.email)
      localStorage.setItem("userEmail", formFields.email);
      localStorage.setItem("actionType", "forgot-password");

      postData("/api/user/forgot-password", {
        email: formFields.email,
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message)
          history("/verify")
        } else {
          context.openAlertBox("error", res?.message)
        }
      })
    } else {
      context.openAlertBox("error", "Please enter Email ID.")
    }
  }

  
   const authWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
  
          const fields ={
            name:user.providerData[0].displayName,
            email:user.providerData[0].email,
            password:"null",
            avatar:user.providerData[0].photoURL,
            phone:user.providerData[0].phoneNumber,
            role :"USER"
          }
  
          postData("/api/user/authWithGoogle", fields).then((res) => {
            // console.log(res)
            setIsLoading(false)
            //after submit blank all the fields
            if (res?.error !== true) {
              context.openAlertBox("success", res?.message)
              setIsLoading(false)
              localStorage.setItem("userEmail", fields.email)
  
              localStorage.setItem("accessToken", res?.data?.accessToken)
              localStorage.setItem("refreshToken", res?.data?.refreshToken)
      
              context.setIsLogin(true)
  
              history('/')
            } else {
              context.openAlertBox("error", res?.message)
              setIsLoading(false)
            }
          })
         
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


  return (
    <section className='py-10'>
      <div className="container">
        <div className="card shadow-xl md:w-[430px] w-[390px] p-4 px-10 m-auto bg-white rounded-lg">
          <div className="flex items-center justify-center mt-3">
            <img src={login_icon} alt="" width={90} />
          </div>
          <h3 className='text-[18px] text-[#000] font-[600] text-center my-5 '>Login to your account</h3>

          <form className='w-full' onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField id="email"
                label="Email Id*"
                variant="outlined"
                className='w-full'
                name='email'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.email}
              />
            </div>
            <div className="form-group w-full relative mb-3">
              <TextField id="password"
                type={isShowPassword === true ? 'text' : 'password'}
                label="Password*"
                variant="outlined"
                className='w-full '
                name='password'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.password}
              />

              <Button className='!absolute top-2 right-2 z-50 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]' onClick={() => { setIsShowPassword(!isShowPassword) }} disabled={!valideValue}>
                {
                  isShowPassword === false ? <IoIosEye className='text-[22px] opacity-75 ' /> : <IoIosEyeOff className='text-[22px] opacity-75 ' />
                }
              </Button>

            </div>

            <a className='link transition-all cursor-pointer text-[14px] font-[500]' onClick={forgotPassword}>Forgot your password?</a>

            <div className="flex items-center w-full my-6">
              <Button className='btn-org w-full' type="submit">
                {
                  isLoading === true ? <CircularProgress color="inherit" /> : 'Login'
                }
              </Button>
            </div>

            <p className='text-[14px] text-center'>Not Registered? <Link className='link  font-[600] transition-all hover:underline' to="/register">Sign Up</Link></p>


            <p className='text-center my-6 font-[500]'>Or continue with social account</p>

            <Button className='!bg-[#f1f1f1] hover:!bg-[#e2e2e2] flex items-center gap-3 w-full !text-[18px] !font-[500] !text-[#000]' onClick={authWithGoogle}><FcGoogle className='text-[25px]' />Login With Google</Button>
            <br />
            <br />
          </form>

        </div>
      </div>
    </section>
  )
}

export default Login

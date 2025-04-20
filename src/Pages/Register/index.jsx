import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import sign_up from '../../assets/icons/sign_up.png';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../../firebase';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Register = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);

  //ths is used in backend.
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: ""
  })

  const history = useNavigate()

  //for Register button 
  const [isLoading, setIsLoading] = useState(false)

  const context = useContext(MyContext)

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

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  //it ensure that every field not empty
  const valideValue = Object.values(formFields).every(el => el)

  //ths is used in backend.
  const handleSubmit = (e) => {
    //prevenr the page load or refresh
    e.preventDefault();

    setIsLoading(true)

    //validation of name
    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter full Name!")
      return false
    }
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
    postData("/api/user/register", formFields).then((res) => {
      // console.log(res)
      setIsLoading(false)
      //after submit blank all the fields
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message)
        setIsLoading(false)
        localStorage.setItem("userEmail", formFields.email)
        //after submit blank all the fields
        setFormFields({
          name: "",
          email: "",
          password: ""
        })
        history('/verify')
      } else {
        context.openAlertBox("error", res?.message)
        setIsLoading(false)
      }



    })
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
        <div className="card shadow-xl md:w-[430px] w-[390px] md:p-4 md:px-10 px-4  m-auto bg-white rounded-lg">
          <div className="flex items-center  justify-center mt-3">
            <div className='w-[18%] md:w-[35%] md:mt-0 mt-3 flex items-center justify-center'>

            <img src={sign_up} alt="" width={90} />
            </div>
          </div>
          <h3 className='text-[18px] text-[#000] font-[600] text-center my-5 '>Register with a new account</h3>

          <form className='w-full' onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField id="name"
                type='text'
                name="name"
                label="Full Name*"
                variant="outlined"
                className='w-full'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.name}
              />
            </div>

            <div className="form-group w-full mb-5">
              <TextField id="email"
                type='email'
                name='email'
                label="Email Id*"
                variant="outlined"
                className='w-full'
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.email}
              />
            </div>

            <div className="form-group w-full relative mb-3">
              <TextField id="password"
                type={isShowPassword === true ? 'text' : 'password'}
                label="Password*"
                name='password'
                variant="outlined"
                className='w-full '
                //ths is used in backend.
                onChange={onChangeInput}
                value={formFields.password}
              />

              <Button className='!absolute top-2 right-2 z-50 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]' onClick={() => { setIsShowPassword(!isShowPassword) }}>
                {
                  isShowPassword === false ? <IoIosEye className='text-[22px] opacity-75 ' /> : <IoIosEyeOff className='text-[22px] opacity-75 ' />
                }
              </Button>

            </div>

            <div className="flex items-center w-full my-6">
              <Button type="submit" disabled={!valideValue} className="btn-org w-full " >
                {
                  isLoading === true ? <CircularProgress color="inherit" /> : 'Register'
                }
              </Button>
            </div>

            <p className='text-[14px] text-center'>Already have an account? <Link className='link  font-[600] transition-all hover:underline' to="/login">Login</Link></p>


            <p className='text-center my-6 font-[500]'>Or continue with social account</p>

            <Button className='!bg-[#f1f1f1] hover:!bg-[#e2e2e2] flex items-center gap-3 w-full !text-[18px] !font-[500] !text-[#000]' onClick={authWithGoogle}><FcGoogle className='text-[25px]' />Register With Google</Button>
            <br />
            <br />
          </form>

        </div>
      </div>
    </section>
  )
}

export default Register

import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSideBar from '../../components/AccountSideBar';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { editData, postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const MyAccount = () => {
  const [phone, setPhone] = useState('');
  //for login button 
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState("")
  //ths is used in backend.
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: ""
  })


  const context = useContext(MyContext)
  const history = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    //no access of "MyAccount" page without login.
    if (token === null) {
      history("/");
    }

  }, [context.isLogin])

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id)
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile,
      })


      const ph = `"${context?.userData?.mobile}"`

      setPhone(ph)
    }
  }, [context?.userData])




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
    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter Name!")
      return false
    }

    //validation of email
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter Email ID!")
      return false
    }

    //validation of password
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter Mobile Number!")
      return false
    }

    //
    editData(`/api/user/${userId}`, formFields, { withCredentials: true }).then((res) => {
      console.log(res)
      setIsLoading(false)
      //after submit blank all the fields
      if (res?.error !== true) {
        context.openAlertBox("success", res?.data?.message)
        setIsLoading(false)
        localStorage.setItem("userEmail", formFields.email)


      } else {
        context.openAlertBox("error", res?.message)
        setIsLoading(false)
      }

    })
  }

  return (
    <section className='py-10 w-full'>
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[60%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className='pb-3'>My Profile</h2>
            <hr />

            <form className='mt-5' onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField label="Full Name"
                    name='name'
                    variant="outlined"
                    size='small'
                    className='w-full'
                    //ths is used in backend.
                    onChange={onChangeInput}
                    value={formFields.name}
                  />
                </div>

                <div className="w-[50%]">
                  <TextField label="Email"
                    name='email'
                    variant="outlined"
                    size='small'
                    className='w-full'
                    disabled={true}
                    //ths is used in backend.
                    onChange={onChangeInput}
                    value={formFields.email}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mt-3">
                <div className="w-[50%]">
                <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields({
                    mobile: phone
                  })
                }}
              />
                </div>
                <div className="w-[50%]"></div>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <Button type='submit' className='btn-org !capitalize w-[180px]'>
                  {
                    isLoading === true ? <CircularProgress color="inherit" /> : 'Update Profile'
                  }
                </Button>

              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  )
}

export default MyAccount

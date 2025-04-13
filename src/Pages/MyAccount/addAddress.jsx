import React, { useContext, useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import { MyContext } from '../../App';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Button from '@mui/material/Button';
import { IoCloudUploadOutline } from "react-icons/io5";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fetchDataFromApi, postData } from '../../utils/api';


const AddAddress = () => {

  const context = useContext(MyContext)

    //for login button 
    const [isLoading, setIsLoading] = useState(false)
    const [addressType, setAddressType] = useState("")
    const [address, setAddress] = useState([])
  
    const [phone, setPhone] = useState('');

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    addressType: "",
    landmark: "",

    userId: "",
  })

    useEffect(() => {
      setFormFields((prevState) => ({
        ...prevState,
        userId: context?.userData?._id
      }))
  
  
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

  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value)
    setFormFields(() => ({
      ...formFields,
      addressType: event.target.value
    }))
  };


    //ths is used in backend.
    const handleSubmit = (e) => {
      //prevenr the page load or refresh
      e.preventDefault();
  
      setIsLoading(true)
  
      //validation of email
      if (formFields.address_line === "") {
        context.openAlertBox("error", "Please enter Address Line!")
        return false
      }
  
      //validation of email
      if (formFields.city === "") {
        context.openAlertBox("error", "Please enter City!")
        return false
      }
  
      //validation of State
      if (formFields.state === "") {
        context.openAlertBox("error", "Please enter State!")
        return false
      }
  
      //validation of pincode
      if (formFields.pincode === "") {
        context.openAlertBox("error", "Please enter Pincode!")
        return false
      }
  
      //validation of country
      if (formFields.country === "") {
        context.openAlertBox("error", "Please enter Country!")
        return false
      }
      //validation of landmark
      if (formFields.landmark === "") {
        context.openAlertBox("error", "Please enter landmark!")
        return false
      }
  
  
      //validation of landmark
      if (formFields.addressType === "") {
        context.openAlertBox("error", "Please enter addressType!")
        return false
      }
  
  
      //validation of mobile
      if (phone === "") {
        context.openAlertBox("error", "Please enter 10 digit mobile number!")
        return false
      }
  
      postData("/api/address/add", formFields, { withCredentials: true }).then((res) => {
        setIsLoading(false)
        //after submit blank all the fields
        if (res?.error !== true) {
          context.openAlertBox("success", "Address Added Successfully")
          setIsLoading(false)

          setTimeout(()=>{
            context?.setOpenAddressPanel(false)
          },500)

          context?.getUserDetails()
  
          setFormFields({
            address_line: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
            mobile: "",
            addressType: "",
            landmark: "",
        
            userId: "",
          })
          setAddressType("")
          setPhone("")
        
  
        } else {
          context.openAlertBox("error", res?.message)
          setIsLoading(false)
        }
  
      })
    }
  

  return (
    <form className='form p-5' onSubmit={handleSubmit}>
      <div className='grid grid-cols-2 gap-4 mb-6'>
        {/* User Address Input  */}
        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>Address Line 1</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='address_line'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.address_line}
          />
        </div>
        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>City</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='city'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.city}
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mb-3'>
        {/* User Address Input  */}
        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>State</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='state'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.state}
          />
        </div>

        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>Pincode</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='pincode'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.pincode}
          />
        </div>

        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>Country</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='country'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.country}
          />
        </div>

        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>Mobile</h3>
          <PhoneInput
            defaultCountry="in"
            value={phone}
            onChange={(phone) => {
              setPhone(phone); {
                setFormFields((prevState) => ({
                  ...prevState,
                  mobile: phone
                }))
              }

            }}
          />
        </div>

        <div className="col w-full">
          <h3 className='text-[14px] font-[600] mb-2'>Landmark</h3>
          <input type="text"
            className='w-full h-[40px] p-2 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-md text-sm '
            name='landmark'
            //ths is used in backend.
            onChange={onChangeInput}
            value={formFields.landmark}
          />
        </div>



      </div>

      <div className="col w-full">
        <h3 className='text-[14px] font-[600]'>Address Type</h3>


        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={addressType}
          onChange={handleChangeAddressType}
        >
          <FormControlLabel value="Home" control={<Radio />} label="Home" />
          <FormControlLabel value="Work" control={<Radio />} label="Work" />

        </RadioGroup>

      </div>

      <br />
      <div className='w-[270px]'>
        <Button type='submit' className='btn-org w-full flex items-center gap-2' ><IoCloudUploadOutline className='text-[18px]' />Publish and View</Button>
      </div>
    </form>
  )
}

export default AddAddress

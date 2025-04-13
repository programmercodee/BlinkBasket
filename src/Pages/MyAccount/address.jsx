import React, { useContext, useEffect, useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar'
import { MyContext } from '../../App';
import { deleteData, editData, fetchDataFromApi, postData } from '../../utils/api';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import 'react-international-phone/style.css';
import { useNavigate } from 'react-router-dom';
import AddressBox from './addressBox';
const Address = () => {

  const history = useNavigate()

  //for login button 
  const [isLoading, setIsLoading] = useState(false)
  const context = useContext(MyContext)
  const [isOpenModel, setIsOpenModel] = useState(false)
  const [address, setAddress] = useState([])



  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    //no access of "MyAccount" page without login.
    if (token === null) {
      history("/");
    }

  }, [context.isLogin])

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setAddress( context?.userData?.address_details)


    }
  }, [context?.userData])






  const removeAddress = (id) => {
    deleteData(`/api/address/${id}`).then(() => {
      setAddress( context?.userData?.address_details)
      context?.getUserDetails()
    })
  }

  return (
    <>

      <section className='py-10 w-full'>
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSideBar />
          </div>
          <div className="col2 w-[60%]">
            <div className="card shadow-md bg-white p-5 rounded-md">
              <h2 className='pb-3'>Address</h2>
              <hr />


              {/* add address fields  */}
              <div className="flex items-center justify-center p-5 border rounded-md border-dashed border-[rgba(0,0,0,0.5)] mt-4 bg-[#f1faff] hover:bg-[#dde8ee] transition-all cursor-pointer" onClick={context.toggleAddressPanel(true)}>
                <span className='text-[16px] font-[500]'> Add Address</span>
              </div>

              <div className="flex gap-3 mt-3 flex-col">

                {

                  address?.length > 0 && address?.map((address, index) => {
                    return (
                      <AddressBox address={address} key={index} removeAddress={removeAddress}/>
                    )
                  })

                }

              </div>



            </div>
          </div>

        </div>
      </section>




    
    </>

  )
}

export default Address

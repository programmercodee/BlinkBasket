import React, { useContext } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdCardGiftcard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import visa from '../../assets/icons/payments icons/visa.png'
import mastercard from '../../assets/icons/payments icons/master_card.png'
import paypal from '../../assets/icons/payments icons/paypal.png'
import carte_bleue from '../../assets/icons/payments icons/carte_bleue.png'
import americanexpress from '../../assets/icons/payments icons/american_express.png'
import emptycart from '../../assets/icons/emptyCart.png'
// cartPanel dependency
import Drawer from '@mui/material/Drawer';
import { RiCloseLargeLine } from "react-icons/ri";
import CartPanel from '../CartPanel';
import { MyContext } from '../../App';
import AddAddress from '../../Pages/MyAccount/addAddress';



const Footer = () => {



  const context = useContext(MyContext)
  return (
    <>
      <footer className='py-10 bg-[#f9f9f9]'>
        <div className="container py-1 pb-1 ">
          <div className="flex items-center justify-center gap-5">

            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <LiaShippingFastSolid className='text-[60px] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-2' />
              <h3 className='text-[17px] font-[600] mt-3'>Free Shipping</h3>
              <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <MdCurrencyExchange className='text-[60px] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-2' />
              <h3 className='text-[17px] font-[600] mt-3'>30 Days Returns</h3>
              <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <RiSecurePaymentLine className='text-[60px] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-2' />
              <h3 className='text-[17px] font-[600] mt-3'>Secured Payment</h3>
              <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <MdCardGiftcard className='text-[60px] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-2' />
              <h3 className='text-[17px] font-[600] mt-3'>Special Gifts</h3>
              <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <BiSupport className='text-[60px] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-2' />
              <h3 className='text-[17px] font-[600] mt-3'>Support 24/7</h3>
              <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>Contact us Anytime</p>
            </div>





          </div>

          <hr className='mt-10' />

          <div className="footer flex py-1 mt-16">
            <div className="part1 w-[30%] border-r-2 border-[#f1f1f1]">
              <h2 className='text-[20px] font-[600] py-5xx'>Contact us</h2>
              <p className='text-[15px] font-[400] text-[rgba(0,0,0,0.8)] py-5'>
                BlinkBasket - Bhayandar, Navghar Naka,<br /> Bhayandar East, Mira Bhayandar,<br /> Maharashtra 401105
              </p>
              <Link to="mailto:svish5633@gmail.com" className="link text-[rgba(0,0,0,0.8)] text-[16px]">svish5633@gmail.com</Link>

              <span className='text-[22px] font-[500] text-[#ff5252] block py-3'>(+91) 9022642653</span>


              <div className="flex items-center gap-3 py-4">
                <IoChatboxEllipsesOutline className='text-[55px] text-[#ff5252]' />
                <span className='text-[17px] font-[500] '>
                  Online Chat<br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 flex w-[70%] pl-12">
              <div className="part2_col1 w-[50%]">
                <h2 className='text-[20px] font-[600] mb-4'>Products</h2>
                <ul className='list'>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Prices drop</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>New products</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Best sales</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Contact us</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Sitemap
                  </Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Stores
                  </Link></li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className='text-[20px] font-[600] mb-4'>Our company</h2>
                <ul className='list'>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Delivery</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Legal Notice</Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/terms-and-conditions" className='link transition-all'>Terms and conditions of use</Link></li>
                  
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to='/about-us' className='link transition-all'>About us
                  </Link></li>
                  <li className='list-none w-full mb-3 text-[15px] text-[rgba(0,0,0,0.8)]'><Link to="/" className='link transition-all'>Secure payment
                  </Link></li>
                </ul>
              </div>

              <div className="part2_col3 w-[70%]">
                <h2 className='text-[20px] font-[600] mb-4'>Subscribe to newsletter</h2>

                <p className='text-[rgba(0,0,0,0.8)] text-[15px]'>Subscribe to our latest newsletter to get news<br /> about special discounts.</p>

                <form action="post" className='mt-5'>
                  <input type="text" className='w-full h-[45px] border outline-none pl-[12px] pr-[10px] rounded-md mb-4 focus:border-[rgba(0,0,0,0.3)]' placeholder='Your Email Address' />
                  <Button className='btn-org hover:!bg-[#ff5252] transition-all'>SUBSCRIBE</Button>

                  <FormControlLabel control={<Checkbox />} label=" I agree to the terms and conditions and the privacy policy
" />

                </form>

              </div>
            </div>

          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t-2 border-[#f1f1f1] py-2 bg-[#f9f9f9] ">
        <div className="container flex items-center justify-between">
          <ul className='flex items-center gap-3'>
            <li className='list-none'><Link to="/" target='_blanck' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FiYoutube className='text-[15px] group-hover:text-white' /></Link></li>
            <li className='list-none'><Link to="/" target='_blanck' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FaFacebookF className='text-[15px] group-hover:text-white' /></Link></li>
            <li className='list-none'><Link to="https://www.instagram.com/arpitsatishyadav?igsh=bWQ3cDkxY2kyajdj" target='_blanck' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><PiInstagramLogo className='text-[15px] group-hover:text-white' /></Link></li>
            <li className='list-none'><Link to="/" target='_blanck' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FaPinterestP className='text-[15px] group-hover:text-white' /></Link></li>
          </ul>

          <p className='link transition-all cursor-pointer text-[15px]'>© 2025 - Ecommerce software by BlinkBasket</p>

          <div className="flex items-center gap-2">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={paypal} alt="" />
            <img src={carte_bleue} alt="" />
            <img src={americanexpress} alt="" />
          </div>

        </div>
      </div>




      {/* Cart Panel */}
      <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor={"right"} className='cartPanel '>
        <div className="flex items-center justify-between gap-2 px-4 py-2 border-b border-[rgba(0,0,0,0.1)]">
          <h4 className='text-[16px] font-[600]'>Shopping Cart ({context?.cartData?.length})</h4>
          <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]'>
            <RiCloseLargeLine className='text-[18px] cursor-pointer' onClick={context.toggleCartPanel(false)} />
          </Button>
        </div>

        {
          context?.cartData?.length !== 0 ? <CartPanel data={context?.cartData} /> :
            <>
              <div className="flex items-center justify-center flex-col pt-32">
                <img src={emptycart} alt="" className='w-[250px] pb-10' />
                <p className='pb-5 text-[19px] font-[500] text-[#ff5252]'>Yout cart is currently empty</p>
                <Button className='btn-org' onClick={context.toggleCartPanel(false)}>Continue Shopping</Button>
              </div>
            </>
        }


      </Drawer>




      {/* Addresss Panel */}
      <Drawer open={context.openAddressPanel} onClose={context.toggleAddressPanel(false)} anchor={"right"} className='addressPanel '>
        <div className="flex items-center justify-between gap-2 px-4 py-2 border-b border-[rgba(0,0,0,0.1)]">
          <h4 className='text-[16px] font-[600]'>Add Delivery Address </h4>
          <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]'>
            <RiCloseLargeLine className='text-[18px] cursor-pointer' onClick={context.toggleAddressPanel(false)} />
          </Button>
        </div>


        <AddAddress />




      </Drawer>

    </>
  )
}

export default Footer

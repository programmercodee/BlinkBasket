import '../../App.css'
import React, { useContext } from 'react'
import logo from '../../assets/icons/logo.jpg'
import Searchbar from '../Search/searchbar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscGitCompare } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation/index.jsx'
import { MyContext } from '../../App.jsx'
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

//Profile menu dependencies
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { fetchDataFromApi } from '../../utils/api.js'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {

  const context = useContext(MyContext)
  const history = useNavigate()

  const logout = () => {
    setAnchorEl(null)

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

  //Profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className='bg-white select-none'>

        <div className=' p-2 border-2 border-b-0 border-gray-300 '>
          <div className='container flex md:justify-between justify-center items-center md:text-[15px] text-[12px]'>
            <div className="md:block hidden">
              <p className=''>Get up to 50% off new season styles, limited time only</p>
            </div>

            <div >
              <ul className='flex md:gap-4 gap-2 mx-auto'>
                <li>
                  <Link to={'/help-center'}>
                    <p className='link transition cursor-pointer'>Help Center</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/my-orders"}>

                    <p className='link transition cursor-pointer'>Order Treacking</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/terms-and-conditions'}>
                    <p className='link transition cursor-pointer'>Terms & Conditions</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/about-us'}>
                    <p className='link transition cursor-pointer'>About Us</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header md:p-3 md:py-0 py-1  border-2 border-gray-300 ">
          <div className="container flex items-center gap-1">

            <div className="con1  md:w-[25%] w-[20%]">
              <Link to="/">
                <img className='w-32 rounded-lg' src={logo} alt="logo" />
              </Link>
            </div>

            <div className="con2 w-[40%]">
              <Searchbar />
            </div>

            <div className="con3 w-[40%] md:pl-10 pl-0 ">
              <ul className='md:pl-2 flex items-center hh md:gap-5 justify-end gap-1'>
                {/* profile change here */}
                {
                  context.isLogin === false ?
                    (<li className='list-none md:text-[15px] text-[13px]'>
                      <Link to="/login" className='link transition cursor-pointer'>Login</Link> <span className='text-gray-400'>|</span> <Link to="/register" className='link transition cursor-pointer'>Register</Link>
                    </li>)
                    :
                    (
                      <>
                        <Button onClick={handleClick} className='MyAccountWrapper !rounded-lg !text-[#000] flex items-center gap-3 cursor-pointer'>
                          <div className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full overflow-hidden !bg-[#f1f1f1]'>
                            <img className='w-full h-full object-cover' src={`${context?.userData?.avatar}`} alt="" />
                          </div>

                          <div className="info flex-col md:flex hidden">
                            <h4 className='font-[500] text-[14px] text-[rgba(0,0,0,0.8)] mb-0 capitalize text-left'>{context.userData?.name}</h4>
                            <span className='font-[400] text-[10px] text-[rgba(0,0,0,0.5)] capitalize text-left'>{context.userData?.email}</span>
                          </div>
                        </Button>

                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          slotProps={{
                            paper: {
                              elevation: 0,
                              sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                '&::before': {
                                  content: '""',
                                  display: 'block',
                                  position: 'absolute',
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: 'background.paper',
                                  transform: 'translateY(-50%) rotate(45deg)',
                                  zIndex: 0,
                                },
                              },
                            },
                          }}
                          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                          <Link to="/my-account" className='w-full link transition-all'>
                            <MenuItem onClick={handleClose} className='flex gap-3 items-center !py-2'>
                              <FaRegUserCircle className='text-[18px]' /> <span className='text-[14px]'>My Account</span>
                            </MenuItem>
                          </Link>
                          <Link to="/my-orders" className='w-full link transition-all'>
                            <MenuItem onClick={handleClose} className='flex gap-3 items-center !py-2'>
                              <IoBagCheckOutline className='text-[18px]' /> <span className='text-[14px]'>Orders</span>
                            </MenuItem>
                          </Link>
                          <Link to="/my-list" className='w-full link transition-all'>
                            <MenuItem onClick={handleClose} className='flex gap-3 items-center !py-2'>
                              <MdChecklist className='text-[18px]' /> <span className='text-[14px]'> My List</span>
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={logout} className='flex gap-3 items-center !py-2'>
                            <AiOutlineLogout className='text-[18px]' /> <span className='text-[14px]'>Logout</span>
                          </MenuItem>
                        </Menu>

                      </>
                    )
                }

                {/* <li>
                  <Tooltip title="Compare" >
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={1} color="secondary">
                        <VscGitCompare />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li> */}
                <li>
                  <Tooltip title="Cart">

                    <IconButton aria-label="cart" onClick={() => { context.setOpenCartPanel(true) }}>
                      <StyledBadge badgeContent={context?.cartData?.length !== 0 ? context?.cartData?.length : "0"} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>

                  </Tooltip>
                </li>
                <li>
                  <Tooltip title="Wishlist">
                    <Link to="/my-list">
                      <IconButton aria-label="cart">
                        <StyledBadge badgeContent={context?.myListData?.length !== 0 ? context?.myListData?.length : "0"} color="secondary">
                          <FaRegHeart />
                        </StyledBadge>
                      </IconButton>
                    </Link>
                  </Tooltip>
                </li>

              </ul>
            </div>

          </div>
        </div>

        <Navigation />

      </header>

    </>
  )
}

export default Navbar

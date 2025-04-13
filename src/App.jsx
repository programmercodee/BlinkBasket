// Jai Shree Ram jii

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import React, { createContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ProductDetailsComponents from "./components/ProductDetailsComponents";
import Error404 from "./Pages/Error404";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Verify from "./Pages/Verify";

// Toaster dependency
import toast, { Toaster } from "react-hot-toast";

// Dialog dependency
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import ForgetPassword from "./Pages/ForgetPassword";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/MyList";
import Orders from "./Pages/Orders";
import { fetchDataFromApi, postData } from "./utils/api";
import Address from "./Pages/MyAccount/address";
import HelpCenter from "./Pages/HelpCenter";
import TermsandConditions from "./Pages/Terms-and-Conditions";
import AboutUs from "./Pages/About Us";

const MyContext = createContext();

function App() {

  const apiUrl = import.meta.env.VITE_API_URL;

  const [catData, setCatData] = useState([])
  const [cartData, setCartData] = useState([])
  const [myListData, setMyListData] = useState([])

  // Login and logout
  const [isLogin, setIsLogin] = useState(false);
  //ths is used in backend 
  const [userData, setUserData] = useState(null)

  //ths is used in backend for mainting user data
  useEffect(() => {

    const token = localStorage.getItem('accessToken');

    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true)
      getCartData()
      getMyListData()
      getUserDetails()

    } else {
      setIsLogin(false)
    }

  }, [isLogin])

  const getUserDetails = () => {
    //getting all user data.
    fetchDataFromApi(`/api/user/user-details`).then((res) => {
      setUserData(res.data)
      //automati logout if session is end
      if (res?.response?.data?.error === true) {
        if (res?.response?.data?.message === "You have not login.") {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          setIsLogin(false)
          openAlertBox("error", "We miss you!!, Please login again!")
        }
      }

    })
  }




  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      setCatData(res?.data)
      console.log(res?.data?._id)
    })
  }, [])

  // Dialog
  const [openProductDetailModel, setOpenProductDetailModel] = useState({
    open: false,
    item: {}
  });

  const handleOpenProductDetailModel = (status, item) => {
    setOpenProductDetailModel({
      open: status,
      item: item
    });
  }

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const handleCloseProductDetailModel = () => {
    setOpenProductDetailModel({
      open: false,
      item: {}
    });
  };

  // CartPanel
  const [openCartPanel, setOpenCartPanel] = useState(false);
  // CartPanel

  const [openAddressPanel, setOpenAddressPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const toggleAddressPanel = (newOpen) => () => {
    setOpenAddressPanel(newOpen);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };



  const addToCart = (product, userId, quantity) => {
    if (userId === undefined) {
      openAlertBox("error", "You are not login!")
    }

    const data = {
      productTitle: product?.name,
      image: product?.image,
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
      size: product?.size,
      weight: product?.weight,
      ram: product?.ram,
    }



    postData("/api/cart/add", data).then((res) => {
      openAlertBox("success", res?.message)

      getCartData()
      return true

    })

  }

  const getCartData = () => {
    fetchDataFromApi(`/api/cart/get`).then((res) => {
      setCartData(res?.data)
      // console.log(res?.data)
    })
  }


  const getMyListData = () => {
    fetchDataFromApi(`/api/myList/`).then((res) => {
      setMyListData(res?.data)
    })
  }



  // Create Context values
  const values = {
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    setOpenAddressPanel,
    openAddressPanel,
    toggleAddressPanel,
    setOpenProductDetailModel,
    handleOpenProductDetailModel,
    openAlertBox,
    isLogin,
    setIsLogin,
    apiUrl,
    setUserData,
    userData,
    setCatData,
    catData,
    addToCart,
    cartData,
    getCartData,
    myListData,
    setMyListData,
    getMyListData,
    getUserDetails

  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Navbar />
          <Routes>
            <Route path={"/*"} exact={true} element={<Error404 />}></Route>
            <Route path={"/"} exact={true} element={<Home />}></Route>

            <Route
              path={"/products"}
              exact={true}
              element={<ProductListing />}
            ></Route>
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            ></Route>
            <Route path={"/login"} exact={true} element={<Login />}></Route>
            <Route
              path={"/register"}
              exact={true}
              element={<Register />}
            ></Route>
            <Route path={"/cart"} exact={true} element={<Cart />}></Route>
            <Route
              path={"/checkout"}
              exact={true}
              element={<Checkout />}
            ></Route>
            <Route path={"/verify"} exact={true} element={<Verify />}></Route>
            <Route
              path={"/forgetPassword"}
              exact={true}
              element={<ForgetPassword />}
            ></Route>
            <Route
              path={"/my-account"}
              exact={true}
              element={<MyAccount />}
            ></Route>
            <Route path={"/my-list"} exact={true} element={<MyList />}></Route>
            <Route
              path={"/my-orders"}
              exact={true}
              element={<Orders />}
            ></Route>
            <Route
              path={"/address"}
              exact={true}
              element={<Address />}
            ></Route>
            <Route
              path={"/help-center"}
              exact={true}
              element={<HelpCenter />}
            ></Route>
            <Route
              path={"/terms-and-conditions"}
              exact={true}
              element={<TermsandConditions />}
            ></Route>
            <Route
              path={"/about-us"}
              exact={true}
              element={<AboutUs />}
            ></Route>
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/* Toaster */}
      <Toaster />

      {/* Dialog product Component */}
      <Dialog
        open={openProductDetailModel.open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailModel "
      >
        <DialogContent className="!bg-[#fff]">
          <div className="flex items-cnter w-full relative gap-2 ">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-0 right-0"
              onClick={handleCloseProductDetailModel}
            >
              <IoClose className="text-[22px]" />
            </Button>
            {
              openProductDetailModel?.item?.length !== 0 &&
              <>
                <div className="col1 w-[40%]  ">
                  <ProductZoom images={openProductDetailModel?.item?.images} />
                </div>
                <div className="col2 px-  ">
                  <ProductDetailsComponents item={openProductDetailModel?.item} />
                </div>
              </>
            }

          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };

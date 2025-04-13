import React, { useContext, useEffect, useState } from "react";
import shild from "../../assets/icons/shild.png";
import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Verify = () => {

  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };


  const history = useNavigate()
  const context = useContext(MyContext)

  const verifyOTP = (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType")

    if (actionType !== "forgot-password") {
      postData("/api/user/verifyEmail", {
        email: localStorage.getItem("userEmail"),
        otp: otp
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message)
          history("/login")
        } else {
          context.openAlertBox("error", res?.message)
        }
      })
    } else {
      postData("/api/user/verify-forget-password-otp", {
        email: localStorage.getItem("userEmail"),
        otp: otp
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message)
          history("/forgetPassword")
        } else {
          context.openAlertBox("error", res?.message)
        }
      })
    }
  }



  return (
    <section className="py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="flex items-center justify-center">
            <img src={shild} alt="" width={70} />
          </div>
          <h3 className="text-[18px] text-center text-black font-[600]">
            Verify OTP
          </h3>

          <p className="text-[12px] my-4 text-center">OTP Sent to : <span className="text-[14px] text-primary font-bold">{localStorage.getItem("userEmail")}</span></p>


          <form onSubmit={verifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />
            <div className="flex items-center mt-6 px-1">
              <Button type="submit" className="btn-org w-full">Verify OTP</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;

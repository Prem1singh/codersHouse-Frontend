import React, { useContext, useRef, useState } from 'react'
import Card from '../../components/Card';
import Button from '../../components/Button';
import  { context } from '../../Context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyOtp } from '../../http';
export default function Verified() {
  const navigator=useNavigate();
  
    const {registerNumber,setRegisterNumber,setAuth,AuthInfo,setAuthInfo,notify,setUser}=useContext(context);
    const OtpRef=useRef()
    function clickHandler() {
      if(!OtpRef.current.value){
        notify(0,"Please Enter Otp");
        return;
      }
      const result=OtpRef.current.value-1;
      if(!result){
        notify(0,"Only Numbers are allowed");
        return;
      }
     
      if((OtpRef.current.value).length!=6){
        notify(0,"Otp should be 6 digit");
        return;
      }

        verifyOtp(OtpRef.current.value,AuthInfo.phone,AuthInfo.hash)
        .then((success)=>{
              setUser(success.data.user);
                  if (registerNumber < 1) {
                    setRegisterNumber(registerNumber + 1);
                  }else{
                      navigator('/semiAuth/verify');
                  }

            notify(success.data.status,success.data.msg);
            OtpRef.current.value='';    
        })
        .catch((err)=>{
            console.log(err)
        })
      
  }
  return (
    <Card register='true' title="Enter the code we just texted you" logo="/lock.png">
      <ToastContainer/>
    <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]' >
    <input ref={OtpRef} type="text" name="" id="" className=' bg-[#262626] px-4 py-1 ps-[20px] rounded-lg focus-visible:outline-none'/></div>
    <Button onClick={clickHandler}>Next</Button>
    <p className='mt-[15px] text-[#C4C5C5] text-[12px]'>Didn’t receive? Tap to resend</p>
    </Card>
  )
}

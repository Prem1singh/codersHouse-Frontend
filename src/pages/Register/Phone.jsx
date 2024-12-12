import React, { useContext, useRef, useState } from 'react'
import Card from '../../components/Card';
import Button from '../../components/Button';
import { context } from '../../Context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { sendOtp } from '../../http';
function Phone() {
    const [email, setEmail] = useState(true);
    const { registerNumber, setRegisterNumber, setAuthInfo, notify } = useContext(context);
    const PhoneRef = useRef();

    function clickHandler() {
        if (registerNumber < 1) {

            if (!PhoneRef.current.value) {
                notify(0, "Please Enter Mobile Number ");
                return;
            }
            const result = PhoneRef.current.value - 1;


            if (!result) {
                notify(0, "Only Numbers are allowed");
                return;
            }

            if ((PhoneRef.current.value).length != 10) {
                notify(0, "Mobile number should be on 10 digit");
                return;
            }
            sendOtp(PhoneRef.current.value)
                .then((success) => {
                    console.log(success.data)
                    setAuthInfo(success.data)
                    if (success.data.status) {
                        setRegisterNumber(registerNumber + 1);
                    }

                    notify(success.data.status, success.data.msg);
                    PhoneRef.current.value = '';

                })
                .catch((err) => {
                    console.log(err)
                })

        }
    }

    return (
        <div>
            <ToastContainer />
            {email == false ? <Card register='true' title="Enter you phone number" logo="/phone.png">
                <div className='flex absolute top-[-60px] right-[20px] gap-2 '>
                    <div onClick={() => { setEmail(false) }} className={`p-2 flex items-center justify-center rounded-lg cursor-pointer ${email ? 'bg-[#262626]' : 'bg-[#0077FF]'}`}>
                        <img className='h-[30px]' src="/phone_android.png" alt="phone" /></div>
                    <div onClick={() => { setEmail(true) }} className={`p-2  flex items-center justify-center rounded-lg cursor-pointer ${!email ? 'bg-[#262626]' : 'bg-[#0077FF]'}`}><img className='w-[25px]' src="/emailnew.png" alt="email" /></div>
                </div>
                <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]' ><img className='absolute left-[20px] w-[30px] top-[5px]' src="./flag.png" alt="" />
                    <input ref={PhoneRef} placeholder='+91 9823 324223' type="text" name="" id="" className=' bg-[#262626] px-4 py-1 ps-[60px] w-[230px] rounded-lg focus-visible:outline-none' /></div>
                <Button onClick={clickHandler}>Next</Button>
                <p className='mt-[15px] text-[#C4C5C5] text-[12px]'>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
            </Card> :
                <Card register='true' title="Enter your email id" logo="/mail.png">
                    <div className='flex absolute top-[-60px] right-[20px] gap-2 '>
                        <div onClick={() => { setEmail(false) }} className={`p-2 flex items-center justify-center rounded-lg cursor-pointer ${email ? 'bg-[#262626]' : 'bg-[#0077FF]'}`}><img className='h-[30px]' src="/phone_android.png" alt="" /></div>
                        <div onClick={() => { setEmail(true) }} className={`p-2 flex items-center justify-center rounded-lg cursor-pointer ${!email ? 'bg-[#262626]' : 'bg-[#0077FF]'}`}><img className='w-[25px]' src="/emailnew.png" alt="" /></div>
                    </div>
                    <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]'>
                        <input type="email" placeholder='codersgyan@gmail.com' name="" id="" className=' bg-[#262626] px-4 py-1 w-[230px] rounded-lg focus-visible:outline-none' /></div>
                    <Button onClick={clickHandler}>Next</Button>
                    <p className='mt-[15px] text-[#C4C5C5] text-[12px]'>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
                </Card>
            }
        </div>
    )
}

export default Phone;
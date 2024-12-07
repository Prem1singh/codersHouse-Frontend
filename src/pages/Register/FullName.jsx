import React, { useContext, useRef, useState } from 'react'
import Card from '../../components/Card';
import Button from '../../components/Button';
import  { context } from '../../Context/context';

export default function FullName() {
    const inpRef=useRef()
    const {registerNumber,setRegisterNumber,setFullName}=useContext(context);
    function clickHandler(){
      setFullName(inpRef.current.value)
        if(registerNumber<3&&inpRef.current.value!=''){
            setRegisterNumber(registerNumber+1);
        }
    }
  return (
    <Card register='true' title="What’s your full name?" logo="/fullname.png">
    <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]' >
    <input ref={inpRef} placeholder='Your name' type="text" name="" id="" className=' bg-[#262626] px-4 py-1  rounded-lg focus-visible:outline-none'/></div>
    <Button onClick={clickHandler}>Next</Button>
    <p className='mt-[15px] text-[#C4C5C5] text-[12px] '>People use real names at <br/> codershouse :) </p>
    </Card>
  )
}

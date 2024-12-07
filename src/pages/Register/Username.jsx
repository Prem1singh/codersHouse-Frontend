import React, { useContext, useState } from 'react'
import Card from '../../components/Card';
import Button from '../../components/Button';
import  { context } from '../../Context/context';
export default function Username() {
    const {registerNumber,setRegisterNumber}=useContext(context);
    function clickHandler(){
        if(registerNumber<4){
            setRegisterNumber(registerNumber+1);
        }
    }
  return (
    <Card register='true' title="Pick a username" logo="/userName.png">
    <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]' >
    <input placeholder='@' type="text" name="" id="" className=' bg-[#262626] px-4 py-1 rounded-lg focus-visible:outline-none'/></div>
    <Button onClick={clickHandler}>Next</Button>
    <p className='mt-[15px] text-[#C4C5C5] text-[12px] '>Username can be used for the login</p>
    </Card>
  )
}

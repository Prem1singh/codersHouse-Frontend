import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/Card';
import { context } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Activation() {
  const navigator=useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      navigator("/auth/rooms")
    }, 1000);
  },[])
  return (
    <Card register='true'>
        <div className='mt-[80px] w-[50px] h-[50px] rounded-full border-4 border-blue-700 border-r-slate-400 mx-auto animate-spin mb-[30px]'></div>
        <p>Activation in progress ...</p>
    </Card>
  )
}

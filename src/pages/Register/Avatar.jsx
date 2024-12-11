import React, { useContext, useRef, useState } from 'react'
import Card from '../../components/Card';
import Button from '../../components/Button';
import  { context } from '../../Context/Context';
import axios from 'axios'
import { profileVerify } from '../../http';
export default function Avatar() {
    const {registerNumber,setRegisterNumber,fullName,setUser}=useContext(context);
    function clickHandler(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', imgRef.current.files[0]);
      formData.append('FullName', fullName);
        profileVerify(formData)
        .then((success) => {
          console.log(success);
          if(success.data.status==1){
            setUser(success.data.user);
            if(success.data.user.Activated==true){
              setRegisterNumber(registerNumber+1);
            }
          }else{
            setUser(null);
            navigator('/');
          }
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const imgRef=useRef();
    const ChangeHandler=(e)=>{
      const file = e.target.files[0]; // Get the selected file
      if (file) {
        const reader = new FileReader(); // Initialize FileReader
        reader.onload = (event) => {
          setImgSrc(event.target.result); // Set the preview image src
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
      }
    }
  const [imgSrc,setImgSrc]=useState('/avatar.png')
  return (
    <Card register='true' title={`Okay, ${fullName} !`} logo="/monkey.png">
    <form action="" encType="multipart/form-data">
    <div className='mt-6 relative w-[230px] mx-auto  mb-[15px]' >
   
    <input onChange={ChangeHandler} ref={imgRef} type="file" name="avatar" id="avatar" className='hidden bg-[#262626] px-4 py-1  rounded-lg focus-visible:outline-none'/></div>
    <div className='w-[100px] h-[100px] rounded-full  border-4 border-blue-500 overflow-hidden mx-auto'><img className='w-[100px] h-[100px]' src={imgSrc} alt="" /></div>
    <label  htmlFor='avatar' className='block mt-[15px] cursor-pointer text-[12px] text-[#0077FF]'>Choose a different photo </label>
    <Button onClick={clickHandler}>Next</Button>
    </form>
    </Card>
  )
}

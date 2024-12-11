import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../Context/context'
import { IoMdExit } from "react-icons/io";
import { logout } from '../http';

const Header = () => {
  const {user,setUser}=useContext(context);
  function logoutHandler(){
    logout()
    .then((success)=>{
      if(success.data.status==1){
        setUser(null)
      }
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  return (
    <div className='w-[90vw] mx-auto p-5 flex justify-between'>
        <Link className='flex gap-3 items-center'><img className='w-[30px]' src="/logo.png" alt="" />
        <span>Codershouse</span>
        </Link>
        {
        
          user?.Activated?<div className='flex gap-4 items-center'>{ user.fullName} <img className='h-[30px] w-[30px] rounded-full border-2 border-blue-500' src={`http://localhost:5300${user.Avatar}`} alt="" /> <IoMdExit onClick={logoutHandler} className='text-[25px] cursor-pointer' /></div>:''
        
          
        }
       
    </div>
  )
}

export default Header
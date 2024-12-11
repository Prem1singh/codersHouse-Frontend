import React, { useContext, useEffect, useState } from 'react'
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';
import { context } from './Context/context';
import { getRooms, getUsers } from './http';

const Root = () => {
    
    const [loader,setLoader]=useState(true)
    const {setUser,setRooms}=useContext(context);
    useEffect(()=>{
      getUsers()
      .then((success)=>{
        if(success.data.status==1){
          setUser(success.data.user);
          setLoader(false)
        }else{
          setUser(null);
          setLoader(false)
        }
        
      })
      .catch((err)=>{
        setLoader(false)
        console.log(err.message)
        // console.log(err.message)
      })
      
    },[])
    useEffect(()=>{
      getRooms()
      .then((success)=>{
        setRooms(success.data.rooms)
      })
      .catch((err)=>{
        console.log(err.message)
      })
    },[])
  return (
    <>
    {loader?<div className='flex items-center justify-center min-h-[100vh] font-[bold] text-[30px]'>Loading...</div>:<div> <Header/>
    <Outlet/>
    </div>
       
    }
    </>
  )
}

export default Root
import React, { useContext, useEffect } from 'react'
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { context } from '../../Context/context';
import { getRooms, getUsers } from '../../http';

const Root = () => {
    const load=false;
    const {setUser,setRooms}=useContext(context);
    useEffect(()=>{
      getUsers()
      .then((success)=>{
        if(success.data.status==1){
          setUser(success.data.user);
        }else{
          setUser(null);
        }
       
      })
      .catch((err)=>{
        console.log(err.message)
      })
    },[])
    useEffect(()=>{
      getRooms()
      .then((success)=>{
        setRooms(success.data.rooms)
      })
    },[])
  return (
    <>
    {load?<div className='flex items-center justify-center min-h-[100vh] font-[bold] text-[30px]'>Loading...</div>:<div> <Header/>
    <Outlet/>
    </div>
       
    }
    </>
  )
}

export default Root
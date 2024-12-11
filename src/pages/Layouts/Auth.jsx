import React, { useContext, useEffect } from 'react'
import { context } from '../../Context/Context'
import { Navigate, Outlet } from 'react-router-dom';
import { getUsers } from '../../http';



const Auth = () => {
    const {user,setUser}=useContext(context);
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
  return (
    (!user?<Navigate to={'/noAuth'}/>:!user?.Activated?<Navigate to={'/semiAuth/verify'}/>:<Outlet/>)
  )
}

export default Auth
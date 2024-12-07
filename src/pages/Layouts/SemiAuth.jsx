import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { context } from '../../Context/context';

function SemiAuth() {
    const {user}=useContext(context);
    console.log(user);
  return (
    !user?<Navigate to={'/noAuth/register'}/>:user?.Activated?<Navigate to={'/auth/rooms'}/>:<Outlet/>
  )
}

export default SemiAuth
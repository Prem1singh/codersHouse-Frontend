import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { context } from '../../Context/Context';

function SemiAuth() {
    const {user}=useContext(context);
  return (
    !user?<Navigate to={'//register'}/>:user?.Activated?<Navigate to={'/auth/rooms'}/>:<Outlet/>
  )
}

export default SemiAuth
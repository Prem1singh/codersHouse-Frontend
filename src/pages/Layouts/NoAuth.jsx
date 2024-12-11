import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../Context/Context'
import { Navigate, Outlet } from 'react-router-dom';



const NoAuth = () => {
  const {user}=useContext(context);
  
  return (
    user?<Navigate to={'/semiAuth/verify'}/>:
      <Outlet/>
  )
}

export default NoAuth
import React, { createContext, useState } from 'react'
import {toast} from 'react-toastify'
export const context = createContext();
function Context(props) {


  const [Verified,setVerified]=useState(false);
  const [Auth,setAuth]=useState(false);
  const [registerNumber, setRegisterNumber] = useState(0);
  const [user, setUser] = useState(null);
  const [AuthInfo,setAuthInfo]=useState(null)
  const [fullName,setFullName]=useState('Prem Singh')
  const [rooms,setRooms]=useState([]);
  const [baseUrl,setBaseUrl]=useState('https://codershouse-backend.vercel.app');
  const [singleRoom,setSingleRoom]=useState({});
  const [roomId,setRoomId]=useState('')
  const notify = (status,msg) => toast(msg,{type:status?'success':'error'});
  return (
    <context.Provider value={{ registerNumber, setRegisterNumber, user, setUser,Auth,Verified ,setVerified,setAuth,AuthInfo,setAuthInfo,notify,fullName,setFullName,rooms,setRooms,baseUrl,singleRoom,setSingleRoom,roomId,setRoomId}}>
      {props.children}
    </context.Provider>
  )
}

export default Context
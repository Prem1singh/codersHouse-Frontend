
import { useContext, useEffect } from 'react'
import FullName from './Register/FullName'
import Avatar from './Register/Avatar'
import Username from './Register/Username'
import Activation from './Register/Activation'
import { context } from '../Context/Context'
const Steps={
 
    0:<FullName/>,
    1:<Avatar/>,
    2:<Activation/>,
}

function Verify() {
    const {registerNumber,setRegisterNumber}=useContext(context);
    useEffect(()=>{
      setRegisterNumber(0);
    },[])
  
  return (
    
    <div className=' flex items-center justify-center h-[85vh]  '>
    {Steps[registerNumber]}
    </div>
  )
}

export default Verify
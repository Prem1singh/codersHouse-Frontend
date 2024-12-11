import { useContext } from 'react'
import { context } from '../Context/Context'
import Phone from './Register/phone';
import Verified from './Register/Verified';
const Steps={
    0:<Phone/>,
    1:<Verified/>,
}

function Register() {
    const {registerNumber}=useContext(context);
  return (
    
    <div className=' flex items-center justify-center h-[85vh]  '>
    {Steps[registerNumber]}
    </div>
  )
}

export default Register
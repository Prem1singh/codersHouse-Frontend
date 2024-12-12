import React from 'react'

const Card = (props) => {
  return (
    <div className={`md:w-[500px] w-[90vw] ${props.register?'md:h-[350px]':'md:h-[400px]'} pb-5 text-center bg-[#1D1D1D] rounded-2xl md:p-4 md:py-8 relative py-2`}>
        <div className=' flex w-[100%] justify-center my-5'><img className='w-[20px] me-3' src={props.logo} alt="" /> {props.title}</div>
        <div className='md:px-14 px-4 mx-auto mt-7'> {props.children}</div>
       
    </div>
  )
}

export default Card
import React from 'react'

const Card = (props) => {
  return (
    <div className={`w-[500px] ${props.register?'h-[350px]':'h-[400px]'} text-center bg-[#1D1D1D] rounded-2xl p-4 py-8 relative`}>
        <div className='flex w-[100%] justify-center my-5'><img className='w-[20px] me-3' src={props.logo} alt="" /> {props.title}</div>
        <div className='px-14 mx-auto mt-7'> {props.children}</div>
       
    </div>
  )
}

export default Card
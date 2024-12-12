import React from 'react'

function Button(props) {
  return (
    <div onClick={props.onClick} className='min-w-[150px] cursor-pointer px-2 text-[14px]  py-2 inline-block bg-[#0077FF] rounded-3xl  font-[600] mt-4'>{props.children}</div>
  )
}

export default Button
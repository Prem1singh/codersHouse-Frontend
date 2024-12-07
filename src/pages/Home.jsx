import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigator=useNavigate();
  function onclickHandler(){
      navigator('/noAuth/register');
  }
  return (
    <div className='flex items-center justify-center h-[85vh] '><Card title="Welcome to Codershouse!" logo="./logo.png">
        <p  className='text-center text-[#C4C5C5] text-[20px]'>We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
        <Button onClick={onclickHandler} >
        Get your username <img className='mt-[2px] w-[20px] float-end ms-2' src="./arrow.png" alt="" />
        </Button>
        <p className='mt-5 text-[#0077FF] '>Have an invite text? <Link className='ms-2'>Sign in</Link></p>
        </Card></div>
  )
}

export default Home
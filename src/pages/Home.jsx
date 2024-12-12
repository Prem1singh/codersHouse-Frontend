import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigator=useNavigate();
  function onclickHandler(){
      navigator('/register');
  }
  return (
    <div className='flex items-center justify-center h-[85vh] '><Card title="Welcome to Codershouse!" logo="./logo.png">
        <p  className='text-center text-[#C4C5C5] md:text-[20px]'>We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
        <Button onClick={onclickHandler} >
        Get your username <img className='mt-[2px] w-[20px] float-end ms-2' src="./arrow.png" alt="" />
        </Button>
        </Card></div>
  )
}

export default Home
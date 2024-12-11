import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createRoom, getRooms, joinRoom } from '../http'
import { context } from '../Context/context'

export const Rooms = () => {
    const {user,rooms,setRooms,baseUrl,roomId,setRoomId}=useContext(context)
    const [roomType,setRoomType]=useState('open')
    const [topic,setTopic]=useState('')
    const [show,setShow]=useState(false);
    const navigator=useNavigate();
    const join=(id)=>{
        joinRoom(id,user._id)
        .then((success)=>{
            if(success.data.status==1){
            navigator(`/auth/room/${id}`);
        }
        })
       

    }
    useEffect(()=>{
        getRooms()
        .then((success)=>{
          setRooms(success.data.rooms)
        })
      },[])
     useEffect(()=>{
        const lsId=localStorage.getItem("roomId");
        if(lsId){
            navigator(`/auth/room/${lsId}`);
        }
     },[])
    function create(e){
        if(!roomType&&!topic&&!user._id){
            return;
        }
        createRoom(roomType,topic,user._id)
        .then((success)=>{
            setRooms(success.data.allRooms)
            setShow(false);
        })
    }
    return (
        <div className=' h-[85vh] border-t border-t-[#504f4f]'>
            {/* create room popup */}
            {
                show?<div className='w-[100vw] h-[100vh] bg-[#000000a5] absolute top-0 left-0 flex items-center justify-center z-50'>
                <div className='h-[500px] w-[500px] bg-[#1D1D1D] rounded-3xl'>
                    <div className='p-6'>
                        <div ><img onClick={()=>{setShow(false)}} className='ms-auto cursor-pointer' src="/close.png" alt="" /></div>
                        <p className='font-bold text-[20px]'>Enter the topic to be disscussed</p>
                        <input onChange={(e)=>{setTopic(e.target.value)
                        }} type="text" className='bg-[#262626] focus-visible:outline-none p-3 my-3 w-[90%] rounded-xl' />
                        <div >
                            <p className='font-bold text-[20px] mb-4'>Room type</p>
                            <div className='flex justify-between'>
                                <div onClick={()=>{setRoomType('open')}} className={`cursor-pointer text-center w-[120px] h-[120px] p-2 ${roomType=='open'?'bg-[#262626] rounded-2xl':''}`}>
                                   
                                    <img className=' mx-auto' src="/open.png" alt="" />
                                  
                                    <p className='mt-3 inline'>Open</p>
                                </div>
                                <div onClick={()=>{setRoomType('social')}} className={`cursor-pointer text-center w-[120px] h-[120px] p-2 ${roomType=='social'?'bg-[#262626] rounded-2xl':''}`}>
                                   
                                    <img className=' mx-auto' src="/social.png" alt="" />
                                  
                                    <p className='mt-3 inline'>Social</p>
                                </div>
                                <div  onClick={()=>{setRoomType('closed')}} className={`cursor-pointer text-center w-[120px] h-[120px] p-2 ${roomType=='closed'?'bg-[#262626] rounded-2xl':''}`}>
                                   
                                    <img className=' mx-auto' src="/closed.png" alt="" />
                                  
                                    <p className='mt-3 inline'>Closed</p>
                                </div></div>
                        </div>
                    </div>
                   <div className='w-full bg-[#262626] h-[2px]'></div>
                    <div className='p-5'>
                    <p className='font-[600] text-[20px] text-center'>Start a room, open to everyone</p>
                    <div onClick={create} className='cursor-pointer flex gap-2 mx-auto w-[160px] mt-8 bg-[#20BD5F] px-4 py-2 rounded-3xl justify-center'><img src="/celebrate.png" alt="" />Let’s Go</div>
                    </div>
                </div>
            </div>:''
            }
            
            <div className='flex justify-between max-w-[90vw] mx-auto px-4 py-7 '>
                <div className='flex gap-4 relative'><div className='font-bold'>All voice rooms <div className='absolute h-[3px] w-[70px] bg-[#0077FF] bottom-[-3px] '></div></div>
                    <div className='relative'>
                        <img className='absolute top-[5px] left-[10px]' src="/search.png" alt="" />
                        <input className='bg-[#262626] rounded-3xl px-3 py-1 w-[250px] ps-[40px]' type="text" /></div></div>
                <div>
                    <div onClick={()=>{setShow(true)}}  className='cursor-pointer flex items-center justify-center gap-2 bg-[#20BD5F] rounded-3xl px-3 py-1'><img src="/startRoom.png" alt="" /> Start a room</div>
                </div>
            </div>
            <div className='flex max-w-[90vw] mx-auto px-4 py-7 flex-wrap gap-2 '>
                {
                    rooms.map((room)=>{
                        console.log(room.listners)
                        const member=(room.listners?room.listners.length+room.speakers.length:room.speakers.length)
                        console.log(member)

                        return(
                            <div onClick={()=>{join(room._id)}} key={room._id}  className='relative w-[250px] h-[170px] bg-[#1D1D1D] rounded-2xl p-3 cursor-pointer'>
                    <p>{room.name}</p>
                    <div className='mt-[10px]'>
                        <div className='relative'>
                            <img className='absolute w-[35px] h-[35px] border-2 rounded-full border-[#0077FF]' src={`${baseUrl}${room.speakers[0].Avatar}`} alt="" />
                            {
                                room.speakers[1]?<img className=' border-2 rounded-full border-[#20BD5F] absolute w-[35px] h-[35px] top-[20px] z-[10] left-[10px]' src="/lest5.png" alt="" />:''
                            }
                            
                        </div>
                        <div className='ms-[70px]'>
                        <div className='flex items-center justify-start gap-2'><span>{room.speakers[0]?.fullName}</span><img src="/msg.png" alt="" /></div>
                        {
                            room.speakers[1]? <div className='flex items-center justify-start gap-2'><span>{room.speakers[1]?.fullName}</span><img src="/msg.png" alt="" /></div>:''
                           
                        }
                        
                           
                        </div>
                    </div>
                    <div className='flex items-center absolute bottom-3 right-4 gap-3'>{member}<img src="/user.png" alt="" /></div>
                </div >
                        )
                    })
                }
            </div>

        </div>
    )
}


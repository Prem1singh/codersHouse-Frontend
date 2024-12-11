import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getSingleRoom, leaveRoom } from '../http';
import { context } from '../Context/context';

export const SingleRoom = () => {
    const navigator = useNavigate();
    const { singleRoom, setSingleRoom, baseUrl ,user} = useContext(context);

    const { id } = useParams();
    const colors = [
        "#FF6F61", // Coral
        "#6A67CE", // Soft Lavender
        "#4CC9F0", // Sky Blue
        "#FFA69E", // Pastel Peach
        "#8BC34A", // Lime Green
        "#FFD166", // Golden Yellow
        "#F4A261", // Warm Orange
        "#FF9AA2", // Blush Pink
        "#A0C4FF", // Light Blue
        "#FFD3E0"  // Light Pink
    ]
    useEffect(() => {
        localStorage.setItem('roomId', id);
        getSingleRoom(id)
            .then((success) => {
                if (success.data.status == 1) {
                    setSingleRoom(success.data.singleRoom);
                    console.log(success.data.singleRoom)
                } else {
                    console.log('status problem')
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const speak=()=>{

    }
    const back=()=>{
        leaveRoom(singleRoom._id,user._id)
        .then((success)=>{
            if(success.data.status==1){
                localStorage.removeItem('roomId')
                navigator('/auth/rooms')
            }
        })
        
        
    }
    return (
        <div className=' h-[85vh] border-t border-t-[#504f4f]'>
            <div className='max-w-[90vw] mx-auto px-4 py-7 '>
                <div className='flex gap-4 relative'><div className='font-bold flex gap-3 items-center'><img onClick={back} src="/backArrow.png" alt=" back" /> All voice rooms <div className='absolute h-[3px] w-[70px] bg-[#0077FF] bottom-[-5px] left-[25px] '></div></div>

                </div>


            </div>

            <div className='mt-10 w-full min-h-[77vh] p-7 bg-[#202020]'>
                <div className='flex justify-between'><div className='font-bold'>{singleRoom.name}</div><div className='flex items-center gap-5 me-10'><img src="/hand.png" onClick={speak} className='p-3 px-4 bg-[#2d2d2d] rounded-full cursor-pointer' alt="" /><div className='flex gap-3 items-center p-3 px-5 bg-[#2d2d2d] rounded-full font-bold cursor-pointer' onClick={back}><img src="/leave.png" alt="" />Leave quietly</div></div></div>
                <div className='flex gap-4 items-center flex-wrap mt-3 mb-6'>{singleRoom?.speakers?.map((sp, i) => {
                    
                    return (
                        <div key={i} className='flex-col text-center'><div><img className={`w-[70px] h-[70px] border-4 rounded-full  `} style={sp._id==singleRoom.ownerId?{boxShadow:"0px 0px 20px rgba(255, 255, 255, 1)" }:{borderColor: colors[i % colors.length]}} src={`${baseUrl}${sp.Avatar}`} alt="" /></div>{sp.fullName.split(" ")[0]}</div>

                    )
                })}</div>
                <div >
                    <div className='font-bold my-3'>Other in the Room</div>
                    <div className='flex gap-4 items-center flex-wrap mt-3 mb-6'>{singleRoom?.listners?.map((list, i) => {
                        return (
                            <div key={i} className='flex-col text-center'><div><img className={`w-[70px] h-[70px] border-4 rounded-full`} style={{ borderColor: colors[i % colors.length] }} src={`${baseUrl}${list.Avatar}`} alt="" /></div>{list.fullName.split(" ")[0]}</div>
                        )
                    })}</div>
                </div>
            </div>
        </div>
    )
}


import { createSlice } from "@reduxjs/toolkit"

const Auth=createSlice({
    name:"Auth",
    initialState:{
        user:null,
        isAuth:null,
        otp:{
            
        }
    },
    reducers:{
        Login(currentState,payload){
            currentState.user=payload.user
           
        }
    }
})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const option = {
    Accept:'application/json',
    'Content-Type':'application/json'
    }

export const getRegisterData = createAsyncThunk('userData',async()=>{
    try{ const data =  await axios.get(`https://api-o3e9.onrender.com/getUserData`,{headers:option})
 
    console.log(data)
    return  data.data
    }catch(error){
       console.log(error)
    }
}

)
const userDataSlice = createSlice(({
    name:'data',
    initialState:{
        isLoading:false,
        registerData:[],
        isError:false
    },
    reducers:{
        
    },
    extraReducers:builder=>{
        builder.addCase(getRegisterData.pending,(state)=>{
            state.isLoading= true

        })
        builder.addCase(getRegisterData.fulfilled,(state,{payload})=>{
            
            state.isLoading = false
            state.registerData = payload
           state.isError = false
    
    
    })
    builder.addCase(getRegisterData.rejected,(state)=>{
        state.isLoading = false
        state.isError = true
    })

}
}))
export default userDataSlice.reducer

import {  createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import axios from "axios"

const initialState = {
   isLoading:false,
   userData:[],
   isError:false

}



export const userRegisterData = createAsyncThunk('userData',async(body)=>{
    try{
        const data = await axios.post('/register',body )
    
       return  data.data


    }catch(error){
        console.log(error)
    }
})

const registerSlice = createSlice(({
    name:'register',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(userRegisterData.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(userRegisterData.fulfilled,(state,{payload} )=>{
          
                    state.isLoading = false
                    
                    state.userData =  payload
                 
                         
                    state.isError = false
          
        })
        builder.addCase(userRegisterData.rejected,(state)=>{
            state.isLoading = false
            state.isError = true
          
        })
    }
}))
export default registerSlice.reducer

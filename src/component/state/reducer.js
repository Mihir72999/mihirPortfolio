import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchNodeData = createAsyncThunk('addData',async(body)=>{
   try{

       const {data} = await axios.post('/login',body )
        return await data

   }catch(error){
    console.log(error)
   }
})
const userSlice = createSlice(({
    name:'message',
    initialState:{
        isLoading:false,
        fetchData:[],
        isError:false
    }, 
    reducers:{
        
    },
    extraReducers:builder=>{
        builder.addCase(fetchNodeData.pending,(state)=>{
            state.isLoading= true

        })
     
        builder.addCase(fetchNodeData.fulfilled,(state,{payload})=>{
            
            state.isLoading = false
            state.fetchData = payload
           state.isError = false


    })

        builder.addCase(fetchNodeData.rejected,(state)=>{
            state.isLoading = false
            state.isError = true
        })
    
    }
}))
export default userSlice.reducer

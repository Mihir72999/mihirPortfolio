import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from '../reducer'
import registerSlice from '../registerReducer'
import userDataSlice from '../getDataReducer'

const reducer = combineReducers({
  users: userSlice,
  register:registerSlice,
  getData:userDataSlice
})
const store = configureStore({reducer})
export default store
import { combineReducers } from "@reduxjs/toolkit";
import  AuthSlice  from "./Slices/auth/AuthSlice";
const rootReducer = combineReducers({
    AuthSlice
})

export default rootReducer; 
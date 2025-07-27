import { combineReducers } from "@reduxjs/toolkit";
import  AuthSlice  from "./Slices/auth/AuthSlice";
import PatientSlice  from "./Slices/patient/PatientSlice";
import InquirySlice from "./Slices/inquiry/InquirySlice";
import HospitalSlice from "./Slices/hospital/HospitalSlice";
const rootReducer = combineReducers({
    AuthSlice,
    PatientSlice,
    InquirySlice,
    HospitalSlice,
})

export default rootReducer; 
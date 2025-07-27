import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../../config/Config";
import Cookies from "js-cookie";
import instance from "../../../config/Config";

const initialState = {
  loading: false,
  dashboard: null,
  error: null,
  hosptalProfile: null,
  hospitalResponse: null,
};

export const fetchDashboard = createAsyncThunk("fetchDashboard", async (data) => {
  try {
    const response = await instance.get("hospital/get-dashboard");
    return response?.data;
  } catch (error) {
    return error;
  }
});


export const HospitalSlice = createSlice({
  name: "HospitalSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboard = action.payload;
    });
    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export default HospitalSlice.reducer;

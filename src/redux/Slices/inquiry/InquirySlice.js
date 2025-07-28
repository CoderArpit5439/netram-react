import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../../config/Config";
import Cookies from "js-cookie";
import instance from "../../../config/Config";

const initialState = {
  loading: false,
  inquiryList: null,
  error: null,
  inquiryResponse: null,
};

export const fetchInquiry = createAsyncThunk("fetchInquiry", async (data) => {
  try {
    const response = await instance.get("inquiry/get-inquiry");
    return response?.data;
  } catch (error) {
    return error;
  }
});


export const InquirySlice = createSlice({
  name: "InquirySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInquiry.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(fetchInquiry.fulfilled, (state, action) => {
      state.loading = false;
      state.inquiryList = action.payload;
    });
    builder.addCase(fetchInquiry.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export default InquirySlice.reducer;

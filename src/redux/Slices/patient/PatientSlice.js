import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../../config/Config";
import Cookies from "js-cookie";
import instance from "../../../config/Config";

const initialState = {
  loading: false,
  data: null,
  error: null,
  logoutData: null,
  patientList: null,
  patientResponse: null,
    followupList: null,
    followupResponse: null,
};

export const fetchPatient = createAsyncThunk("fetchPatient", async (data) => {
  try {
    const response = await instance.get("patients/get-patients");
    return response?.data;
  } catch (error) {
    return error;
  }
});

export const addPatient = createAsyncThunk("addPatient", async (data) => {
  try {
    const response = await instance.post("patients/create-patient", data);
    return response?.data;
  } catch (error) {
    return error;
  }
});

export const UpdateSinglePatient = createAsyncThunk("UpdateSinglePatient", async (data) => {
  try {
    const response = await instance.post(
      `patients/update-patient?id=${data?.id}`,
      data?.body
    );
    console.log("Update Patient:",data);
    return response?.data;
  } catch (error) {
    return error;
  }
});

export const getFollowupList = createAsyncThunk("followupList", async (data) => {
  try {
    const response = await instance.get("patients/get-follow-up");
    return response?.data;
  } catch (error) {
    return error;
  }
});

export const PatientSlice = createSlice({
  name: "PatientSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatient.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(fetchPatient.fulfilled, (state, action) => {
      state.loading = false;
      state.patientList = action.payload;
    });
    builder.addCase(fetchPatient.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(addPatient.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(addPatient.fulfilled, (state, action) => {
      state.loading = false;
      state.patientResponse = action.payload;
    });
    builder.addCase(addPatient.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(UpdateSinglePatient.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(UpdateSinglePatient.fulfilled, (state, action) => {
      state.loading = false;
      state.patientResponse = action.payload;
    });
    builder.addCase(UpdateSinglePatient.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getFollowupList.pending, (state, action) => {
      state.logoutData = null;
      state.loading = true;
    });
    builder.addCase(getFollowupList.fulfilled, (state, action) => {
      state.loading = false;
      state.followupList = action.payload;
    });
    builder.addCase(getFollowupList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export default PatientSlice.reducer;

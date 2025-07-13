import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import instance from "../../../config/Config";
import Cookies from 'js-cookie';
import instance from "../../../config/Config";

const initialState = {
    loading: false,
    data: null,
    error: null,
    logoutData: null,
}

export const loginAuth = createAsyncThunk(
    "loginAuth",
    async (data) => {

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("role", data.role);
        // formData.append("ipAddress", data.ipAddress);
        try {
            const response = await instance.post("/login", formData);
            if (response?.data?.token) {
                const now = new Date();
                const midnight = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1)); // Midnight of the next day
                Cookies.set('enetramToken', response.data.token, { expires: midnight }); // Expires in 1 days
                Cookies.set('role', data.role, { expires: midnight }); // Expires in 1 days
            }
            return response?.data;

        } catch (error) {
            return error;
        }
    })

export const logoutAuth = createAsyncThunk(
    "logoutAuth",
    async () => {
        try {
            const response = await instance.post("/crm/attendances/employee-checkout");
            // Remove a cookie
            
            Cookies.remove('enetramToken');
            localStorage.removeItem("enetramToken")
            return response?.data
        } catch (error) {
            return error;
        }
    }
)

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(loginAuth.pending, (state, action) => {
            state.logoutData = null;
            state.loading = true;
        });
        builder.addCase(loginAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(loginAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(logoutAuth.pending, (state, action) => {
            state.data = null;
            state.loading = true;
        });
        builder.addCase(logoutAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.logoutData = action.payload;
        });
        builder.addCase(logoutAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }

})

export default AuthSlice.reducer;
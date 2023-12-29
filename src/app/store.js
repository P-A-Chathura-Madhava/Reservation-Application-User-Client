import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import bookingReducer from "../features/booking/bookingSlice"

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    bookingSlice: bookingReducer,
   },
});

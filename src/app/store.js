import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import bookingReducer from "../features/booking/bookingSlice";
import seatClassReducer from "../features/seatClass/seatClassSlice";
import trainsReducer from "../features/train/trainSlice";

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    bookingSlice: bookingReducer,
    seats: seatClassReducer,
    trains: trainsReducer,
   },
});

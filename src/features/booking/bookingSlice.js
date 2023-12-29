import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "",
  to: "",
  passengers: "",
  departureDate: "",
  returnDate: ""
};

const bookingSlice = createSlice({
  name: "booking" /* slice name */,
  initialState,
  reducers: {
    /* one reducer for each action */
    assignValues: (state, action) => 
    // {
    //     console.log(action.payload.from);
    // }
    ({
        from: action.payload.from,
        to: action.payload.to,
        passengers: action.payload.passengers,
        departureDate: action.payload.departureDate,
        returnDate: action.payload.returnDate
    }),
    // decrement: (state, action) => ({
    //   number: state.number - action.payload,
    // }),
  },
});

export const { assignValues } = bookingSlice.actions;
export default bookingSlice.reducer;

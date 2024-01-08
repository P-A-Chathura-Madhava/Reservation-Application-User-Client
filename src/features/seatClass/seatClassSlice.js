import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import seatClassService from "./seatClassService";

export const getAllSeatClasses = createAsyncThunk(
  "seatClass/get-seatClasses",
  async (thunkAPI) => {
    try {
      return await seatClassService.getSeatClasses();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("RevertAll");

const initialState = {
  seatClasses: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const seatClassSlice = createSlice({
  name: "seatClasses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSeatClasses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSeatClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.seatClasses = action.payload;
      })
      .addCase(getAllSeatClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default seatClassSlice.reducer;
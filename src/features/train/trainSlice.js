import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import trainService from "./trainService";

export const getAllTrains = createAsyncThunk(
  "train/get-trains",
  async (thunkAPI) => {
    try {
      return await trainService.getTrains();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("RevertAll");

const initialState = {
  trains: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const trainSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrains.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTrains.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.trains = action.payload;
      })
      .addCase(getAllTrains.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default trainSlice.reducer;
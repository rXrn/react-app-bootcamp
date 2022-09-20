import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as lockerAPI from "../api/lockerAPI";

const initialState = {
  lockers: [],
  isLoading: true,
  action: new Date().getTime(),
};

export const fetchLockers = createAsyncThunk("lockers/getAll", async () => {
  const lockerData = await lockerAPI.getAllLockers();
  return lockerData;
});

export const putShoes = createAsyncThunk("lockers/putShoes", async (locker) => {
  const lockerData = await lockerAPI.putShoes(locker);
  console.log(lockerData);
  window.location.reload(false);
  return lockerData;
});

export const takeShoes = createAsyncThunk(
  "lockers/takeShoes",
  async (locker) => {
    const lockerData = await lockerAPI.takeShoes(locker);
    window.location.reload(false);
    return lockerData;
  }
);

export const createLocker = createAsyncThunk(
  "lockers/create",
  async (locker) => {
    const lockerData = await lockerAPI.createLocker(locker);
    return lockerData;
  }
);

export const openLocker = createAsyncThunk(
  "lockers/openLocker",
  async (locker) => {
    const lockerData = await lockerAPI.openLocker(locker);
    return lockerData;
  }
);

export const closeLocker = createAsyncThunk(
  "lockers/closeLocker",
  async (locker) => {
    const lockerData = await lockerAPI.closeLocker(locker);
    window.location.reload(false);
    return lockerData;
  }
);

export const lockerSlice = createSlice({
  name: "locker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLockers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLockers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lockers = action.payload;
      })
      .addCase(openLocker.fulfilled, (state) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      })
      .addCase(closeLocker.fulfilled, (state) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      })
      .addCase(createLocker.fulfilled, (state) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      })
      .addCase(putShoes.fulfilled, (state) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      })
      .addCase(takeShoes.fulfilled, (state) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      });
  },
});

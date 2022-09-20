import { configureStore } from "@reduxjs/toolkit";
import { GuestSlice } from "./guest-slice";

export const appStore = configureStore({
  reducer: {
    guest: GuestSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { lockerSlice } from "./locker-slice";

export const lockerStore = configureStore({
  reducer: {
    locker: lockerSlice.reducer,
  },
});

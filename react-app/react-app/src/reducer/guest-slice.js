import { createAsyncThunk } from "@reduxjs/toolkit";
import * as guestAPI from "../api/guestAPI";
import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  guests: [],
  isLoading: true,
  action: "",
};

export const fetchGuests = createAsyncThunk("guests/getAll", async () => {
  const guests = await guestAPI.getAllGuests();
  console.log("fetchGuests", guests);
  return guests;
});

export const createGuest = createAsyncThunk("guest/create", async (guest) => {
  guest.id = uniqid();
  const guestData = await guestAPI.createGuest(guest);
  console.log("createGuest", guestData);
  window.location.reload(false);
  return guestData;
});

export const removeGuest = createAsyncThunk("guest/delete", async (guest) => {
  // guest.id = uniqid();
  const guestData = await guestAPI.deleteGuest(guest);
  console.log("createGuest", guestData);
  window.location.reload(false);
  return guestData;
});

export const updateGuest = createAsyncThunk("guest/update", async (guest) => {
  // guest.id = uniqid();
  const guestData = await guestAPI.updateGuest(guest);
  console.log("createGuest", guestData);
  window.location.reload(false);
  return guestData;
});

export const GuestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    // addGuest: (state, action) => {
    //   state.guests.push(action.payload);
    // },
    updateGuest: (state, action) => {
      state.guests = state.guests.map((guest) => {
        if (guest.id === action.payload.id) {
          guest = action.payload;
        }

        return guest;
      });
    },
    deleteGuest: (state, action) => {
      state.guests = state.guests.filter((guest) => {
        return guest.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGuests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.guests = action.payload;
      })
      .addCase(createGuest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      })
      .addCase(removeGuest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.action = new Date().getTime();
      });
  },
});

// export const { addGuest, updateGuest, deleteGuest } = GuestSlice.actions;
// export default GuestSlice.reducer;

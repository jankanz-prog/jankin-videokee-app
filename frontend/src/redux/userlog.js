// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userlogSlice = createSlice({
  name: "userlog",
  initialState: {userId: null},
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload; 
    },
    logout: (state) => {
      state.userId = null; 
    },
  },
});

export const { setUserId, logout } = userlogSlice.actions;
export default userlogSlice.reducer;
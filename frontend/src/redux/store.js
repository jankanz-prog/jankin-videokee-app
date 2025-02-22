import { configureStore } from "@reduxjs/toolkit";
import userlogReducer from "./userlog"; // Import your reducer

const store = configureStore({
  reducer: {
    userlog: userlogReducer, // Add reducers here
  },
});

export default store;

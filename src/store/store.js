import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

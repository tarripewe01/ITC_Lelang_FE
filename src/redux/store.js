/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import CustomReducer from "./features/CustomizationSlice";
import AuthReducer from "./features/AuthSlice";

export default configureStore({
  reducer: {
    customization: CustomReducer,
    auth: AuthReducer,
  },
});


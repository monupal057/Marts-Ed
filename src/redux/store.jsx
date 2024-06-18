import { configureStore } from '@reduxjs/toolkit';
import heroReducer from "./heroSlice";

export const store = configureStore({
  reducer: {
    hero : heroReducer,
  },
})
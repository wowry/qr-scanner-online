import { configureStore } from "@reduxjs/toolkit";
import imageCardReducer from "./slices/ImageCardSlice";
import alertReducer from "./slices/AlertSlice";

export const store = configureStore({
  reducer: {
    imageCard: imageCardReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

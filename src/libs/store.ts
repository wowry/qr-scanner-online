import { configureStore } from "@reduxjs/toolkit";
import imageCardReducer from "./slices/ImageCardSlice";

export const store = configureStore({
  reducer: {
    imageCard: imageCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

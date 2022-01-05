import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ImageCardState {
  hasCompleted: boolean;
  urlList: string[];
  colorList: string[];
}

const initialState: ImageCardState = {
  hasCompleted: false,
  urlList: [],
  colorList: [],
};

export const imageCardSlice = createSlice({
  name: "imageCard",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    pushResult: (
      state,
      action: PayloadAction<{ url: string; color: string }>
    ) => {
      state.urlList.push(action.payload.url);
      state.colorList.push(action.payload.color);
    },
    complete: (state) => {
      state.hasCompleted = true;
    },
  },
});

export const { reset, pushResult, complete } = imageCardSlice.actions;

export const selectImageCardState = (state: RootState): ImageCardState =>
  state.imageCard;

export default imageCardSlice.reducer;

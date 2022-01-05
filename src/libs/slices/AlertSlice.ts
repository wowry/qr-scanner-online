import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type AlertType = {
  id: number;
  timeoutId: NodeJS.Timeout;
  message: string;
  severity: "error" | "warning";
};

interface AlertState {
  alertList: AlertType[];
}

const initialState: AlertState = {
  alertList: [],
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    pushAlert: (state, action: PayloadAction<AlertType>) => {
      const alert = action.payload;

      const newAlertList = state.alertList.filter((el) => {
        if (el.id !== alert.id && el.message === alert.message) {
          clearTimeout(el.timeoutId);
          return false;
        }
        return true;
      });

      state.alertList = [...newAlertList, alert];
    },
    removeAlert: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.alertList = state.alertList.filter((el) => el.id !== id);
    },
  },
});

export const getId = (state: AlertState): number => {
  let id: number;
  do {
    id = Math.floor(Math.random() * 10000);
  } while (state.alertList.find((alert) => alert.id === id));

  return id;
};

export const { reset, pushAlert, removeAlert } = alertSlice.actions;

export const selectAlertState = (state: RootState): AlertState => state.alert;

export default alertSlice.reducer;

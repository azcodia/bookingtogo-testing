import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { AuthState } from "../../interface/auth.interface.ts";

const initialState: AuthState = {
  isLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedin;

export default authSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { AuthState } from "../../interface/auth.interface.ts";

// Initial state
const initialState: AuthState = {
  isLoggedin: false,
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedin = action.payload;
    },
  },
});

// Export actions
export const { setLoginStatus } = authSlice.actions;

// Export selector (you can add more selectors if needed)
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedin;

// Export reducer
export default authSlice.reducer;

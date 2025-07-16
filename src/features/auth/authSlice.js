import { createSlice } from "@reduxjs/toolkit";

// to store user's name and token

const initialState = {
  token: null,
  isAuthenticated: false,
  loginError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loginError = false;
    },
    logOut: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.loginError = false;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { setCredentials, logOut, setLoginError } = authSlice.actions;

export default authSlice.reducer;

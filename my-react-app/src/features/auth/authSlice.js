import { createSlice } from "@reduxjs/toolkit";

//pour conserver le nom d'utilisateur et son token d'une page à l'autre

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

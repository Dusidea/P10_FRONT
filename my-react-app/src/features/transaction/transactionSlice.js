import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionMode: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    enableTransactionMode: (state) => {
      state.transactionMode = true;
    },
    disableTransactionMode: (state) => {
      state.transactionMode = false;
    },
  },
});

export const { enableTransactionMode, disableTransactionMode } =
  transactionSlice.actions;
export default transactionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionMode: false,
  itemOpen: false,
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
    enableItemOpen: (state) => {
      state.itemOpen = true;
    },
    disableItemOpen: (state) => {
      state.itemOpen = false;
    },
  },
});

export const {
  enableTransactionMode,
  disableTransactionMode,
  enableItemOpen,
  disableItemOpen,
} = transactionSlice.actions;

export default transactionSlice.reducer;

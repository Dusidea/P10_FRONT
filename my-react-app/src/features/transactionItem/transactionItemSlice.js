import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemOpen: false,
};

const transactionItemSlice = createSlice({
  name: "transactionItem",
  initialState,
  reducers: {
    enableItemOpen: (state) => {
      state.itemOpen = true;
    },
    disableItemOpen: (state) => {
      state.itemOpen = false;
    },
  },
});

export const { enableItemOpen, disableItemOpen } = transactionItemSlice.actions;
export default transactionItemSlice.reducer;

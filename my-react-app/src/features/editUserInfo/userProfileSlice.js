import { createSlice } from "@reduxjs/toolkit";

// storing user Info after getUserProfile request

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  editMode: false,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      const { id, email, firstName, lastName, userName } = action.payload;
      // conditions make the reducer non destructive :
      // the reducer allows updating one field at a time (and leaving the others as they are)
      // (we use these feature for userName update)
      if (id !== undefined) state.id = id;
      if (email !== undefined) state.email = email;
      if (firstName !== undefined) state.firstName = firstName;
      if (lastName !== undefined) state.lastName = lastName;
      if (userName !== undefined) state.userName = userName;
    },
    setEditMode: (state) => {
      state.editMode = true;
    },
    disableEditMode: (state) => {
      state.editMode = false;
    },
  },
});

export const { setUserProfile, setEditMode, disableEditMode } =
  userProfileSlice.actions;

export default userProfileSlice.reducer;

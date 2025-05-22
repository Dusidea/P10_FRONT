import { createSlice } from "@reduxjs/toolkit";

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
      state.id = id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
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

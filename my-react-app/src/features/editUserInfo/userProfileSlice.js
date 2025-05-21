import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
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
  },
});

export const { setUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;

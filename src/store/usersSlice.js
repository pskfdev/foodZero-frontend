import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  admin: false
};

export const usersSlice = createSlice({
  name: "usersStore",
  initialState: initialState,
  reducers: {
    signin: (state,action) => {
      /* state.value = "The freshest ingredients for you every day"; */
      state.user = action.payload
      /* state.admin = true */
    },
    LOGOUT: (state,action) => {
      localStorage.clear()
      state.user = action.payload
      state.admin = false
    },
    CHECKADMIN: (state,action) => {
      state.admin = true
    }
  },
});

// Action creators are generated for each case reducer function
export const { signin, LOGOUT, CHECKADMIN } = usersSlice.actions;

export default usersSlice.reducer;

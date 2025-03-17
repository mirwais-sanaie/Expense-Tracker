import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { addName } = userSlice.actions;
export default userSlice.reducer;

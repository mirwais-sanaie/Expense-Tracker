import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  histories: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory(state, action) {
      state.histories.push(action.payload);
    },
  },
});

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;

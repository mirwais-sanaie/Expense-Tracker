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
    deleteHistory: (state, action) => {
      state.histories = state.histories.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addHistory, deleteHistory } = historySlice.actions;
export default historySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  label: "",
  amount: 0,
  category: "",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    create: (state, action) => {
      state.label = action.payload.label;
      state.amount = action.payload.amount;
      state.category = action.payload.category;
      console.log(action);
    },
  },
});

export const { create } = expenseSlice.actions;
export default expenseSlice.reducer;

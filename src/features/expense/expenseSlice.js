import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseAmount: 0,
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    create: (state, action) => {
      state.expenses.push(action.payload);
      state.expenseAmount += action.payload.amount;
      console.log(action);
    },
    resetExpense: (state) => {
      state.expenseAmount = 0;
      state.expenses = [];
    },
  },
});

export const { create, resetExpense } = expenseSlice.actions;
export default expenseSlice.reducer;

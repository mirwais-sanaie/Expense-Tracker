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
    deleteExpense: (state, action) => {
      const item = state.expenses.find((el) => el.id === action.payload);
      state.expenseAmount = state.expenseAmount - item?.amount;
      state.expenses = state.expenses.filter((el) => el.id !== action.payload);
    },
  },
});

export const { create, resetExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;

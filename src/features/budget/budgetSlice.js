import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
  incomeLabel: "",
  incomeAmount: 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget(state, action) {
      state.budget += action.payload;
    },
    setIncomeSource(state, action) {
      state.incomeLabel = action.payload.label;
      state.incomeAmount = action.payload.amount;
    },
  },
});
export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;

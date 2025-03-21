import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
  incoumeSource: [{ label: "", amount: 0 }],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget(state, action) {
      state.budget = action.payload;
      state.incoumeSource = [];
    },
    setIncomeSource(state, action) {
      state.incoumeSource.push(action.payload);
      state.budget += +action.payload.amount;
    },
    resetBudget(state) {
      state.budget = 0;
      state.incoumeSource = [];
    },
  },
});
export const { setBudget, setIncomeSource, resetBudget } = budgetSlice.actions;
export default budgetSlice.reducer;

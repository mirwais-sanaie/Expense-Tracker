import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  budget: 0,
  incoumeSource: [],
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
    deleteBudget: (state, action) => {
      const item = state.incoumeSource.find((el) => el.id === action.payload);
      if (!item) {
        state.budget = 0;
      } else {
        state.budget = state.budget - item?.amount;
      }
      state.incoumeSource = state.incoumeSource.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});
export const { setBudget, setIncomeSource, resetBudget, deleteBudget } =
  budgetSlice.actions;
export default budgetSlice.reducer;

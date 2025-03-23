import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";
import budgetSlice from "./features/budget/budgetSlice";
import historySlice from "./features/history/historySlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
    budget: budgetSlice,
    history: historySlice,
  },
});

export default store;

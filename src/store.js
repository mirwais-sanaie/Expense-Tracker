import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";
import budgetSlice from "./features/budget/budgetSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
    budget: budgetSlice,
  },
});

export default store;

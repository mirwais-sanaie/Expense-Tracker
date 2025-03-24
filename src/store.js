import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";
import budgetSlice from "./features/budget/budgetSlice";
import historySlice from "./features/history/historySlice";
import themeSlice from "./features/theme/themeSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
    budget: budgetSlice,
    history: historySlice,
    theme: themeSlice,
  },
});

export default store;

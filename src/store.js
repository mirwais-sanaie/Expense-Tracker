import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import expenseSlice from "./features/expense/expenseSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    expense: expenseSlice,
  },
});

export default store;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayOut";
import HomePage from "./ui/HomePage";
import Expense from "./features/expense/Expense";
import Budget from "./features/budget/Budget";
import Categories from "./features/charts/Categories";
import CreateUser from "./features/user/CreateUser";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      children: [
        {
          element: <HomePage />,
          path: "/",
        },
        {
          element: <Expense />,
          path: "/expense",
        },
        {
          element: <Budget />,
          path: "/budget",
        },
        {
          element: <Categories />,
          path: "/categories",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

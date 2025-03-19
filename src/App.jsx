import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayOut";
import HomePage from "./ui/HomePage";
import Expense from "./features/expense/Expense";
import Budget from "./features/budget/Budget";
import Categories from "./features/charts/Categories";
import CreateUser from "./features/user/CreateUser";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

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
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;

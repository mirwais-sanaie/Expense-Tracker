import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayOut from "./ui/AppLayOut";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayOut />,
      path: "/",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

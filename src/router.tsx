import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cates",
    element: <h1>Categories</h1>,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);

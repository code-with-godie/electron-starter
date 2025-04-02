import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

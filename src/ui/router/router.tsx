import { createHashRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./layout/AppLayout";
import LoadingSpinner from "../components/loading/LoadingSpinner";

// Lazy load all page components
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));

export const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to='/' replace />,
  },
]);

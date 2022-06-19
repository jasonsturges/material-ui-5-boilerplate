import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "../components/Loadable";
import MainLayout from "../features/layout/MainLayout";

const HomeView = Loadable(lazy(() => import("../views/HomeView")));

export default function ThemeRoutes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomeView />,
        },
      ],
    },
  ]);
}

import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "../components/Loadable";

const HomeView = Loadable(lazy(() => import("../views/HomeView")));

export default function ThemeRoutes() {
  return useRoutes([{ path: "/", element: <HomeView /> }]);
}

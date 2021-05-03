import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import routes from "./routes.json";
import HomeView from "./views/HomeView";
import LayoutRoute from "./components/LayoutRoute";
import MainLayout from "./features/layout/MainLayout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute
          path={routes.HOME}
          component={HomeView}
          layout={MainLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

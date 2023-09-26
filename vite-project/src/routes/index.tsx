import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Landing from "../views/landing";
import { Routes } from "./routes";
import LandingLayout from "../layouts/Landing";
import { landingRoutes } from "./routers/landingRoutes";



const routes = createBrowserRouter([
  // {
  //   path: Routes.base,
  //   element: <Landing />,
  //   errorElement: <ErrorPage />,
  // },
  {
    element: <LandingLayout />,
    children: [...landingRoutes()],
    // errorElement: <ErrorPage />,
  }
]);

export default routes;
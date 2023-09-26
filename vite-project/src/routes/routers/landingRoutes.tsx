import { RouteObject } from "react-router-dom";
import { Routes } from "../routes";
import LandingPage from "../../views/LandingPage"


export const landingRoutes = () => {
    return [
        {
            path: Routes.base,
            element: <LandingPage/>,
        },
    ] as RouteObject[];
};


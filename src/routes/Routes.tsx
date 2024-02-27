import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorElement />,
    children: [
        {
            path: '/',
            element: <Home />
        }, ]
  },
 
]);

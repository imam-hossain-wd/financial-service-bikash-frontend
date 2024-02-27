import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorElement />,
    children: [
        {
            path: '/',
            element: <Home />
        }, 
        {
            path: 'signup',
            element: <Signup/>
        }, 
        {
            path: 'login',
            element: <Login/>
        }, 
      
      
      
      ]
  },
 
]);

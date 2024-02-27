import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Transation from "../pages/transation/Transation";
import Sendmoney from "../pages/sendmoney/Sendmoney";
import Cashout from "../pages/cashout/Cashout";
import Cashin from "../pages/cashin/Cashin";


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
        {
            path: 'transation',
            element: <Transation/>
        }, 
        {
            path: 'send-money',
            element: <Sendmoney/>
        }, 
      
        {
            path: 'cash-out',
            element: <Cashout/>
        }, 
        {
            path: 'cashin',
            element: <Cashin/>
        }, 
      
      
      
      ]
  },
 
]);

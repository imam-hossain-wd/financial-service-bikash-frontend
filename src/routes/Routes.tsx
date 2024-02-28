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
import Account from "../pages/account/Account";
import TransationHistory from "../pages/transationHistory/TransationHistory";
import Manageuser from "../pages/manageuser/Manageuser";


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
        {
            path: '/:user/account',
            element: <Account />
        }, 
        {
            path: '/:user/transation-history',
            element: <TransationHistory />
        }, 
        {
            path: '/:admin/manage-user',
            element: <Manageuser />
        }, 
      
      
      
      ]
  },
  
 
]);

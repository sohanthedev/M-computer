import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Product from "../components/Product/Product";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";
import Privateroute from "./private/Privateroute";
import Blog from "./../components/Blog/Blog";
import Dashboard from "./../components/Dashboard/Dashboard";
import CheckoutForm from "../components/Payment/CheckoutForm";
import Payment from "../components/Payment/Payment";
import ProductDetails from "../components/ProductDetails/ProductDetails";
export const routes = createBrowserRouter([
  {
    errorElement: <Error></Error>,
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product/:category",
        element: <Product></Product>,
        loader: ({ params }) => {
          return fetch(
            `https://mpc-server-hamidthedev.vercel.app/product/${params.category}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) => {
          return fetch(
            `https://mpc-server-hamidthedev.vercel.app/details/${params.id}`
          );
        },
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
const Routers = () => {
  return <div></div>;
};

export default Routers;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages/App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import { NotFound } from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Stores from "./pages/Stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Signup /> },
      { path: "/home", element: <Home /> },
      { path: "/stocks", element: <ProductList /> },
      { path: "/products", element: <Products /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/stores", element: <Stores /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;

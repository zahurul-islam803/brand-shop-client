
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import AddProduct from "../../Pages/AddProduct";
import MyCart from "../../Pages/MyCart";
import BrandProduct from "../../Pages/BrandProduct";
import Registration from "../../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/brandProduct",
        element: <BrandProduct></BrandProduct>,
      },
    ],
  },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import AddProduct from "../../Pages/AddProduct";
import MyCart from "../../Pages/MyCart";
import Registration from "../../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Spotify from "../../Pages/Spotify";
import Disney from "../../Pages/Disney";
import SonyPictures from "../../Pages/SonyPictures";
import TimeWarner from "../../Pages/TimeWarner";
import WarnerBros from "../../Pages/WarnerBros";
import Netflix from "../../Pages/Netflix";
import ProductDetails from "../../Pages/ProductDetails";
import UpdateProduct from "../../Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/carts",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://brand-shop-server-lilac.vercel.app/carts`),
      },
      {
        path: "/disney",
        element: <Disney></Disney>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/spotify",
        element: <Spotify></Spotify>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/sonyPictures",
        element: <SonyPictures></SonyPictures>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/timeWarner",
        element: <TimeWarner></TimeWarner>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/warnerBros",
        element: <WarnerBros></WarnerBros>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/netflix",
        element: <Netflix></Netflix>,
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://brand-shop-server-lilac.vercel.app/products`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-lilac.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

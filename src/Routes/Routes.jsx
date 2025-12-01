import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import Products from "../Pages/Products";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement:<p>loadding</p>,
    children: [
      {
        index: true,
        element: <Home />,
         loader: ()=> fetch("./FurnitureData.json") ,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

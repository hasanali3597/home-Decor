import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Jobs from "../Pages/Jobs";
import PressKit from "../Pages/PressKit";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <p>loadding</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/presskit",
        element: <PressKit />,
      },
    ],
  },
]);

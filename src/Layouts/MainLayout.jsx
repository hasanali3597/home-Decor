import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
 import { ToastContainer, toast } from 'react-toastify';
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-16 flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
     
  );
};

export default MainLayout;

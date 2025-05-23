import React from "react";
import Sidebar from "../components/home/Sidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex  h-[98vh] gap-4">
      <div className=" w-1/6 border border-gray-500 rounded-xl p-4 flex flex-col justify-between">
        <Sidebar /> //sidebar for menu
      </div>
      <div className=" w-5/6 border border-gray-500 rounded-xl p-4">
        <Outlet />// we use this outlet component to render a component as a child
      </div>
    </div>
  );
}

export default Home;

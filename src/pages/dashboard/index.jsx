import React from "react";
import { Navbar } from "../../components/navBar";
import { Sidebar } from "../../components/sideBar";
import { Main } from "@/components/mainComp";

export const Dashboard = () => {
  return (
    <>
      <div className="bg-customColor-100 w-full h-[100vh] relative ">
        {/* navbar */}
        <Navbar />
        {/* sidebar and content  */}
        <Sidebar />
        <Main />

      </div>
    </>
  );
};

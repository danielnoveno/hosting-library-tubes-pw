import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import TopNavbar from "../components/TopNavbar";
import SideBarCollapse from "../components/SideBarCollapse";
// import SideBarCollapse from "../components/AdminSideBarCollapse";

const MainLayout = () => {
  const [userData] = useState({
    name: "Jane Doe Donahue",
    email: "janedoee02@gmail.com",
    whatsapp: "+6281234567891",
    profilePic: "https://i.pinimg.com/736x/48/9a/84/489a8463d05bae90504e1f33b224c407.jpg",
  });

  return (
    <div className='d-flex min-vh-100 bg-white'>
      <SideBarCollapse userData={userData} />
      <div className='flex-grow-1'>
        <TopNavbar userData={userData} />
        <div className='p-3'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

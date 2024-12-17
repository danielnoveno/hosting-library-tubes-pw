import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import TopNavbar from "../components/TopNavbar";
// import SideBarCollapse from "../components/SideBarCollapse";
import SideBarCollapse from "../components/AdminSideBarCollapse";

const AdminLayout = () => {
  return (
    <div className="d-flex min-vh-100 bg-white">
      <SideBarCollapse />
      <div className="flex-grow-1">
        <TopNavbar />
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

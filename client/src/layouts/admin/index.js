import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";

const LayoutAdmin = () => {
  return (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;

import React from "react";
import { Outlet } from "react-router-dom";
import NavbarFront from "./NavbarFront";

const LayoutFront = () => {
  return (
    <>
      <NavbarFront />
      <Outlet />
    </>
  );
};

export default LayoutFront;

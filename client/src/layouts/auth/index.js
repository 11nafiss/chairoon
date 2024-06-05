import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAuth from "./NavbarAuth";
import { Box } from "@mui/material";

const LayoutAuth = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100dvh",
          width: "100dvw",
          overflow: "hidden",
        }}
      >
        <NavbarAuth />
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutAuth;

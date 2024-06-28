import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavbarAdmin = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "100vw",
        height: 100,
      }}
    ></Box>
  );
};

export default NavbarAdmin;

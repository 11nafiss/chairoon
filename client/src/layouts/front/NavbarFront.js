import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavbarFront = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: 80,
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.background.paper
            : "#F0F4FA",
        boxShadow: "2px 0px rgba(0, 0, 0, 0.25)",
      }}
    ></Box>
  );
};

export default NavbarFront;

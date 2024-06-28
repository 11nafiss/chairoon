import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/chairoon.ico";

const LogoScape = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(3px)",
        width: "100%",
      }}
    >
      <img alt="logo-icon" style={{ width: "40px", height: "40px" }} src={Logo} />
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Vollkorn, serif",
          fontWeight: "bold",
          fontStyle: "italic",
          mt: "5px",
          color: "#252525"
        }}
      >
        Chairoon
      </Typography>
    </Box>
  );
};

export default LogoScape;

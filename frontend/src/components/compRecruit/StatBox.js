import React from "react";
import { Box, Typography } from "@mui/material";

const StatBox = ({ title, value, increase, icon, description }) => {
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor="#f1f2f3"
      borderRadius="0.55rem"
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6" sx={{ color: "#252525" }}>
          {title}
        </Typography>
        {icon}
      </Box>

      <Typography variant="h3" fontWeight="600" sx={{ color: "#f7bd00" }}>
        {value}
      </Typography>
      <Box
        gap="1rem"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontStyle="italic" sx={{ color: "#858585" }}>
          {increase}
        </Typography>
        <Typography sx={{ color: "#252525" }}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

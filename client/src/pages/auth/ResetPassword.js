import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FormReset from "../../components/compAuth/FormReset";

const PageResetPassword = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "90dvh",
        width: "100%",
        display: { xs: "initial", md: "flex" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          mt: { xs: "15%", md: "inherit" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Box
            sx={{
              width: "400px",
              padding: "20px",
              backdropFilter: "brightness(60%)",
              borderRadius: "25px",
            }}
          >
            <Typography fontWeight="900" variant="h4" sx={{ mb: "1.5rem", color: "#fff" }}>
              Reset your Password?
            </Typography>
            <FormReset />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default PageResetPassword;

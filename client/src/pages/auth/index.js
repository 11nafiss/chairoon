import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FormLogin from "../../components/compAuth/FormLogin";

const PageLogin = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "90dvh",
        width: "100%",
        display: { xs: "initial", md: "flex" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "60%" }, display: { xs: "none", md: "flex" } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Box
            sx={{
              ml: { xs: 5, md: 5, lg: 10 },
              mt: "23%",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h1" sx={{ color: "white", fontWeight: 900, mb: "20px" }}>
              Get Happiness In Life
            </Typography>
            <Typography variant="h6" sx={{ color: "white", fontWeight: 900 }}>
              By assembling the best teammates, you can produce work with a high level
              quality
            </Typography>
          </Box>
        </motion.div>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
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
            <Typography
              fontWeight="900"
              variant="h4"
              sx={{ mb: "1.5rem", color: "#fff" }}
            >
              Welcome to Chairoon
            </Typography>
            <FormLogin
              setPageType={setPageType}
              isLogin={isLogin}
              isRegister={isRegister}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default PageLogin;

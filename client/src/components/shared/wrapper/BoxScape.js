import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxScape = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "25px",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  padding: "20px",
}));

export default BoxScape;

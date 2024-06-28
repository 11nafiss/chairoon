import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxSmall = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "25px",
  aspectRatio: "3/5",
  padding: "20px",
  height: "50%",
  overflow: "hidden"
}));

export default BoxSmall;

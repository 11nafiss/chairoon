import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxGiant = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "25px",
  aspectRatio: "3/2",
  width: "100%",
  padding: "20px",
  overflow: "hidden"
}));

export default BoxGiant;

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxPotrait = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "25px",
  aspectRatio: "9/16",
  scrollSnapAlign: "start",
  scrollSnapStop: "always",
  padding: "20px",
  height: "100%",
}));

export default BoxPotrait;

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ScrollBox = styled(Box)(({ theme }) => ({
  overflowY: "scroll",
  height: "100%",
  width: "100%",
}));

export default ScrollBox;
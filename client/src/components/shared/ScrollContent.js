import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ScrollContent = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
}));

export default ScrollContent;

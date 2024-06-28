import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
}));

export default GridBox;

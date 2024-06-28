import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BodyBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "90dvh",
  width: "100%",
}));

export default BodyBox;

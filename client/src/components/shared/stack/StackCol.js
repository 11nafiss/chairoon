import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const StackCol = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  flexDirection: "column",
}));

export default StackCol;

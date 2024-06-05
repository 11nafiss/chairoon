import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const StackBody = styled(Stack)(({ theme }) => ({
  height: "95%",
  width: "inherit",
  justifyContent: "center",
  flexDirection: "row",
}));

export default StackBody;

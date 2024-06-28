import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContainerMid = styled(Container)(({ theme }) => ({
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export default ContainerMid;

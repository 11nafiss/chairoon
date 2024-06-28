import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonPlain = styled(Button)(({ theme }) => ({
  width: "100%",
  fontSize: "14px",
  gap: "3px",
  height: "30px",
  padding: "0px",
  display: "flex",
  alignItems: "center",
}));

export default ButtonPlain;

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonText = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#f7bd00",
  color: "#252525",
  "&:hover": {
    backgroundColor: "#d3d4de",
  },
  gridColumn: "span 4",
  height: "40px",
}));

export default ButtonText;

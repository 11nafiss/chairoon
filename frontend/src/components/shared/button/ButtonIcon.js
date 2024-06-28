import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonIcon = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  color: "#252525",
  "&:hover": {
    color: "#858585",
  },
  border: "2px solid #252525"
}));

export default ButtonIcon;

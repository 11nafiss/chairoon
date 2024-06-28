import { MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#fff",
  "&.Mui-selected": {
    backgroundColor: "transparent",
  },
}));

export default MenuItemStyle;

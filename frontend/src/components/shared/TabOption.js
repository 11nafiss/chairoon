import { styled } from "@mui/material/styles";
import { Tab } from "@mui/material";

const TabOption = styled(Tab)(({ theme }) => ({
  alignItems: "start",
  fontSize: "16px",
  borderLeft: "2px solid black",
  borderRadius: "0",
  paddingLeft: "15px",
  marginBottom: "5px",
  "&:hover": {
    color: "#f7bd00",
  },
}));

export default TabOption;

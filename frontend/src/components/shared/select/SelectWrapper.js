import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const SelectWrapper = styled(Select)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  height: "40px",
  borderRadius: "25px",
  border: "2px solid #252525",
  fontSize: "14px",
}));

export default SelectWrapper;

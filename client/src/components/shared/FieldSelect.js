import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const FieldSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  height: "35px",
  "& .MuiSelect-select": { padding: "3px", fontSize: "14px", border: "2px solid #858585" },
  "& .MuiInputBase-input": { padding: "6px" },
}));

export default FieldSelect;

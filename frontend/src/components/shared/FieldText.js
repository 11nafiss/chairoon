import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputField = styled(TextField)(({ theme }) => ({
  marginY: "5px",
  "& .MuiInputBase-root": { backgroundColor: "white", fontSize: "16px", border: "2px solid #858585"},
  "& .MuiInputBase-input": { margin: "0px" },
  "& .MuiFormLabel-root": {
    fontSize: "14px",
    backgroundColor: "white",
    color: "black",
    padding: "2px 10px",
    borderRadius: "25px",
  },
}));

export default InputField;

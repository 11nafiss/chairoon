import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputField = styled(TextField)(({ theme }) => ({
  height: "35px",
  "& .MuiInputBase-root": {
    padding: "2px",
    backgroundColor: "white",
    fontSize: "14px",
    border: "2px solid #858585",
  },
  "& .MuiInputBase-input": { padding: "5px" },
  "& .MuiFormLabel-root": {
    fontSize: "14px",
    backgroundColor: "white",
    color: "black",
    padding: "2px 10px",
    borderRadius: "25px",
  },
}));

export default InputField;

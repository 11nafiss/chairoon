import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const DividerLine = styled(Divider)(({ theme }) => ({
  marginBottom: "20px",
  width: "100%",
  border: "1px solid #f7bd00",
}));

export default DividerLine;
